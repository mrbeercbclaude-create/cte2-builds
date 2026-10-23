(function () {
  const D = window.BUILD_DATA;
  const NS = 'http://www.w3.org/2000/svg';
  const C = 12; // px per grid cell
  const tip = document.getElementById('tip');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const clean = s => String(s || '').replace(/\[VAL\d\]%?\s*/g, '').replace(/\s+/g, ' ').trim();
  const el = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  const TYPE = { STAT: 'Small', SPECIAL: 'Notable', MAJOR: 'Keystone', ASC: 'Ascendancy', CENTER: 'Center' };
  const radius = n => n.e ? 8 : n.t === 'MAJOR' ? 9 : n.t === 'SPECIAL' ? 6 : n.t === 'ASC' ? 9 : 3.6;

  // ---------- tooltip ----------
  function showTip(ev, html) {
    tip.innerHTML = html; tip.hidden = false;
    const x = (ev.touches ? ev.touches[0].clientX : ev.clientX), y = (ev.touches ? ev.touches[0].clientY : ev.clientY);
    const r = tip.getBoundingClientRect();
    tip.style.left = Math.min(window.innerWidth - r.width - 8, x + 14) + 'px';
    tip.style.top = Math.min(window.innerHeight - r.height - 8, y + 14) + 'px';
  }
  const hideTip = () => { tip.hidden = true; };
  document.addEventListener('scroll', hideTip, { passive: true });
  function nodeTip(n, ord) {
    const st = (n.s || []).map(s => `<li>${esc(clean(s))}</li>`).join('');
    return `<div class="tt">${TYPE[n.t] || n.t}${n.e ? ' · จุดเริ่ม' : ''}</div><div class="tn">${esc(n.n)}</div>${st ? `<ul>${st}</ul>` : ''}${ord ? `<div class="to">ลำดับที่ ${ord.k} · ${esc(ord.phaseName)}</div>` : ''}`;
  }

  // ---------- passive tree ----------
  const svg = document.getElementById('treeSvg');
  const box = document.getElementById('treeBox');
  const byPos = new Map(D.tree.nodes.map(n => [n.x + ',' + n.y, n]));
  const route = D.route.nodes.map(r => Object.assign({}, r, { phaseName: D.route.phases[r.phase] }));
  const routeBy = new Map(route.map(r => [r.x + ',' + r.y, r]));
  const PHASES = [
    { name: 'Bleed core', lv: 'Lv 1–13', desc: 'Warrior → STR → ก้อน Bleed + Bloody Dance' },
    { name: 'Melee + HP', lv: 'Lv 14–22', desc: 'Melee Skill Damage + HP/Armor ใกล้จุดเริ่ม' },
    { name: 'Bleed duration', lv: 'Lv 23–26', desc: 'Armor Pen + Bleed Duration ชดเชย Bloody Dance' },
    { name: 'Armor + AS', lv: 'Lv 27–38', desc: 'Major Armor · Major Attack Speed · Jewel socket' },
    { name: 'Physical', lv: 'Lv 39–48', desc: 'Physical DoT + All Physical' },
    { name: 'Bleed ตะวันตก', lv: 'Lv 49–61', desc: 'Major Bleed Damage · Marauder · Jewel socket' },
    { name: 'Bleed ไกล', lv: 'Lv 62–66', desc: 'Major Bleed Damage อีกตัว (ผ่าน Sword Damage 2 แต้ม)' },
    { name: 'Scythe', lv: 'Lv 67–76', desc: 'Scythe Damage + Major · Jewel socket · Major Health' },
  ];
  const W = 173 * C, H = 138 * C;
  const gBase = el('g', {}, svg), gRoute = el('g', {}, svg), gNodes = el('g', {}, svg), gNum = el('g', {}, svg);
  // base lines
  let d = '';
  for (const s of D.tree.segs) d += `M${s[0] * C} ${s[1] * C}L${s[2] * C} ${s[3] * C}`;
  el('path', { d, stroke: '#2b2e44', 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' }, gBase);
  // route lines per phase
  const routePaths = [];
  route.forEach(r => {
    let p = '';
    for (const s of r.seg) p += `M${s[0] * C} ${s[1] * C}L${s[2] * C} ${s[3] * C}`;
    if (p) routePaths.push({ phase: r.phase, el: el('path', { d: p, stroke: '#f5b942', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round' }, gRoute) });
  });
  // nodes
  const nodeEls = [];
  for (const n of D.tree.nodes) {
    if (n.t === 'CENTER') continue;
    const r = radius(n), cx = n.x * C, cy = n.y * C;
    const g = el('g', { class: 'node' }, gNodes);
    const ring = el('circle', { cx, cy, r: r + 1, fill: '#151622', stroke: n.t === 'MAJOR' ? '#8a6a30' : n.t === 'SPECIAL' || n.e ? '#5d6080' : '#3f4259', 'stroke-width': n.t === 'STAT' ? 1.2 : 2 }, g);
    if (n.i && n.t !== 'STAT') el('image', { href: 'icons/' + n.i, x: cx - r * .8, y: cy - r * .8, width: r * 1.6, height: r * 1.6, style: 'image-rendering:pixelated' }, g);
    const ord = routeBy.get(n.x + ',' + n.y);
    nodeEls.push({ n, ring, g, ord });
    g.addEventListener('mouseenter', ev => showTip(ev, nodeTip(n, ord)));
    g.addEventListener('mousemove', ev => showTip(ev, nodeTip(n, ord)));
    g.addEventListener('mouseleave', hideTip);
    g.addEventListener('click', ev => { ev.stopPropagation(); showTip(ev, nodeTip(n, ord)); });
  }
  const numEls = route.map(r => {
    const t = el('text', { x: r.x * C, y: r.y * C - radius(byPos.get(r.x + ',' + r.y)) - 3, 'text-anchor': 'middle', 'font-size': 7, 'font-weight': 700, fill: '#ffd57a', stroke: '#08090e', 'stroke-width': 2.2, 'paint-order': 'stroke', 'pointer-events': 'none' }, gNum);
    t.textContent = r.k; return { r, t };
  });

  let cur = PHASES.length; // show all
  function applyPhase(p) {
    cur = p;
    const lim = p; // phases 0..p (phase 0 = start)
    let count = 0;
    nodeEls.forEach(({ n, ring, ord }) => {
      const on = ord && ord.phase <= lim;
      if (on) count++;
      const now = ord && ord.phase === lim && lim > 0;
      ring.setAttribute('stroke', on ? (now ? '#ffe39a' : '#f5b942') : (n.t === 'MAJOR' ? '#8a6a30' : n.t === 'SPECIAL' || n.e ? '#5d6080' : '#3f4259'));
      ring.setAttribute('fill', on ? '#3d3018' : '#151622');
      ring.setAttribute('stroke-width', on ? 2.6 : (n.t === 'STAT' ? 1.2 : 2));
    });
    routePaths.forEach(rp => { rp.el.style.display = rp.phase <= lim ? '' : 'none'; rp.el.setAttribute('stroke-opacity', rp.phase === lim ? 1 : .75); });
    numEls.forEach(({ r, t }) => { t.style.display = r.phase <= lim ? '' : 'none'; });
    document.getElementById('ptCount').textContent = count;
    document.getElementById('phaseDesc').textContent = p === PHASES.length ? 'ครบทุกช่วง' : PHASES[p - 1].lv + ' · ' + PHASES[p - 1].desc;
    tabs.querySelectorAll('button').forEach((b, i) => b.classList.toggle('on', i === (p === PHASES.length ? PHASES.length : p - 1)));
  }
  const tabs = document.getElementById('phaseTabs');
  PHASES.forEach((ph, i) => {
    const b = document.createElement('button'); b.textContent = `${i + 1}. ${ph.name}`;
    b.onclick = () => applyPhase(i + 1); tabs.appendChild(b);
  });
  const all = document.createElement('button'); all.textContent = 'ทั้งหมด'; all.onclick = () => applyPhase(PHASES.length); tabs.appendChild(all);
  // last phase button and "all" are the same set; keep both for clarity

  // pan / zoom via viewBox
  const xs = route.map(r => r.x * C), ys = route.map(r => r.y * C);
  const fitBox = { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, w: Math.max(...xs) - Math.min(...xs) + 120, h: Math.max(...ys) - Math.min(...ys) + 120 };
  let vb = Object.assign({}, fitBox);
  function setVB() {
    const bw = box.clientWidth || 800, bh = box.clientHeight || 560, ar = bw / bh;
    let w = vb.w, h = vb.h;
    if (w / h < ar) w = h * ar; else h = w / ar;
    vb.w = w; vb.h = h;
    svg.setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
  }
  function zoom(f, cx, cy) {
    const nw = Math.min(W * 1.2, Math.max(120, vb.w * f)), nh = vb.h * (nw / vb.w);
    if (cx === undefined) { cx = vb.x + vb.w / 2; cy = vb.y + vb.h / 2; }
    vb.x = cx - (cx - vb.x) * (nw / vb.w); vb.y = cy - (cy - vb.y) * (nh / vb.h); vb.w = nw; vb.h = nh; setVB();
  }
  const toSvg = (px, py) => { const r = box.getBoundingClientRect(); return [vb.x + (px - r.left) / r.width * vb.w, vb.y + (py - r.top) / r.height * vb.h]; };
  box.addEventListener('wheel', e => { e.preventDefault(); const [x, y] = toSvg(e.clientX, e.clientY); zoom(e.deltaY > 0 ? 1.15 : 1 / 1.15, x, y); }, { passive: false });
  let drag = null, pinch = null;
  box.addEventListener('pointerdown', e => { if (e.target.closest('.zoom')) return; drag = { x: e.clientX, y: e.clientY, vx: vb.x, vy: vb.y, moved: false }; });
  window.addEventListener('pointermove', e => {
    if (!drag || pinch) return;
    const r = box.getBoundingClientRect(), dx = (e.clientX - drag.x) / r.width * vb.w, dy = (e.clientY - drag.y) / r.height * vb.h;
    if (Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y) > 3) { drag.moved = true; hideTip(); }
    vb.x = drag.vx - dx; vb.y = drag.vy - dy; setVB();
  });
  window.addEventListener('pointerup', () => { drag = null; });
  box.addEventListener('touchstart', e => { if (e.touches.length === 2) { const [a, b] = e.touches; pinch = { d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) }; } }, { passive: true });
  box.addEventListener('touchmove', e => {
    if (pinch && e.touches.length === 2) {
      const [a, b] = e.touches, dd = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      const [x, y] = toSvg((a.clientX + b.clientX) / 2, (a.clientY + b.clientY) / 2);
      zoom(pinch.d / dd, x, y); pinch.d = dd; e.preventDefault();
    }
  }, { passive: false });
  box.addEventListener('touchend', e => { if (e.touches.length < 2) pinch = null; });
  box.addEventListener('click', hideTip);
  box.querySelectorAll('.zoom button').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const z = b.dataset.z;
    if (z === 'in') zoom(1 / 1.3); else if (z === 'out') zoom(1.3); else { vb = Object.assign({}, fitBox); setVB(); }
  }));
  window.addEventListener('resize', setVB);
  setVB();
  applyPhase(PHASES.length);

  // order list
  const ol = document.getElementById('orderList');
  PHASES.forEach((ph, i) => {
    const items = route.filter(r => r.phase === i + 1 || (i === 0 && r.phase === 0));
    const div = document.createElement('div'); div.className = 'ph';
    const last = items.length ? items[items.length - 1].k : 0;
    div.innerHTML = `<div class="ph-h">${i + 1}. ${esc(ph.name)} <span>${ph.lv} · รวม ${last} แต้ม</span></div><div class="small">${esc(ph.desc)}</div><div class="ph-n"></div>`;
    const wrap = div.querySelector('.ph-n');
    items.forEach(r => {
      const n = byPos.get(r.x + ',' + r.y);
      const s = document.createElement('span');
      s.className = 'nd' + (n.t === 'MAJOR' ? ' key' : n.t === 'SPECIAL' ? ' big' : '');
      s.innerHTML = `${n.i ? `<img src="icons/${n.i}" alt="">` : ''}<i>${r.k}</i>${esc(n.n)}`;
      s.addEventListener('mouseenter', ev => showTip(ev, nodeTip(n, r)));
      s.addEventListener('mouseleave', hideTip);
      s.addEventListener('click', ev => { applyPhase(r.phase || 1); vb = { x: r.x * C - 150, y: r.y * C - 110, w: 300, h: 220 }; setVB(); document.getElementById('tree').scrollIntoView({ behavior: 'smooth' }); });
      wrap.appendChild(s);
    });
    ol.appendChild(div);
  });

  // hero icon = bloody dance
  const bd = D.tree.nodes.find(n => n.id === 'bloody_dance');
  if (bd && bd.i) document.getElementById('heroIcon').src = 'icons/' + bd.i;

  // ---------- ascendancy ----------
  (function () {
    const a = document.getElementById('ascSvg');
    const [x0, y0, x1, y1] = D.asc.region;
    const cx0 = Math.min(...D.asc.nodes.map(n => n.x)) - 1.6, cy0 = Math.min(...D.asc.nodes.map(n => n.y)) - 1.6;
    const cw = Math.max(...D.asc.nodes.map(n => n.x)) + 1.6 - cx0, ch = Math.max(...D.asc.nodes.map(n => n.y)) + 1.6 - cy0, side = Math.max(cw, ch);
    a.setAttribute('viewBox', `${(cx0 - (side - cw) / 2) * C} ${(cy0 - (side - ch) / 2) * C} ${side * C} ${side * C}`);
    const rset = new Map(D.ascRoute.map((p, i) => [p[0] + ',' + p[1], i + 1]));
    let p = '';
    for (const s of D.asc.segs) p += `M${s[0] * C} ${s[1] * C}L${s[2] * C} ${s[3] * C}`;
    el('path', { d: p, stroke: '#3a3048', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' }, a);
    // gold link from each allocated node to the node it was reached from
    let rp = '';
    D.ascRoute.forEach((q, i) => { const par = D.ascPar[i]; if (par) rp += `M${par[0] * C} ${par[1] * C}L${q[0] * C} ${q[1] * C}`; });
    el('path', { d: rp, stroke: '#f5b942', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round' }, a);
    for (const n of D.asc.nodes) {
      const k = rset.get(n.x + ',' + n.y), r = n.t === 'MAJOR' ? 9 : n.t === 'ASC' ? 10.5 : 5;
      const g = el('g', {}, a);
      el('circle', { cx: n.x * C, cy: n.y * C, r: r + 1, fill: k ? '#3d3018' : '#151622', stroke: k ? '#f5b942' : '#5d5070', 'stroke-width': k ? 2.6 : 1.6 }, g);
      if (n.i) el('image', { href: 'icons/' + n.i, x: n.x * C - r * .8, y: n.y * C - r * .8, width: r * 1.6, height: r * 1.6, style: 'image-rendering:pixelated' + (k ? '' : ';opacity:.4') }, g);
      if (k) { const t = el('text', { x: n.x * C + r - 1, y: n.y * C - r + 3, 'font-size': 9, 'font-weight': 800, fill: '#1a1300', 'text-anchor': 'middle' }, g); const bg = el('circle', { cx: n.x * C + r - 1, cy: n.y * C - r, r: 6, fill: '#f5b942' }, g); g.appendChild(t); t.textContent = k; }
      const ord = k ? { k, phaseName: 'Gladiator' } : null;
      g.addEventListener('mouseenter', ev => showTip(ev, nodeTip(n, ord)));
      g.addEventListener('mouseleave', hideTip);
      g.addEventListener('click', ev => showTip(ev, nodeTip(n, ord)));
    }
  })();

  // ---------- skills ----------
  const PICK = {
    warrior: {
      fighter_stance: { p: 1, max: '1', why: 'เปิดค้าง: attack speed + move speed · เปลี่ยนเอฟเฟกต์สกิล Fighter' },
      gong_strike: { p: 2, max: '1–5', why: 'สกิลเคลียร์ช่วงแรกก่อนได้ Whirlwind' },
      shred: { p: 4, max: '20', why: 'ลด armor ศัตรู · ใช้กับบอส' },
      whirlwind: { p: 6, max: '20', why: 'สกิลหลัก · หมุนฟันรอบตัว ติด bleed ทั้งกลุ่ม' },
      undying_will: { p: 8, max: '20', why: 'ฆ่าแล้วระเบิด (Rip Apart) + Berserk stack' },
      p_lifesteal: { p: 'P', max: '8', why: 'Attack Hits Health Leech — ชดเชยเลือดที่ออร่าดูด' },
      p_health_war: { p: 'P', max: '8', why: '+Health' },
      p_armor_pen: { p: 'P', max: '8', why: '+Attack Speed' },
    },
    sanguimancer: {
      banishing_blade: { p: 3, max: '20', why: 'ตีประชิดมีโอกาสใส่ Soul Wound · 3 stack ระเบิด + ศัตรูโดนสกิลโจมตีแรงขึ้น' },
      plague_aura: { p: 5, max: '12', why: 'ออร่าหลัก: ศัตรูติด ailment ง่ายขึ้น · Reaper Form ได้ Ailment Damage เพิ่ม' },
      reaper_form: { p: 7, max: '12', why: '+Scythe Damage สูงสุด 30% + move speed 10 วิ · ตีด้วย scythe ต่อเวลา' },
      p_poison_bleed_chance_sang: { p: 'P', max: '8', why: '+2% Bleed Chance ต่อขั้น (สูงสุด +16%)' },
      p_health_sang: { p: 'P', max: '8', why: '+Health' },
      p_health_per_sec_sang: { p: 'P', max: '8', why: '+Leech Effect' },
    },
  };
  const SNAME = { warrior: 'Fighter', sanguimancer: 'Sanguimancer' };
  const SROLE = { warrior: 'สกิลฟันหลัก', sanguimancer: 'บัฟ + ออร่า' };
  const host = document.getElementById('schools');
  const prioRows = [];
  D.schools.forEach(sc => {
    const wrap = document.createElement('div'); wrap.className = 'school';
    wrap.innerHTML = `<div class="school-h">${SNAME[sc.id]} <span>${SROLE[sc.id]}</span></div>`;
    const grid = document.createElement('div'); grid.className = 'sgrid';
    const at = new Map(sc.nodes.map(n => [n.x + ',' + n.y, n]));
    for (let y = 0; y < 7; y++) {
      const lv = document.createElement('div'); lv.className = 'lv'; lv.textContent = 'Lv ' + sc.lvl[y]; grid.appendChild(lv);
      for (let x = 0; x < 10; x++) {
        const n = at.get(x + ',' + y), c = document.createElement('div'); c.className = 'sc';
        if (n) {
          const pk = PICK[sc.id][n.id];
          c.classList.add('has'); if (n.k === 'passive') c.classList.add('pass'); if (pk) c.classList.add('pick');
          c.innerHTML = (n.i ? `<img src="icons/${n.i}" alt="">` : '') + (pk ? `<span class="pr">${pk.p}</span>` : '');
          const name = n.k === 'passive' ? clean((n.s || [])[0] || n.n).replace(/^\+[\d.]+%?\s*/, '') : n.n;
          const html = `<div class="tt">${SNAME[sc.id]} · ${n.k === 'spell' ? 'Skill' : 'Passive'} · ปลดล็อก Lv ${sc.lvl[y]} · สูงสุด ${n.max || '?'}</div><div class="tn">${esc(name)}</div>` +
            (n.k === 'passive' ? `<ul>${(n.s || []).map(s => `<li>${esc(clean(s))}</li>`).join('')}</ul>` : `<div class="td">${esc(clean(n.d).slice(0, 260))}${clean(n.d).length > 260 ? '…' : ''}</div>`) +
            (pk ? `<div class="to">${pk.p === 'P' ? 'Passive แนะนำ' : 'ลำดับที่ ' + pk.p} · เป้า ${pk.max} · ${esc(pk.why)}</div>` : '');
          c.addEventListener('mouseenter', ev => showTip(ev, html));
          c.addEventListener('mouseleave', hideTip);
          c.addEventListener('click', ev => showTip(ev, html));
          if (pk) prioRows.push({ pk, n, name, sc, lv: sc.lvl[y] });
        }
        grid.appendChild(c);
      }
    }
    wrap.appendChild(grid); host.appendChild(wrap);
  });
  prioRows.sort((a, b) => (a.pk.p === 'P') - (b.pk.p === 'P') || (a.pk.p === 'P' ? a.lv - b.lv : a.pk.p - b.pk.p));
  const t = document.getElementById('skillPrio');
  t.innerHTML = '<thead><tr><th>#</th><th>สกิล</th><th>คลาส</th><th>ปลดล็อก</th><th>อัปถึง</th><th>ทำไม</th></tr></thead><tbody>' +
    prioRows.map(r => `<tr><td><b style="color:var(--gold)">${r.pk.p}</b></td><td><b>${esc(r.name)}</b></td><td>${SNAME[r.sc.id]}</td><td>Lv ${r.lv}</td><td>${r.pk.max}</td><td>${esc(r.pk.why)}</td></tr>`).join('') +
    '</tbody>';
  const tnote = document.createElement('p'); tnote.className = 'small';
  tnote.textContent = 'P = Passive ในต้นไม้คลาส (ใช้แต้ม Passive ได้ 0.5 / เลเวล) · ลำดับ 1–8 = แต้มสกิล (1 / เลเวล) · อัป Whirlwind ให้เต็มก่อน แล้วค่อยเติม Reaper Form / Shred / Banishing Blade';
  t.parentNode.after(tnote);

  // ---------- toc highlight ----------
  const links = [...document.querySelectorAll('.toc a')];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-30% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
})();
