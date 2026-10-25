(window.BUILDS = window.BUILDS || {}).armageddon = Object.assign(window.BUILDS.armageddon || {}, {
  char: 'Mika', title: 'Armageddon Elementalist', version: '1.2', updated: '2026-10-26', status: 'Mika Lv 33 · เพิ่งเปลี่ยนมา · ยังไม่เทส',
  tags: [['กดค้างปุ่มเดียว', 'gold'], ['Fire'], ['Staff'], ['Caster'], ['คลาสเดียว', 'gold'], ['ยังไม่เทสในเกม', 'red']],
  sub: 'กดค้างแล้วอุกกาบาตไฟตกใส่จุดที่เล็ง (ห่างไม่เกิน 10 บล็อก) · ทุกจังหวะ (0.5 วิ) ตก 3 ลูก · มี <b>Overheat 4 stack</b> ตก 6 ลูก + ดาเมจเวท 40% MORE · ยืนใน <b>Mage Circle</b> ได้ Spell Damage อีก 15–30% MORE · เล่น Elementalist <b>คลาสเดียว</b> ได้ Solo Class Bonus 10% MORE',
  meta: [['คลาส', 'Elementalist (Sorcerer) คลาสเดียว'], ['Ascendancy', 'Elementalist'], ['จุดเริ่ม Talent', 'Mage (The Staff)'], ['อาวุธ', 'Staff + Tome']],
  summary: {
    minis: [
      ['สกิลหลัก', 'Armageddon', 'req Lv 30 · channel (กดค้าง) · ไม่มี cooldown'],
      ['บัฟ', 'Mage Circle + Mage Armor', 'Circle: Spell Damage 15–30% MORE ตอนยืนในวง · Armor: โอกาสยิง Elemental Burst'],
      ['ปุ่มรอง', 'Fireball', 'เติม Overheat · 1 ครั้ง = 1 stack · อยู่ 20 วิ'],
      ['คลาสที่ 2', 'ไม่ลง', 'Solo Class Bonus: Total Damage 10% MORE + Damage Reduction 5%'],
    ],
    notes: [
      ['warn', '<b>v1.1 แก้ของ v1.0 ที่ผิด:</b> v1.0 ทำจาก sim ซึ่งคิดแค่สกิลที่ทำดาเมจ → ไม่เห็น <b>Mage Circle</b> / <b>Mage Armor</b> (สกิลบัฟ) และไม่รู้จัก <b>Solo Class Bonus</b> เลยเลือก Minstrel เป็นคลาสที่ 2 ผิด · ตรวจในโค้ดแล้ว: Solo Class Bonus = Total Damage 10% MORE + Damage Reduction 5% เฉพาะตอนลงแต้มสกิล/passive คลาสเดียว (<code>SpellSchoolsData.isSoloClass</code>) · Song of Valor ให้ Total Damage แค่ 8–16% แบบบวก (ไม่ใช่ MORE) ≈ +5% จริง'],
      ['warn', '<b>ยังไม่ได้เล่นจริง</b> · ตัวเลขดาเมจเป็นการประมาณจากไฟล์เกม (Lv 100) · มานาคือความเสี่ยงอันดับ 1 — ทำ checklist ก่อนลงของแพง'],
      ['', 'กลไก Armageddon เช็คในโค้ดแล้ว: กดค้าง = ร่ายซ้ำทุก 10 tick (ลดตาม cast speed) เสียมานาทุกจังหวะ · ทุกจังหวะปล่อยลูกไฟ 3 ลูก ณ จุดที่เล็ง (เส้นเล็งชนแค่บล็อก ไกลสุด 10 บล็อก) · ลูกไฟสุ่มตกห่างจุดเล็ง ±2 บล็อก ระเบิดวง 2 บล็อก → บอสที่ยืนนิ่งโดนทุกลูก · Overheat 4 stack = ลูกไฟ ×2 · แต่ละ stack: ดาเมจเวท +10% MORE แต่ Mana Regen + Leech −20% MORE · Armageddon ไม่ได้ให้ stack เอง · สกิลน้ำแข็ง/Refresh ลบ stack'],
    ],
  },
  strengths: {
    pros: [
      '<b>ปุ่มเดียวจริง</b> — กดค้างเล็งพื้น · Fireball ทุก ~15 วิ · Mage Circle ทุก 8–10 วิ (ยืนที่เดิมอยู่แล้ว)',
      'ตีบอสดีบนกระดาษ: ~650k (ประมาณ · Lv 100) · ลูกไฟลงในวง ±2.5 บล็อกเสมอ บอสยืนนิ่งโดนครบ',
      'ยืนไกลได้ถึง 10 บล็อก · Solo Class ลดดาเมจที่โดน 5%',
      'ไม่ซ้ำโชกุน: ไม่ใช้ Chronomancer',
    ],
    cons: [
      '<b>มานา</b> — กินมานาทุก 0.5 วิ และ Overheat ตัด regen เหลือ 20% · ยังไม่รู้ว่าพอไหม',
      'เคลียร์กลางๆ — ลูกไฟตกแค่ในวง ~5 บล็อก · เดินไปเรื่อยๆ ใช้ Mage Circle ไม่ค่อยได้',
      'ลูกไฟตกจากสูง ~4 บล็อก ดีเลย์ ~0.5–1 วิ · บอสที่<b>บิน</b>สูงกว่าพื้นเกิน 2 บล็อกโดนไม่ได้',
      'Armageddon กับ Mage Circle ขึ้นได้ +1 ต่อเลเวลตัว (เพดาน = เลเวล − 29) → แรงเต็มที่ราว Lv 49',
      'Fiery Flame ตัดดาเมจที่ไม่ใช่ไฟ −100% · กดค้างเดินช้า',
    ],
  },
  combo: {
    title: 'รอบเล่น', pill: 'ปุ่มเดียว + บัฟ',
    intro: 'เปิด Mage Armor ค้างไว้ครั้งเดียว · ก่อนสู้: Fireball 4 ครั้ง → วาง Mage Circle ใต้เท้า → ยืนในวงแล้วกด Armageddon ค้าง เล็ง<b>พื้น</b>ใต้มอน',
    steps: [
      { id: 'fireball', role: 'Overheat', name: 'Fireball ×4', desc: 'ครบ 4 stack = Fully Overheated · อยู่ 20 วิ · กดซ้ำ 1 ครั้งทุก ~15 วิ' },
      { id: 'mage_circle', role: 'บัฟ', name: 'Mage Circle', desc: 'วางใต้เท้า รัศมี 4 บล็อก · Spell Damage 15–30% MORE ตอนยืนในวง · อยู่ 10 วิ · cooldown 8 วิ' },
      { id: 'armageddon', role: 'สกิลหลัก', name: 'Armageddon (กดค้าง)', desc: 'เล็งพื้นใต้มอน ไม่เกิน 10 บล็อก · 6 ลูก/จังหวะ ตอนมี 4 stack', main: true },
    ],
    notes: [['warn', 'เล็ง<b>พื้น</b> ไม่ใช่ตัวบอส — เส้นเล็งทะลุตัวมอน ถ้าเล็งตัวบอสลูกไฟไปตกด้านหลัง'], ['', 'Mage Armor เปิดครั้งเดียวอยู่ตลอด (ไม่มีเวลาหมด) · ตายแล้วเปิดใหม่']],
  },
  sim: {
    pill: 'Lv 100 · ประมาณจากไฟล์เกม',
    intro: 'v1.1: เลขของ build นี้คูณมือจาก sim เดิม (507k) — Minstrel ออก (Skill Speed −36% → ลูกไฟช้าลง ~13%) · Solo Class 10% MORE · Mage Circle Lv 12 30% MORE · Mage Armor ~+5% · <b>sim ยังไม่ได้รันใหม่</b> · แถวอื่นเป็นเลขเดิมจากรอบจัดอันดับ (ยังไม่นับบัฟ/solo ของเขาเหมือนกัน)',
    rows: [
      { name: 'Armageddon · v1.1', sub: 'คลาสเดียว + Mage Circle (ประมาณ)', boss: 650e3, clear: 830e3, me: true },
      { name: 'Armageddon · v1.0', sub: 'Minstrel · ไม่มี Circle', boss: 507e3, clear: 831e3 },
      { name: 'Armageddon · ไม่มี Overheat', sub: 'กดปุ่มเดียวล้วน', boss: 230e3, clear: 300e3 },
      { name: 'Thorn Bush', sub: 'Shaman · staff', boss: 450e3, clear: 1131e3 },
      { name: 'Rime Reaver · Trickster', sub: 'Raptor', boss: 220e3, clear: 1808e3 },
      { name: 'โชกุน: Timewinder', sub: 'Chronomancer · อ้างอิง', boss: 614e3, clear: 1453e3, ref: true },
    ],
    notes: [
      ['', 'เคลียร์: นับ Mage Circle ไม่ได้เพราะต้องเดินตลอด · ถ้ากลุ่มใหญ่ยืนสู้ที่เดิม วาง Circle ได้ → ~1.0M'],
      ['warn', 'ยังไม่นับ: มานาพอไหม · การป้องกัน · burn · บอสวิ่ง/บิน · Skill Speed กับจังหวะ channel ยังไม่ได้เช็คในโค้ด · ทุกแถวยังไม่ได้เทสในเกม'],
    ],
  },
  variants: [
    { name: 'ตีบอส', sub: 'ตั้งค่าหลัก', items: [
      'Support Armageddon: <b>Fire Penetration · Area Focus · Fire Damage · Greater Conservation (Lv 40) · Faster Cast</b>',
      'ก่อน Lv 40 ช่องที่ 4 ใส่ <b>Expanded Area</b>',
      'Fireball ×4 → Mage Circle → ยืนในวงกด Armageddon ค้างเล็งพื้นใต้บอส',
    ] },
    { name: 'เคลียร์แมพ', sub: 'เดินตลอด', items: [
      'สลับ Area Focus → <b>Expanded Area</b>',
      'เล็งกลางกลุ่ม · ข้าม Mage Circle ถ้ากลุ่มเล็ก',
      'Overheat หมดระหว่างวิ่ง → Fireball 1 ครั้งต่อ 15 วิ ใส่มอนระหว่างทาง',
    ] },
    { name: 'Lv 30–49', sub: 'ช่วงอัพสกิล', items: [
      'Armageddon กับ Mage Circle ขึ้นได้ +1 ต่อเลเวลตัว (เพดาน = เลเวลตัว − 29)',
      'เลเวลขึ้นทุกครั้ง: Armageddon +1 แล้ว Mage Circle +1 (ใช้ 2 แต้ม ได้ 1) → เก็บแต้มไว้ตอนนี้',
    ] },
  ],
  checklist: {
    intro: 'ทำตอนเริ่มเล่น Mika · ติ๊กไว้ได้ เว็บจำในเครื่องนี้',
    items: [
      'หน้าคลาสขึ้น <b>Solo Class Bonus</b> (ห้ามลงแต้มคลาสอื่นแม้ 1 แต้ม)',
      'Fireball 4 ครั้ง → ไอคอน <b>Overheat 4</b> · Armageddon ตกลูกไฟเยอะกว่าตอนไม่มี stack ชัดเจน',
      'ยืนใน Mage Circle → ตัวเลขดาเมจสูงขึ้น · ออกจากวง → ลดลง',
      '<b>มานา</b>: กดค้าง (4 stack) จับเวลาว่ากี่วิหมด · ไม่ถึง ~8 วิ → p_mana_regen / ถอด Faster Cast',
      'เล็งพื้นใต้มอน vs เล็งตัวมอน — ลูกไฟตกตรงไหน',
    ],
  },
  equipment: {
    slots: [
      ['อาวุธ', 'Staff (มือเดียว)', ['ดาเมจ Armageddon = <b>weapon damage × 1.24</b> + ค่าตามเลเวล → staff ดาเมจสูงสุดที่ใส่ได้', 'หา Fire Damage, Spell Damage, Cast Speed, Mana %'],],
      ['เกราะ', 'Cloth (INT)', ['หา <b>Mana %</b>, <b>Mana Regen</b>, Health, Fire / Elemental Resistance'],],
      ['แหวน / สร้อย', 'Fire · Mana', ['หา Fire Damage, Elemental Damage, Mana Regen, Cast Speed, Resistance', '<b>ไม่ต้องหา crit</b> — Steady Hand ตัด crit damage ทิ้ง', '<b>Leech ไม่คุ้ม</b> — Overheat ตัด leech −80%'],],
      ['มือซ้าย', 'Tome (INT)', ['staff <b>ไม่ใช่</b>อาวุธ 2 มือ (ข้อมูลเกม: staff ไม่มีแท็ก two_handed · spear มี) → ถือมือซ้ายได้', '<b>Tome</b> = Magic Shield + Physical Resist · req INT เหมือน staff · หา Mana / Spell Damage / Resistance', 'Totem of Undying (ของ vanilla) ถือได้เหมือนกัน แต่ไม่ให้ stat']],
    ],
  },
  stats: {
    cols: [['int', 'Mana · Magic Shield · req เกราะ cloth + staff', 'ลงหมด'], ['str', 'HP · Armor', 'ไม่ลง'], ['dex', 'Energy · Dodge', 'ไม่ลง']],
    steps: ['INT ทั้งหมด (INT 1 = Mana +10 · Magic Shield +0.5%) · cloth / staff ต้องการ INT ≈ 0.8 × เลเวล gear'],
  },
  dont: [
    'ลงแต้ม<b>คลาสที่ 2</b> (สกิลหรือ passive แม้ 1 แต้ม) — Solo Class Bonus หาย',
    'สกิล<b>น้ำแข็ง</b>ของ Elementalist / <b>Refresh</b> — ลบ Overheat',
    'Support <b>Crit Damage</b> / <b>Crit Chance</b> / node Critical — Steady Hand ตัด crit damage −100%',
    'ดาเมจที่ไม่ใช่ไฟ — Fiery Flame ตัด −100%',
    'พึ่ง <b>Leech</b> เติมมานา — Overheat ตัด leech −80%',
  ],
  ascTable: [
    ['1–3', 'Act II · Defenders of the Nether II', 'Elementalist → INT → <b>Futility of Defense</b><div class="small">Elemental Penetration +18 · Elemental Resistance +12</div>'],
    ['4–5', 'Act III · Slippery Swimmer', 'INT → <b>Creator of Flames</b><div class="small">Fire Damage 15% MORE · Physical → Fire 50% · Burn chance +25%</div>'],
    ['6–7', 'Act V · They Knew You Were Coming', 'INT → <b>Creator of Frost</b><div class="small">ทางผ่าน — Cold ไม่มีผลกับ build นี้</div>'],
    ['8–9', 'Epilogue · บอสธาตุ 4 ตัว', 'INT → <b>Doomed Path</b><div class="small">Area Damage 15% MORE · AoE +15%</div>'],
  ],
  ascNote: 'แต้ม ascendancy ได้จากเควส · เลือก class ได้ 1 ตัว (Elementalist) · Doomed Path ต้องเดินผ่าน Creator of Frost ตามผังในไฟล์เกม',
  skillNote: 'P = Passive · แต้มสกิล 1 / เลเวล · แต้ม Passive 0.5 / เลเวล · <b>ทุกแต้มลง Elementalist เท่านั้น</b> (Solo Class)<h3>Mika Lv 33 (29 แต้ม หลัง Armageddon 4)</h3><ol class="steps"><li><b>Fireball 1</b></li><li><b>Mage Circle 4</b> (เพดานตอนนี้)</li><li><b>Mage Armor 8</b></li><li><b>เก็บ 16 แต้ม</b> — ไว้อัพ Armageddon + Mage Circle ตอนเลเวลขึ้น</li></ol><h3>เลเวลขึ้นทุกครั้ง</h3><ol class="steps"><li>Armageddon +1 (→ 20)</li><li>Mage Circle +1 (→ 12)</li><li>แต้มเหลือหลังสองตัวเต็ม → Mage Armor → 20</li></ol><h3>Passive</h3><ol class="steps"><li><b>p_cast_speed_sorc</b> → 8</li><li><b>p_spell_dmg</b> → 8</li><li><b>p_mana_regen</b> → 8</li></ol>',
  gems: {
    socket: [['อาวุธ', 'Ruby', 'Fire Damage +14%', '(ระดับสูงสุด)'], ['เกราะ', 'Amethyst', 'Mana +14%', 'หรือ Opal = Health ถ้าตายบ่อย'], ['แหวน / สร้อย', 'Amethyst', 'INT +7', 'หรือ Sapphire = Elemental Resistance']],
    support: [
      ['Support → Armageddon (บอส)', ['Fire Penetration', 'Area Focus', 'Fire Damage', 'Greater Conservation (Lv 40)', 'Faster Cast']],
      ['Support → Armageddon (เคลียร์)', ['Fire Penetration', 'Expanded Area', 'Fire Damage', 'Greater Conservation (Lv 40)', 'Faster Cast']],
    ],
    aura: ['<b>Fire Damage Augment</b>', '<b>Mana Regen</b> augment ถ้ามานาหมด'],
    jewels: ['Fire Damage', 'Mana %', 'INT', 'Elemental Resistance', 'Health'],
    html: '<p class="small"><b>Greater Conservation</b> = Non-Critical Damage 6–18% MORE + มานา ×0.8 — คู่กับ Steady Hand</p>',
  },
  binds: [
    ['1', 'Armageddon', 'กดค้าง'],
    ['2', 'Fireball', '×4 ตอนเริ่ม · ×1 ทุก 15 วิ'],
    ['3', 'Mage Circle', 'ก่อนสู้ · ทุก 8–10 วิ'],
    ['4', 'Mage Armor', 'เปิดครั้งเดียว'],
  ],
  howto: [
    'เปิด <b>Mage Armor</b> (อยู่ตลอด)',
    '<b>Fireball</b> 4 ครั้ง',
    'วาง <b>Mage Circle</b> ใต้เท้า',
    'ยืนในวงกดค้าง <b>Armageddon</b> เล็งพื้นใต้บอส / กลางกลุ่ม ไม่เกิน 10 บล็อก',
    'ทุก ~10 วิ: วาง Circle ใหม่ · ทุก ~15 วิ: Fireball 1 ครั้ง',
  ],
  faq: [
    ['เว็บนี้เชื่อได้แค่ไหน', 'กลไกที่เขียนว่า "เช็คในโค้ดแล้ว" = อ่านจากโค้ดเกมจริง · <b>ตัวเลขดาเมจ</b> = ประมาณบนกระดาษ ยังไม่เคยเทสในเกม · v1.0 พลาดเพราะ sim ไม่รู้จักสกิลบัฟและ Solo Class Bonus — แก้ใน v1.1 แล้ว', true],
    ['ทำไมไม่เอา Minstrel แล้ว', 'Solo Class 10% MORE + ลดดาเมจ 5% ติดตลอด · Song of Valor ได้แค่ +8–16% แบบบวก (≈ +5%) และต้องกดใหม่ทุก 12 วิ · Rallying March ใช้ตอนกดค้างไม่ได้'],
    ['ทำไมไม่ใช้ Meteor / Ice Comet', 'Meteor ลูกเดียวต่อการกด (บอส 65k) · Ice Comet อ่อนสุดและลบ Overheat'],
  ],
});
