import cryptoImage from "../assets/education/1.png";

export type Market = "crypto" | "forex";

export type ResultEntry = {
  id: string;
  market: Market;
  title: string;
  date?: string;
  context: string;
  imageSrc?: string;
  placeholder: boolean;
};

export type FeedbackEntry = {
  id: string;
  title: string;
  quote?: string;
  attribution?: string;
  imageSrc?: string;
  placeholder: boolean;
};

export type Lesson = {
  id: string;
  title: string;
  summary: string;
  explanation: string;
  example: string;
  risk?: string;
  thumbnailSrc?: string;
};

export const about = {
  title: "About ProfitWave",
  body: [
    "ProfitWave යනු Sri Lankan Crypto සහ Forex traders සඳහා හදපු community එකක්. අපි public Telegram channel එකෙන් market updates සහ beginner-friendly education දෙනවා.",
    "VIP members ලට Crypto සහ Forex signals daily, learning resources, සහ support access තියෙනවා - membership terms අනුව.",
    "අපේ focus එක: clear information, responsible risk management, සහ traders ලාට ඉගෙන ගන්න පුළුවන් space එකක්.",
  ],
};

export const freeChannelBenefits = [
  "Crypto සහ Forex market updates",
  "Beginner-friendly trading education snippets",
  "Community announcements සහ learning reminders",
  "Lifetime VIP ගැන official information",
];

export const vipBenefits = [
  {
    title: "Crypto signals",
    body: "Crypto market signals, according to the VIP service currently offered to members.",
  },
  {
    title: "Forex signals",
    body: "Forex market signals, according to the VIP service currently offered to members.",
  },
  {
    title: "Trading education",
    body: "Structured learning support and market analysis to help members understand setups — not just copy them.",
  },
  {
    title: "Risk-management guidance",
    body: "Position sizing, stop placement, and capital-protection habits explained in practical language.",
  },
  {
    title: "Member support",
    body: "Access to member support and learning resources where those channels are available.",
  },
];

export const faqs = [
  {
    q: "Public Telegram channel එක free ද?",
    a: "ඔව්. ProfitWave public channel එක free. Join වෙන්න: https://t.me/pwavesl",
  },
  {
    q: "Lifetime VIP membership එකට join වෙන්නේ කොහොමද?",
    a: "Membership page එකේ details කියවලා Telegram / WhatsApp contacts වලින් team එකට අහන්න. Price publicly publish කරන්නේ owner confirm කළාම විතරයි.",
  },
  {
    q: "කලින් trading experience ඕනද?",
    a: "නැහැ. Beginners වලට education content තියෙනවා. Signals use කරනකොටත්, ඔයාගේ own risk එකෙන් decide කරන්න ඕන.",
  },
  {
    q: "Beginner කෙනෙක්ට trading ඉගෙන ගන්න පුළුවන්ද?",
    a: "පුළුවන්. VIP Membersලාට Trading ඉගෙන ගන්න අවශ්‍ය Educational Videos සහ Step-by-Step Learning Videos ලබාදෙනවා.",
  },
  {
    q: "Trading profits guarantee ද?",
    a: "නැහැ. Trading වලට risk තියෙනවා. Loss වෙන්නත් පුළුවන්. කිසිම signal, course, හෝ membership එකක් future profits guarantee කරන්නේ නැහැ.",
  },
  {
    q: "Team එකට contact කරන්නේ කොහොමද?",
    a: "අපගේ Official Admin Telegram Account එකට @Chalangana හරහා message එකක් දාන්න.",
  },
];

export const results: ResultEntry[] = [
  {
    id: "crypto-1",
    market: "crypto",
    title: "Crypto result placeholder",
    context: "Replace with a verified Crypto screenshot in public/assets/results/crypto/",
    placeholder: true,
  },
  {
    id: "crypto-2",
    market: "crypto",
    title: "Crypto result placeholder",
    context: "Add date and market pair in src/config/content.ts when the screenshot is ready.",
    placeholder: true,
  },
  {
    id: "forex-1",
    market: "forex",
    title: "Forex result placeholder",
    context: "Replace with a verified Forex screenshot in public/assets/results/forex/",
    placeholder: true,
  },
  {
    id: "forex-2",
    market: "forex",
    title: "Forex result placeholder",
    context: "Do not publish unverified or edited performance images.",
    placeholder: true,
  },
];

