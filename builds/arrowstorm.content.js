(window.BUILDS = window.BUILDS || {}).arrowstorm = Object.assign(window.BUILDS.arrowstorm || {}, {
  char: 'Mika', title: 'Arrow Storm Trickster', version: '1.2', updated: '2026-10-26', status: 'Mika Lv 33 · เทส energy + การโดนแล้ว',
  tags: [['กดค้างปุ่มเดียว', 'gold'], ['energy พอ', 'gold'], ['Physical'], ['Bow'], ['Hunter คลาสเดียว'], ['ยังไม่เทสในเกม', 'red']],
  sub: 'กดค้างแล้ว<b>ลูกธนูตกเป็นฝน</b>ใส่จุดที่เล็ง 5 ดอก/วิ · ใช้ <b>energy</b> จังหวะละ 2.33 (Armageddon ใช้มานา 8) · build นี้จัดทุกอย่าง (tree · support · passive) ให้ <b>energy ที่ฟื้นได้ ≥ ที่ใช้</b> — กดค้างได้ไม่หมด',
  meta: [['คลาส', 'Hunter คลาสเดียว'], ['Ascendancy', 'Trickster'], ['จุดเริ่ม Talent', 'Ranger (The Bow)'], ['อาวุธ', 'Bow']],
  summary: {
    minis: [
      ['สกิลหลัก', 'Arrow Storm', 'req Lv 30 · channel · energy 2.33/จังหวะ · ลูกธนู 2.45× ดาเมจอาวุธ'],
      ['Support', 'Focused Shot + Brutality', '+30% MORE / +27% MORE · Greater Conservation ตอน Lv 40'],
      ['Stat', 'DEX', 'Energy · req ธนู + เกราะหนัง'],
      ['คลาสที่ 2', 'ไม่ลง', 'Solo Class Bonus 10% MORE + ลดดาเมจ 5%'],
    ],
    notes: [
      ['', '<b>✅ เทสจริงบน Mika (2026-10-26):</b> กดค้าง Arrow Storm ได้ 20 วิ energy ไม่หมด · ไม่ต้องมีลูกธนูในตัว · ยิงมอนยืนนิ่ง (ตัวนับบนเซิฟ) ลูกธนูโดน: <b>ขนาดคน 33%</b> (33/100) · <b>กลาง 69%</b> (62/90) · <b>ใหญ่ 70%</b> (77/110) — ตรงกับที่คำนวณ (เล็ก ~42% · กลาง ~60–65% · ใหญ่ ~76%) ตัวเล็กต่ำกว่านิดเพราะเล็งไม่ตรงกลางเป๊ะ'],
      ['warn', '<b>ทำไมเปลี่ยนจาก Armageddon:</b> เทสจริงบน Mika — มานาหมดใน 2.26 วิ (กิน ~250/วิ ฟื้น 80/วิ) · sim เดิมไม่มีโมเดลมานาเลย · build นี้คำนวณใหม่ด้วย <code>sustain_tree.py</code>: ดาเมจ = ค่าที่ <b>energy ฟื้นทัน</b> เท่านั้น'],
      ['', 'เช็คในโค้ด/ข้อมูลเกมแล้ว: กดค้าง = 1 จังหวะต่อ 20 tick (เร็วขึ้นตาม Attack Skill Speed แต่ channel ได้แค่ครึ่ง) · จังหวะละ 5 ดอก (ทุก 4 tick) · ลูกธนูตกจาก ~5 บล็อกเหนือจุดเล็ง สุ่มห่าง ±2 บล็อก ระเบิดวง <b>1 บล็อก</b> → โดนบอสขนาดกลาง ~60% (Expanded Area +30% → 72%) · energy regen ไม่โดนลดตอนสู้ · regen ทุก 1 วิ'],
      ['', 'Support ที่เช็คแล้ว: <b>Focused Shot</b> +30% MORE ไม่เสียอะไร (ลูกธนูเป็นบล็อกตก ไม่ใช่ projectile — จำนวน projectile ไม่มีผล แต่แท็ก projectile ทำให้ได้ดาเมจ) · <b>GMP / LMP ห้าม</b> (ได้แต่โดนลดดาเมจ) · <b>Area Focus ห้าม</b> (AoE −30% → โดนบอสเหลือ ~42%)'],
    ],
  },
  strengths: {
    pros: [
      '<b>กดค้างได้จริง</b> — Lv 33: ใช้ ~19–24 energy/วิ · ฟื้น ~25 (+48% เมื่อลง p_ene_regen ครบ = ~37)',
      'ฟีลเดียวกับ comet — ฝนลูกธนูใส่จุดที่เล็ง ยืนไกลได้ 10 บล็อก',
      'Lv 100 (ประมาณ · ดาเมจที่ energy ทัน): บอส ~220k · เคลียร์ ~280k',
      'ไม่ซ้ำใคร: Raptor = Rime · โชกุน = Chronomancer',
    ],
    cons: [
      'บอสตัวเล็ก/วิ่งเร็วโดนน้อย — วงระเบิดลูกธนูแค่ 1 บล็อก (ใส่ Expanded Area)',
      'บอสที่บินสูงเกินวงระเบิดตีไม่โดน (ลูกธนูระเบิดที่พื้น)',
      'กดค้างเดินช้า (<code>slows_when_casting</code>)',
      'energy ต่ำกว่า 10% → เกมใส่ Slowness + Weakness (ปล่อยปุ่มพักก่อนถึง)',
    ],
  },
  combo: {
    title: 'รอบเล่น', pill: 'ปุ่มเดียว',
    intro: 'เล็ง<b>พื้น</b>ใต้มอน (ไม่เกิน 10 บล็อก) แล้วกด Arrow Storm ค้าง · energy ลดเหลือ ~20% ให้ปล่อยพักสั้นๆ',
    steps: [
      { id: 'arrow_storm', role: 'สกิลหลัก', name: 'Arrow Storm (กดค้าง)', desc: 'ฝนลูกธนู 5 ดอก/จังหวะ · ดอกละ 2.45× ดาเมจอาวุธ · วงระเบิด 1 บล็อก', main: true },
      { id: 'hunter_potion', role: 'ฮีล', name: "Hunter's Potion", desc: 'เลือดน้อย → กด · cooldown 12 วิ' },
    ],
    notes: [['warn', 'เล็งพื้น ไม่ใช่ตัวมอน — เส้นเล็งชนแค่บล็อก ทะลุตัวมอน']],
  },
  sim: {
    pill: 'Lv 100 · ดาเมจที่ energy ทัน',
    intro: 'ทุกแถวในกราฟนี้คิดแบบใหม่: dps × min(1, ฟื้น/ใช้) · support เลือกใหม่ให้คุ้ม energy · Arrow Storm นับลูกธนูโดนบอส 60–72% (เช็คจากโค้ด) · Solo Class 10%',
    rows: [
      { name: 'Arrow Storm · Trickster', sub: 'ที่เลือก', boss: 219e3, clear: 279e3, me: true },
      { name: 'Arrow Storm · Gladiator', sub: 'tree เคลียร์', boss: 126e3, clear: 325e3 },
      { name: 'Rime Reaver · Trickster', sub: 'Raptor · tree เดิม', boss: 149e3, clear: 884e3 },
      { name: 'Armageddon', sub: 'เลิกใช้ · มานาไม่พอ', boss: 23e3, clear: 58e3 },
    ],
    notes: [
      ['', 'Rime Reaver / Armageddon ในกราฟใช้ tree เดิมของ sim (ไม่ได้จัด tree ใหม่ให้ประหยัด) — แค่ให้เห็นภาพ'],
      ['warn', 'ยังไม่นับ: การป้องกัน · bleed/ailment · ขนาดบอสจริงแต่ละตัว · ตัวเลขทั้งหมดยังไม่ได้เทสในเกม'],
    ],
  },
  variants: [
    { name: 'Lv 33 (ตอนนี้)', sub: 'ช่อง support เปิดตามเลเวลสกิล', items: [
      'Arrow Storm 4 (เพดาน) → ใส่ <b>Focused Shot</b> ก่อน → <b>Brutality</b> → <b>Expanded Area</b>',
      'Lv 40: <b>Greater Conservation</b> (energy ×0.8 + ดาเมจ non-crit 18% MORE)',
      'Passive 16 แต้ม: <b>p_proj_dmg 8 + p_ene_regen 8</b>',
    ] },
    { name: 'ตีบอส', sub: 'tree ในหน้านี้', items: [
      'Support: <b>Focused Shot · Brutality · Expanded Area · Greater Conservation</b>',
      'เล็งพื้นใต้บอส ยืนนิ่งกดค้าง · บอสวิ่ง → เล็งตาม',
    ] },
    { name: 'เคลียร์', sub: 'tree เดิม ~280k', items: ['เล็งกลางกลุ่ม · ฝนตกในวง ~5×5 บล็อก', 'กลุ่มกระจาย → เดินเข้ากลาง (กดค้างเดินช้า)'] },
  ],
  checklist: {
    intro: 'ทำตอนเปลี่ยน Mika เสร็จ · ติ๊กไว้ได้ เว็บจำในเครื่องนี้',
    items: [
      'หน้าคลาสขึ้น <b>Solo Class Bonus</b> (Hunter อย่างเดียว)',
      'กด Arrow Storm ค้าง 20 วิ (ใส่ Focused Shot + Brutality) → <b>energy ไม่หมด</b> · ถ้าหมด บอกวินาทีมา',
      'ต้องมีลูกธนูในตัวไหม (ถ้าใช้ไม่ได้ตอนไม่มีลูกธนู บอกมา)',
      'ถือ Totem มือซ้ายพร้อมธนู — <b>ไม่ได้</b> (เทสแล้ว)',
      'บอส: นับว่าลูกธนูโดนกี่ดอกจาก 5',
    ],
  },
  equipment: {
    slots: [
      ['อาวุธ', 'Bow', ['ดาเมจ Arrow Storm = <b>weapon damage × 2.45</b> ต่อดอก → ธนูดาเมจสูงสุด', 'หา Weapon Damage %, Physical Damage, Armor Penetration'],],
      ['มือซ้าย', 'ใช้ไม่ได้', ['เทสแล้ว: ถือ Totem คู่ธนูไม่ได้ · ธนูเป็นอาวุธ 2 มือ (<code>can_dual_wield = false</code>)'],],
      ['เกราะ', 'Leather (DEX)', ['หา <b>Energy %</b>, Health, DEX, Resistance'],],
      ['แหวน / สร้อย', 'Energy · Phys', ['หา <b>Energy Regen</b>, Physical Damage, DEX, Resistance', '<b>ไม่ต้องหา crit</b> — Steady Hand ตัด crit damage', 'Energy on Hit = leech ติดเพดาน 5%/วิ ไม่คุ้ม'],],
    ],
  },
  stats: {
    cols: [['dex', 'Energy · Dodge · req ธนู/หนัง', 'ลงหมด'], ['str', 'HP · Armor', 'ไม่ลง'], ['int', 'Mana · MS', 'ไม่ลง']],
    steps: ['DEX ทั้งหมด (DEX 1 = Energy +10 · Dodge +1%) · ธนู/หนังต้องการ DEX ≈ 0.8 × เลเวล gear'],
  },
  dont: [
    'ลงแต้ม<b>คลาสที่ 2</b> — Solo Class Bonus หาย',
    'Support <b>GMP / LMP</b> — ลูกธนูไม่ใช่ projectile ได้แต่โดนลดดาเมจ',
    'Support <b>Area Focus</b> — AoE −30% ลูกธนูโดนบอสน้อยลง',
    'Support <b>Faster Cast</b> — ใช้กับสกิล magic เท่านั้น',
    'Crit ทุกแบบ — Steady Hand',
  ],
  ascTable: [
    ['1–3', 'Act II · Defenders of the Nether II', 'Trickster → INT → <b>Total Frenzy</b><div class="small">Area Damage 15% MORE · AoE +20% (ลูกธนูโดนบอสมากขึ้น)</div>'],
    ['4–5', 'Act III · Slippery Swimmer', 'DEX → <b>Trickery</b><div class="small">Dodge / Magic Shield +12% · แปลงกัน</div>'],
    ['6–7', 'Act V · They Knew You Were Coming', 'INT → <b>Slippery</b><div class="small">Dodge 12% MORE · 20% โอกาสลดดาเมจ</div>'],
    ['8–9', 'Epilogue · บอสธาตุ 4 ตัว', 'INT → <b>Thick Cloak</b><div class="small">Magic Shield 15% MORE · ลดดาเมจ 6%</div>'],
  ],
  ascNote: 'Mika มี 3 แต้ม (Act II) → Trickster → INT → Total Frenzy · ใช้ Major Reset Ascendancy ก่อนเพราะเคยลง Elementalist',
  skillNote: 'P = Passive · แต้มสกิล 1 / เลเวล · แต้ม Passive 0.5 / เลเวล · <b>ทุกแต้มลง Hunter</b><h3>Mika Lv 33</h3><ol class="steps"><li><b>Arrow Storm 4</b> (เพดาน = เลเวลตัว − 29)</li><li><b>Hunter\'s Potion 4</b> (ฮีล)</li><li>ที่เหลือ<b>เก็บไว้</b> — อัพ Arrow Storm +1 ทุกเลเวล (เต็ม 20 ราว Lv 49)</li></ol><h3>Passive</h3><ol class="steps"><li><b>p_proj_dmg</b> → 8</li><li><b>p_ene_regen</b> → 8</li></ol><p class="small">sim เลือก p_crit_dmg ด้วย แต่ Steady Hand ตัด crit damage → ไม่ต้องลง</p>',
  gems: {
    socket: [['อาวุธ', 'Opal', 'Physical Damage +14%', ''], ['เกราะ', 'Azurite', 'Energy +21%', 'หรือ Opal = Health'], ['แหวน / สร้อย', 'Azurite', 'DEX +7', 'หรือ Sapphire = Elemental Resistance']],
    support: [['Support → Arrow Storm', ['Focused Shot', 'Brutality', 'Expanded Area', 'Greater Conservation (Lv 40)']]],
    aura: ['Physical / Energy Regen augment'],
    jewels: ['Physical Damage', 'Energy %', 'DEX', 'Elemental Resistance', 'Health'],
  },
  binds: [['1', 'Arrow Storm', 'กดค้าง'], ['2', "Hunter's Potion", 'เลือดน้อย']],
  howto: ['ใส่ support ใน Arrow Storm', 'เล็งพื้นใต้มอน ไม่เกิน 10 บล็อก', 'กดค้าง Arrow Storm', 'energy ใกล้ 10% → ปล่อยพัก 2–3 วิ'],
  faq: [
    ['ครั้งนี้เชื่อได้แค่ไหน', 'ต่างจากเดิม: คิดจาก<b>ดาเมจที่ energy ทัน</b> · tree ทั้งต้นจัดใหม่ด้วย sim ที่มี energy · กลไก Arrow Storm อ่านจากโค้ด (จังหวะ · จำนวนดอก · วงระเบิด · โอกาสโดนบอส) · ยังไม่ได้เทสในเกม — ทำ checklist แล้วส่งเลขมา', true],
    ['ทำไม Trickster ไม่ใช่ Hunter ascendancy', 'จัด tree ใหม่ทั้ง 3 แบบ: Trickster บอส 219k / เคลียร์ 279k · Gladiator 126k / 325k · Hunter (รอบแรก) ~205k / ~260k → Trickster สมดุลสุด'],
  ],
});
