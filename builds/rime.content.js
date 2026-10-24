(window.BUILDS = window.BUILDS || {}).rime = Object.assign(window.BUILDS.rime || {}, {
  char: 'ตัวที่ 3', title: 'Rime Reaver Trickster', version: '1.4', updated: '2026-10-25', status: 'Lv 31 · เพิ่งได้ Rime Reaver · ยังไม่เทส',
  tags: [['Clear speed', 'gold'], ['Cold'], ['Spear'], ['Melee'], ['Trickster', 'gold'], ['ยังไม่เทสในเกม', 'red']],
  sub: 'หมุนตัวยิงเม็ดน้ำแข็งทะลุรอบทิศ 3 รอบต่อการกด · ศัตรูที่ติด <b>Snow-Tracked</b> ทำให้เม็ดแตกเป็นเศษอีก 8 เม็ด · Trickster เพิ่มดาเมจวงกว้าง 15% MORE + ฟื้น energy / HP ทุก hit · เน้นเคลียร์แมพไว บอสพอไหว',
  meta: [['คลาส', 'Cryolancer + Minstrel'], ['Ascendancy', 'Trickster'], ['จุดเริ่ม Talent', 'Warrior (The Axe)'], ['อาวุธ', 'Spear (2 มือ)']],
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
      '<b>ตีบอสอ่อน</b> — ~180–220k ใน sim เทียบ Zap ของโชกุน ~360k · เม็ดยิงรอบทิศ บอสตัวเดียวโดนแค่บางเม็ด',
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
    intro: 'จัดอันดับทุกสกิลในเกม (858 แบบ) หลังแก้บั๊ก sim ทั้งหมด · แต่ละแถวหา talent tree 101 แต้มที่ดีที่สุดของโหมดนั้น · บอส = เป้าเดียว resist 50% · เคลียร์ = มอน 10 ตัว resist 10% · คลาสที่ 2 ไม่ใช้ Chronomancer ยกเว้นแถวของโชกุน',
    rows: [
      { name: 'Rime Reaver · Trickster', sub: 'ที่เลือก', boss: 220e3, clear: 1808e3, me: true },
      { name: 'Rime Reaver · Lich', sub: 'v1.0 เดิม', boss: 191e3, clear: 1757e3 },
      { name: 'Rime Reaver · Elementalist', sub: 'บอสดีกว่า เคลียร์เบากว่า', boss: 263e3, clear: 1682e3 },
      { name: 'Soul Siphon', sub: 'Sanguimancer · staff', boss: 120e3, clear: 1832e3 },
      { name: 'Thorn Bush', sub: 'Shaman · Gladiator · staff', boss: 450e3, clear: 1131e3 },
      { name: 'โชกุน: Zap', sub: 'Chronomancer · อ้างอิง', boss: 361e3, clear: 1034e3, ref: true },
    ],
    notes: [
      ['', 'เคลียร์: Rime Reaver Trickster อยู่กลุ่มบนสุดของเกม (ห่างอันดับ 1 ไม่ถึง 5% ซึ่งเล็กกว่าความคลาดเคลื่อนของ sim) และดีกว่า Soul Siphon มากตอนตีบอส · Trickster ชนะ Lich ทั้งบอสและเคลียร์ เพราะ Profane Explosion ของ Lich ระเบิดแน่แค่กับศัตรูติด curse'],
      ['warn', 'ยังไม่นับ: การป้องกัน · ailment · crit จาก gear · เศษน้ำแข็งจาก Snow-Track · บัฟเพลง · บอส sim ให้โดน 3 เม็ด ของจริงอาจน้อยกว่า · เลขของโชกุนมาจากรอบจัดอันดับเดียวกัน (คนละ ascendancy)'],
    ],
  },
  variants: [
    { name: 'เคลียร์แมพ', sub: 'ตั้งค่าหลัก · tree ในหน้านี้ปรับมาเพื่อเคลียร์ (1.81M)', items: [
      'Support Rime Reaver: <b>Melee Damage · Cold Damage · Expanded Area · Cold Penetration · Mageblade</b>',
      'ธง: <b>Banner of the Piercing Gale</b> หรือไม่ปักก็ได้ (เดินเร็วกว่า)',
      'Hymn: <b>Song of Valor</b> + <b>Rallying March</b>',
      'วิ่งด้วย Glacial Dash เข้ากลุ่ม → Rime Reaver 1–2 ครั้ง → ไปกลุ่มถัดไป',
    ] },
    { name: 'ตีบอส', sub: 'tree เดิม ~178k · ถ้าล้าง tree เป็นแบบตีบอส ~220k', items: [
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
      'Lv 30: <b>Rime Reaver</b> → อัพ +1 ทุกครั้งที่เลเวลขึ้น (เกมล็อก: เลเวลตัวต้องมากกว่า req สกิล + เลเวลสกิล)',
    ] },
  ],
  checklist: {
    intro: 'ทำตอนได้ Rime Reaver (Lv 30) · ติ๊กไว้ได้ เว็บจำในเครื่องนี้',
    items: [
      'Rime Reaver ยิงเม็ด<b>รอบตัว</b>และ<b>ทะลุ</b>มอนหลายตัว · กด 1 ครั้งได้ 3 รอบ',
      'Tailwind Sweep ก่อน → เม็ดที่โดนมอน<b>แตกเป็นเศษ</b>ยิงต่อ (เห็นเม็ดเล็กพุ่งออกจากตัวมอน)',
      'ใส่ support 5 อันแล้ว<b>กดรัว 10 วิ energy ไม่หมด</b> · ถ้าหมด เปิด Song of Vigor / ใส่ Energy Regen Augment',
      'บอส: ยืนชิดแล้วนับตัวเลขดาเมจที่เด้งต่อรอบ (sim คิดว่าโดน 3 เม็ด + วงรอบตัว)',
      'ascendancy 4–5 (Resourceful Thief): กดรัวแล้ว <b>energy / HP เด้งขึ้นทุก hit</b>',
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
    steps: ['STR ให้ถึง req ของ spear + brigandine = <b>ครึ่งหนึ่งของเลเวล gear</b> (gear Lv 31 → STR 16)', 'ที่เหลือ DEX ทั้งหมด · ได้ 1 แต้ม / เลเวล → ทุก 2 เลเวล: STR 1 · DEX ที่เหลือ'],
    html: '<p class="small">ดาเมจ Rime Reaver = weapon damage × 1.3 + <b>Energy × 0.13</b> (ส่วน energy สูงสุด 2 เท่าของส่วนอาวุธ · ไฟล์ <code>rime_reaver</code> value calc) · Icy Killer เพิ่ม Cold Damage ตาม % Energy ด้วย</p>',
  },
  dont: [
    'อัพ <b>Frostbite Thrust</b> เพิ่มหลัง Lv 30 — เลิกใช้แล้ว',
    'อัพ <b>Glacial Dash</b> / <b>Song of Vigor</b> เกิน 1 — เลเวลไม่เพิ่ม Snow-Track / cooldown / ของที่เราใช้',
    'อัพ <b>Tailwind Sweep</b> / <b>Banner</b> ก่อน March / Valor / Grasp ตันตามเลเวล',
    '<b>Blood Mage</b> — Energy −100% (Rime Reaver ใช้ energy)',
    'node <b>Critical</b> ทุกแบบ — Steady Hand ตัด crit damage −100% แล้ว',
    'node <b>Physical</b> — Elemental Purity ตัด Physical −100% (ดาเมจเราเป็น Cold ล้วน)',
    'Keystone สาย <b>Mana</b> — Icy Killer ลด Mana 25% MORE',
  ],
  ascTable: [
    ['1–3', 'Act II · Defenders of the Nether II', 'Trickster → INT → <b>Total Frenzy</b><div class="small">Area Damage 15% MORE · AoE +20% · Area cast time +30%</div>'],
    ['4–5', 'Act III · Slippery Swimmer', 'DEX → <b>Resourceful Thief</b><div class="small">+2 Health / Mana / Energy / Magic Shield ต่อ hit — เม็ดทะลุโดนหลายตัว = energy ไม่หมด</div>'],
    ['6–7', 'Act V · They Knew You Were Coming', 'DEX → <b>Master of Phasing</b><div class="small">Move Speed +15% · กัน Slow · Knockback resist 50% — วิ่งระหว่างกลุ่มเร็วขึ้น</div>'],
    ['8–9', 'Epilogue · บอสธาตุ 4 ตัว', 'DEX → <b>Trickery</b><div class="small">Dodge +12% · Magic Shield +12% · แปลง dodge ↔ magic shield</div>'],
  ],
  ascNote: 'แต้ม ascendancy แชร์ทุกตัวละคร (ได้จากเควส) แต่เลือก node แยกต่อตัว · Total Frenzy เป็นตัวเดียวที่เพิ่มดาเมจ อีก 3 ตัวเพื่อ energy / ความเร็ว / ความรอด · ทางเลือก: Elementalist ตีบอสแรงกว่า ~20% (Elemental Penetration 18) แต่เคลียร์เบากว่า ~7%',
  skillNote: 'P = Passive ในต้นไม้คลาส · แต้มสกิล 1 / เลเวล (Lv 100 = 100 + โบนัสเควส 10) · แต้ม Passive แยกกอง <b>0.5 / เลเวล</b> (Lv 100 = 50 + โบนัส 10) · Hymn เปิดได้ทีละอัน (Vigor → Valor) แต่ Rallying March ไม่ใช่ Hymn เปิดคู่ได้<h3>หลัง Lv 30: ลำดับอัพแต้มสกิล</h3><p class="small">เกมล็อกเลเวลสกิล: เลเวลตัวต้อง<b>มากกว่า</b> req ของสกิล + เลเวลสกิล → Rime Reaver (req 30) ขึ้นได้ ~1 ต่อเลเวลตัว เต็ม 20 ราว Lv 50 · แต้มที่เหลือลงสกิล req ต่ำกว่าจนตันตามเลเวล</p><ol class="steps"><li>เลเวลขึ้นทุกครั้ง: <b>Rime Reaver +1</b> ก่อน</li><li><b>Song of Valor</b> (req 20) → 12 (Total Damage 8 → 16 · บัฟอยู่ 12 วิ = cooldown 12 วิ กดใหม่ทุก 12 วิ · ใส่ 1 แต้มแล้วเช็คว่าบัฟขึ้นที่ตัวเองก่อน)</li><li><b>Rallying March</b> (req 25) → 12 (Total Damage 30 → 60) · ⚠️ ร่าย 7 วิ บัฟติดแค่ 3 วิหลังร่ายจบ → กดตอนวิ่งไปกลุ่มถัดไป (เดินได้เต็มสปีด) ไม่ใช่ตอนตี · ตีบอสแทบไม่ได้ใช้</li><li><b>Winter\'s Grasp</b> → 20 (รัศมีดูด +2% → +32%)</li><li><b>Banner of the Piercing Gale</b> → 12 (บอส)</li><li>เหลือ: Tailwind Sweep → 5</li></ol><p class="small">แต้มที่ต้องใช้รวม ~82 · มีถึง Lv 100 = 100+ → ไม่ขาด แค่ต้องลงให้ถูกลำดับ</p><h3>Passive: ลำดับ</h3><ol class="steps"><li><b>p_cdr</b> (Skill Speed) → 8</li><li><b>p_inc_aoe</b> (Area) → 8</li><li><b>p_ele_spear_damage_cry</b> → 8</li><li>เหลือ ~36 แต้ม: sim ไม่เห็นดาเมจเพิ่ม → ลงความอึด/energy เช่น <b>Dodge gained as Energy</b> (energy = ดาเมจ Rime Reaver · sim ไม่ได้นับ dodge) · <b>Energy Regen</b> — ยังไม่ได้วัด</li></ol>',
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
    '<b>Rime Reaver</b> 1–2 ครั้ง — เม็ดทะลุ + แตกเป็นเศษใส่ตัวที่ติด Snow-Track',
    'บอส: ปัก <b>Banner of the Piercing Gale</b> → Glacial Dash ใส่บอส → ยืนชิดกด Rime Reaver รัว · Dash ซ้ำทุก ~3 วิ ให้มี Snow-Track',
  ],
  faq: [
    ['ทำไมเปลี่ยนจาก Lich เป็น Trickster (v1.1)', 'หลังแก้บั๊ก sim: Profane Explosion ของ Lich ระเบิดแน่ 100% เฉพาะศัตรูติด curse (ไม่ติด = 25%) · Trickster ชนะ Lich ทั้งบอส (220k vs 191k) และเคลียร์ (1.81M vs 1.76M) · talent tree เหมือนเดิมทุก node เปลี่ยนแค่ ascendancy', true],
    ['ไม่ใช้ Chronomancer เลยจริงไหม', 'จริง — ทั้งสกิลและ passive · คลาสที่ 2 คือ Minstrel (ใน sim Minstrel ดีสุดเมื่อรวมบอส + เคลียร์)'],
    ['ตัวเลขในเว็บเชื่อได้แค่ไหน', 'ใช้เทียบกันเองเท่านั้น · sim ตัวนี้เพิ่งแก้บั๊กใหญ่ไป 6 จุดในวันเดียว (หลุมดำ Anti-Gravity Smash, ascendancy, GMP ฯลฯ) — เล่นแล้วเจออะไรไม่ตรง บอกมาพร้อมรูป'],
    ['Steady Hand ตัด crit คุ้มไหม', 'คุ้มใน sim: Total Damage 20% MORE แลก crit damage −100% · sim ยังไม่นับ crit จาก gear'],
    ['รีเซ็ตแต้มได้ไหม', 'ได้ — <b>Minor Reset Potion</b> 10 respec point คลิกขวา node · <b>Major Reset Potion</b> คืนทั้งหมวด'],
  ],
});
