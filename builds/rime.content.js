(window.BUILDS = window.BUILDS || {}).rime = Object.assign(window.BUILDS.rime || {}, {
  char: 'ตัวที่ 3', title: 'Rime Reaver Lich', version: '1.0', updated: '2026-10-25', status: 'ยังไม่สร้างตัว · ยังไม่เทส',
  tags: [['Clear speed', 'gold'], ['Cold'], ['Spear'], ['Melee'], ['Lich', 'gold'], ['ยังไม่เทสในเกม', 'red']],
  sub: 'หมุนตัวยิงเม็ดน้ำแข็งทะลุรอบทิศ 3 รอบต่อการกด · ศัตรูที่ติด <b>Snow-Tracked</b> ทำให้เม็ดแตกเป็นเศษอีก 8 เม็ด · ศัตรูตายแล้ว Lich ระเบิด Profane Explosion ต่อ · เน้นเคลียร์แมพไว บอสพอไหว',
  meta: [['คลาส', 'Cryolancer + Minstrel'], ['Ascendancy', 'Lich'], ['จุดเริ่ม Talent', 'Warrior (The Axe)'], ['อาวุธ', 'Spear (2 มือ)']],
  summary: {
    minis: [
      ['สกิลหลัก', 'Rime Reaver', 'ปลดล็อก Lv 30 · ไม่มี cooldown · ยิง 8 เม็ด × 3 รอบ'],
      ['ตัวช่วย', 'Snow-Track + ดึง', 'Tailwind Sweep / Glacial Dash ทำ Snow-Track · Winter\'s Grasp ดึงมอนเข้า'],
      ['Stat', 'DEX หลัก', 'DEX = Energy · ดาเมจ Rime Reaver ขึ้นตาม Energy'],
      ['คลาสที่ 2', 'Minstrel', 'Song of Valor + Rallying March · passive Skill Speed + AoE'],
    ],
    notes: [
      ['warn', '<b>ยังไม่ได้เล่นจริง</b> — ตัวเลขมาจากการจำลองด้วยไฟล์เกม (Lv 100) · ทำ checklist "ทดสอบก่อนลงทุน" ตอนได้ Rime Reaver (Lv 30) ก่อนลงของแพง'],
      ['', 'เช็คในโค้ดเกมแล้ว: กด 1 ครั้งยิง 3 รอบระหว่างร่าย (<code>onCastingTick</code>) · เม็ดทะลุศัตรู (<code>expire_on_en_hit = false</code>) · เม็ดที่โดนศัตรูติด Snow-Tracked ไม่ทำดาเมจเต็ม แต่แตกเป็น 8 เศษ (ดาเมจครึ่ง) และลบ Snow-Tracked 1 stack'],
    ],
  },
  strengths: {
    pros: [
      'เคลียร์กลุ่มแรง — เม็ดน้ำแข็งทะลุรอบตัว ไม่ต้องเล็ง',
      'ไม่มี cooldown กดรัวได้ · ไม่ใช่สกิล channel (สกิล channel เสีย energy ทุกจังหวะ)',
      'Snow-Track ทำให้เม็ดแตกเป็น 8 เศษ — sim ยังไม่นับส่วนนี้ ของจริงน่าจะแรงกว่าตัวเลขในเว็บ',
      'ไม่ซ้ำโชกุน: ไม่ใช้ Chronomancer เลย (ทั้งสกิลและ passive)',
    ],
    cons: [
      '<b>ตีบอสอ่อน</b> — ~155–190k ใน sim เทียบ Zap ของโชกุน ~360k · เม็ดยิงรอบทิศ บอสตัวเดียวโดนแค่บางเม็ด',
      'สกิลหลักมาตอน Lv 30 — ช่วงแรกใช้ Frostbite Thrust / Tailwind Sweep',
      'Tree เน้นดาเมจ HP ต่ำ (~2,700 ที่ Lv 100 ใน sim) และต้องเข้าไปประชิด',
      'Support 5 อันคูณค่า energy (~×4) · ช่วงแรกอาจต้องเปิด Song of Vigor',
    ],
  },
  combo: {
    title: 'รอบเล่น', pill: 'วนซ้ำทุกกลุ่ม',
    intro: 'ใส่ Snow-Tracked ก่อน แล้วค่อยกด Rime Reaver — เม็ดที่โดนศัตรูติด Snow-Tracked จะแตกเป็นเศษ 8 เม็ดยิงรอบทิศอีกที',
    steps: [
      { id: 'tailwind_sweep', role: 'Snow-Track', name: 'Tailwind Sweep / Glacial Dash', desc: 'Sweep: ทุกตัวที่โดนติด Snow-Tracked · Dash: พุ่งเข้า + ติด 3 stack (1 stack = แตกได้ 1 ครั้ง)' },
      { id: 'winters_grasp', role: 'ดึง', name: 'Winter\'s Grasp', desc: 'ดูดมอนรอบตัวเข้าหา · ตัวที่ติด Snow-Tracked โดน stun 2 วิ (แลกกับ 1 stack)' },
      { id: 'rime_reaver', role: 'สกิลหลัก', name: 'Rime Reaver', desc: 'วงรอบตัว 2 บล็อก (ดาเมจครึ่ง) + 8 เม็ดทะลุ ระยะ ~8 บล็อก · 3 รอบต่อการกด', main: true },
    ],
    notes: [['', 'Winter\'s Grasp กิน stack Snow-Tracked ไปด้วย — กลุ่มใหญ่ใช้ Glacial Dash (3 stack) ก่อนดึง หรือข้าม Winter\'s Grasp ถ้ามอนอยู่ใกล้แล้ว']],
  },
  sim: {
    pill: 'Lv 100 · จำลองจากไฟล์เกม',
    intro: 'Rime Reaver + Lich + spear กับคลาสที่ 2 แต่ละแบบ · แต่ละแถวหา talent tree 101 แต้มที่ดีที่สุดใหม่ทั้งหมด · บอส = เป้าเดียว resist 50% · เคลียร์ = มอน 10 ตัว resist 10% · ไม่นับ Chronomancer',
    rows: [
      { name: 'Minstrel', sub: 'ที่เลือก · ดีทั้งสองแบบ', boss: 191e3, clear: 1757e3, me: true },
      { name: 'Warlock', sub: 'curse → Profane 100%', boss: 140e3, clear: 1810e3 },
      { name: 'Brawler', sub: 'passive เท่านั้น', boss: 169e3, clear: 1639e3 },
      { name: 'Shaman', sub: 'Elemental Pen passive', boss: 189e3, clear: 1581e3 },
      { name: 'Hunter', sub: '', boss: 152e3, clear: 1463e3 },
      { name: 'Sorcerer', sub: '', boss: 146e3, clear: 1373e3 },
      { name: 'โชกุน: Zap', sub: 'Chronomancer · อ้างอิง', boss: 361e3, clear: 1034e3, ref: true },
    ],
    notes: [
      ['', 'Warlock เคลียร์มากกว่า 3% (มี curse → ศัตรูตาย = ระเบิด 100%) แต่ตีบอสเบากว่า 27% และต้องกด curse เพิ่ม · Minstrel ได้ Rallying March + Song of Valor ที่ sim ยังไม่นับด้วย'],
      ['warn', 'ยังไม่นับ: การป้องกัน · ailment · crit จาก gear · เศษน้ำแข็งจาก Snow-Track · บัฟเพลง · บอส sim ให้โดน 3 เม็ด ของจริงอาจน้อยกว่า · เลขของโชกุนมาจากรอบจัดอันดับเดียวกัน (คนละ ascendancy)'],
    ],
  },
  variants: [
    { name: 'เคลียร์แมพ', sub: 'ตั้งค่าหลัก · tree ในหน้านี้ปรับมาเพื่อเคลียร์ (1.76M)', items: [
      'Support Rime Reaver: <b>Melee Damage · Cold Damage · Expanded Area · Cold Penetration · Mageblade</b>',
      'ธง: <b>Banner of the Piercing Gale</b> หรือไม่ปักก็ได้ (เดินเร็วกว่า)',
      'Hymn: <b>Song of Valor</b> + <b>Rallying March</b>',
      'วิ่งด้วย Glacial Dash เข้ากลุ่ม → Rime Reaver 1–2 ครั้ง → ไปกลุ่มถัดไป',
    ] },
    { name: 'ตีบอส', sub: 'tree เดิม ~155k · ถ้าล้าง tree เป็นแบบตีบอส ~191k', items: [
      'สลับ Expanded Area → <b>Area Focus</b>',
      'ปัก <b>Banner of the Piercing Gale</b> ใต้บอสก่อน (ลด Armor + Cold Resistance)',
      '<b>Glacial Dash</b> ใส่บอส = Snow-Tracked 3 stack → เม็ดที่โดนบอสแตกเป็นเศษ',
      'ยืนชิดบอส — วงรอบตัว 2 บล็อกโดนทุกรอบ + เม็ดโดนมากที่สุด',
      'ห้ามใส่ <b>Focused Shot</b> / <b>Greater Multiple Projectiles</b> — Focused Shot ตัดเหลือ 1 เม็ด · GMP เพิ่ม 4 เม็ดแต่ลดดาเมจทุกเม็ด −60–70% (ข้อมูล gem)',
    ], note: 'บอสจริงๆ build นี้สู้ Zap ของโชกุนไม่ได้ (~half) — เป็นราคาที่จ่ายเพื่อเคลียร์ไว' },
    { name: 'ช่วงเลเวล 1–29', sub: 'ก่อนได้ Rime Reaver', items: [
      'Lv 1: <b>Glacial Dash</b> + ตีธรรมดา · Hymn <b>Song of Vigor</b>',
      'Lv 5: <b>Frostbite Thrust</b> = สกิลตีหลัก (แทง 3 ครั้ง · ศัตรูติด Snow-Tracked โดนแรงขึ้น)',
      'Lv 10: <b>Tailwind Sweep</b> กวาดกลุ่ม + ติด Snow-Tracked',
      'Lv 20: <b>Winter\'s Grasp</b> ดึงมอน · เปลี่ยน Hymn เป็น <b>Song of Valor</b>',
      'Lv 25: <b>Banner of the Piercing Gale</b> · <b>Rallying March</b>',
      'Lv 30: <b>Rime Reaver</b> → เทแต้มสกิลทั้งหมดให้เต็ม 20 ก่อน',
    ] },
  ],
  checklist: {
    intro: 'ทำตอนได้ Rime Reaver (Lv 30) · ติ๊กไว้ได้ เว็บจำในเครื่องนี้',
    items: [
      'Rime Reaver ยิงเม็ด<b>รอบตัว</b>และ<b>ทะลุ</b>มอนหลายตัว · กด 1 ครั้งได้ 3 รอบ',
      'Tailwind Sweep ก่อน → เม็ดที่โดนมอน<b>แตกเป็นเศษ</b>ยิงต่อ (เห็นเม็ดเล็กพุ่งออกจากตัวมอน)',
      'ใส่ support 5 อันแล้ว<b>กดรัว 10 วิ energy ไม่หมด</b> · ถ้าหมด เปิด Song of Vigor / ใส่ Energy Regen Augment',
      'บอส: ยืนชิดแล้วนับตัวเลขดาเมจที่เด้งต่อรอบ (sim คิดว่าโดน 3 เม็ด + วงรอบตัว)',
      'ascendancy 8–9: มอนตายแล้ว<b>ระเบิด</b>ต่อ (Profane Explosion 25% ต่อการฆ่า)',
    ],
  },
  equipment: {
    slots: [
      ['อาวุธ', 'Spear (2 มือ)', ['ฐาน spear: weapon damage 8–16 · req STR + DEX', '<b>Frozen Lance</b> (unique · Lv 1+) = <b>Cold Penetration 12–16</b> · +1 Banner (ปักได้ 2 ธง) · Attack Speed 15–20 · Energy Regen ← เป้าแรก', '<b>Soulfeast Tine</b> (Lv 10+) = Profane Explosion 50% ตอนฆ่า · Lifesteal / Energysteal 4–6% — ทางเลือกเน้นเคลียร์', '!The Impaler = +1 melee skill level — ไม่เพิ่มดาเมจตอนสกิลเต็มแล้ว (โค้ด <code>LeveledValue</code>)']],
      ['เกราะ', 'Brigandine', ['Armor + Dodge + Health · req STR + DEX เหมือน spear', 'หา <b>Energy %</b>, Health, Cold Resistance', 'ไม่มีเกราะฐานไหนให้ Energy ติดมา — ต้องได้จาก affix'],],
      ['แหวน / สร้อย', 'Cold · Energy · Res', ['หา Cold Damage, Elemental Weapon Damage, <b>Energy %</b>, Elemental Resistance', '<b>ไม่ต้องหา crit</b> — Steady Hand ตัด crit damage ทิ้ง'],],
      ['มือซ้าย', 'ใช้ไม่ได้', ['spear เป็นอาวุธ 2 มือ']],
    ],
    html: `<h3>Stat requirement</h3>
      <p class="small">สูตรจากโค้ดเกม: <code>ตัวคูณ × (2 + 2 × (เลเวล gear − 1))</code> · Spear / Brigandine ตัวคูณ STR 0.25 + DEX 0.25 · เลเวล gear ต้องไม่เกินเลเวลตัวละคร</p>
      <div class="tablewrap"><table class="tbl"><thead><tr><th>เลเวล gear</th><th>Spear / Brigandine STR</th><th>DEX</th></tr></thead>
      <tbody><tr><td>15</td><td>7</td><td>7</td></tr><tr><td>25</td><td>12</td><td>12</td></tr><tr><td>50</td><td>25</td><td>25</td></tr><tr><td>75</td><td>37</td><td>37</td></tr><tr><td>100</td><td>50</td><td>50</td></tr></tbody></table></div>`,
  },
  stats: {
    cols: [['dex', 'Energy (= ดาเมจ Rime Reaver) · Dodge', 'ลงหลัก'], ['str', 'HP · Armor', 'แค่ถึง req spear / brigandine'], ['int', 'Mana · Magic Shield', 'ไม่ลง']],
    steps: ['STR ให้ถึง req ของ spear + brigandine', 'ที่เหลือ DEX ทั้งหมด'],
    html: '<p class="small">ดาเมจ Rime Reaver = weapon damage × 1.3 + <b>Energy × 0.13</b> (ส่วน energy สูงสุด 2 เท่าของส่วนอาวุธ · ไฟล์ <code>rime_reaver</code> value calc) · Icy Killer เพิ่ม Cold Damage ตาม % Energy ด้วย</p>',
  },
  dont: [
    '<b>Blood Mage</b> — Energy −100% (Rime Reaver ใช้ energy)',
    'node <b>Critical</b> ทุกแบบ — Steady Hand ตัด crit damage −100% แล้ว',
    'node <b>Physical</b> — Elemental Purity ตัด Physical −100% (ดาเมจเราเป็น Cold ล้วน)',
    'Keystone สาย <b>Mana</b> — Icy Killer ลด Mana 25% MORE',
  ],
  ascTable: [
    ['1–3', 'Act II · Defenders of the Nether II', 'Lich → INT → <b>Dark Power</b><div class="small">Cold 8% MORE · Chaos 8% MORE · AoE +10%</div>'],
    ['4–5', 'Act III · Slippery Swimmer', 'INT → <b>Artic Armor</b><div class="small">Cold 15% MORE · Physical Resistance +8</div>'],
    ['6–7', 'Act V · They Knew You Were Coming', 'INT → <b>Chaotic Disposition</b><div class="small">Chaos 15% MORE · Chaos Resistance +35 (ทางผ่านไป Profane Explosion)</div>'],
    ['8–9', 'Epilogue · บอสธาตุ 4 ตัว', 'INT → <b>Profane Explosion</b><div class="small">ฆ่าศัตรู 25% ระเบิด · ศัตรูติด curse 100% · Curse duration +50%</div>'],
  ],
  ascNote: 'แต้ม ascendancy แชร์ทุกตัวละคร (ได้จากเควส) แต่เลือก node แยกต่อตัว · Lich แลกบอสเพื่อเคลียร์: ถ้าอยากได้บอสมากกว่า Elementalist ตีบอสแรงกว่า ~28% (มี Elemental Penetration 18) แต่เคลียร์เบากว่า',
  skillNote: 'P = Passive ในต้นไม้คลาส · ลำดับ = แต้มสกิล (1 / เลเวล) · Frostbite Thrust / Tailwind Sweep ใช้ช่วงแรก ใส่ไม่ต้องเยอะ · <b>Lv 30 เทแต้มลง Rime Reaver ให้เต็ม 20 ก่อน</b> · Hymn เปิดได้ทีละอัน (Vigor → Valor) แต่ Rallying March ไม่ใช่ Hymn เปิดคู่ได้',
  gems: {
    socket: [['อาวุธ', 'Sapphire', 'Cold Damage +14%', '(ระดับสูงสุด)'], ['เกราะ', 'Azurite', 'Energy +21% (= ดาเมจ)', 'หรือ Opal = Health ถ้าตายบ่อย'], ['แหวน / สร้อย', 'Emerald', 'Skill Speed +21% (กดถี่ขึ้น)', 'หรือ Sapphire = Elemental Resistance']],
    support: [
      ['Support → Rime Reaver (เคลียร์)', ['Melee Damage', 'Cold Damage (Lv 20)', 'Expanded Area', 'Cold Penetration', 'Mageblade (Lv 30)']],
      ['Support → Rime Reaver (บอส)', ['Melee Damage', 'Cold Damage', 'Area Focus', 'Cold Penetration', 'Mageblade']],
    ],
    aura: ['<b>Cold Damage Augment</b> — Cold 4–20% MORE', '<b>Energy Regen Augment</b> — ถ้า energy หมด', '<b>Vitality Augment</b> — Health + Magic Shield MORE ถ้าตายบ่อย'],
    jewels: ['Cold Damage', 'Energy %', 'DEX', 'Elemental Resistance', 'Health'],
    html: '<p class="small">ห้ามใส่ <b>Greater Multiple Projectiles</b> / <b>Focused Shot</b> — Rime Reaver มี 8 เม็ดอยู่แล้ว GMP เพิ่มเป็น 12 แต่ลดดาเมจทุกเม็ด −60–70% · Focused Shot ตัดเหลือ 1 เม็ด (ข้อมูล support gem)</p>',
  },
  binds: [
    ['1', 'Rime Reaver', 'กดรัว'],
    ['2', 'Glacial Dash', 'วิ่ง + Snow-Track 3'],
    ['3', 'Tailwind Sweep', 'Snow-Track กลุ่ม'],
    ['4', 'Winter\'s Grasp', 'ดึงมอน'],
    ['5', 'Banner of the Piercing Gale', 'บอส'],
    ['6 / 7', 'Song of Valor · Rallying March', 'เปิดค้าง'],
  ],
  howto: [
    'เปิด <b>Song of Valor</b> + <b>Rallying March</b> ค้างไว้',
    '<b>Glacial Dash</b> เข้ากลางกลุ่ม (ติด Snow-Tracked 3 stack ตัวที่โดน)',
    'กลุ่มกระจาย: <b>Tailwind Sweep</b> แล้ว <b>Winter\'s Grasp</b> ดึงเข้ามา',
    '<b>Rime Reaver</b> 1–2 ครั้ง — เม็ดทะลุ + แตกเป็นเศษใส่ตัวที่ติด Snow-Track · ตัวที่ตายระเบิด Profane Explosion ต่อ',
    'บอส: ปัก <b>Banner of the Piercing Gale</b> → Glacial Dash ใส่บอส → ยืนชิดกด Rime Reaver รัว · Dash ซ้ำทุก ~3 วิ ให้มี Snow-Track',
  ],
  faq: [
    ['ทำไมเลือก Lich ไม่ใช่ Elementalist', 'Lich เคลียร์แรงกว่า (Profane Explosion ตอนฆ่า) · Elementalist ตีบอสแรงกว่า ~28% เพราะมี Elemental Penetration 18 · Beer เลือกเคลียร์ไว', true],
    ['ไม่ใช้ Chronomancer เลยจริงไหม', 'จริง — ทั้งสกิลและ passive · คลาสที่ 2 คือ Minstrel (ใน sim Minstrel ดีสุดเมื่อรวมบอส + เคลียร์)'],
    ['ตัวเลขในเว็บเชื่อได้แค่ไหน', 'ใช้เทียบกันเองเท่านั้น · sim ตัวนี้เพิ่งแก้บั๊กใหญ่ไป 6 จุดในวันเดียว (หลุมดำ Anti-Gravity Smash, ascendancy, GMP ฯลฯ) — เล่นแล้วเจออะไรไม่ตรง บอกมาพร้อมรูป'],
    ['Steady Hand ตัด crit คุ้มไหม', 'คุ้มใน sim: Total Damage 20% MORE แลก crit damage −100% · sim ยังไม่นับ crit จาก gear'],
    ['รีเซ็ตแต้มได้ไหม', 'ได้ — <b>Minor Reset Potion</b> 10 respec point คลิกขวา node · <b>Major Reset Potion</b> คืนทั้งหมวด'],
  ],
});