export const feedback: FeedbackEntry[] = [
  {
    id: "fb-1",
    title: "Member feedback placeholder",
    quote: "Owner supplied testimonial screenshot or approved quote here.",
    placeholder: true,
  },
  {
    id: "fb-2",
    title: "Member feedback placeholder",
    quote: "Add attribution only when the member has given permission.",
    placeholder: true,
  },
  {
    id: "fb-3",
    title: "Member feedback placeholder",
    quote: "Drop the image into public/assets/testimonials/ and update content.ts.",
    placeholder: true,
  },
];

export const lessons: Lesson[] = [
  {
    id: "what-is-crypto",
    title: "What is Crypto trading?",
    summary: "Bitcoin වගේ digital assets buy/sell කරලා price movement එකෙන් opportunity හොයන එක.",
    explanation:
      "Crypto trading කියන්නේ cryptocurrency markets වල price එක up/down වෙනකොට positions ගන්න එක. Market එක 24/7 open. Volatility ඉහළ නිසා small time එකකින් large moves එන්න පුළුවන්.",
    example:
      "BTC price එක $60,000 ඉඳන් $61,200ට ගියොත්, long position එකක් තිබුණොත් profit එකක් පේන්න පුළුවන්. ඊට reverse ගියොත් loss එකක් වෙන්නත් පුළුවන්.",
    risk: "Crypto prices can move sharply. Never trade money you cannot afford to lose.",
     thumbnailSrc: cryptoImage,
  },
  {
    id: "what-is-forex",
    title: "What is Forex trading?",
    summary: "රටවල currencies එකිනෙකට versus විදිහට trade කරන global market එක.",
    explanation:
      "Forex (foreign exchange) එකේ ඔයා එක currency එකක් sell කරලා තවත් එකක් buy කරනවා. Pairs විදිහට quote වෙනවා, උදා: EUR/USD හෝ GBP/JPY.",
    example:
      "EUR/USD 1.0800 ඉඳන් 1.0830ට ගියොත්, euro එක dollar එකට වඩා 30 pips strengthen වුණා කියලා අදහස් වෙනවා.",
    risk: "Leverage makes Forex moves feel larger. Losses can exceed your expected amount if risk is not capped.",
  },
  {
    id: "currency-pairs",
    title: "Currency pairs",
    summary: "Base currency සහ quote currency එකට සාපේක්ෂව price එක කියන විදිහ.",
    explanation:
      "Pair එකේ මුල් currency එක base. දෙවැනි එක quote. EUR/USD = 1.08 කියන්නේ 1 euro = 1.08 US dollars. Major, minor, සහ exotic pairs තියෙනවා.",
    example:
      "USD/LKR pair එකකදී USD base වෙලා LKR quote වෙනවා. Sri Lankan traders ලාට dollar strength එක observe කරන්න පුළුවන්, නමුත් every broker එකේම that pair නැති වෙන්න පුළුවන්.",
  },
  {
    id: "pips-points",
    title: "Pips and points",
    summary: "Price එකේ කුඩාම standard move එක measure කරන unit එක.",
    explanation:
      "Most Forex pairs වල pip එක 0.0001. JPY pairs වල pip එක 0.01. Crypto වල brokers 'points' හෝ tick size වෙනස් වෙන්න පුළුවන්.",
    example:
      "GBP/USD 1.2500 ඉඳන් 1.2515ට ගියොත් move එක 15 pips. That number alone does not tell you profit until lot size is known.",
  },
  {
    id: "lot-sizes",
    title: "Lot sizes",
    summary: "Position එක කොච්චර විශාලද කියන unit එක — standard, mini, micro.",
    explanation:
      "Forex standard lot = 100,000 units of base currency. Mini = 10,000. Micro = 1,000. Lot size වැඩි වෙනකොට each pip වල money impact එක වැඩි වෙනවා.",
    example:
      "EUR/USD micro lot (0.01) එකක 10 pip move එක roughly $1 වගේ වෙන්න පුළුවන්. Same 10 pips on 1.00 lot is about $100. Always check your broker’s contract size.",
    risk: "Oversized lots are a common way beginners blow accounts. Start smaller than you think you need.",
  },
  {
    id: "entry-sl-tp",
    title: "Entry, Stop Loss, and Take Profit",
    summary: "Trade එකක් plan කරන main three prices.",
    explanation:
      "Entry = ඔයා position එක open කරන price. Stop Loss (SL) = loss cap කරන exit. Take Profit (TP) = target එක reach උනාම profit lock කරන exit.",
    example:
      "Buy gold 2650, SL 2640, TP 2670. Risk එක 10 points, reward එක 20 points. Plan එක execute වෙන්නේ broker orders තිබුණොත් විතරයි.",
    risk: "A trade without a stop is not a plan. Gaps and slippage can still fill beyond your stop.",
  },
  {
    id: "risk-reward",
    title: "Risk-to-reward ratio",
    summary: "එක trade එකකදී risk කරන එකට සාපේක්ෂව target එක කොච්චරද.",
    explanation:
      "R:R 1:2 කියන්නේ $50 risk කරලා $100 target එකක්. Win rate 100% නෙවෙයි. Good R:R helps if your process is consistent, but it does not guarantee profit.",
    example:
      "Account $200. You risk 1% = $2. TP is 2R, so target is $4. After costs, actual R can be smaller.",
  },
  {
    id: "leverage-margin",
    title: "Leverage and margin",
    summary: "ඔයාගේ capital එකට වඩා විශාල position එකක් control කරන facility එක.",
    explanation:
      "1:100 leverage කියන්නේ $100 margin එකකින් $10,000 notional open කරන්න පුළුවන් වගේ facility එකක්. Margin = broker එක hold කරන collateral. Leverage profits වගේම losses වැඩි කරනවා.",
    example:
      "Small adverse move එකකින් high leverage position එක margin call හෝ auto-close වෙන්න පුළුවන්, even if the longer-term idea was correct.",
    risk: "High leverage is not a shortcut. It is amplified risk. Use the lowest leverage that still lets you express a small, planned position.",
  },
  {
    id: "money-management",
    title: "Money management",
    summary: "එක trade එකකට account එකෙන් කොච්චරක් risk කරනවද කියන rule එක.",
    explanation:
      "Common starting point: per-trade risk 0.5%–1% of account equity. That is a teaching example, not a personal recommendation. Size the lot from the stop distance, not from hope.",
    example:
      "$300 account. 1% risk = $3. If the stop is 30 pips, lot size must keep 30 pips ≈ $3. If it does not fit, skip the trade.",
    risk: "Revenge sizing after a loss is one of the fastest paths to large drawdowns.",
  },
  {
    id: "trading-psychology",
    title: "Trading psychology",
    summary: "Fear, greed, සහ FOMO ඔයාගේ plan එකට වඩා decisions ගන්න එක නවත්වන එක.",
    explanation:
      "Market එක random වගේ feel වෙනවා. Journal එකක්, predefined risk, සහ breaks help. Signals follow කරනකොටත්, blindly copying without understanding raises emotional mistakes.",
    example:
      "Missed a move? Chasing the next candle is usually worse than waiting for a fresh setup that still fits your rules.",
  },
  {
    id: "beginner-mistakes",
    title: "Common beginner mistakes",
    summary: "Over-leverage, no stop, too many trades, සහ guaranteed-profit claims විශ්වාස කරන එක.",
    explanation:
      "Beginners often increase lot size after one win, trade every signal, ignore spread/fees, and skip education. ProfitWave content is for learning. It is not a substitute for your own risk decisions.",
    example:
      "A 5-win streak does not mean the 6th trade is safe. Treat each setup as independent and size it the same way.",
    risk: "Anyone promising guaranteed income, risk-free signals, or fixed monthly salary from trading is not describing real markets.",
  },
    {
    id: "market-structure",
    title: "Market Structure",
    summary:
      "Market එක bullish ද bearish ද කියලා Higher Highs, Higher Lows, Lower Highs සහ Lower Lows හරහා හඳුනාගන්නා ආකාරය.",
    explanation:
      "Market Structure කියන්නේ price එක කාලයත් සමඟ swing highs සහ swing lows හදන ආකාරයයි. Bullish structure එකකදී සාමාන්‍යයෙන් Higher Highs (HH) සහ Higher Lows (HL) පෙනෙනවා. Bearish structure එකකදී Lower Lows (LL) සහ Lower Highs (LH) පෙනෙනවා. Sideways market එකක price එක range එකක් ඇතුළේ move වෙන්න පුළුවන්.",
    example:
      "Gold price එක 2650 සිට 2670 දක්වා ගිහින් 2660ට pullback වෙලා, නැවත 2680ට ගියොත් HH සහ HL pattern එකක් ඇති වෙන්න පුළුවන්. ඒක bullish structure එකකට උදාහරණයක්.",
    risk:
      "A market structure pattern does not guarantee continuation. Confirm your analysis with risk management and a predefined invalidation level.",
  },
  {
    id: "bos-choch",
    title: "BOS and CHoCH",
    summary:
      "Break of Structure (BOS) සහ Change of Character (CHoCH) හඳුනාගෙන market movement එක analyze කරන ආකාරය.",
    explanation:
      "BOS කියන්නේ market එකේ දැනට පවතින directional structure එකට අදාළ swing level එකක් break වීමයි. CHoCH කියන්නේ පවතින market behavior එක වෙනස් වෙන්න පටන් ගන්නා බවට ඉඟියක් විය හැකි structure break එකක්. මේ terms වල definitions trading methodologies අනුව වෙනස් විය හැකියි.",
    example:
      "Market එක HH සහ HL හදමින් bullish trend එකක යනවා කියලා හිතන්න. Price එක කලින් තිබුණු වැදගත් HL එකට පහළින් break වුණොත්, සමහර SMC traders ලා ඒක bearish CHoCH එකක් ලෙස සලකනවා.",
    risk:
      "Wicks, false breakouts සහ low-timeframe noise නිසා misleading signals ලැබෙන්න පුළුවන්. A structure break alone is not a complete entry strategy.",
  },
  {
    id: "smc-basics",
    title: "Smart Money Concepts (SMC)",
    summary:
      "Liquidity, market structure, order blocks සහ Fair Value Gaps භාවිතයෙන් price action analyze කරන trading framework එකක්.",
    explanation:
      "SMC කියන්නේ market behavior එක liquidity සහ institutional-style price action concepts හරහා විග්‍රහ කරන approach එකක්. ප්‍රධාන concepts අතර liquidity pools, Break of Structure (BOS), Change of Character (CHoCH), order blocks සහ Fair Value Gaps (FVG) ඇතුළත් වෙනවා. මේ concepts market එකේ සියලුම price movements පැහැදිලි කරන බවට සහතිකයක් නැහැ.",
    example:
      "Price එක previous high එකක් ඉක්මවා ගිහින් නැවත පහළට එනවා කියලා හිතන්න. Trader කෙනෙක් ඒ movement එක liquidity sweep එකක් විය හැකිද කියලා බලලා, පසුව structure confirmation එකක් එනතුරු ඉන්න පුළුවන්.",
    risk:
      "SMC chart markings are interpretive and can be subjective. A liquidity sweep or order block does not prove that institutions placed orders at that exact level.",
  },
  {
    id: "liquidity",
    title: "Liquidity and Liquidity Sweeps",
    summary:
      "Equal highs, equal lows සහ previous swing levels වටා ඇති liquidity ගැන ඉගෙන ගන්න.",
    explanation:
      "Trading වල liquidity කියන වචනයෙන් market එකක buy සහ sell orders තිබීම සහ ඒවා execute කිරීමේ හැකියාව අදහස් කරන්න පුළුවන්. SMC analysis එකේ traders ලා equal highs, equal lows, සහ previous highs/lows වැනි areas potential liquidity areas ලෙස mark කරනවා. Liquidity sweep කියන්නේ එවැනි level එකක් හරහා price එක ගිහින් නැවත reverse වන movement එකක් ලෙස විස්තර කරන concept එකක්.",
    example:
      "EUR/USD previous high එක 1.0850 නම්, price එක 1.0855 දක්වා ගිහින් නැවත 1.0840ට වැටෙනවා කියලා හිතන්න. Trader කෙනෙක් ඒක potential buy-side liquidity sweep එකක් ලෙස interpret කරන්න පුළුවන්.",
    risk:
      "A move beyond a previous high or low may be a genuine breakout rather than a sweep. Price action alone cannot reveal every resting order or the intentions of market participants.",
  },
  {
    id: "order-blocks-fvg",
    title: "Order Blocks and Fair Value Gaps",
    summary:
      "SMC trading වල commonly used Order Block සහ Fair Value Gap (FVG) zones හඳුනාගන්න.",
    explanation:
      "Order Block කියන්නේ සමහර SMC traders ලා strong price move එකකට පෙර තිබුණු candle area එකක් ලෙස mark කරන zone එකක්. Fair Value Gap කියන්නේ candles තුනක price action එකේ පළමු සහ තුන්වන candles වල wicks අතර overlap අඩු හෝ නොමැති area එකක් ලෙස සාමාන්‍යයෙන් හඳුනාගන්නා imbalance concept එකක්. මේ zones අනාගතයේදී අනිවාර්යයෙන් react කරන බවක් අදහස් වෙන්නේ නැහැ.",
    example:
      "Price එක strong bullish move එකක් කරලා ඉහළට ගියොත්, trader කෙනෙක් move එකට පෙර තිබුණු bearish candle area එක order block candidate එකක් ලෙස mark කරලා, පසුව price එක ඒ area එකට ආවොත් reaction එක observe කරන්න පුළුවන්.",
    risk:
      "Order blocks and FVGs can fail or be drawn differently by different traders. Always define the invalidation level before entering a trade.",
  },
  {
    id: "order-flow",
    title: "Order Flow Trading",
    summary:
      "Buyers සහ sellers අතර trading activity එක volume, bid/ask data සහ executed orders හරහා තේරුම් ගන්න.",
    explanation:
      "Order Flow analysis එකේදී traders ලා market orders, limit orders, bid/ask volume, volume delta සහ footprint charts වැනි data භාවිතයෙන් buying සහ selling pressure ගැන අවබෝධයක් ලබාගන්න උත්සාහ කරනවා. Candlestick chart එකකින් පමණක් නොපෙනෙන execution details සමහර order-flow tools වලින් පෙන්වන්න පුළුවන්. හැබැයි data quality එක platform සහ broker අනුව වෙනස් වෙනවා.",
    example:
      "Price එක resistance area එකකට එනකොට aggressive buying වැඩි වුණත් price එක තවදුරටත් ඉහළ යන්න අසමත් වෙනවා නම්, trader කෙනෙක් ඒක potential absorption එකක් ලෙස investigate කරන්න පුළුවන්. ඒක තනිවම reversal එකක් තහවුරු කරන්නේ නැහැ.",
    risk:
      "Spot Forex is decentralized, so one broker's volume or order-flow data may not represent the entire global market. Understand the data source before relying on it.",
  },
  {
    id: "volume-delta-absorption",
    title: "Volume Delta and Absorption",
    summary:
      "Aggressive buying සහ selling අතර වෙනස සහ price එකකට orders absorb වන ආකාරය ගැන ඉගෙන ගන්න.",
    explanation:
      "Volume Delta කියන්නේ selected data source එකක aggressive buy volume සහ aggressive sell volume අතර වෙනසයි. Positive delta එකක් සාමාන්‍යයෙන් buying aggression වැඩි බවත් negative delta එකක් selling aggression වැඩි බවත් පෙන්වන්න පුළුවන්. Absorption කියන්නේ aggressive orders විශාල ප්‍රමාණයක් තිබුණත් price එක සැලකිය යුතු ලෙස ඉදිරියට නොයන අවස්ථාවක් ලෙස order-flow traders ලා විග්‍රහ කරන concept එකක්.",
    example:
      "Resistance එකකදී positive delta එකක් පෙනුණත් price එක ඉහළට යන්න බැරි නම්, trader කෙනෙක් sellers ලා buying pressure එක absorb කරනවාද කියලා පරීක්ෂා කරන්න පුළුවන්.",
    risk:
      "Delta and absorption signals depend on reliable trade data and context. They do not independently predict the next price move.",
  },
  {
    id: "elliott-wave",
    title: "Elliott Wave Theory",
    summary:
      "Market trends වල impulsive waves සහ corrective waves හඳුනාගෙන possible price scenarios analyze කරන්න.",
    explanation:
      "Elliott Wave Theory අනුව market price movements බොහෝ විට waves ලෙස interpret කරනවා. Common model එකකදී trend direction එකට waves 1–5 සහ ඊට විරුද්ධ correction එකේ waves A–B–C හඳුනාගන්න උත්සාහ කරනවා. Wave counts subjective වෙන්න පුළුවන්, ඒ නිසා alternative counts සහ invalidation levels සලකා බලන්න ඕන.",
    example:
      "Uptrend එකකදී price එක waves 1, 2, 3, 4, 5 ලෙස move වන scenario එකක් trader කෙනෙක් draw කරන්න පුළුවන්. ඊට පස්සේ A–B–C correction එකක් ඇති වෙයි කියලා hypothesis එකක් හදන්න පුළුවන්. ඒ count එක price behavior එකට නොගැළපුණොත් නැවත evaluate කරන්න ඕන.",
    risk:
      "Elliott Wave counts are interpretive rather than certain forecasts. Avoid forcing every market movement into a preferred wave count.",
  },
  {
    id: "elliott-wave-rules",
    title: "Elliott Wave Rules and Guidelines",
    summary:
      "Impulse wave rules, Fibonacci relationships සහ wave counts validate කරන basic guidelines ඉගෙන ගන්න.",
    explanation:
      "Common Elliott Wave impulse model එකේ wave 2 එක wave 1 හි ආරම්භක price point එක ඉක්මවා retrace නොවීම, wave 3 එක waves 1, 3, 5 අතර කෙටිම wave එක නොවීම, සහ wave 4 එක සාමාන්‍ය impulse structure එකක wave 1 price territory එකට overlap නොවීම වැනි rules තියෙනවා. Diagonal patterns වැනි exceptions සහ වෙනස් wave structures නිසා rules apply කරන විට pattern type එක තේරුම් ගන්න ඕන. Fibonacci ratios supplementary guidelines ලෙස භාවිතා කළ හැකියි.",
    example:
      "Wave 1 එක 100 සිට 110 දක්වා ගියා නම්, wave 2 එක 105 දක්වා retrace වෙන්න පුළුවන්. Wave 2 එක 100ට පහළින් ගියොත්, සාමාන්‍ය impulse count එකේදී ඒ count එක invalid විය හැකියි.",
    risk:
      "Wave identification can differ between analysts. Use invalidation rules and alternative scenarios instead of assuming a count must be correct.",
  },
  {
    id: "multi-timeframe-analysis",
    title: "Multi-Timeframe Analysis",
    summary:
      "Higher timeframe trend එක සහ lower timeframe entry setup එක එකට සලකා බලන්න.",
    explanation:
      "Multi-Timeframe Analysis එකේදී Daily හෝ H4 chart එකෙන් broader market context එක බලලා, H1 හෝ M15 වැනි lower timeframe එකක setup එකක් සොයන්න පුළුවන්. Timeframes එකිනෙකට conflict වුණොත්, trade එක force කරනවා වෙනුවට wait කිරීමත් option එකක්.",
    example:
      "H4 chart එක bullish structure එකක් පෙන්වනවා නම්, M15 chart එකේ pullback එකක් අවසන් වෙලා bullish confirmation එකක් ලැබෙනවාද කියලා observe කරන්න පුළුවන්.",
    risk:
      "Lower timeframe signals can be noisy, and higher timeframe direction does not guarantee a profitable entry. Define your stop, position size and invalidation level in advance.",
  },
];
