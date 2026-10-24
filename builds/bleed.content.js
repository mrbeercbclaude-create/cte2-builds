(window.BUILDS = window.BUILDS || {}).bleed = Object.assign(window.BUILDS.bleed || {}, {
  char: 'Raptor', title: 'Scythe Bleed Gladiator', version: '1.1', updated: '2026-10-24', status: 'Lv 24 · กำลังเล่น',
  tags: [['Bleed', 'red'], ['Scythe'], ['Melee'], ['2 มือ'], ['Gladiator', 'gold']],
  sub: 'ฟันวงกว้างด้วย Whirlwind ให้ศัตรูติด Bleed ทั้งกลุ่ม · บัฟด้วย Reaper Form + Plague Aura · ใส่ Plate ทั้งชุด',
  meta: [['คลาส', 'Fighter + Sanguimancer'], ['Ascendancy', 'Gladiator'], ['จุดเริ่ม Talent', 'Warrior'], ['เกราะ', 'Plate']],
  summary: {
    minis: [
      ['Stat', 'STR หลัก', 'INT แค่ถึง req ของ scythe · DEX ถ้า energy หมดบ่อย'],
      ['สกิลหลัก', 'Whirlwind', 'หมุนฟันรอบตัว ติด bleed ทั้งกลุ่ม'],
      ['บัฟ', 'Reaper Form', '+Scythe Damage สูงสุด 30% · ตีด้วย scythe ต่อเวลาได้'],
      ['ออร่า', 'Plague Aura', 'ศัตรูรอบตัวติด ailment ง่ายขึ้น'],
    ],
    notes: [
      ['warn', 'มือซ้ายใช้ไม่ได้ — scythe เป็นอาวุธ 2 มือ (shield / tome / totem ใส่ไม่ได้)'],
      ['warn', 'บอสมี Armor สูง (มอนได้ armor 15 / เลเวล แล้วคูณตามความหายาก บอส ×3.5–5) — ใช้ <b>Shred</b> ลด armor ก่อนตีบอสทุกครั้ง'],
    ],
  },
  equipment: {
    slots: [
      ['อาวุธ', 'Scythe', ['ฐาน <b>Rusted Scythe</b> = Bleed Chance 12.5–25% ติดมา ← หาอันนี้', 'Reaper\'s Scythe = spell lifesteal (โอเค)', '!Necromancer\'s Scythe = ดาเมจ summon (ไม่ใช่สายเรา)', 'ดาเมจ x1.4 · ระยะ 4.5 · ฟันกว้าง 150°']],
      ['หมวก / เสื้อ / กางเกง / รองเท้า', 'Plate', ['Armor สูงสุด + HP', 'ทางเลือก: Chainmail = Armor + Magic Shield (req STR + INT)']],
      ['แหวน / สร้อย', 'Bleed / Physical / HP', ['หา Bleed Chance, Physical Damage, Ailment Damage, Health', 'ใส่ STR ถ้าขาด req']],
      ['มือซ้าย', 'ใช้ไม่ได้', ['เควส Blocking: เลือก <b>Shield</b> ไว้ใช้ตอนยังถือดาบมือเดียว', 'เควส Suit Up: เลือก <b>Plate Pants</b>']],
    ],
    html: `<h3>Stat requirement</h3>
      <p class="small">สูตรจากโค้ดเกม: <code>ตัวคูณ × (2 + 2 × (เลเวล gear − 1))</code> · เซิฟใช้ ORIGINAL_MODE ตัวคูณรวม 1.0 · เลเวล gear ต้องไม่เกินเลเวลตัวละคร</p>
      <div class="tablewrap"><table class="tbl"><thead><tr><th>เลเวล gear</th><th>Scythe STR</th><th>Scythe INT</th><th>Plate STR</th></tr></thead>
      <tbody><tr><td>10</td><td>5</td><td>5</td><td>8</td></tr><tr><td>25</td><td>12</td><td>12</td><td>20</td></tr><tr><td>50</td><td>25</td><td>25</td><td>40</td></tr><tr><td>75</td><td>37</td><td>37</td><td>60</td></tr><tr><td>100</td><td>50</td><td>50</td><td>80</td></tr></tbody></table></div>`,
  },
  stats: {
    cols: [['str', 'ดาเมจ · HP · HP regen · Armor · Crit dmg', 'ลงหลัก'], ['int', 'Magic dmg · Mana regen · Magic Shield', 'แค่ถึง req scythe'], ['dex', 'Attack speed · Energy regen · Dodge · Crit', 'ถ้า energy หมดบ่อย']],
    steps: ['INT ให้ถึง req ของ scythe', 'STR ให้ถึง req ของ Plate', 'ที่เหลือ STR ทั้งหมด'],
  },
  dont: [
    '<b>Blood Mage</b> — Mana −100%, Energy −100% (energy ใช้ตี) · ทางไป Infection / Siphoner ต้องผ่านตัวนี้ เลยข้ามทั้งคู่',
    '<b>Elemental Purity</b> — Physical −100%',
    '<b>Glancing Strikes</b> (ติดจุด Warrior) — สาย block แต่ไม่มีโล่',
    '<b>Netherite Bastion / Nether Enthusiast</b> — แปลงกายภาพเป็นไฟ',
  ],
  ascTable: [
    ['1–3', 'Act II · Defenders of the Nether II', 'Gladiator → DEX → <b>Violent Outbursts</b><div class="small">Physical 15% MORE · AoE +15%</div>'],
    ['4–5', 'Act III · Slippery Swimmer', 'DEX → <b>Bloody Blades</b><div class="small">Bleed Chance +30% · Bleed Damage +30%</div>'],
    ['6–7', 'Act V · They Knew You Were Coming', 'DEX → <b>Gratuitous Violence</b><div class="small">50% Blood Explosion · Bleed Damage +30%</div>'],
    ['8–9', 'Epilogue · บอสธาตุ 4 ตัว', 'DEX → <b>Retaliation</b><div class="small">Physical +35% · Physical Leech 3%</div>'],
  ],
  ascNote: 'แต้ม ascendancy แชร์ทุกตัวละคร · ข้าม Challenger / Parry Veteran / Deflector (สาย charge / block)',
  skillNote: 'P = Passive ในต้นไม้คลาส (ใช้แต้ม Passive ได้ 0.5 / เลเวล) · ลำดับ 1–8 = แต้มสกิล (1 / เลเวล) · อัป Whirlwind ให้เต็มก่อน แล้วค่อยเติม Reaper Form / Shred / Banishing Blade',
  gems: {
    socket: [['อาวุธ', 'Garnet', 'Damage over Time (bleed)', 'หรือ Opal = Physical Damage'], ['เกราะ', 'Opal', 'Health', 'หรือ Garnet = Leech'], ['แหวน / สร้อย', 'Garnet', 'Ailment Damage', 'หรือ Opal = STR ถ้าขาด req']],
    support: [['Support gems → ต่อกับ Whirlwind', ['Bleed Chance', 'Melee Damage', 'Physical Damage', 'Damage over Time', 'Ailment Damage', 'AoE / Physical Penetration']]],
    aura: ['<b>Physical Ailment</b> — Physical Damage + Bleed Chance (เลเวล 10+)', '<b>Physical Damage</b>'],
    jewels: ['Bleed Chance', 'Physical Damage', 'Ailment Damage', 'STR', 'Attack Speed', 'Watcher\'s Eye: Physical Ailment'],
  },
  howto: [
    'เปิด <b>Fighter Stance</b> (attack speed + move speed)',
    'เปิด <b>Plague Aura</b> ค้างไว้ — ดูดเลือดตัวเองทุก 0.5 วิ หลุดเองถ้าเลือดต่ำกว่า 25%',
    'ก่อนเข้ากลุ่มมอน กด <b>Reaper Form</b> (10 วิ · ตีธรรมดาด้วย scythe มีโอกาสต่อเวลา)',
    'เข้ากลางกลุ่ม กด <b>Whirlwind</b> ค้าง → ทุกตัวติด bleed',
    'บอส: <b>Shred</b> ลด armor ก่อน แล้ว Whirlwind / ตีธรรมดาให้ Reaper Form ต่อเวลา',
    'เคลียร์เร็ว: <b>Undying Will</b> — ฆ่าแล้วศัตรูระเบิด + Berserk stack',
  ],
  faq: [
    ['รีเซ็ตแต้มได้ไหม', 'ได้ — <b>Minor Reset Potion</b> (Talents / Stat / Skill / Passive / Ascendancy) ให้ 10 respec point แล้วคลิกขวา node เพื่อถอน · <b>Major Reset Potion</b> คืนแต้มทั้งหมดของหมวดนั้น · ทำได้จาก profession recipe', true],
    ['ตายแล้วเสียอะไร', 'ไม่เสียของ · ตั้งแต่เลเวล 50 เสีย EXP ก้อนใหญ่'],
    ['ลงคลาสที่ 3 ได้ไหม', 'ไม่ได้ — เกมขึ้น "You can\'t spend points in more than 2 classes."'],
    ['Infection / Siphoner ทำไมไม่เอา', 'ทางเดียวที่ไปถึงต้องผ่าน Blood Mage ซึ่งลด Mana และ Energy 100%'],
  ],
});
