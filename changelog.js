// Newest first. build = character name, or 'ทั้งหมด' for site-wide changes.
window.CHANGELOG = [
  { date: '2026-10-26', build: 'Mika', text: 'Arrow Storm v1.1 · เทสจริง: energy ไม่หมด 20 วิ · ไม่ต้องใช้ลูกธนู · ลูกธนูโดนมอนขนาดคน 33% · กลาง 69% · ใหญ่ 70% (ตรงกับที่คำนวณ)' },
  { date: '2026-10-26', build: 'Mika', text: 'สร้าง build <b>Arrow Storm Trickster</b> v1.0 (Hunter คลาสเดียว · ธนู) — คิดดาเมจจาก energy ที่ฟื้นทันจริง (sim ใหม่ sustain_tree) · เช็คกลไกในโค้ด: วงระเบิด 1 บล็อก โดนบอส ~60–72% · GMP/LMP/Area Focus ห้าม' },
  { date: '2026-10-26', build: 'Mika', text: 'Armageddon v1.3 · <b>เลิกใช้</b>: เทสจริงมานาหมดใน 2.26 วิ (sim เดิมไม่มีโมเดลมานา)' },
  { date: '2026-10-26', build: 'Mika', text: 'v1.2 · แก้: staff ไม่ใช่อาวุธ 2 มือ (เขียนผิดตามหน้า spear) → มือซ้ายใส่ <b>Tome</b> ได้' },
  { date: '2026-10-26', build: 'Mika', text: 'v1.1 · <b>แก้ build ที่ผิด</b>: เลิก Minstrel → Elementalist คลาสเดียว (Solo Class Bonus 10% MORE + ลดดาเมจ 5% · sim เดิมไม่รู้จัก) · เพิ่ม <b>Mage Circle</b> (Spell Damage 15–30% MORE) + <b>Mage Armor</b> ที่ v1.0 ตกหล่นเพราะ sim คิดแค่สกิลดาเมจ · ลำดับแต้มสำหรับ Mika Lv 33' },
  { date: '2026-10-26', build: 'ยังไม่สร้าง', text: 'สร้าง build <b>Armageddon Elementalist</b> v1.0 (Elementalist + Minstrel · staff) — กดค้างปุ่มเดียว ตีบอส ~507k · ตรวจกลไกในโค้ดแล้ว (Overheat 4 stack = ลูกไฟ ×2 + 40% MORE) · แก้ support: Crit Damage → Greater Conservation · ยังไม่เทสในเกม' },
  { date: '2026-10-25', build: 'ตัวที่ 3', text: 'v1.4 · Valor ขึ้นก่อน March · เตือน Rallying March ร่าย 7 วิ บัฟติด 3 วิหลังร่ายจบ = ใช้ตอนวิ่งระหว่างกลุ่ม ไม่ใช่ตอนตีบอส' },
  { date: '2026-10-25', build: 'ตัวที่ 3', text: 'v1.3 · แก้ลำดับแต้มสกิล: เกมล็อกเลเวลสกิลตามเลเวลตัว (ต้องมากกว่า req + เลเวลสกิล) → Rime Reaver ขึ้น +1 ต่อเลเวล เต็มราว Lv 50 · แต้มที่เหลือลง March → Valor → Grasp' },
  { date: '2026-10-25', build: 'ตัวที่ 3', text: 'v1.2 · ลำดับอัพแต้มสกิลหลัง Lv 30 (Rime → March → Valor → Grasp → Banner) + ลำดับ passive · สกิลที่อัพเกิน 1 แล้วเปลือง: Glacial Dash · Song of Vigor · Frostbite Thrust หลัง Lv 30 · STR = ครึ่งเลเวล gear' },
  { date: '2026-10-25', build: 'ตัวที่ 3', text: 'v1.1 · Ascendancy <b>Lich → Trickster</b> (แก้ sim: Profane Explosion ต้องมี curse) — บอส 191k → 220k · เคลียร์ 1.76M → 1.81M · talent tree เดิม · กราฟเทียบใหม่จากอันดับทั้งเกม' },
  { date: '2026-10-25', build: 'ตัวที่ 3', text: 'สร้าง build <b>Rime Reaver Lich</b> v1.0 (Cryolancer + Minstrel · spear) — เน้นเคลียร์ไว · ยังไม่เทสในเกม' },
  { date: '2026-10-25', build: 'ทั้งหมด', text: 'หน้า build มี section ใหม่: จุดเด่น/จุดอ่อน · แท็บ Variant (เคลียร์ / บอส / ช่วงเลเวล) · รอบเล่น · กราฟเทียบดาเมจจาก sim · checklist ทดสอบก่อนลงทุน · ปุ่มสกิล' },
  { date: '2026-10-24', build: 'Mika', text: 'สร้าง build <b>Undead Summoner</b> v1.0 (Warlock + Minstrel · Necromancer) + ตารางของในกระเป๋าที่ Mika ใส่ได้ตามเลเวล' },
  { date: '2026-10-24', build: 'Raptor', text: 'v1.1 · เพิ่มโน้ต: บอส armor สูง ให้ Shred ก่อน · เลเวล gear ต้องไม่เกินเลเวลตัว' },
  { date: '2026-10-24', build: 'ทั้งหมด', text: 'เว็บรองรับหลาย build · หน้าแรกเป็นหน้ารวม · talent ที่เพิ่มจำนวน summon แสดงเป็น +1 (เดิมขึ้น +1%)' },
  { date: '2026-10-23', build: 'Raptor', text: 'สร้าง build <b>Scythe Bleed Gladiator</b> v1.0' },
];
