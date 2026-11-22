const KEY = 'jpw_v3';
    const SK0 = [
      { id: 'L1', cat: 'LIQUOR', sno: 1, name_en: '100 Pipers Whisky', name_te: '100 పైపర్స్ విస్కీ', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'L2', cat: 'LIQUOR', sno: 2, name_en: '100 Pipers Whisky', name_te: '100 పైపర్స్ విస్కీ', size: 'P', costPrice: 0, rate: 0 },
      { id: 'L3', cat: 'LIQUOR', sno: 3, name_en: 'Antiquity', name_te: 'యాంటిక్విటీ', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'L4', cat: 'LIQUOR', sno: 4, name_en: 'Royal Challenge', name_te: 'రాయల్ ఛాలెంజ్', size: 'P', costPrice: 0, rate: 450 },
      { id: 'L5', cat: 'LIQUOR', sno: 5, name_en: 'Royal Challenge', name_te: 'రాయల్ ఛాలెంజ్', size: 'Q', costPrice: 0, rate: 860 },
      { id: 'L6', cat: 'LIQUOR', sno: 6, name_en: 'Royal Challenge', name_te: 'రాయల్ ఛాలెంజ్', size: 'N', costPrice: 0, rate: 240 },
      { id: 'L7', cat: 'LIQUOR', sno: 7, name_en: "Blender's P. Whisky", name_te: 'బ్లెండర్స్ పి. విస్కీ', size: 'Q', costPrice: 0, rate: 1350 },
      { id: 'L8', cat: 'LIQUOR', sno: 8, name_en: "Blender's P. Whisky", name_te: 'బ్లెండర్స్ పి. విస్కీ', size: 'P', costPrice: 0, rate: 690 },
      { id: 'L9', cat: 'LIQUOR', sno: 9, name_en: "Blender's P. Whisky", name_te: 'బ్లెండర్స్ పి. విస్కీ', size: 'N', costPrice: 0, rate: 370 },
      { id: 'L10', cat: 'LIQUOR', sno: 10, name_en: 'Royal Stag Whisky', name_te: 'రాయల్ స్టాగ్ విస్కీ', size: 'Q', costPrice: 0, rate: 870 },
      { id: 'L11', cat: 'LIQUOR', sno: 11, name_en: 'Royal Stag Whisky', name_te: 'రాయల్ స్టాగ్ విస్కీ', size: 'P', costPrice: 0, rate: 450 },
      { id: 'L12', cat: 'LIQUOR', sno: 12, name_en: 'Royal Stag Whisky', name_te: 'రాయల్ స్టాగ్ విస్కీ', size: 'N', costPrice: 0, rate: 240 },
      { id: 'L13', cat: 'LIQUOR', sno: 13, name_en: 'Courier N.Brandy(Red)', name_te: 'కొరియర్ ఎన్. బ్రాందీ (రెడ్)', size: 'Q', costPrice: 0, rate: 910 },
      { id: 'L14', cat: 'LIQUOR', sno: 14, name_en: 'Courier N.Brandy(Red)', name_te: 'కొరియర్ ఎన్. బ్రాందీ (రెడ్)', size: 'P', costPrice: 0, rate: 0 },
      { id: 'L15', cat: 'LIQUOR', sno: 15, name_en: 'Courier N.Brandy(Red)', name_te: 'కొరియర్ ఎన్. బ్రాందీ (రెడ్)', size: 'N', costPrice: 0, rate: 250 },
      { id: 'L16', cat: 'LIQUOR', sno: 16, name_en: 'Courier N.Brandy(Green)', name_te: 'కొరియర్ ఎన్. బ్రాందీ (గ్రీన్)', size: 'Q', costPrice: 0, rate: 1200 },
      { id: 'L17', cat: 'LIQUOR', sno: 17, name_en: 'Courier N.Brandy(Green)', name_te: 'కొరియర్ ఎన్. బ్రాందీ (గ్రీన్)', size: 'P', costPrice: 0, rate: 620 },
      { id: 'L18', cat: 'LIQUOR', sno: 18, name_en: 'Courier N.Brandy(Green)', name_te: 'కొరియర్ ఎన్. బ్రాందీ (గ్రీన్)', size: 'N', costPrice: 0, rate: 330 },
      { id: 'L19', cat: 'LIQUOR', sno: 19, name_en: 'M.C. Whisky', name_te: 'ఎం.సి. విస్కీ', size: 'Q', costPrice: 0, rate: 740 },
      { id: 'L20', cat: 'LIQUOR', sno: 20, name_en: 'M.C. Whisky', name_te: 'ఎం.సి. విస్కీ', size: 'P', costPrice: 0, rate: 390 },
      { id: 'L21', cat: 'LIQUOR', sno: 21, name_en: 'M.C. Whisky', name_te: 'ఎం.సి. విస్కీ', size: 'N', costPrice: 0, rate: 210 },
      { id: 'L22', cat: 'LIQUOR', sno: 22, name_en: 'M.C. Whisky', name_te: 'ఎం.సి. విస్కీ', size: 'D', costPrice: 0, rate: 110 },
      { id: 'L23', cat: 'LIQUOR', sno: 23, name_en: 'M.H. Brandy', name_te: 'ఎం.హెచ్. బ్రాందీ', size: 'Q', costPrice: 0, rate: 790 },
      { id: 'L24', cat: 'LIQUOR', sno: 24, name_en: 'M.H. Brandy', name_te: 'ఎం.హెచ్. బ్రాందీ', size: 'P', costPrice: 0, rate: 420 },
      { id: 'L25', cat: 'LIQUOR', sno: 25, name_en: 'M.H. Brandy', name_te: 'ఎం.హెచ్. బ్రాందీ', size: 'N', costPrice: 0, rate: 220 },
      { id: 'L26', cat: 'LIQUOR', sno: 26, name_en: 'M.H. Brandy', name_te: 'ఎం.హెచ్. బ్రాందీ', size: 'D', costPrice: 0, rate: 120 },
      { id: 'L27', cat: 'LIQUOR', sno: 27, name_en: 'I.B. Whisky', name_te: 'ఐ.బి. విస్కీ', size: 'Q', costPrice: 0, rate: 740 },
      { id: 'L28', cat: 'LIQUOR', sno: 28, name_en: 'I.B. Whisky', name_te: 'ఐ.బి. విస్కీ', size: 'P', costPrice: 0, rate: 390 },
      { id: 'L29', cat: 'LIQUOR', sno: 29, name_en: 'I.B. Whisky', name_te: 'ఐ.బి. విస్కీ', size: 'N', costPrice: 0, rate: 210 },
      { id: 'L30', cat: 'LIQUOR', sno: 30, name_en: 'I.B. Whisky', name_te: 'ఐ.బి. విస్కీ', size: 'D', costPrice: 0, rate: 110 },
      { id: 'L31', cat: 'LIQUOR', sno: 31, name_en: 'M.C. Brandy', name_te: 'ఎం.సి. బ్రాందీ', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'L32', cat: 'LIQUOR', sno: 32, name_en: 'M.C. Brandy', name_te: 'ఎం.సి. బ్రాందీ', size: 'P', costPrice: 0, rate: 0 },
      { id: 'L33', cat: 'LIQUOR', sno: 33, name_en: 'M.C. Brandy', name_te: 'ఎం.సి. బ్రాందీ', size: 'N', costPrice: 0, rate: 200 },
      { id: 'L34', cat: 'LIQUOR', sno: 34, name_en: 'M.C. Brandy', name_te: 'ఎం.సి. బ్రాందీ', size: 'D', costPrice: 0, rate: 0 },
      { id: 'L35', cat: 'LIQUOR', sno: 35, name_en: 'H.F. Whisky', name_te: 'హెచ్.ఎఫ్. విస్కీ', size: 'N', costPrice: 0, rate: 160 },
      { id: 'L36', cat: 'LIQUOR', sno: 36, name_en: 'OT Wisky', name_te: 'ఓ.టి. విస్కీ', size: 'N', costPrice: 0, rate: 160 },
      { id: 'L37', cat: 'LIQUOR', sno: 37, name_en: 'Morphes Brandy', name_te: 'మార్ఫియస్ బ్రాందీ', size: 'Q', costPrice: 0, rate: 1090 },
      { id: 'L38', cat: 'LIQUOR', sno: 38, name_en: 'Morphes Brandy', name_te: 'మార్ఫియస్ బ్రాందీ', size: 'P', costPrice: 0, rate: 570 },
      { id: 'L39', cat: 'LIQUOR', sno: 39, name_en: 'Morphes Brandy', name_te: 'మార్ఫియస్ బ్రాందీ', size: 'N', costPrice: 0, rate: 320 },
      { id: 'L40', cat: 'LIQUOR', sno: 40, name_en: 'Magic M. VODAKA', name_te: 'మ్యాజిక్ ఎం. వోడ్కా', size: 'Q', costPrice: 0, rate: 910 },
      { id: 'L41', cat: 'LIQUOR', sno: 41, name_en: 'Magic M. VODAKA', name_te: 'మ్యాజిక్ ఎం. వోడ్కా', size: 'P', costPrice: 0, rate: 470 },
      { id: 'L42', cat: 'LIQUOR', sno: 42, name_en: 'Magic M. VODAKA', name_te: 'మ్యాజిక్ ఎం. వోడ్కా', size: 'N', costPrice: 0, rate: 260 },
      { id: 'L43', cat: 'LIQUOR', sno: 43, name_en: 'Smirnoff VODAKA', name_te: 'స్మిర్నాఫ్ వోడ్కా', size: 'N', costPrice: 0, rate: 0 },
      { id: 'L44', cat: 'LIQUOR', sno: 44, name_en: 'Old Monk XXX Rum', name_te: 'ఓల్డ్ మాంక్ XXX రమ్', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'L45', cat: 'LIQUOR', sno: 45, name_en: 'Old Monk XXX Rum', name_te: 'ఓల్డ్ మాంక్ XXX రమ్', size: 'N', costPrice: 0, rate: 0 },
      { id: 'L46', cat: 'LIQUOR', sno: 46, name_en: 'M C XXX Rum', name_te: 'ఎం.సి. XXX రమ్', size: 'N', costPrice: 0, rate: 170 },
      { id: 'L47', cat: 'LIQUOR', sno: 47, name_en: 'O.A.Brandy', name_te: 'ఓ.ఏ. బ్రాందీ', size: 'Q', costPrice: 0, rate: 500 },
      { id: 'L48', cat: 'LIQUOR', sno: 48, name_en: 'O.A.Brandy', name_te: 'ఓ.ఏ. బ్రాందీ', size: 'N', costPrice: 0, rate: 150 },
      { id: 'L49', cat: 'LIQUOR', sno: 49, name_en: 'After Dark Wisky', name_te: 'ఆఫ్టర్ డార్క్ విస్కీ', size: 'N', costPrice: 0, rate: 0 },
      { id: 'L50', cat: 'LIQUOR', sno: 50, name_en: 'Hyderabad Whisky', name_te: 'హైదరాబాద్ విస్కీ', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'L51', cat: 'LIQUOR', sno: 51, name_en: 'Hyderabad Whisky', name_te: 'హైదరాబాద్ విస్కీ', size: 'N', costPrice: 0, rate: 0 },
      { id: 'L52', cat: 'LIQUOR', sno: 52, name_en: 'Kyra Wine', name_te: 'కైరా వైన్', size: 'N', costPrice: 0, rate: 0 },
      { id: 'L53', cat: 'LIQUOR', sno: 53, name_en: 'Old Club Vsop Brandy', name_te: 'ఓల్డ్ క్లబ్ VSOP బ్రాందీ', size: 'N', costPrice: 0, rate: 0 },
      { id: 'L54', cat: 'LIQUOR', sno: 54, name_en: 'Cheep', name_te: 'చీప్', size: 'N', costPrice: 0, rate: 110 },
      { id: 'L55', cat: 'LIQUOR', sno: 55, name_en: 'Green House', name_te: 'గ్రీన్ హౌస్', size: 'N', costPrice: 0, rate: 140 },
      { id: 'L56', cat: 'LIQUOR', sno: 56, name_en: 'French Brandy', name_te: 'ఫ్రెంచ్ బ్రాందీ', size: 'N', costPrice: 0, rate: 220 },
      { id: 'L57', cat: 'LIQUOR', sno: 57, name_en: 'Officers Choice', name_te: 'ఆఫీసర్స్ ఛాయిస్', size: 'P', costPrice: 0, rate: 270 },
      { id: 'L58', cat: 'LIQUOR', sno: 58, name_en: 'Officers Choice', name_te: 'ఆఫీసర్స్ ఛాయిస్', size: 'N', costPrice: 0, rate: 150 },
      { id: 'L59', cat: 'LIQUOR', sno: 59, name_en: 'Iconic White', name_te: 'ఐకానిక్ వైట్', size: 'Q', costPrice: 0, rate: 740 },
      { id: 'L60', cat: 'LIQUOR', sno: 60, name_en: 'Iconic White', name_te: 'ఐకానిక్ వైట్', size: 'P', costPrice: 0, rate: 390 },
      { id: 'L61', cat: 'LIQUOR', sno: 61, name_en: 'Iconic White', name_te: 'ఐకానిక్ వైట్', size: 'N', costPrice: 0, rate: 210 },
      { id: 'L62', cat: 'LIQUOR', sno: 62, name_en: 'Royal Stag Whisky', name_te: 'రాయల్ స్టాగ్ విస్కీ', size: 'D', costPrice: 0, rate: 130 },
      { id: 'L63', cat: 'LIQUOR', sno: 63, name_en: 'Morphes Blue', name_te: 'మార్ఫియస్ బ్లూ', size: 'N', costPrice: 0, rate: 0 },
      { id: 'L64', cat: 'LIQUOR', sno: 64, name_en: 'VSOP Brandy', name_te: 'VSOP బ్రాందీ', size: 'N', costPrice: 0, rate: 210 },
      { id: 'L65', cat: 'LIQUOR', sno: 65, name_en: 'Kyron Brandy', name_te: 'కైరాన్ బ్రాందీ', size: 'N', costPrice: 0, rate: 320 },
      { id: 'L66', cat: 'LIQUOR', sno: 66, name_en: 'Signature', name_te: 'సిగ్నేచర్', size: 'N', costPrice: 0, rate: 370 },
      { id: 'B1', cat: 'BEER', sno: 1, name_en: 'K.F. Strong', name_te: 'కె.ఎఫ్. స్ట్రాంగ్', size: 'Q', costPrice: 0, rate: 210 },
      { id: 'B2', cat: 'BEER', sno: 2, name_en: 'K.F.Large', name_te: 'కె.ఎఫ్. లార్జ్', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'B3', cat: 'BEER', sno: 3, name_en: 'K.F.Ultra', name_te: 'కె.ఎఫ్. అల్ట్రా', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'B4', cat: 'BEER', sno: 4, name_en: 'K.F.Storm', name_te: 'కె.ఎఫ్. స్టార్మ్', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'B5', cat: 'BEER', sno: 5, name_en: 'Budweiser M', name_te: 'బడ్వైజర్ ఎం', size: 'Q', costPrice: 0, rate: 310 },
      { id: 'B6', cat: 'BEER', sno: 6, name_en: 'Budweiser M', name_te: 'బడ్వైజర్ ఎం', size: 'Tin', costPrice: 0, rate: 0 },
      { id: 'B7', cat: 'BEER', sno: 7, name_en: 'Budweiser L', name_te: 'బడ్వైజర్ ఎల్', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'B8', cat: 'BEER', sno: 8, name_en: 'Budweiser L', name_te: 'బడ్వైజర్ ఎల్', size: 'Tin', costPrice: 0, rate: 0 },
      { id: 'B9', cat: 'BEER', sno: 9, name_en: 'Foster Beer', name_te: 'ఫాస్టర్ బీర్', size: 'Q', costPrice: 0, rate: 0 },
      { id: 'B10', cat: 'BEER', sno: 10, name_en: '10000 Beer', name_te: '10000 బీర్', size: 'Q', costPrice: 0, rate: 190 },
      { id: 'B11', cat: 'BEER', sno: 11, name_en: 'KHO Beer', name_te: 'కె.హెచ్.ఓ బీర్', size: 'Q', costPrice: 0, rate: 190 },
      { id: 'B12', cat: 'BEER', sno: 12, name_en: 'Bacardi Breezer', name_te: 'బకార్డి బ్రీజర్', size: 'P', costPrice: 0, rate: 0 },
      { id: 'B13', cat: 'BEER', sno: 13, name_en: 'Breezer Beer', name_te: 'బ్రీజర్ బీర్', size: 'P', costPrice: 0, rate: 140 },
      { id: 'B14', cat: 'BEER', sno: 14, name_en: 'Stock', name_te: 'స్టాక్', size: 'Tin', costPrice: 0, rate: 0 }
    ];

    const T = {
      te: {
        today: 'ఈ రోజు', o: 'ప్రారంభ', r: 'రసీదు', i: 'ఇష్యూ', c: 'ముగింపు', tot: 'మొత్తం', sal: 'అమ్మకాలు', amt: 'విలువ',
        ex: 'దుకాణం ఖర్చులు', ax: 'ఖర్చు', cy: 'నిన్నటివి', cyB: 'నిన్నటి బ్రాండ్లు (0)', cyC: 'నిన్నటి ముగింపు నిల్వ', noPrev: 'నిన్నటి ఎంట్రీలు లేవు', copiedBrands: ' బ్రాండ్లు జోడించబడ్డాయి', pp: 'ఫోన్ పే / UPI (₹)', ot: 'దుకాణం జమ / ఇతరాలు (₹)',
        ca: 'లెక్కించిన నగదు (₹)', by: 'తయారు చేసినవారు', rm: 'వ్యాఖ్యలు', gs: 'మొత్తం అమ్మకాలు', nc: 'నికర నగదు',
        ad: 'బ్రాండ్', rp: 'నివేదిక', adT: 'బ్రాండ్ జోడించు', stT: 'సెట్టింగ్స్', sh: 'షేర్', dl: 'డౌన్‌లోడ్', prn: 'ప్రింట్ / PDF',
        empty: 'బ్రాండ్లు లేవు. “+ బ్రాండ్” లేదా పై బటన్ నొక్కండి.', lq: 'లిక్కర్ విభాగం', br: 'బీర్ విభాగం',
        brand: 'బ్రాండ్', size: 'సైజ్', rate: 'రేటు', cost: 'కొనుగోలు', date: 'తేదీ',
        title: 'రోజువారీ స్టాక్ & అమ్మకాల నివేదిక', mgr: 'మేనేజర్ సంతకం', chk: 'తనిఖీ చేసినవారు',
        lqS: 'లిక్కర్ అమ్మకాలు', beS: 'బీర్ అమ్మకాలు', texp: 'మొత్తం ఖర్చులు', grand: 'గ్రాండ్ టోటల్',
        lpp: 'తీసివేత: ఫోన్ పే / UPI', lot: 'తీసివేత: జమ / ఇతరాలు', exb: 'ఖర్చుల వివరాలు',
        rec: 'నగదు & ఖర్చుల సమన్వయం', notes: 'ముఖ్య గమనికలు', clean: 'ఎలాంటి తేడాలు లేవు',
        shop: 'దుకాణం పేరు', bk: 'బ్యాకప్', exp: 'ఎక్స్‌పోర్ట్', imp: 'ఇంపోర్ట్', rs: 'అంతా తొలగించు', seedBtn: '19-11-2026 డేటా లోడ్',
        pr: 'చూపిస్తున్న తేదీకి ధరలు వర్తిస్తాయి', nb: 'కొత్త బ్రాండ్', tl: 'మొత్తం',
        bc: 'కొనుగోలు ధర ₹', sr: 'అమ్మకం ధర ₹', mg: 'నివేదికలో లాభం చూపించు', gm: 'స్థూల లాభం'
      },
      en: {
        today: 'Today', o: 'Open', r: 'Receipt', i: 'Issue', c: 'Close', tot: 'Total', sal: 'Sales', amt: 'Amount',
        ex: 'Shop expenses', ax: 'Expense', cy: 'Yesterday', cyB: "Yesterday's Brands (0)", cyC: "Yesterday's Closing", noPrev: 'No previous day entries', copiedBrands: ' brands added', pp: 'PhonePe / UPI (₹)', ot: 'Shop deposit / Others (₹)',
        ca: 'Cash counted (₹)', by: 'Prepared by', rm: 'Remarks', gs: 'Gross sales', nc: 'Net cash',
        ad: 'Brand', rp: 'Report', adT: 'Add brand', stT: 'Settings', sh: 'Share', dl: 'Download', prn: 'Print / PDF',
        empty: 'No brands yet. Tap “+ Brand” or use the buttons above.', lq: 'LIQUOR SECTION', br: 'BEER SECTION',
        brand: 'Brand', size: 'Size', rate: 'Rate', cost: 'Cost', date: 'DATE',
        title: 'DAILY STOCK & SALES LEDGER REPORT', mgr: 'Manager Signature', chk: 'Checked By',
        lqS: 'Liquor Sales', beS: 'Beer Sales', texp: 'Total Expenses', grand: 'Grand Total',
        lpp: 'Less: PhonePe / UPI', lot: 'Less: Shop Deposit / Others', exb: 'Shop Expense Breakdown',
        rec: 'Cash & Expense Reconciliation', notes: 'Important Notes', clean: 'No discrepancies detected',
        shop: 'Shop name', bk: 'Backup', exp: 'Export', imp: 'Import', rs: 'Erase all', seedBtn: 'Load 19-11-2026 Data',
        pr: 'Price edits apply to the date shown', nb: 'New brand', tl: 'TOTAL',
        bc: 'Buy cost ₹', sr: 'Sell rate ₹', mg: 'Show margin in report', gm: 'Gross margin'
      }
    };

    // Sample ledger for 19-11-2026 (from the physical sheets). Not loaded by default:
    // Settings → "Load 19-11-2026 Data" adds it on demand.
    const SEED_19_11_2026 = {
      date: '2026-11-19',
      rows: [
        ['L4', 17, 0, 0, 17, 450],
        ['L5', 9, 0, 0, 9, 860],
        ['L6', 53, 0, 0, 34, 240],
        ['L7', 4, 0, 0, 4, 1350],
        ['L8', 10, 0, 0, 9, 690],
        ['L9', 17, 0, 0, 12, 370],
        ['L10', 17, 0, 0, 16, 870],
        ['L11', 34, 0, 0, 30, 450],
        ['L12', 346, 0, 0, 323, 240],
        ['L13', 10, 0, 0, 10, 910],
        ['L15', 4, 48, 0, 51, 250],
        ['L16', 14, 0, 0, 12, 1200],
        ['L17', 0, 24, 0, 24, 620],
        ['L18', 3, 48, 0, 49, 330],
        ['L19', 8, 0, 0, 6, 740],
        ['L20', 9, 0, 0, 7, 390],
        ['L21', 240, 240, 0, 412, 210],
        ['L22', 197, 0, 0, 196, 110],
        ['L23', 25, 12, 0, 33, 790],
        ['L24', 116, 0, 0, 103, 420],
        ['L25', 968, 960, 0, 1656, 220],
        ['L26', 198, 0, 0, 174, 120],
        ['L27', 31, 0, 0, 29, 740],
        ['L28', 17, 24, 0, 35, 390],
        ['L29', 325, 480, 0, 732, 210],
        ['L30', 160, 0, 0, 155, 110],
        ['L33', 19, 0, 0, 14, 200],
        ['L35', 145, 144, 0, 254, 160],
        ['L36', 71, 240, 0, 268, 160],
        ['L37', 9, 0, 0, 9, 1090],
        ['L38', 45, 0, 0, 45, 570],
        ['L39', 36, 0, 0, 36, 320],
        ['L40', 15, 0, 0, 15, 910],
        ['L41', 9, 0, 0, 9, 470],
        ['L42', 75, 0, 0, 73, 260],
        ['L46', 1, 48, 0, 49, 170],
        ['L47', 52, 0, 0, 48, 500],
        ['L48', 7498, 4800, 0, 11579, 150],
        ['L54', 2832, 720, 0, 2984, 110],
        ['L55', 694, 0, 0, 660, 140],
        ['L56', 15, 0, 0, 11, 220],
        ['L57', 11, 0, 0, 10, 270],
        ['L58', 57, 0, 0, 51, 150],
        ['L59', 4, 0, 0, 4, 740],
        ['L60', 12, 0, 0, 12, 390],
        ['L61', 15, 0, 0, 14, 210],
        ['L62', 126, 0, 0, 125, 130],
        ['L63', 48, 0, 0, 48, 0],
        ['L64', 47, 0, 0, 47, 210],
        ['L65', 38, 0, 0, 38, 320],
        ['L66', 46, 0, 0, 46, 370],
        ['B1', 78, 144, 0, 131, 210],
        ['B5', 109, 0, 0, 109, 310],
        ['B10', 0, 240, 0, 240, 190],
        ['B11', 3, 144, 0, 147, 190],
        ['B13', 20, 0, 0, 18, 140]
      ],
      exp: [
        { l: 'Shop Exp', a: 300 },
        { l: 'Exlnz', a: 5000 },
        { l: 'Dipozss', a: 5534 }
      ],
      phonePe: 82248,
      other: 0,
      cash: 246078,
      by: '',
      remarks: '19-11-2026 Ledger (Gross: ₹3,39,160 | Exp: ₹10,834 | PhonePe: ₹82,248 | Net Cash: ₹2,46,078)'
    };

    function buildSeedLedger19(skus) {
      const map = Object.fromEntries(skus.map(s => [s.id, s]));
      const entries = {};
      SEED_19_11_2026.rows.forEach(([id, o, r, i, c, rate]) => {
        const s = map[id];
        if (!s) return;
        entries[id] = {
          id, cat: s.cat, sno: s.sno, size: s.size,
          name_en: s.name_en, name_te: s.name_te,
          o, r, i, c,
          rate: rate || num(s.rate),
          cost: num(s.costPrice)
        };
      });
      return {
        date: SEED_19_11_2026.date,
        entries,
        exp: SEED_19_11_2026.exp.map(x => ({ ...x })),
        phonePe: SEED_19_11_2026.phonePe,
        other: SEED_19_11_2026.other,
        cash: SEED_19_11_2026.cash,
        by: SEED_19_11_2026.by,
        remarks: SEED_19_11_2026.remarks,
        reports: []
      };
    }

    function applySeed19(switchToDate) {
      const ex = S.ledgers[SEED_19_11_2026.date];
      if (ex && Object.keys(ex.entries || {}).length) {
        const q = S.lang === 'te'
          ? '19-11-2026 కి ఇప్పటికే డేటా ఉంది. నమూనా డేటాతో మార్చాలా?'
          : '19-11-2026 already has entries. Replace them with the sample data?';
        if (!confirm(q)) return;
      }
      const skus = S && Array.isArray(S.skus) && S.skus.length ? S.skus : SK0.map(x => ({ ...x }));
      S.ledgers[SEED_19_11_2026.date] = buildSeedLedger19(skus);
      syncMasterData();
      save();
      if (switchToDate) {
        curD = SEED_19_11_2026.date;
        cl('st');
        renderAll();
        toast(S.lang === 'te' ? '✓ 19-11-2026 డేటా లోడ్ చేయబడింది' : '✓ 19-11-2026 data loaded');
      }
    }

    // =========================================================================
    // MASTER INVENTORY & STOCK BALANCE ENGINE (S.master)
    // Tracks latest closing stock, active catalog status, cost & selling rates
    // across all recorded ledgers for instant carryover and future analytics.
    // =========================================================================
    function syncMasterData() {
      if (!S) return;
      const oldMaster = S.master || {};
      const nextMaster = {};
      const sm = smap();

      // Seed master entries from SKU catalog
      S.skus.forEach(s => {
        const prevM = oldMaster[s.id] || {};
        nextMaster[s.id] = {
          id: s.id,
          cat: s.cat,
          sno: s.sno || 0,
          size: s.size,
          name_en: s.name_en,
          name_te: s.name_te,
          costPrice: num(s.costPrice),
          rate: num(s.rate),
          lastClosing: num(prevM.lastClosing),
          lastActiveDate: prevM.lastActiveDate || null,
          active: Boolean(prevM.active)
        };
      });

      // Replay ledgers chronologically so each SKU's latest closing & prices stay accurate
      const sortedDates = Object.keys(S.ledgers || {}).sort();
      sortedDates.forEach(d => {
        const L = S.ledgers[d];
        Object.values(L.entries || {}).forEach(e => {
          const s = sm[e.id];
          if (!nextMaster[e.id]) {
            nextMaster[e.id] = {
              id: e.id,
              cat: e.cat || (s ? s.cat : 'LIQUOR'),
              sno: e.sno || (s ? s.sno : 0),
              size: e.size || (s ? s.size : 'N'),
              name_en: e.name_en || (s ? s.name_en : e.id),
              name_te: e.name_te || (s ? s.name_te : e.id),
              costPrice: num(e.cost),
              rate: num(e.rate),
              lastClosing: num(e.c),
              lastActiveDate: d,
              active: true
            };
          } else {
            nextMaster[e.id].lastClosing = num(e.c);
            nextMaster[e.id].lastActiveDate = d;
            nextMaster[e.id].active = true;
            if (num(e.rate) > 0) nextMaster[e.id].rate = num(e.rate);
            if (num(e.cost) > 0) nextMaster[e.id].costPrice = num(e.cost);
          }
        });
      });

      S.master = nextMaster;
    }

    function getMasterOpeningForDate(skuId, targetDate) {
      const priorDates = Object.keys(S.ledgers || {})
        .filter(d => d < targetDate && S.ledgers[d].entries && S.ledgers[d].entries[skuId])
        .sort();
      if (priorDates.length > 0) {
        const lastDate = priorDates[priorDates.length - 1];
        return num(S.ledgers[lastDate].entries[skuId].c);
      }
      return S.master && S.master[skuId] ? num(S.master[skuId].lastClosing) : 0;
    }

    let S, curD = iso(new Date());
    const $ = id => document.getElementById(id);
    const ico = n => `<svg class="ico" aria-hidden="true"><use href="#i-${n}"/></svg>`;
    const t = k => T[S.lang][k] || k;

    function load() {
      try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) { S = null; }
      if (!validBackup(S)) {
        const skus = SK0.map(x => ({ ...x }));
        S = {
          lang: 'te',
          theme: 'light',
          shop: 'Jana Priya Wines',
          skus,
          master: {},
          ledgers: {},
          seedCleaned: true
        };
        syncMasterData();
        save();
      } else {
        // One-time: drop the 19-11-2026 sample that older versions loaded automatically,
        // but only if nobody has edited it or generated a report from it.
        if (!S.seedCleaned) {
          const L = S.ledgers[SEED_19_11_2026.date];
          if (L && !(L.reports && L.reports.length)) {
            const strip = x => JSON.stringify({ e: x.entries, x: x.exp, p: num(x.phonePe), o: num(x.other), c: x.cash, b: x.by || '', r: x.remarks || '' });
            if (strip(L) === strip(buildSeedLedger19(S.skus))) delete S.ledgers[SEED_19_11_2026.date];
          }
          S.seedCleaned = true;
        }
        syncMasterData();
        save();
      }
      if (!S.theme) S.theme = S.dark ? 'dark' : 'light';
    }

    function save() {
      try {
        syncMasterData();
        localStorage.setItem(KEY, JSON.stringify(S));
      } catch (e) {
        toast('Storage full / blocked');
      }
    }

    function applyTheme(dark) {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      const m = $('metaTheme');
      if (m) m.content = dark ? '#1a1618' : '#fbf8f4';
      const b = $('thBtn');
      if (b) b.innerHTML = ico(dark ? 'light_mode' : 'dark_mode');
    }

    function toggleTheme() {
      S.dark = !S.dark;
      S.theme = S.dark ? 'dark' : 'light';
      save();
      applyTheme(S.dark);
    }

    const smap = () => Object.fromEntries(S.skus.map(s => [s.id, s]));

    function cur() {
      let L = S.ledgers[curD];
      if (!L) {
        const p = prevDate(S.ledgers, curD);
        L = S.ledgers[curD] = newLedger(curD, p ? S.ledgers[p] : null, smap());
        save();
      }
      L.reports = L.reports || [];
      L.exp = L.exp || [];
      return L;
    }

    function toast(m, fn) {
      const e = $('tt');
      e.innerHTML = `<span>${esc(m)}</span>`;
      if (fn) {
        const b = document.createElement('button');
        b.textContent = S && S.lang === 'te' ? 'వెనక్కి' : 'Undo';
        b.className = 'tt-act';
        b.onclick = () => { fn(); e.style.display = 'none'; };
        e.append(b);
      }
      e.style.display = 'flex';
      clearTimeout(toast.h);
      toast.h = setTimeout(() => e.style.display = 'none', fn ? 6000 : 2500);
    }

    const cl = id => $(id).classList.remove('on');
    const op = id => $(id).classList.add('on');
    const nmOf = e => S.lang === 'te' ? (e.name_te || e.name_en) : e.name_en;
    const BC = {};
    const bcol = s => BC[s] || ['#f3eee8', '#857a73', '#1f1a1c'];
    const badge = s => `<span class="bd">${esc(s)}</span>`;

    function goto(d) { if (!d) return; curD = d; renderAll(); }
    function stepDay(n) { const p = curD.split('-').map(Number), d = new Date(p[0], p[1] - 1, p[2] + n); goto(iso(d)); }

    function card(e) {
      const id = esc(e.id);
      return `<div class="card"><div class="top"><b>${esc(nmOf(e))}</b>${badge(e.size)}<button class="x" onclick="rmE('${id}')" aria-label="${S.lang === 'te' ? 'తొలగించు' : 'Remove'} ${esc(nmOf(e))}"><svg class="ico" aria-hidden="true"><use href="#i-close"/></svg></button></div><div class="g4">${['o', 'r', 'i', 'c'].map(k => `<div><label>${t(k)}</label><input type="number" inputmode="numeric" placeholder="0" value="${e[k] || ''}" onfocus="this.select()" oninput="ed('${id}','${k}',this.value)"></div>`).join('')}</div><div class="pr">${[['cost', 'bc'], ['rate', 'sr']].map(a => `<div><label>${t(a[1])}</label><input type="number" inputmode="numeric" placeholder="0" value="${e[a[0]] || ''}" onfocus="this.select()" oninput="pe('${id}','${a[0]}',this.value)"></div>`).join('')}</div><div class="ft"><span>${t('tot')} <b id="t-${id}"></b></span><span>${t('sal')} <b id="s-${id}"></b></span><b class="amt-pill number-md" id="a-${id}"></b></div></div>`;
    }

    function upd(id) {
      const e = cur().entries[id];
      if (!e) return;
      const k = calc(e);
      $('t-' + id).textContent = k.total;
      $('s-' + id).textContent = k.sales;
      $('a-' + id).textContent = fmt(k.amount);
    }

    function ed(id, k, v) { cur().entries[id][k] = num(v); save(); upd(id); tots(); }

    function pe(id, k, v) {
      const e = cur().entries[id];
      e[k] = num(v);
      const s = smap()[id], latest = Object.keys(S.ledgers).every(d => d <= curD || !Object.keys(S.ledgers[d].entries || {}).length);
      if (s && latest) s[k === 'cost' ? 'costPrice' : 'rate'] = num(v);
      save();
      upd(id);
      tots();
    }

    function rmE(id) {
      const L = cur(), b = L.entries[id], d = curD;
      delete L.entries[id];
      save();
      rEnts();
      tots();
      toast('Removed', () => {
        S.ledgers[d].entries[id] = b;
        save();
        if (d === curD) { rEnts(); tots(); }
      });
    }

    function rEnts() {
      const es = sorted(cur());
      $('ents').innerHTML = es.length
        ? es.map(card).join('')
        : `<div class="empty"><svg width="72" height="96" viewBox="0 0 72 96" class="empty-art" aria-hidden="true"><path d="M30 6h12v14c0 6 12 10 12 22v44a6 6 0 01-6 6H24a6 6 0 01-6-6V42c0-12 12-16 12-22z"/><rect class="empty-label" x="22" y="52" width="28" height="22" rx="4"/></svg><div class="body empty-body">${t('empty')}</div></div>`;
      es.forEach(e => upd(e.id));
    }

    function tots() {
      const T = dayTotals(cur());
      $('vG').textContent = fmt(T.gross);
      $('vN').textContent = fmt(T.net);
      $('hL').textContent = t('nc');
      $('hV').textContent = fmt(T.net);
      $('hN').textContent = t('gs') + ' ' + fmt(T.gross) + ' · ' + t('texp') + ' ' + fmt(T.exp) + ' · PhonePe ' + fmt(T.pp);
    }

    function rEx() {
      $('exl').innerHTML = cur().exp.map((x, i) => `<div class="er"><input value="${esc(x.l)}" oninput="exF(${i},'l',this.value)"><input type="number" inputmode="numeric" placeholder="0" value="${x.a || ''}" onfocus="this.select()" oninput="exF(${i},'a',this.value)"><button class="x" onclick="exD(${i})" aria-label="Remove"><svg class="ico" aria-hidden="true"><use href="#i-close"/></svg></button></div>`).join('');
    }

    function exF(i, k, v) {
      cur().exp[i][k] = k === 'a' ? num(v) : v;
      save();
      tots();
    }

    function exD(i) {
      const L = cur(), b = L.exp.splice(i, 1)[0], d = curD;
      save();
      rEx();
      tots();
      toast('Removed', () => {
        S.ledgers[d].exp.splice(i, 0, b);
        save();
        if (d === curD) { rEx(); tots(); }
      });
    }

    function addEx() {
      cur().exp.push({ l: '', a: 0 });
      save();
      rEx();
      const i = $('exl').querySelectorAll('input');
      if (i.length >= 2) i[i.length - 2].focus();
    }

    function copyEx() {
      const p = Object.keys(S.ledgers).filter(k => k < curD && (S.ledgers[k].exp || []).some(x => num(x.a) > 0)).sort().pop();
      if (!p) { toast('No earlier expenses'); return; }
      const L = cur(), have = new Set(L.exp.map(x => x.l.toLowerCase()));
      let n = 0;
      S.ledgers[p].exp.forEach(x => {
        if (num(x.a) > 0 && x.l && !have.has(x.l.toLowerCase())) {
          L.exp.push({ l: x.l, a: 0 });
          n++;
        }
      });
      L.exp = L.exp.filter(x => x.l || num(x.a));
      save();
      rEx();
      toast(n + ' labels copied');
    }

    function loadMasterAndOpening() {
      const L = cur(), sm = smap(), d = curD;
      const pd = prevDate(S.ledgers, d);
      const prevEntries = pd ? (S.ledgers[pd].entries || {}) : {};
      const masterItems = Object.values(S.master || {}).filter(m => m.active || prevEntries[m.id] || num(m.lastClosing) > 0);
      const sourceSkus = masterItems.length > 0 ? masterItems : S.skus;

      const snapshotBefore = JSON.parse(JSON.stringify(L.entries || {}));
      let addedCount = 0;
      let updatedOpeningCount = 0;

      sourceSkus.forEach(item => {
        const s = sm[item.id] || item;
        const openingBal = prevEntries[item.id]
          ? num(prevEntries[item.id].c)
          : getMasterOpeningForDate(item.id, d);

        if (!L.entries[item.id]) {
          L.entries[item.id] = {
            id: item.id,
            cat: s.cat,
            sno: s.sno || 0,
            size: s.size,
            name_en: s.name_en,
            name_te: s.name_te,
            o: openingBal,
            r: 0,
            i: 0,
            c: openingBal,
            rate: num(s.rate) || num(item.rate),
            cost: num(s.costPrice) || num(item.costPrice)
          };
          addedCount += 1;
        } else if (num(L.entries[item.id].o) === 0 && openingBal > 0) {
          L.entries[item.id].o = openingBal;
          if (num(L.entries[item.id].c) === 0) L.entries[item.id].c = openingBal;
          updatedOpeningCount += 1;
        }
      });

      if (!addedCount && !updatedOpeningCount) {
        toast(S.lang === 'te' ? 'అన్ని మాస్టర్ బ్రాండ్లు & ప్రారంభ నిల్వలు ఇప్పటికే లోడ్ అయ్యాయి' : 'All master brands & opening balances are already loaded');
        return;
      }

      save();
      rEnts();
      tots();

      const msg = S.lang === 'te'
        ? `✓ ${addedCount} బ్రాండ్లు & ప్రారంభ నిల్వలు లోడ్ చేయబడ్డాయి`
        : `✓ Loaded ${addedCount} brands & fetched opening balances`;

      toast(msg, () => {
        if (S.ledgers[d]) {
          S.ledgers[d].entries = snapshotBefore;
          save();
          if (d === curD) { rEnts(); tots(); }
        }
      });
    }

    function fld(k, v) {
      const L = cur();
      L[k] = (k === 'by' || k === 'remarks') ? v : (k === 'cash' && v === '' ? null : num(v));
      save();
      tots();
    }

    function renderAll() {
      const L = cur();
      applyTheme(!!S.dark);
      $('shopH').textContent = S.shop;
      $('subH').textContent = t('title');
      $('dt').value = curD;
      $('tdy').textContent = t('today');
      $('lg').textContent = S.lang === 'te' ? 'EN' : 'తెలుగు'; $('lg').setAttribute('aria-label', S.lang === 'te' ? 'Switch to English' : 'తెలుగుకు మార్చు');
      [['hEx', 'ex'], ['lPp', 'pp'], ['lOt', 'ot'], ['lCa', 'ca'], ['lBy', 'by'], ['lRm', 'rm'], ['sG', 'gs'], ['sN', 'nc'], ['adT', 'adT'], ['stT', 'stT']].forEach(a => {
        const e = $(a[0]);
        if (e) e.textContent = t(a[1]);
      });
      $('bAx').innerHTML = `<svg class="ico" aria-hidden="true"><use href="#i-add"/></svg><span>${t('ax')}</span>`;
      $('bCy').innerHTML = `<svg class="ico" aria-hidden="true"><use href="#i-history"/></svg><span>${t('cy')}</span>`;
      if ($('bLoadAll')) {
        const label = S.lang === 'te' ? 'లోడ్ & ప్రారంభ నిల్వ తెచ్చుకో' : 'Load All & Fetch Opening';
        $('bLoadAll').innerHTML = `<svg class="ico" aria-hidden="true"><use href="#i-sync"/></svg><span>${label}</span>`;
      }
      $('bAd').innerHTML = `<svg class="ico" aria-hidden="true"><use href="#i-add"/></svg><span>${t('ad')}</span>`;
      $('bRp').innerHTML = `<svg class="ico" aria-hidden="true"><use href="#i-description"/></svg><span>${t('rp')}</span>`;
      if ($('bPr')) $('bPr').innerHTML = `<svg class="ico" aria-hidden="true"><use href="#i-print"/></svg><span>${t('prn')}</span>`;
      $('bSh').innerHTML = `<svg class="ico" aria-hidden="true"><use href="#i-share"/></svg><span>${t('sh')}</span>`;
      $('bDl').innerHTML = `<svg class="ico" aria-hidden="true"><use href="#i-download"/></svg><span>${t('dl')}</span>`;
      $('pp').value = L.phonePe || '';
      $('ot').value = L.other || '';
      $('ca').value = L.cash == null ? '' : L.cash;
      $('by').value = L.by || '';
      $('rm').value = L.remarks || '';
      $('adQ').placeholder = S.lang === 'te' ? 'బ్రాండ్ పేరు వెతకండి...' : 'Search brand name...';
      rEnts();
      rEx();
      tots();
    }

    function openAdd() { $('adQ').value = ''; op('ad'); rAdd(); setTimeout(() => $('adQ').focus(), 50); }

    function rAdd() {
      const q = $('adQ').value.trim().toLowerCase(), L = cur();
      $('adL').innerHTML = S.skus.filter(s => !L.entries[s.id] && (!q || (s.name_en + ' ' + (s.name_te || '')).toLowerCase().includes(q))).slice(0, 60).map(s => {
        const opBal = getMasterOpeningForDate(s.id, curD);
        const balTag = opBal > 0 ? ` • ${S.lang === 'te' ? 'ప్రారంభ' : 'Open'}: ${opBal}` : '';
        return `<div class="li" style="cursor:pointer" onclick="addE('${esc(s.id)}')">${badge(s.size)}<span>${esc(S.lang === 'te' ? (s.name_te || s.name_en) : s.name_en)}</span><span class="mut" style="flex:none;font-size:12px;font-variant-numeric:tabular-nums">₹${num(s.costPrice)} → ₹${num(s.rate)}${balTag}</span></div>`;
      }).join('');
    }

    function addE(id) {
      const s = smap()[id], L = cur();
      if (!s || L.entries[id]) return;
      const openingBal = getMasterOpeningForDate(id, curD);
      L.entries[id] = {
        id,
        cat: s.cat,
        sno: s.sno,
        size: s.size,
        name_en: s.name_en,
        name_te: s.name_te,
        o: openingBal,
        r: 0,
        i: 0,
        c: openingBal,
        rate: num(s.rate),
        cost: num(s.costPrice)
      };
      save();
      rEnts();
      tots();
      rAdd();
      toast('✓ ' + nmOf(s));
    }

    function openSet() {
      $('stB').innerHTML = `
        <label class="lbl">${t('shop')}</label>
        <input value="${esc(S.shop)}" oninput="S.shop=this.value;save();$('shopH').textContent=this.value">
        <h3 style="margin-top:16px"><svg class="ico" aria-hidden="true"><use href="#i-add_circle"/></svg><span>${t('nb')}</span></h3>
        <div class="f">
          <input id="nE" placeholder="Name (English)">
          <input id="nT" placeholder="పేరు (తెలుగు)">
          <select id="nC"><option>LIQUOR</option><option>BEER</option></select>
          <select id="nS"><option>Q</option><option>P</option><option>N</option><option>D</option><option>Tin</option></select>
          <input id="nK" type="number" inputmode="numeric" placeholder="${t('bc')}">
          <input id="nR" type="number" inputmode="numeric" placeholder="${t('sr')}">
          <button class="p w" onclick="skAdd()"><svg class="ico" aria-hidden="true"><use href="#i-add"/></svg><span>${t('nb')}</span></button>
        </div>
        <h3 style="margin-top:16px"><svg class="ico" aria-hidden="true"><use href="#i-sell"/></svg><span>SKU · ${t('bc')} → ${t('sr')}</span></h3>
        <div class="small mut" style="margin-bottom:8px">${t('pr')}</div>
        <input id="sq" placeholder="${S.lang === 'te' ? 'SKU వెతకండి...' : 'Search SKU...'}" oninput="rSk()" style="margin-bottom:6px">
        <div id="skl"></div>
        <label class="li" style="cursor:pointer">
          <input type="checkbox" style="width:22px;height:22px;flex:none;accent-color:var(--wine)" ${S.showMargin ? 'checked' : ''} onchange="S.showMargin=this.checked;save()">
          <span>${t('mg')}</span>
        </label>
        <h3 style="margin-top:16px"><svg class="ico" aria-hidden="true"><use href="#i-backup"/></svg><span>${t('bk')}</span></h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="sec" onclick="exp()"><svg class="ico" aria-hidden="true"><use href="#i-download"/></svg><span>${t('exp')}</span></button>
          <button class="sec" onclick="$('imf').click()"><svg class="ico" aria-hidden="true"><use href="#i-upload"/></svg><span>${t('imp')}</span></button>
          <button class="quiet" onclick="applySeed19(true)"><svg class="ico" aria-hidden="true"><use href="#i-database"/></svg><span>${t('seedBtn')}</span></button>
          <button class="danger" onclick="rst()"><svg class="ico" aria-hidden="true"><use href="#i-delete_forever"/></svg><span>${t('rs')}</span></button>
          <input type="file" id="imf" accept=".json" style="display:none" onchange="imp(this.files[0])">
        </div>`;
      op('st');
      rSk();
    }

    function rSk() {
      const q = ($('sq') || { value: '' }).value.toLowerCase();
      $('skl').innerHTML = S.skus.filter(s => !q || (s.name_en + ' ' + (s.name_te || '')).toLowerCase().includes(q)).slice(0, 80).map(s => `<div class="li">${badge(s.size)}<span>${esc(S.lang === 'te' ? (s.name_te || s.name_en) : s.name_en)}</span><input type="number" inputmode="numeric" value="${num(s.costPrice) || ''}" placeholder="${t('bc')}" oninput="skP('${esc(s.id)}','costPrice',this.value)"><input type="number" inputmode="numeric" value="${num(s.rate) || ''}" placeholder="${t('sr')}" oninput="skP('${esc(s.id)}','rate',this.value)"><button class="x" onclick="skD('${esc(s.id)}')"><svg class="ico" aria-hidden="true"><use href="#i-close"/></svg></button></div>`).join('');
    }

    function skP(id, k, v) {
      const s = smap()[id];
      s[k] = num(v);
      const e = cur().entries[id];
      if (e) e[k === 'rate' ? 'rate' : 'cost'] = num(v);
      save();
    }

    function skD(id) {
      S.skus = S.skus.filter(s => s.id !== id);
      save();
      rSk();
      toast('Deleted from catalog');
    }

    function skAdd() {
      const ne = $('nE').value.trim(), nt = $('nT').value.trim();
      if (!ne && !nt) { toast('Name?'); return; }
      const n = ne || translateText(nt, 'en');
      const c = $('nC').value, sn = Math.max(0, ...S.skus.filter(s => s.cat === c).map(s => s.sno || 0)) + 1;
      S.skus.push({ id: 'C' + Date.now(), cat: c, sno: sn, name_en: n, name_te: nt || translateText(ne, 'te'), size: $('nS').value, rate: num($('nR').value), costPrice: num($('nK').value) });
      save();
      ['nE', 'nT', 'nR', 'nK'].forEach(i => $(i).value = '');
      rSk();
      toast('✓');
    }

    function exp() {
      try {
        const jsonStr = JSON.stringify(S, null, 2);
        const fn = 'JanaPriyaWines_backup_' + iso(new Date()) + '.json';
        const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, fn);
          toast('✓ Exported ' + fn);
          return;
        }
        const a = document.createElement('a');
        let url = null;
        if (window.URL && URL.createObjectURL) {
          url = URL.createObjectURL(blob);
          a.href = url;
        } else {
          a.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonStr);
        }
        a.download = fn;
        a.rel = 'noopener';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          if (url) URL.revokeObjectURL(url);
        }, 1500);
        toast('✓ Backup downloaded: ' + fn);
      } catch (e) {
        console.error('Export failed:', e);
        toast('Export failed: ' + (e.message || 'Browser blocked download'));
      }
    }

    function imp(f) {
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try {
          const o = JSON.parse(r.result);
          if (!validBackup(o)) throw 0;
          S = o;
          S.lang = S.lang || 'te';
          S.shop = S.shop || 'Jana Priya Wines';
          save();
          cl('st');
          renderAll();
          toast('✓ Backup restored');
        } catch (e) {
          toast('Invalid backup file');
        }
      };
      r.readAsText(f);
    }

    function rst() {
      localStorage.removeItem(KEY);
      load();
      cl('st');
      renderAll();
      toast('✓ Reset complete');
    }

    const FL = { opening: 'ప్రారంభ', receipts: 'రసీదు', issue: 'ఇష్యూ', closing: 'ముగింపు', cost: 'కొనుగోలు ధర', rate: 'అమ్మకం ధర' };
    const FG = { 'Expenses total': 'మొత్తం ఖర్చులు', 'PhonePe': 'ఫోన్ పే', 'Other deduction': 'జమ / ఇతరాలు', 'Cash counted': 'లెక్కించిన నగదు' };

    function locD(s) {
      if (S.lang !== 'te') return s;
      let m = s.match(/^(.*) \[(.*)\] (opening|receipts|issue|closing|cost|rate): (.*)$/);
      if (m) return translateText(m[1], 'te') + ' [' + m[2] + '] ' + FL[m[3]] + ': ' + m[4];
      m = s.match(/^(.*?): (.*)$/);
      return m && FG[m[1]] ? FG[m[1]] + ': ' + m[2] : s;
    }

    function meta() {
      const L = cur(), pd = prevDate(S.ledgers, L.date), prev = pd ? S.ledgers[pd] : null;
      const last = L.reports[L.reports.length - 1], snap = snapOf(L), dfs = last ? diff(last.snap, snap) : [], no = L.reports.length + 1, lg = S.lang;
      return {
        id: L.date.replace(/-/g, '') + '-R' + no,
        no,
        at: new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }),
        snap,
        rev: dfs.length > 0,
        notes: mkNotes(L, prev, pd, dfs.map(locD), last, no, lg, nmOf)
      };
    }

    function buildPages(m) {
      const L = cur(), X = dayTotals(L), lg = S.lang, tx = v => v ? translateText(v, lg) : '', items = [];
      let lc = '', k = 0;
      sorted(L).forEach(e => {
        if (e.cat !== lc) {
          items.push({ s: e.cat === 'BEER' ? t('br') : t('lq') });
          lc = e.cat;
        }
        items.push({ e, n: ++k });
      });

      const nh = m.notes.length ? 40 + 19 * Math.min(m.notes.length, 8) + (m.notes.length > 8 ? 19 : 0) : 26;
      const c1 = Math.floor((757 - nh) / 36);
      const rec = 13 + (S.showMargin ? 1 : 0) + (L.remarks ? 2 : 0) + Math.max(0, L.exp.length - 7);
      const P = paginate(items.length, c1, 25, rec);
      const ds = L.date.split('-').reverse().join('/');
      const wd = new Date(L.date + 'T00:00:00').toLocaleDateString(lg === 'te' ? 'te-IN' : 'en-IN', { weekday: 'long' });

      const cg = '<colgroup>' + [28, 190, 46, 50, 54, 50, 56, 56, 58, 56, 70].map(w => `<col style="width:${w}px">`).join('') + '</colgroup>';
      const th = '<thead><tr>' + [['#', 'c'], [t('brand'), 'l'], [t('size'), 'c'], [t('o')], [t('r')], [t('i')], [t('tot')], [t('c')], [t('sal'), 'hl'], [t('rate')], [t('amt'), 'hl']].map(a => `<th class="${a[1] || ''}">${a[0]}</th>`).join('') + '</tr></thead>';

      const row = it => {
        if (it.s) return `<tr class="sec"><td colspan="11">${esc(it.s)}</td></tr>`;
        const e = it.e, c = calc(e), m2 = bcol(e.size), z = v => v || '–';
        return `<tr><td class="c" style="color:#5b5256">${it.n}</td><td class="l" style="font-weight:600">${esc(nmOf(e))}</td><td class="c"><span class="bsz" style="width:${e.size.length > 1 ? 42 : 28}px;background:${m2[0]};border-color:${m2[1]};color:${m2[2]}">${esc(e.size)}</span></td><td style="color:#5b5256">${z(num(e.o))}</td><td style="color:${num(e.r) ? '#1f6b45' : '#857a73'}">${z(num(e.r))}</td><td style="color:#5b5256">${z(num(e.i))}</td><td style="font-weight:600">${c.total}</td><td style="font-weight:600">${num(e.c)}</td><td class="hl">${c.sales}</td><td style="color:#5b5256">${z(num(e.rate))}</td><td class="hl">${c.amount.toLocaleString('en-IN')}</td></tr>`;
      };

      const ln = (a, b, c) => `<div class="ln${c ? ' b' : ''}"><span>${a}</span><span>${b}</span></div>`;
      const lastRows = (() => { let j = -1; P.forEach((p, i) => { if (p[1] > p[0]) j = i; }); return j < 0 ? 0 : j; })();

      return P.map((p, pi) => {
        const first = pi === 0, last = pi === P.length - 1;
        let h = '';
        if (first) {
          h = `<div style="width:714px;display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1.5px solid #e3dbd3;padding-bottom:12px"><div><div style="font-size:26px;font-weight:700;line-height:1.35;color:#7a1f3d">${esc(S.shop)}</div><div style="font-size:14px;font-weight:600;color:#5b5256">${t('title')}</div></div><div style="text-align:right;min-width:190px;border:1px solid #e3dbd3;border-radius:28px;background:#fbf8f4;padding:8px 22px"><div style="font-size:11px;font-weight:700;color:#5b5256">${t('date')}</div><div style="font-size:17px;font-weight:700">${ds}</div><div style="font-size:12px;font-weight:600;color:#5b5256">${esc(wd)}</div>${L.by ? `<div style="font-size:12px;font-weight:600;color:#5b5256;overflow-wrap:anywhere">${esc(tx(L.by))}</div>` : ''}</div></div>
          <div class="kp"><div>${t('gs')}<b>${fmt(X.gross)}</b></div><div>${t('texp')}<b>${fmt(X.exp)}</b></div><div>PhonePe / UPI<b>${fmt(X.pp)}</b></div><div class="kp-hero">${t('nc')}<b>${fmt(X.net)}</b></div></div>`
          + (m.notes.length
            ? `<div style="width:714px;background:#f6dede;border:1.5px solid #a12a2a;border-radius:28px;padding:9px 20px;margin-bottom:14px;color:#1f1a1c"><b style="font-size:13px;color:#a12a2a">${t('notes')} (${m.notes.length})</b><ul style="margin:5px 0 0 16px;padding:0;font-size:12px">${m.notes.slice(0, 8).map(x => `<li>${esc(x)}</li>`).join('')}</ul>${m.notes.length > 8 ? `<div style="font-size:12px">+ ${m.notes.length - 8} more</div>` : ''}</div>`
            : `<div style="font-size:12px;font-weight:700;color:#1f6b45;margin-bottom:14px">✓ ${t('clean')}</div>`);
        } else {
          h = `<div style="width:714px;display:flex;justify-content:space-between;border-bottom:1px solid #e3dbd3;padding-bottom:8px;margin-bottom:14px;color:#5b5256;font-size:13px"><b>${esc(S.shop)}</b><span>${ds}</span></div>`;
        }

        const tf = pi === lastRows ? `<tfoot><tr><td colspan="3" class="l">${t('tl')}</td><td>${X.o}</td><td>${X.r}</td><td>${X.i}</td><td>${X.tot}</td><td>${X.c}</td><td>${X.units}</td><td>–</td><td>${X.gross.toLocaleString('en-IN')}</td></tr></tfoot>` : '';
        const tb = p[1] > p[0] || first ? `<table>${cg}${th}<tbody>${items.slice(p[0], p[1]).map(row).join('')}</tbody>${tf}</table>` : '';
        const rc = last
          ? `<div style="display:flex;gap:16px;margin-top:16px;width:714px"><div class="bx"><h4>${t('exb')}</h4>${L.exp.map(x => ln(esc(tx(x.l) || '–'), fmt(x.a))).join('')}${ln(t('texp'), fmt(X.exp), 1)}</div><div class="bx"><h4>${t('rec')}</h4>${ln(t('lqS'), fmt(X.liq))}${ln(t('beS'), fmt(X.beer))}${ln(t('gs'), fmt(X.gross), 1)}${ln(t('texp'), '- ' + fmt(X.exp))}${ln(t('grand'), fmt(X.grand), 1)}${ln(t('lpp'), '- ' + fmt(X.pp))}${ln(t('lot'), '- ' + fmt(X.ot))}${ln(t('nc'), fmt(X.net), 1)}${S.showMargin ? ln(t('gm'), fmt(X.margin)) : ''}</div></div>${L.remarks ? `<div style="margin-top:12px;width:714px;border:1px solid #e3dbd3;border-radius:28px;padding:8px 20px"><b>${t('rm')}:</b> ${esc(tx(L.remarks))}</div>` : ''}<div style="margin-top:34px;width:714px;display:flex;justify-content:space-between"><div style="width:220px;border-top:1px solid #857a73;text-align:center;padding-top:6px;font-weight:700">${t('mgr')}</div><div style="width:220px;border-top:1px solid #857a73;text-align:center;padding-top:6px;font-weight:700">${t('chk')}</div></div>`
          : '';

        return `<div class="rp">${h}${tb}${rc}<div style="margin-top:auto;width:714px;display:flex;justify-content:space-between;font-size:12px;color:#5b5256"><span>${esc(S.shop)} • Report ${m.id}${m.rev ? ' (REVISED)' : ''} • Generated ${m.at} • Generation #${m.no}</span><span>${pi + 1} / ${P.length}</span></div></div>`;
      });
    }

    function openRep() {
      const L = cur();
      if (!Object.keys(L.entries).length) {
        toast(S.lang === 'te' ? 'కనీసం ఒక బ్రాండ్ జోడించండి' : 'Add at least one brand');
        return;
      }
      const sc = Math.min(1, (innerWidth - 20) / 794), pg = buildPages(meta());
      $('rvP').innerHTML = pg.map(p => `<div style="width:${794 * sc}px;height:${1123 * sc}px;margin:0 auto 10px;overflow:hidden;box-shadow:0 1px 6px #0003"><div style="transform:scale(${sc});transform-origin:0 0">${p}</div></div>`).join('');
      op('rv');
    }

    async function mkPdf(share) {
      if (!window.jspdf || !window.html2canvas) {
        toast(S.lang === 'te' ? 'PDF లైబ్రరీ లోడ్ కాలేదు — Print / PDF బటన్ వాడండి' : 'PDF library unavailable — use Print / PDF button');
        window.print();
        return;
      }
      toast(S.lang === 'te' ? 'PDF తయారవుతోంది...' : 'Generating PDF...');
      const m = meta(), off = $('off');
      off.innerHTML = buildPages(m).join('');
      try {
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
        await new Promise(r => setTimeout(r, 120));
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const els = off.querySelectorAll('.rp');
        for (let i = 0; i < els.length; i++) {
          if (i) pdf.addPage();
          const cv = await html2canvas(els[i], { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false });
          pdf.addImage(cv.toDataURL('image/jpeg', 0.94), 'JPEG', 0, 0, 210, 297);
        }
        const L = cur();
        const fn = (S.shop.replace(/[^a-zA-Z0-9]/g, '') || 'Report') + '_' + L.date + '_R' + m.no + '.pdf';
        L.reports.push({ id: m.id, at: m.at, by: L.by, snap: m.snap });
        save();

        const blob = pdf.output('blob');
        const f = new File([blob], fn, { type: 'application/pdf' });

        if (share && navigator.share && navigator.canShare && navigator.canShare({ files: [f] })) {
          await navigator.share({ files: [f], title: fn });
          toast('✓ Shared ' + fn);
        } else {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fn;
          a.rel = 'noopener';
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }, 2000);
          toast('✓ Downloaded: ' + fn);
        }
        openRep();
      } catch (e) {
        if (!e || e.name !== 'AbortError') {
          console.error('PDF generation failed:', e);
          toast(S.lang === 'te' ? 'నేరుగా డౌన్‌లోడ్ సాధ్యం కాలేదు — Print డైలాగ్ తెరుస్తున్నాము' : 'Direct download blocked — opening Print / Save as PDF');
          window.print();
        }
      } finally {
        off.innerHTML = '';
      }
    }

    load();
    renderAll();

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(error => {
          console.error('Service worker registration failed:', error);
        });
      });
    }
