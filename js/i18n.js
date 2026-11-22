const trCache = {};
    function saveTrCache() {}
    const appState = { get skus() { return S ? S.skus : []; } };

    const PHRASE_PAIRS = [
      ['Shop Exp', 'దుకాణం ఖర్చు'],
      ['Shop Expenses', 'దుకాణం ఖర్చులు'],
      ['T.P Exp', 'టి.పి ఖర్చు'],
      ['TP Exp', 'టి.పి ఖర్చు'],
      ['Internet bill', 'ఇంటర్నెట్ బిల్లు'],
      ['WiFi bill', 'వైఫై బిల్లు'],
      ['Current bill', 'కరెంట్ బిల్లు'],
      ['Electricity bill', 'కరెంట్ బిల్లు'],
      ['Power bill', 'కరెంట్ బిల్లు'],
      ['Water bill', 'వాటర్ బిల్లు'],
      ['Phone bill', 'ఫోన్ బిల్లు'],
      ['Shop Rent', 'దుకాణం అద్దె'],
      ['Rent', 'అద్దె'],
      ['Staff Salary', 'సిబ్బంది జీతం'],
      ['Salary', 'జీతం'],
      ['Ice Cubes', 'ఐస్ క్యూబ్స్'],
      ['Ice', 'ఐస్'],
      ['Transport', 'రవాణా'],
      ['Auto Charge', 'ఆటో ఛార్జ్'],
      ['Loading', 'లోడింగ్'],
      ['Unloading', 'అన్‌లోడింగ్'],
      ['Shop Deposit', 'దుకాణం జమ'],
      ['Bank Deposit', 'బ్యాంక్ జమ'],
      ['Deposit', 'జమ'],
      ['Cash Handover', 'నగదు అప్పగింత'],
      ['Cash', 'నగదు'],
      ['Closing Balance', 'ముగింపు నిల్వ'],
      ['Opening Balance', 'ప్రారంభ నిల్వ'],
      ['Balance', 'నిల్వ'],
      ['Shortage', 'తగ్గుదల'],
      ['Excess', 'అదనపు'],
      ['Cleaning', 'శుభ్రత'],
      ['Tea / Snacks', 'టీ / స్నాక్స్'],
      ['Tea & Snacks', 'టీ & స్నాక్స్'],
      ['Tea', 'టీ'],
      ['Snacks', 'స్నాక్స్'],
      ['Water', 'వాటర్'],
      ['Bill', 'బిల్లు'],
      ['Paid', 'చెల్లించబడింది'],
      ['Received', 'అందింది'],
      ['Pending', 'బాకీ'],
      ['Advance', 'అడ్వాన్స్'],
      ['Maintenance', 'నిర్వహణ'],
      ['Repair', 'మరమ్మత్తు'],
      ['Stationery', 'స్టేషనరీ'],
      ['Plastic Covers', 'ప్లాస్టిక్ కవర్లు'],
      ['Covers', 'కవర్లు'],
      ['Glasses', 'గ్లాసులు'],
      ['Soda', 'సోడా'],
      ['Whisky', 'విస్కీ'],
      ['Wisky', 'విస్కీ'],
      ['Brandy', 'బ్రాందీ'],
      ['Rum', 'రమ్'],
      ['Vodka', 'వోడ్కా'],
      ['Vodaka', 'వోడ్కా'],
      ['Beer', 'బీర్'],
      ['Wine', 'వైన్'],
      ['Breezer', 'బ్రీజర్'],
      ['Strong', 'స్ట్రాంగ్'],
      ['Large', 'లార్జ్'],
      ['Ultra', 'అల్ట్రా'],
      ['Storm', 'స్టార్మ్'],
      ['Tin', 'టిన్'],
      ['Bottle', 'బాటిల్'],
      ['Quarter', 'క్వార్టర్'],
      ['Pint', 'పింట్'],
      ['Nip', 'నిప్'],
      ['Red', 'రెడ్'],
      ['Green', 'గ్రీన్'],
      ['Blue', 'బ్లూ'],
      ['White', 'వైట్'],
      ['Gold', 'గోల్డ్'],
      ['Silver', 'సిల్వర్'],
      ['Special', 'స్పెషల్'],
      ['Classic', 'క్లాసిక్'],
      ['Reserve', 'రిజర్వ్'],
      ['Deluxe', 'డీలక్స్'],
      ['Premium', 'ప్రీమియం'],
      ['Royal', 'రాయల్'],
      ['Challenge', 'ఛాలెంజ్'],
      ['Stag', 'స్టాగ్'],
      ['Monk', 'మాంక్'],
      ['Old', 'ఓల్డ్'],
      ['Magic', 'మ్యాజిక్'],
      ['Moments', 'మూమెంట్స్'],
      ['Iconic', 'ఐకానిక్'],
      ['Signature', 'సిగ్నేచర్'],
      ['Antiquity', 'యాంటిక్విటీ'],
      ['Pipers', 'పైపర్స్'],
      ['Morpheus', 'మార్ఫియస్'],
      ['Courier', 'కొరియర్'],
      ['Officer', 'ఆఫీసర్'],
      ['Choice', 'ఛాయిస్'],
      ['House', 'హౌస్'],
      ['French', 'ఫ్రెంచ్'],
      ['Cheep', 'చీప్'],
      ['Hyderabad', 'హైదరాబాద్'],
      ['After Dark', 'ఆఫ్టర్ డార్క్'],
      ['Budweiser', 'బడ్వైజర్'],
      ['Badweiser', 'బడ్వైజర్'],
      ['Foster', 'ఫాస్టర్'],
      ['Stock', 'స్టాక్']
    ];

    const EN_TO_TE_EXACT = new Map();
    const TE_TO_EN_EXACT = new Map();
    PHRASE_PAIRS.forEach(([en, te]) => {
      EN_TO_TE_EXACT.set(en.toLowerCase(), te);
      TE_TO_EN_EXACT.set(te.trim(), en);
    });

    function hasTeluguScript(str) { return /[\u0C00-\u0C7F]/.test(str || ''); }
    function hasLatinScript(str) { return /[A-Za-z]/.test(str || ''); }

    function transliterateEnWordToTe(word) {
      if (!word) return '';
      if (/^[0-9.,\-+/:()%₹]+$/.test(word)) return word;
      const acronymMatch = word.match(/^([A-Za-z])\.([A-Za-z])\.?([A-Za-z])?\.?$/);
      if (acronymMatch) {
        const letterMap = {
          A: 'ఏ', B: 'బి', C: 'సి', D: 'డి', E: 'ఇ', F: 'ఎఫ్', G: 'జి', H: 'హెచ్',
          I: 'ఐ', J: 'జె', K: 'కె', L: 'ఎల్', M: 'ఎం', N: 'ఎన్', O: 'ఓ', P: 'పి',
          Q: 'క్యూ', R: 'ఆర్', S: 'ఎస్', T: 'టి', U: 'యు', V: 'వి', W: 'డబ్ల్యూ',
          X: 'ఎక్స్', Y: 'వై', Z: 'జెడ్'
        };
        return [acronymMatch[1], acronymMatch[2], acronymMatch[3]]
          .filter(Boolean)
          .map(ch => letterMap[ch.toUpperCase()] || ch)
          .join('.');
      }

      const w = word.toLowerCase();
      const indepVowels = [['au', 'ఔ'], ['ou', 'ఔ'], ['ai', 'ఐ'], ['ei', 'ఐ'], ['ee', 'ఈ'], ['ea', 'ఈ'], ['oo', 'ఊ'], ['aa', 'ఆ'], ['a', 'అ'], ['i', 'ఇ'], ['u', 'ఉ'], ['e', 'ఎ'], ['o', 'ఒ']];
      const matras = [['au', 'ౌ'], ['ou', 'ౌ'], ['ai', 'ై'], ['ei', 'ై'], ['ee', 'ీ'], ['ea', 'ీ'], ['oo', 'ూ'], ['aa', 'ా'], ['a', 'ా'], ['i', 'ి'], ['u', 'ు'], ['e', 'ె'], ['o', 'ొ']];
      const consonants = [['ksh', 'క్ష'], ['chh', 'ఛ'], ['sh', 'ష'], ['ch', 'చ'], ['th', 'థ'], ['dh', 'ధ'], ['ph', 'ఫ'], ['bh', 'భ'], ['kh', 'ఖ'], ['gh', 'ఘ'], ['jh', 'ఝ'], ['ng', 'ంగ్'], ['ck', 'క్'], ['qu', 'క్వ'], ['k', 'క'], ['g', 'గ'], ['c', 'క'], ['j', 'జ'], ['t', 'ట'], ['d', 'డ'], ['n', 'న'], ['p', 'ప'], ['f', 'ఫ'], ['b', 'బ'], ['m', 'మ'], ['y', 'య'], ['r', 'ర'], ['l', 'ల'], ['v', 'వ'], ['w', 'వ'], ['s', 'స'], ['h', 'హ'], ['z', 'జ'], ['x', 'క్స్']];

      let out = '', i = 0, prevWasConsonant = false;
      while (i < w.length) {
        const slice = w.slice(i);
        if (!/[a-z]/.test(slice[0])) {
          if (prevWasConsonant) { out += '్'; prevWasConsonant = false; }
          out += word[i];
          i += 1;
          continue;
        }
        if (slice === 'e' && prevWasConsonant && out.length > 1) {
          out += '్';
          prevWasConsonant = false;
          i += 1;
          continue;
        }
        let matchedCons = null;
        for (const [pat, teCons] of consonants) {
          if (slice.startsWith(pat)) { matchedCons = [pat, teCons]; break; }
        }
        if (matchedCons) {
          if (prevWasConsonant) out += '్';
          out += matchedCons[1];
          prevWasConsonant = !matchedCons[1].endsWith('్');
          i += matchedCons[0].length;
          continue;
        }
        const vowelTable = prevWasConsonant ? matras : indepVowels;
        let matchedVowel = null;
        for (const [pat, teV] of vowelTable) {
          if (slice.startsWith(pat)) { matchedVowel = [pat, teV]; break; }
        }
        if (matchedVowel) {
          if (!(prevWasConsonant && matchedVowel[0] === 'a' && i + 1 < w.length)) out += matchedVowel[1];
          prevWasConsonant = false;
          i += matchedVowel[0].length;
          continue;
        }
        i += 1;
      }
      if (prevWasConsonant) out += '్';
      return out || word;
    }

    function transliterateTeWordToEn(word) {
      if (!word || !hasTeluguScript(word)) return word;
      const teIndepVowels = { 'అ': 'a', 'ఆ': 'aa', 'ఇ': 'i', 'ఈ': 'ee', 'ఉ': 'u', 'ఊ': 'oo', 'ఋ': 'ru', 'ఎ': 'e', 'ఏ': 'e', 'ఐ': 'ai', 'ఒ': 'o', 'ఓ': 'o', 'ఔ': 'au' };
      const teMatras = { 'ా': 'a', 'ి': 'i', 'ీ': 'ee', 'ు': 'u', 'ూ': 'oo', 'ృ': 'ru', 'ె': 'e', 'ే': 'e', 'ై': 'ai', 'ొ': 'o', 'ో': 'o', 'ౌ': 'au' };
      const teConsonants = { 'క': 'k', 'ఖ': 'kh', 'గ': 'g', 'ఘ': 'gh', 'ఙ': 'ng', 'చ': 'ch', 'ఛ': 'chh', 'జ': 'j', 'ఝ': 'jh', 'ఞ': 'ny', 'ట': 't', 'ఠ': 'th', 'డ': 'd', 'ఢ': 'dh', 'ణ': 'n', 'త': 'th', 'థ': 'th', 'ద': 'd', 'ధ': 'dh', 'న': 'n', 'ప': 'p', 'ఫ': 'ph', 'బ': 'b', 'భ': 'bh', 'మ': 'm', 'య': 'y', 'ర': 'r', 'ఱ': 'r', 'ల': 'l', 'ళ': 'l', 'వ': 'v', 'శ': 'sh', 'ష': 'sh', 'స': 's', 'హ': 'h', 'క్ష': 'ksh' };
      let out = '';
      const chars = Array.from(word);
      for (let i = 0; i < chars.length; i++) {
        const ch = chars[i], next = chars[i + 1];
        if (teIndepVowels[ch]) out += teIndepVowels[ch];
        else if (teConsonants[ch]) {
          out += teConsonants[ch];
          if (next === '్') i += 1;
          else if (next && teMatras[next]) { out += teMatras[next]; i += 1; }
          else if (i < chars.length - 1) out += 'a';
        } else if (ch === 'ం') out += 'm';
        else if (ch === 'ః') out += 'h';
        else if (ch !== '్' && !teMatras[ch]) out += ch;
      }
      return out ? out.charAt(0).toUpperCase() + out.slice(1) : word;
    }

    function translateText(text, targetLang) {
      const raw = String(text || '').trim();
      if (!raw) return '';
      const target = targetLang === 'en' ? 'en' : 'te';
      const cacheKey = `${target}:${raw}`;
      if (trCache[cacheKey]) return trCache[cacheKey];

      for (const s of (appState.skus || [])) {
        if (s.name_en && s.name_te) {
          if (target === 'te' && (raw.toLowerCase() === s.name_en.toLowerCase() || raw === s.name_te)) return s.name_te;
          if (target === 'en' && (raw === s.name_te || raw.toLowerCase() === s.name_en.toLowerCase())) return s.name_en;
        }
      }

      if (target === 'te') {
        if (hasTeluguScript(raw) && !hasLatinScript(raw)) return raw;
        const exactTe = EN_TO_TE_EXACT.get(raw.toLowerCase());
        if (exactTe) { trCache[cacheKey] = exactTe; return exactTe; }
      } else {
        if (hasLatinScript(raw) && !hasTeluguScript(raw)) return raw;
        const exactEn = TE_TO_EN_EXACT.get(raw);
        if (exactEn) { trCache[cacheKey] = exactEn; return exactEn; }
      }

      let working = raw;
      if (target === 'te') {
        const sortedPairs = [...PHRASE_PAIRS].sort((a, b) => b[0].length - a[0].length);
        sortedPairs.forEach(([enPhrase, tePhrase]) => {
          const escaped = enPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`(^|\\s)${escaped}(?=$|\\s|[.,!?;:])`, 'gi');
          working = working.replace(regex, (m, lead) => `${lead}${tePhrase}`);
        });
        const translated = working.split(/(\s+)/).map(token => {
          if (!token || /^\s+$/.test(token) || hasTeluguScript(token)) return token;
          const clean = token.replace(/^[.,!?;:()]+|[.,!?;:()]+$/g, '');
          const exactWord = EN_TO_TE_EXACT.get(clean.toLowerCase());
          if (exactWord) return token.replace(clean, exactWord);
          return transliterateEnWordToTe(token);
        }).join('');
        trCache[cacheKey] = translated;
        return translated;
      } else {
        const sortedPairs = [...PHRASE_PAIRS].sort((a, b) => b[1].length - a[1].length);
        sortedPairs.forEach(([enPhrase, tePhrase]) => {
          const escaped = tePhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          working = working.replace(new RegExp(escaped, 'g'), enPhrase);
        });
        const translated = working.split(/(\s+)/).map(token => {
          if (!token || /^\s+$/.test(token) || !hasTeluguScript(token)) return token;
          const exactWord = TE_TO_EN_EXACT.get(token);
          if (exactWord) return exactWord;
          return transliterateTeWordToEn(token);
        }).join('');
        trCache[cacheKey] = translated;
        return translated;
      }
    }
