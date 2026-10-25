(window.BUILDS = window.BUILDS || {}).armageddon = Object.assign(window.BUILDS.armageddon || {}, {
  char: 'ยังไม่สร้าง', title: 'Armageddon Elementalist', version: '1.0', updated: '2026-10-26', status: 'ยังไม่ได้สร้างตัว · ยังไม่เทส',
  tags: [['กดค้างปุ่มเดียว', 'gold'], ['Fire'], ['Staff'], ['Caster'], ['Elementalist', 'gold'], ['ยังไม่เทสในเกม', 'red']],
  sub: 'กดค้างแล้วอุกกาบาตไฟตกใส่จุดที่เล็ง (ห่างไม่เกิน 10 บล็อก) · ทุกจังหวะ (0.5 วิ) ตก 3 ลูก · มี <b>Overheat 4 stack</b> ตก 6 ลูก + ดาเมจเวท 40% MORE · ใช้ Fireball เติม stack 4 ครั้งตอนเริ่ม แล้วกดซ้ำ 1 ครั้งทุก ~15 วิ',
  meta: [['คลาส', 'Elementalist (Sorcerer) + Minstrel'], ['Ascendancy', 'Elementalist'], ['จุดเริ่ม Talent', 'Mage (The Staff)'], ['อาวุธ', 'Staff (2 มือ)']],
  summary: {
    minis: [
      ['สกิลหลัก', 'Armageddon', 'req Lv 30 · channel (กดค้าง) · ไม่มี cooldown'],
      ['ปุ่มรอง', 'Fireball', 'เติม Overheat · 1 ครั้ง = 1 stack · อยู่ 20 วิ'],
      ['Stat', 'INT หลัก', 'INT = Mana · ดาเมจขึ้นตาม weapon damage ของ staff'],
      ['คลาสที่ 2', 'Minstrel', 'Song of Valor + Rallying March · Mana Cost −16% · Awaken Mana'],
    ],
    notes: [
      ['warn', '<b>ยังไม่ได้เล่นจริง</b> — ตัวเลขจากการจำลองไฟล์เกม (Lv 100) · <b>มานาคือความเสี่ยงอันดับ 1</b> (ดูหัวข้อ checklist) ทำ checklist ตอนได้ Armageddon (Lv 30) ก่อนลงของแพง'],
      ['', 'เช็คในโค้ดเกมแล้ว (2026-10-26): กดค้าง = ร่ายซ้ำทุก 10 tick (ลดตาม cast speed) และเสียมานาทุกจังหวะ (<code>tryChannelPulse</code>) · ทุกจังหวะวางจุดปล่อยลูกไฟ ณ จุดที่เล็ง (ยิงเส้นสายตาหาพื้น ไกลสุด 10 บล็อก · <code>SummonAtSightAction</code>) · จุดนั้นปล่อยลูกไฟทุก 5 tick อยู่ 15 tick = <b>3 ลูก</b> · ลูกไฟสุ่มตกห่างจุดเล็ง ±2 บล็อก ระเบิดวง 2 บล็อกตอนแตะพื้น (กล่อง ±2 ทั้งแนวนอนและแนวตั้ง · <code>AoeSelector</code>) → บอสที่ยืนนิ่งตรงจุดเล็ง<b>โดนทุกลูก</b>'],
      ['', 'Overheat (โค้ด + ข้อมูลเกม): ต้องมี <b>4 stack</b> ถึงได้ลูกไฟชุดที่ 2 · Armageddon <b>ไม่ได้</b>ให้ stack เอง ต้องใช้ Fireball / Fire Wall / Meteor / Magma Orb · stack ใหม่รีเซ็ตเวลาเป็น 20 วิ · แต่ละ stack: ดาเมจเวท +10% MORE และ <b>Mana Regen + Leech −20% MORE</b> (4 stack = regen เหลือ 20%) · สกิลน้ำแข็งของ Elementalist <b>ลบ</b> stack — ห้ามใช้'],
    ],
  },
  strengths: {
    pros: [
      '<b>ปุ่มเดียวจริง</b> — กดค้างเล็งพื้น ไม่ต้องหมุนสกิล (มี Fireball เติม stack ทุก ~15 วิ)',
      'ตีบอสดี: ~510k ใน sim หลังแก้ (Zap ของโชกุน 361k · Rime Reaver 220k) · ลูกไฟลงในวง ±2.5 บล็อกเสมอ บอสยืนนิ่งโดนครบ',
      'ยืนไกลได้ถึง 10 บล็อก ไม่ต้องเข้าประชิดแบบ Rime Reaver',
      'ไม่ซ้ำโชกุน: ไม่ใช้ Chronomancer',
    ],
    cons: [
      '<b>มานา</b> — กินมานาทุก 0.5 วิ (เร็วขึ้นตาม cast speed) และ Overheat ตัด regen เหลือ 20% · sim ไม่ได้คำนวณว่ามานาพอไหม',
      'เคลียร์กลางๆ (~830k vs Rime Reaver 1.8M) — ลูกไฟตกแค่ในวง ~5 บล็อกรอบจุดเล็ง',
      'ลูกไฟตกจากสูง ~4 บล็อก มีดีเลย์ ~0.5–1 วิ → มอน/บอสที่วิ่งเร็วหลบได้ · บอสที่<b>บิน</b>สูงกว่าพื้นเกิน 2 บล็อก<b>โดนไม่ได้</b>',
      'สกิลหลักมาตอน Lv 30 — ช่วงแรกใช้ Fireball',
      'Fiery Flame ตัดดาเมจที่ไม่ใช่ไฟ −100% · ตอนกดค้างเดินช้า (<code>slows_when_casting</code>)',
    ],
  },
  combo: {
    title: 'รอบเล่น', pill: 'ปุ่มเดียว + เติม stack',
    intro: 'เข้าแมพ: Fireball 4 ครั้ง (Overheat เต็ม 4) → กด Armageddon ค้างเล็ง<b>พื้นใต้เท้า</b>มอน · ระหว่างนั้นทุก ~15 วิ ปล่อยปุ่มแล้วกด Fireball 1 ครั้ง (รีเซ็ต 20 วิ)',
    steps: [
      { id: 'fireball', role: 'เติม Overheat', name: 'Fireball ×4', desc: '1 ครั้ง = 1 stack · ครบ 4 = Fully Overheated (ลูกไฟ Fireball เองก็ใหญ่ขึ้น) · stack อยู่ 20 วิ กดใหม่รีเซ็ต' },
      { id: 'armageddon', role: 'สกิลหลัก', name: 'Armageddon (กดค้าง)', desc: 'เล็งพื้นใต้มอน ไม่เกิน 10 บล็อก · 6 ลูก/จังหวะ ตอนมี 4 stack · 3 ลูกตอนไม่มี', main: true },
      { id: 'awaken_mana', role: 'มานา', name: 'Awaken Mana', desc: 'มานาใกล้หมด → กด (cooldown 12 วิ)' },
    ],
    notes: [['warn', 'เล็ง<b>พื้น</b> ไม่ใช่ตัวบอส — เส้นเล็งของสกิลชนแค่บล็อก ทะลุตัวมอน ถ้าเล็งตัวบอสลูกไฟจะไปตกบนพื้นด้านหลัง (หรือกลางอากาศ 10 บล็อกถ้าไม่มีพื้น)']],
  },
  sim: {
    pill: 'Lv 100 · จำลองจากไฟล์เกม',
    intro: 'Armageddon แก้ 2 จุดหลังตรวจโค้ด: (1) Overheat 4 stack = ดาเมจเวท 40% MORE ที่ sim เดิมไม่นับ (2) sim เลือก Crit Damage support ทั้งที่ Steady Hand ตัด crit damage −100% → เปลี่ยนเป็น Greater Conservation (+3% ดาเมจ · มานา −38%) · แถวอื่นยังเป็นเลขเดิมจากรอบจัดอันดับ',
    rows: [
      { name: 'Armageddon · Overheat 4', sub: 'ที่เลือก (หลังแก้)', boss: 507e3, clear: 831e3, me: true },
      { name: 'Armageddon · ไม่มี Overheat', sub: 'กดปุ่มเดียวล้วน', boss: 185e3, clear: 303e3 },
      { name: 'Thorn Bush', sub: 'Shaman · staff', boss: 450e3, clear: 1131e3 },
      { name: 'Rime Reaver · Trickster', sub: 'ตัวที่ 3', boss: 220e3, clear: 1808e3 },
      { name: 'โชกุน: Zap', sub: 'Chronomancer · อ้างอิง', boss: 361e3, clear: 1034e3, ref: true },
      { name: 'โชกุน: Timewinder', sub: 'Chronomancer · อ้างอิง', boss: 614e3, clear: 1453e3, ref: true },
    ],
    notes: [
      ['', 'ไม่มี Overheat ดาเมจหายเกือบ 2/3 (ลูกไฟ 6 → 3 และไม่มี 40% MORE) — การกด Fireball 1 ครั้งทุก 15 วิคุ้มที่สุดในเกมนี้'],
      ['warn', 'ยังไม่นับ: มานาพอไหม · การป้องกัน · burn (Fiery Flame burn +50% MORE) · บัฟเพลง · บอสวิ่ง/บิน · บั๊ก Crit Damage support + Steady Hand อาจอยู่ในแถวอื่นด้วย (ยังไม่ได้แก้ให้ทุกแถว)'],
    ],
  },
  variants: [
    { name: 'ตีบอส', sub: 'ตั้งค่าหลัก · tree ในหน้านี้ปรับมาเพื่อบอส (~507k)', items: [
      'Support Armageddon: <b>Fire Penetration · Area Focus · Fire Damage · Greater Conservation (Lv 40) · Faster Cast</b>',
      'ก่อน Lv 40 ช่องที่ 4 ใส่ <b>Expanded Area</b> ไปก่อน',
      'Fireball ×4 ก่อนเข้าห้องบอส → กดค้าง Armageddon เล็งพื้นใต้บอส',
      'Hymn: <b>Song of Valor</b> (มานาไม่พอ → <b>Song of Vigor</b>)',
    ] },
    { name: 'เคลียร์แมพ', sub: 'tree เดิม ~830k · Chieftain tree เคลียร์ได้ ~1.0M แต่บอสตก', items: [
      'สลับ Area Focus → <b>Expanded Area</b> (วงระเบิดใหญ่ขึ้น · ขอบเขตรวมของสกิลไม่ขยาย)',
      'เล็งกลางกลุ่ม · กลุ่มกระจายให้เดินเข้าไปก่อน (กดค้างเดินช้า)',
      '<b>Rallying March</b> กดตอนเดินระหว่างกลุ่ม',
    ] },
    { name: 'ช่วงเลเวล 1–29', sub: 'ก่อนได้ Armageddon', items: [
      'Lv 1: <b>Fireball</b> = สกิลหลัก (ครบ 4 stack ลูกจะใหญ่ขึ้น) · Hymn <b>Song of Vigor</b>',
      'Lv 10: <b>Fire Wall</b> กันมอนเข้าใกล้',
      'Lv 20: <b>Song of Valor</b> · <b>Awaken Mana</b>',
      'Lv 30: <b>Armageddon</b> → +1 ทุกเลเวลตัว · <b>Rallying March</b>',
      'ห้ามแตะสกิลน้ำแข็ง (Frostball / Frost Nova / Ice Comet ฯลฯ) — ลบ Overheat',
    ] },
  ],
  checklist: {
    intro: 'ทำตอนได้ Armageddon (Lv 30) · ติ๊กไว้ได้ เว็บจำในเครื่องนี้',
    items: [
      'Fireball 4 ครั้ง → ไอคอน <b>Overheat 4</b> ขึ้น และอยู่ ~20 วิ · กด Fireball อีกครั้งเวลารีเซ็ต',
      'กดค้าง Armageddon ตอนมี 4 stack: ลูกไฟตก<b>เยอะกว่า</b>ตอนไม่มี stack ชัดเจน (6 vs 3 ต่อจังหวะ)',
      '<b>มานา</b>: กดค้าง (4 stack) แล้วจับเวลาว่ากี่วิมานาหมด · ถ้าไม่ถึง ~8 วิ → ลง p_mana_cost / p_mana_regen / Song of Vigor / ถอด Faster Cast ตามลำดับ',
      'เล็งพื้นใต้มอน vs เล็งตัวมอน — ลูกไฟตกตรงไหน',
      'บอส: ยืนนิ่งแล้วนับตัวเลขดาเมจ — sim คิดว่าโดนทุกลูก',
    ],
  },
  equipment: {
    slots: [
      ['อาวุธ', 'Staff (2 มือ)', ['ดาเมจ Armageddon = <b>weapon damage × 1.24</b> + ค่าตามเลเวล (ไม่ขึ้นตามมานา) → staff ดาเมจสูงสุดที่ใส่ได้', 'หา Fire Damage, Spell Damage, Cast Speed, Mana %', '!ยังไม่ได้ค้น unique staff สำหรับ build นี้'],],
      ['เกราะ', 'Mana · Res', ['หา <b>Mana %</b>, <b>Mana Regen</b>, Health, Fire / Elemental Resistance'],],
      ['แหวน / สร้อย', 'Fire · Mana', ['หา Fire Damage, Elemental Damage, Mana Regen, Cast Speed, Resistance', '<b>ไม่ต้องหา crit</b> — Steady Hand ตัด crit damage ทิ้ง', '<b>Leech ไม่คุ้ม</b> — Overheat ตัด leech −80%'],],
      ['มือซ้าย', 'ใช้ไม่ได้', ['staff เป็นอาวุธ 2 มือ']],
    ],
  },
  stats: {
    cols: [['int', 'Mana · Magic Shield', 'ลงหลัก'], ['str', 'HP · Armor', 'แค่ถึง req gear'], ['dex', 'Energy · Dodge', 'แค่ถึง req gear']],
    steps: ['ลง STR / DEX ให้พอ req ของ gear ที่ใส่', 'ที่เหลือ INT ทั้งหมด (INT 1 = Mana +10 · Magic Shield +0.5%)'],
    html: '<p class="small">Armageddon ไม่ได้คูณดาเมจจากมานา (value calc <code>armageddon</code> = weapon damage อย่างเดียว) · INT ใน tree ที่ sim เลือกช่วยแค่ "ถังมานา" ให้กดค้างได้นานขึ้น + node INT damage ใน tree</p>',
  },
  dont: [
    'ใช้<b>สกิลน้ำแข็ง</b>ของ Elementalist / <b>Refresh</b> — ลบ Overheat stack',
    'Support <b>Crit Damage</b> / <b>Crit Chance</b> — Steady Hand ตัด crit damage −100% (sim เดิมเลือกผิดตรงนี้)',
    'node <b>Critical</b> ทุกแบบ — เหตุผลเดียวกัน',
    'สกิล/ดาเมจ<b>ที่ไม่ใช่ไฟ</b> — Fiery Flame ตัด −100%',
    '<b>Blood Mage</b> หรือ keystone ที่ลด Mana',
    'พึ่ง <b>Leech</b> เติมมานา — Overheat 4 stack ตัด leech −80%',
  ],
  ascTable: [
    ['1–3', 'Act II · Defenders of the Nether II', 'Elementalist → INT → <b>Futility of Defense</b><div class="small">Elemental Penetration +18 · Elemental Resistance +12 — ตัวที่ช่วยตีบอสที่สุด</div>'],
    ['4–5', 'Act III · Slippery Swimmer', 'INT → <b>Creator of Flames</b><div class="small">Fire Damage 15% MORE · Physical → Fire 50% · Burn chance +25%</div>'],
    ['6–7', 'Act V · They Knew You Were Coming', 'INT → <b>Creator of Frost</b><div class="small">ทางผ่าน — ดาเมจ Cold ไม่มีผลกับ build นี้ (ได้แค่ Cold Resistance +10)</div>'],
    ['8–9', 'Epilogue · บอสธาตุ 4 ตัว', 'INT → <b>Doomed Path</b><div class="small">Area Damage 15% MORE · AoE +15% (วงระเบิดลูกไฟใหญ่ขึ้น)</div>'],
  ],
  ascNote: 'แต้ม ascendancy แชร์ทุกตัวละคร (ได้จากเควส) แต่เลือก node แยกต่อตัว · เส้นทางคำนวณจากผังในไฟล์เกม: Doomed Path ต้องเดินผ่าน Creator of Frost · ถ้าในเกมมีทางอื่นไป Doomed Path ได้โดยไม่ผ่าน Frost ก็ข้ามได้',
  skillNote: 'P = Passive ในต้นไม้คลาส · แต้มสกิล 1 / เลเวล · แต้ม Passive 0.5 / เลเวล · Hymn เปิดได้ทีละอัน (Vigor หรือ Valor) · Rallying March ไม่ใช่ Hymn<h3>หลัง Lv 30: ลำดับอัพแต้มสกิล</h3><ol class="steps"><li>เลเวลขึ้นทุกครั้ง: <b>Armageddon +1</b> ก่อน (เต็ม 20 ราว Lv 50 · เลเวลเพิ่มดาเมจ + Fire Penetration ของสกิล 2 → 32)</li><li><b>Song of Valor</b> → 12</li><li><b>Rallying March</b> → 12</li><li><b>Awaken Mana</b> → ถ้ามานาขาด</li><li>Fireball / Fire Wall ค้างไว้ที่เดิม — ใช้แค่เติม stack</li></ol><h3>Passive: ลำดับ</h3><ol class="steps"><li><b>p_cast_speed_sorc</b> (Cast Speed) → 8</li><li><b>p_spell_dmg</b> → 8</li><li><b>p_mana_cost</b> (Minstrel · Mana Cost −16%) → 8</li><li><b>p_cdr</b> (Skill Speed) → 8 · หรือ <b>p_mana_regen</b> ถ้ามานาหมดไว</li></ol><p class="small">sim เลือก p_cast_speed_sorc + p_spell_dmg + p_cdr · p_mana_cost เป็นของเพิ่มจากการตรวจมานา ไม่มีใน sim</p>',
  gems: {
    socket: [['อาวุธ', 'Ruby', 'Fire Damage +14%', '(ระดับสูงสุด)'], ['เกราะ', 'Amethyst', 'Mana +14% (กดค้างได้นานขึ้น)', 'หรือ Opal = Health ถ้าตายบ่อย'], ['แหวน / สร้อย', 'Amethyst', 'INT +7', 'หรือ Sapphire = Elemental Resistance']],
    support: [
      ['Support → Armageddon (บอส)', ['Fire Penetration', 'Area Focus', 'Fire Damage', 'Greater Conservation (Lv 40)', 'Faster Cast']],
      ['Support → Armageddon (เคลียร์)', ['Fire Penetration', 'Expanded Area', 'Fire Damage', 'Greater Conservation (Lv 40)', 'Faster Cast']],
    ],
    aura: ['<b>Fire Damage Augment</b> — Fire MORE', '<b>Mana Regen</b> augment ถ้ามานาหมด'],
    jewels: ['Fire Damage', 'Mana %', 'INT', 'Elemental Resistance', 'Health'],
    html: '<p class="small"><b>Greater Conservation</b> = Non-Critical Damage 6–18% MORE + มานา ×0.8 (support อื่น ×1.2–1.4) — คู่กับ Steady Hand พอดีเพราะเราไม่ crit อยู่แล้ว · support 5 อันรวมคูณค่ามานา ×2.3 (sim เดิม ×3.7)</p>',
  },
  binds: [
    ['1', 'Armageddon', 'กดค้าง'],
    ['2', 'Fireball', '×4 ตอนเริ่ม · ×1 ทุก 15 วิ'],
    ['3', 'Awaken Mana', 'มานาใกล้หมด'],
    ['4 / 5', 'Song of Valor · Rallying March', 'เปิดค้าง'],
  ],
  howto: [
    'เปิด <b>Song of Valor</b> + <b>Rallying March</b>',
    '<b>Fireball</b> 4 ครั้ง (Overheat 4)',
    'กดค้าง <b>Armageddon</b> เล็งพื้นกลางกลุ่ม / ใต้บอส ไม่เกิน 10 บล็อก',
    'ทุก ~15 วิ: ปล่อย → <b>Fireball</b> 1 ครั้ง → กดค้างต่อ',
    'มานาใกล้หมด: <b>Awaken Mana</b>',
  ],
  faq: [
    ['ทำไมไม่ใช้ Meteor ตรงๆ', 'Meteor ลูกเดียวต่อการกด · sim บอส 65k เคลียร์ 204k · Armageddon ตก 6 ลูกต่อจังหวะ ใช้ Meteor เติม Overheat แทน Fireball ได้แต่แพงกว่า (มานา 15 vs 8)'],
    ['ทำไมไม่ใช้ Ice Comet', 'อ่อนสุดในสาย (บอส 17k) และลบ Overheat'],
    ['ตัวเลขเชื่อได้แค่ไหน', 'ใช้เทียบกันเอง · กลไก Armageddon ตรวจในโค้ดแล้ว (จำนวนลูก · ระยะสุ่ม · วงระเบิด · Overheat · มานาต่อจังหวะ) · ส่วนที่ยังไม่รู้คือมานาพอไหม — เล่นแล้วบอกเลขมา'],
  ],
});
