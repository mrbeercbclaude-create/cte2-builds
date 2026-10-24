(window.BUILDS = window.BUILDS || {}).summoner = Object.assign(window.BUILDS.summoner || {}, {
  char: 'Mika', title: 'Undead Summoner', version: '1.0', updated: '2026-10-24', status: 'Lv 1 · เริ่มใหม่',
  tags: [['Summoner', 'gold'], ['Zombie'], ['Caster'], ['Necromancer', 'gold'], ['ยังไม่เทสในเกม', 'red']],
  sub: 'เรียก Zombie เป็นกองทัพ (ฐาน 3 ตัว → 11 ตัวจาก talent + ascendancy → ~15 ตัวเมื่อได้ของ) · บัฟพวกเดียวกันด้วยเพลงของ Minstrel · ตัวเราอยู่หลังกอง',
  meta: [['คลาส', 'Warlock + Minstrel'], ['Ascendancy', 'Necromancer'], ['จุดเริ่ม Talent', 'Mage (The Staff)'], ['เกราะ', 'Cloth']],
  summary: {
    minis: [
      ['Stat', 'INT หลัก', 'DEX แค่ถึง req ของ totem / vest (~10–16)'],
      ['สกิลหลัก', 'Summon Zombie', 'อยู่ 10 นาที · นับโควต้า undead · เสกจนเต็ม'],
      ['เสริม', 'Skeletons + Wisp', 'ไม่นับโควต้า · ใช้ตอนบอส / เพิ่มดาเมจ'],
      ['บัฟ', 'Valor + Rallying March', 'Hymn 1 อัน + March เปิดคู่กันได้'],
    ],
    notes: [
      ['warn', '<b>โควต้า undead นับแค่ Zombie</b> — Skeleton (3 ตัว 20 วิ) กับ Wisp ไม่นับ (ไฟล์สกิล <code>counts_towards_max_summons</code>) · จำนวน Zombie สูงสุด = ฐาน 3 + ของที่บวก "Maximum Undead Summons"'],
      ['', '<b>จำนวน Zombie ตามช่วง</b> · เริ่ม 3 → talent แต้ม 12: <b>6</b> → ascendancy แต้ม 3: <b>7</b> → ascendancy แต้ม 7: <b>10</b> → talent แต้ม 43: <b>11</b> → ของ: Wraithlord +2 · Boneshade +1 · Grave Caller set +1'],
      ['warn', 'Build นี้วางจากไฟล์เกมล้วน ยังไม่ได้เล่นจริง — เล่นแล้วเจออะไรแปลก (zombie ตีเบา / ตายเร็ว / มานาไม่พอ) ส่งรูปมา จะปรับให้'],
    ],
  },
  stash: {
    when: 'สแกนจากเซฟ 2026-10-24',
    intro: 'อ่านจากไฟล์เซฟเซิฟของ PonderingBaby (กระเป๋า + Master Bag + curios) · <b>ใส่ของได้เมื่อเลเวลตัวละคร ≥ เลเวลของ</b> (โค้ด <code>canPlayerWear</code>) — Mika Lv 1 เลยใส่ได้ทีละชิ้นตามเลเวล · ของที่ Raptor สวมอยู่ไม่ต้องถอด',
    rows: [
      ['3', 'อาวุธ', '<b>Cursed Staff</b> (Rare · Lv 3)<div class="small">Warlord\'s · Water Damage · Heal Strength</div>', 'อาวุธแรก · staff เป็น mage weapon → ใช้ Summon Wisp ได้ทีหลัง · req INT 2'],
      ['6', 'แหวน', '<b>Diamond Ring</b> (Runeword base · 5 ช่อง · Lv 6)', 'ทำ runeword <b>Prism</b>: ใส่ <b>Ano → Owd → Fey</b> ตามลำดับ = Health 3–5% · Magic Shield 3–5% · Elemental Res 6–10 · rune มีครบ'],
      ['6', 'หมวก', '<b>Siege Helm</b> (Brigandine · Lv 6)<div class="small">Energy % · DEX</div>', 'หมวกชั่วคราว · req STR 3 / DEX 3'],
      ['7', 'หมวก', '<b>Golden Crown</b> (Chainmail · Lv 7)<div class="small">Mana/Energy % · STR</div>', 'ทางเลือกแทน Siege Helm · req STR 3 / INT 3'],
      ['13', 'มือซ้าย', '<b>Totem</b> (Runeword base · 4 ช่อง · Lv 13)', 'ทำ <b>Ancients\' Pledge</b>: <b>Cen → Mos → Dos</b> = Elemental Res +22 · Chaos Res +27 · Mana Regen 15–20% · req DEX 10 · (อีกอัน Lv 14 ทำ <b>Rhyme</b>: Mos → Ita)'],
      ['14', 'หมวก', '<b>Necro Helmet</b> (Cloth · Lv 14)<div class="small">ติด <b>Summon Damage +5–10%</b> มาในตัว · Energy % · Fire Res</div>', '<b>หมวกหลัก</b> จนได้ Wraithlord · req INT 11'],
      ['14', 'กางเกง', '<b>Cloth Leggings</b> (Lv 14)<div class="small">Mana/Energy % · Water Res</div>', 'req INT 11'],
      ['14', 'รองเท้า', '<b>Vest Boots</b> (Rare · Lv 14)<div class="small">Defense % · Health · Defensive buff effect</div>', 'ใส่จน Lv 15 · req INT/DEX 7'],
      ['15', 'รองเท้า', '<b>Vest Boots</b> (Runeword base · 3 ช่อง · Lv 15)', 'ทำ <b>Stealth</b>: <b>Ita → Fey</b> = Cast Speed 6–10% · Move Speed 10–15% · Chaos Res 13'],
      ['15', 'Jewel', '<b>INT jewel</b> (INT) · <b>INT jewel</b> (Aura Effect)', 'ใส่ jewel socket 2 ช่องที่ได้ตอน talent แต้ม ~30–35'],
      ['16', 'เสื้อ', '<b>Vest Chest</b> (Lv 16)<div class="small">Health · Lightning Res</div>', 'req INT/DEX 8'],
      ['16', 'แหวน 2', '<b>Sapphire Ring</b> (Lv 16)<div class="small">Runic: Spell Damage 4–20% · Water Res</div>', 'แหวนวงที่ 2'],
      ['ทุกเลเวล', 'Support gem', 'Summon Health ×2 · Summon Duration · <b>Small CDR (Rare 48%)</b> · Spell Damage (no crit)', 'Summon Health → Summon Zombie · Small CDR → Summon Skeletons (คูลดาวน์ 20 วิ)'],
      ['ทุกเลเวล', 'Aura gem', 'Mana Regen · Magic Shield · Magic Shield Regen', 'Mana Regen ก่อน (เสก zombie กินมานา 13–15 ต่อครั้ง)'],
      ['ทุกเลเวล', 'ของใช้', 'Health Potion ×48 · Sharpening Stone · Orb of Quality', 'กระเป๋าใช้ร่วมทุกตัว'],
    ],
    notes: [
      ['', '<b>Runeword</b> (อ่านจากโค้ด <code>hasMatchingRunesToCreate</code>): ใส่ rune ตามลำดับในสูตร ติดกัน · ช่องเหลือเกินได้ · rune ที่มี: Ita 7 · Mos 5 · Nos 4 · Cen 4 · Fey 4 · Dos 3 · Eno 3 · Ano 2 · Xer 2 · Har 1 · Owd 1'],
      ['warn', 'ของอีก ~70 ชิ้นในกระเป๋า (plate / scythe / bow / greatsword / spear) ไม่เหมาะกับ Mika — เก็บไว้ให้ Raptor หรือ salvage'],
    ],
  },
  equipment: {
    slots: [
      ['อาวุธ', 'Dagger / Staff', ['ต้องเป็น <b>mage weapon</b> (dagger · staff · scythe) ถึงใช้ Summon Wisp ได้ · Zombie / Skeleton ใช้อาวุธอะไรก็ได้', 'Dagger / staff = มือเดียว → ถือ tome / totem มือซ้ายได้', 'เป้า: <b>Boneshade</b> (staff · ดรอป Lv 40+) = +1 Zombie · Summon Damage 25–33% · Summon Health 25–33%', '!Undeath (runeword) = +2 Zombie แต่ Summon Damage −20–30% และยังขาด rune Und']],
      ['หมวก', 'Cloth', ['ฐาน <b>Necro Helmet</b> = Summon Damage +5–10% ติดมา', 'เป้า: <b>Wraithlord</b> (ดรอป Lv 40+) = <b>+2 Zombie</b> · +1 Golem · Summon Health', 'ทางเลือก: runeword <b>Overlord</b> (Bri → Xer → Ano → Nos) = +2 Zombie · Undead Damage 20–30% · ขาด rune Bri']],
      ['เสื้อ / กางเกง / รองเท้า', 'Cloth / Vest', ['Cloth = INT + Magic Shield (Wisp แรงตาม Magic Shield)', '<b>Bones of Ullr</b> (รองเท้า · Lv 1+) = Summon Damage +35% · เรียก Skeleton ตอนฆ่า', '<b>Bloodbond</b> (กางเกง vest · Lv 1+) = Summon Health 15–20% MORE', '<b>Rotting Legion</b> (กางเกง chainmail · Lv 50+) = Undead Damage 20–25% MORE', '<b>Weight of Leadership</b> (กางเกง · Lv 60+) = Summon Damage 30–40%']],
      ['แหวน / สร้อย / มือซ้าย', 'HP · Res · Mana', ['สร้อย: <b>Skull of Spirits</b> (Lv 1+) Summon Damage 20–25% · <b>Sidhebreath</b> (Lv 10+) Summon Health 40–50%', '<b>Grave Caller set</b>: Sidhebreath + Bones of Ullr + Wall of the Eyeless (tome) → 2 ชิ้น +1 Zombie · 3 ชิ้น Summon Damage 10% MORE', 'มือซ้าย: Tome (INT · Magic Shield) หรือ Totem runeword']],
    ],
    html: `<h3>Stat requirement</h3>
      <p class="small">สูตรจากโค้ดเกม: <code>ตัวคูณ × (2 + 2 × (เลเวล gear − 1))</code> · ตัวคูณ: Cloth / Staff / Tome INT 0.4 · Vest / Dagger INT 0.25 + DEX 0.25 · Totem DEX 0.4</p>
      <div class="tablewrap"><table class="tbl"><thead><tr><th>เลเวล gear</th><th>Cloth INT</th><th>Vest INT / DEX</th><th>Totem DEX</th></tr></thead>
      <tbody><tr><td>15</td><td>12</td><td>7 / 7</td><td>12</td></tr><tr><td>25</td><td>20</td><td>12 / 12</td><td>20</td></tr><tr><td>50</td><td>40</td><td>25 / 25</td><td>40</td></tr><tr><td>75</td><td>60</td><td>37 / 37</td><td>60</td></tr><tr><td>100</td><td>80</td><td>50 / 50</td><td>80</td></tr></tbody></table></div>`,
  },
  stats: {
    cols: [['int', 'Magic dmg · Mana · Mana regen · Magic Shield', 'ลงหลัก'], ['dex', 'Energy · Dodge · Cast/attack speed', 'แค่ถึง req totem / vest'], ['str', 'HP · Armor', 'ไม่ลง (ได้จาก node ระหว่างทาง)']],
    steps: ['INT ให้ถึง req ของ cloth ทุกชิ้น', 'DEX ให้ถึง req ของ totem / vest ที่ใส่อยู่', 'ที่เหลือ INT ทั้งหมด'],
  },
  dont: [
    '<b>Golemancer</b> — +1 Golem แต่ <b>−3 Zombie</b>',
    '<b>Blood Mage</b> — Mana −100% (เสกทุกอย่างใช้มานา)',
    '<b>All In (MS)</b> — Health −95%',
    '<b>Harmony</b> — Health −25% · Armor −25%',
  ],
  ascTable: [
    ['1–3', 'Act II · Defenders of the Nether II', 'Necromancer → INT → <b>Flesh Army</b><div class="small">+1 Zombie · Summon Health +35%</div>'],
    ['4–5', 'Act III · Slippery Swimmer', 'INT → <b>Minion Lord</b><div class="small">Summon Damage 20% MORE · Summon Duration +40%</div>'],
    ['6–7', 'Act V · They Knew You Were Coming', 'INT → <b>Infinite Army</b><div class="small">+3 Zombie · Summon Duration +25%</div>'],
    ['8–9', 'Epilogue · บอสธาตุ 4 ตัว', 'INT → <b>Sacrificial Minions</b><div class="small">Minion Explode 30% MORE · Chaos/Fire Pen +15%</div>'],
  ],
  ascNote: 'แต้ม ascendancy ได้จากเควส แชร์ทุกตัวละคร — ถ้า Raptor ทำเควสถึงไหนแล้ว Mika ได้แต้มเท่านั้นทันที (แต่เลือก node แยกต่อตัว) · ทางเดินต้องผ่าน Flesh Army → Minion Lord ก่อนถึง Infinite Army',
  skillNote: 'P = Passive ในต้นไม้คลาส (แต้ม Passive 0.5 / เลเวล) · ลำดับ 1–11 = แต้มสกิล (1 / เลเวล) · อัป Summon Zombie ให้เต็มก่อน แล้วค่อย Skeletons / Valor / March · Hymn เปิดได้ทีละอัน (Vigor → Valor) แต่ Rallying March ไม่ใช่ Hymn เปิดคู่ได้',
  gems: {
    socket: [['อาวุธ', 'Amethyst', 'Heal Strength (Healing Aura แรงขึ้น)', 'หรือ Emerald = Chaos Damage (Explode Minions)'], ['เกราะ', 'Opal', 'Health', 'หรือ Amethyst = Mana'], ['แหวน / สร้อย', 'Emerald', 'Skill Speed (เสกเร็วขึ้น)', 'หรือ Amethyst = INT ถ้าขาด req']],
    support: [
      ['Support gems → ต่อกับ Summon Zombie', ['Summon Damage', 'Aggressive Minions', 'Summon Health', 'Damage to Cursed (คู่ curse)']],
      ['Support gems → ต่อกับ Summon Skeletons', ['Small CDR / Rare CDR', 'Summon Damage', 'Aggressive Minions']],
    ],
    aura: ['<b>Mana Regen</b> — ช่วงแรก (มีแล้ว)', '<b>Summon Damage</b> — Summon Damage 20% MORE · ยังไม่มี หาให้ได้แล้วใส่แทนทันที', '<b>Magic Shield</b> — Wisp แรงตาม Magic Shield (มีแล้ว)'],
    jewels: ['Summon Damage (jewel INT / STR)', 'Summon Health', 'INT', 'Aura Effect', 'Watcher\'s Eye: Summon Damage 5–10% MORE'],
  },
  howto: [
    'เปิด <b>Song of Vigor</b> (ช่วงแรก) → เปลี่ยนเป็น <b>Song of Valor</b> ตั้งแต่ Lv 20 · Lv 25 เปิด <b>Rallying March</b> ค้างคู่กัน',
    'กด <b>Summon Zombie</b> จนครบโควต้า — อยู่ 10 นาที · ตัวไหนตายเสกเพิ่ม',
    'เดินนำ ให้ zombie รุม · ใช้ <b>Chilling Touch</b> ตีตัวที่อยากให้รุม (สั่งมินเนียน + ติด Splinter)',
    'กลุ่มใหญ่ / บอส: <b>Curse of Weakness</b> แล้ว <b>Summon Skeletons</b> (ยิงไกล 3 ตัว 20 วิ) + <b>Healing Aura</b> ฮีลกอง',
    'มินเนียนกระจาย / ติดกำแพง: <b>Return Summons</b> (เรียกกลับ + ฮีล)',
    'Lv 25+: เสก <b>Wisp</b> เพิ่ม · zombie ใกล้ตาย → <b>Explode Minions</b> แล้วเสกใหม่',
  ],
  faq: [
    ['สลับตัวละครแล้วของหายไหม', 'ไม่หาย — กระเป๋า + Master Bag ใช้ร่วมทุกตัว · ของที่สวม · support gem · aura gem · talent แยกต่อตัว (เห็นในเซฟเป็น <code>chareq</code> / <code>chargems</code> ต่อตัว)', true],
    ['ทำไม Mika ใส่ของ Lv 15 ไม่ได้', 'โค้ดเกมเช็ค <code>เลเวลของ &gt; เลเวลตัวละคร = ใส่ไม่ได้</code> แล้วค่อยเช็ค stat req · ดูตารางของในกระเป๋าว่าชิ้นไหนใส่ได้ตอนไหน'],
    ['Summoner keystone (25% LESS Damage) ทำ zombie เบาลงไหม', 'ยังไม่ยืนยัน — ลดดาเมจตัวเราแน่ · แลก +3 Zombie (6 ตัวแทน 3 ช่วงแรก) คุ้มแม้โดนด้วย · ถ้าเห็นมินเนียนตีเบาลงชัดหลังกด บอกมา'],
    ['เพลง Minstrel บัฟ zombie ไหม', 'คำอธิบายสกิลเขียนว่า "allies" — ปกติรวมมินเนียน แต่ยังไม่ได้เทสในเกม'],
    ['ของ +Spell Level (Tabula Rasa ฯลฯ) ช่วยไหม', 'ไม่ช่วยดาเมจ — โค้ด <code>LeveledValue</code> หารด้วยเลเวลสูงสุดที่รวมโบนัสแล้ว ใส่เท่าไหร่ก็ไม่เกินค่า max เดิม'],
    ['รีเซ็ตแต้มได้ไหม', 'ได้ — <b>Minor Reset Potion</b> 10 respec point คลิกขวา node · <b>Major Reset Potion</b> คืนทั้งหมวด'],
  ],
});
