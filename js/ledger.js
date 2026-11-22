const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const num = v => { const n = Number(v); return Number.isFinite(n) ? n : 0; };
    const fmt = n => { n = num(n); return (n < 0 ? '-' : '') + '₹' + Math.abs(n).toLocaleString('en-IN'); };
    const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    const calc = e => {
      const total = num(e.o) + num(e.r) - num(e.i);
      const sales = total - num(e.c);
      return {
        total,
        sales,
        amount: sales * num(e.rate),
        margin: sales * (num(e.rate) - num(e.cost))
      };
    };
    const sorted = L => Object.values(L.entries || {}).sort((a, b) => (a.cat === b.cat ? 0 : a.cat === 'LIQUOR' ? -1 : 1) || (a.sno || 0) - (b.sno || 0));

    function dayTotals(L) {
      const T = { liq: 0, margin: 0, beer: 0, units: 0, o: 0, r: 0, i: 0, tot: 0, c: 0 };
      sorted(L).forEach(e => {
        const k = calc(e);
        if (e.cat === 'BEER') T.beer += k.amount;
        else T.liq += k.amount;
        T.units += k.sales;
        T.margin += k.margin;
        T.o += num(e.o);
        T.r += num(e.r);
        T.i += num(e.i);
        T.tot += k.total;
        T.c += num(e.c);
      });
      T.gross = T.liq + T.beer;
      T.exp = (L.exp || []).reduce((a, x) => a + num(x.a), 0);
      T.grand = T.gross - T.exp;
      T.pp = num(L.phonePe);
      T.ot = num(L.other);
      T.net = T.grand - T.pp - T.ot;
      return T;
    }

    function prevDate(ledgers, d) {
      return Object.keys(ledgers || {}).filter(k => k < d && Object.keys(ledgers[k].entries || {}).length > 0).sort().pop() || null;
    }

    function newLedger(date, prev, sm) {
      return { date, entries: {}, exp: [{ l: 'Shop Exp', a: 0 }], phonePe: 0, other: 0, cash: null, by: '', remarks: '', reports: [] };
    }

    function snapOf(L) {
      const m = {};
      sorted(L).forEach(e => {
        const n = e.name_en + ' [' + e.size + '] ';
        m[n + 'opening'] = num(e.o);
        m[n + 'receipts'] = num(e.r);
        m[n + 'issue'] = num(e.i);
        m[n + 'closing'] = num(e.c);
        m[n + 'cost'] = num(e.cost);
        m[n + 'rate'] = num(e.rate);
      });
      m['Expenses total'] = (L.exp || []).reduce((a, x) => a + num(x.a), 0);
      m['PhonePe'] = num(L.phonePe);
      m['Other deduction'] = num(L.other);
      m['Cash counted'] = L.cash == null ? null : num(L.cash);
      return m;
    }

    function diff(a, b) {
      const o = [];
      new Set([...Object.keys(a || {}), ...Object.keys(b || {})]).forEach(k => {
        if (a[k] !== b[k]) o.push(k + ': ' + (a[k] == null ? '–' : a[k]) + ' → ' + (b[k] == null ? '–' : b[k]));
      });
      return o;
    }

    const NT = {
      en: {
        rev: (r, a, d, m) => 'Revised after R' + r + ' (' + a + '). Changes: ' + d + (m ? '; +' + m + ' more' : ''),
        over: (n, c, t) => n + ': closing ' + c + ' is more than total ' + t,
        neg: (n, t) => n + ': total stock is negative (' + t + ')',
        ns: (n, s) => n + ': negative sales (' + s + ')',
        opd: (n, o, p, f) => n + ': opening ' + o + ' differs from previous closing ' + p + ' (' + f + ')',
        miss: (n, c, f) => n + ': had closing ' + c + ' on ' + f + ' but is missing today',
        nocash: 'Cash in hand was not entered',
        cash: (c, e, d) => 'Cash counted ' + c + ' vs expected ' + e + ': ' + (d > 0 ? 'excess ' : 'short ') + fmt(Math.abs(d)),
        noexp: 'No shop expenses entered',
        nopp: 'No PhonePe/UPI amount entered'
      },
      te: {
        rev: (r, a, d, m) => 'R' + r + ' (' + a + ') తర్వాత మార్పులు చేశారు: ' + d + (m ? '; మరో ' + m : ''),
        over: (n, c, t) => n + ': ముగింపు ' + c + ' మొత్తం ' + t + ' కంటే ఎక్కువ',
        neg: (n, t) => n + ': మొత్తం స్టాక్ రుణాత్మకం (' + t + ')',
        ns: (n, s) => n + ': అమ్మకాలు రుణాత్మకం (' + s + ')',
        opd: (n, o, p, f) => n + ': ప్రారంభ ' + o + ' మునుపటి ముగింపు ' + p + ' (' + f + ') కు భిన్నం',
        miss: (n, c, f) => n + ': ' + f + ' న ముగింపు ' + c + ' ఉంది, కానీ ఈ రోజు లేదు',
        nocash: 'చేతిలో నగదు నమోదు చేయలేదు',
        cash: (c, e, d) => 'లెక్కించిన నగదు ' + c + ' / అంచనా ' + e + ': ' + (d > 0 ? 'అదనం ' : 'తక్కువ ') + fmt(Math.abs(d)),
        noexp: 'దుకాణం ఖర్చులు నమోదు కాలేదు',
        nopp: 'ఫోన్ పే / UPI మొత్తం నమోదు కాలేదు'
      }
    };

    function mkNotes(L, prev, pd, dfs, lastRep, repNo, lg, nm) {
      lg = lg || 'en';
      nm = nm || (e => e.name_en);
      const w = NT[lg], n = [], lb = e => nm(e) + ' [' + e.size + ']';
      if (lastRep && dfs.length) n.push(w.rev(repNo - 1, lastRep.at, dfs.slice(0, 5).join('; '), Math.max(0, dfs.length - 5)));
      const ents = sorted(L);
      ents.forEach(e => {
        const k = calc(e);
        if (num(e.c) > k.total) n.push(w.over(lb(e), num(e.c), k.total));
        else if (k.total < 0) n.push(w.neg(lb(e), k.total));
        else if (k.sales < 0) n.push(w.ns(lb(e), k.sales));
      });
      if (prev) {
        const fp = pd.split('-').reverse().join('/');
        ents.forEach(e => {
          const p = prev.entries[e.id], pc = p ? num(p.c) : 0;
          if (num(e.o) !== pc) n.push(w.opd(lb(e), num(e.o), pc, fp));
        });
        Object.keys(prev.entries).forEach(id => {
          const p = prev.entries[id];
          if (num(p.c) > 0 && !L.entries[id]) n.push(w.miss(lb(p), num(p.c), fp));
        });
      }
      const T = dayTotals(L);
      if (L.cash == null || L.cash === '') n.push(w.nocash);
      else {
        const d = num(L.cash) - T.net;
        if (d !== 0) n.push(w.cash(fmt(L.cash), fmt(T.net), d));
      }
      if (T.exp === 0) n.push(w.noexp);
      if (!T.pp) n.push(w.nopp);
      return n;
    }

    function paginate(n, c1, cN, rec) {
      const P = [];
      let i = 0, cap = c1;
      do {
        const t = Math.min(cap, n - i);
        P.push([i, i + t]);
        i += t;
        cap = cN;
      } while (i < n);
      const l = P[P.length - 1];
      if (l[1] - l[0] + 1 + rec > (P.length === 1 ? c1 : cN)) P.push([n, n]);
      return P;
    }

    function validBackup(o) {
      return !!o && typeof o === 'object' && o.ledgers && typeof o.ledgers === 'object' && Array.isArray(o.skus);
    }
