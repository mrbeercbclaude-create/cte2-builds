// CtE2 build pages. Data: tree.js (window.TREE) + builds/<id>.data.js + builds/<id>.content.js (window.BUILDS[id]).
// build.html?b=<id> renders one build; index.html renders the hub (cards + changelog).
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const C = 12; // px per grid cell
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const clean = s => String(s || '').replace(/\[VAL\d\]%?\s*/g, '').replace(/\s+/g, ' ').trim();
  const el = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const TYPE = { STAT: 'Small', SPECIAL: 'Notable', MAJOR: 'Keystone', ASC: 'Ascendancy', CENTER: 'Center' };
  const radius = n => n.e ? 8 : n.t === 'MAJOR' ? 9 : n.t === 'SPECIAL' ? 6 : n.t === 'ASC' ? 9 : 3.6;

  // ---------- tooltip ----------
  const tip = document.getElementById('tip');
  function showTip(ev, html) {
    tip.innerHTML = html; tip.hidden = false;
    const x = (ev.touches ? ev.touches[0].clientX : ev.clientX), y = (ev.touches ? ev.touches[0].clientY : ev.clientY);
    const r = tip.getBoundingClientRect();
    tip.style.left = Math.max(8, Math.min(window.innerWidth - r.width - 8, x + 14)) + 'px';
    tip.style.top = Math.max(8, Math.min(window.innerHeight - r.height - 8, y + 14)) + 'px';
  }
  const hideTip = () => { tip.hidden = true; };
  document.addEventListener('scroll', hideTip, { passive: true });
  const bindTip = (node, html) => {
    node.addEventListener('mouseenter', ev => showTip(ev, html));
    node.addEventListener('mousemove', ev => showTip(ev, html));
    node.addEventListener('mouseleave', hideTip);
    node.addEventListener('click', ev => { ev.stopPropagation(); showTip(ev, html); });
  };
  function nodeTip(n, ord) {
    const st = (n.s || []).map(s => `<li>${esc(clean(s))}</li>`).join('');
    return `<div class="tt">${TYPE[n.t] || n.t}${n.e ? ' · จุดเริ่ม' : ''}</div><div class="tn">${esc(n.n)}</div>${st ? `<ul>${st}</ul>` : ''}${ord ? `<div class="to">ลำดับที่ ${ord.k} · ${esc(ord.phaseName)}</div>` : ''}`;
  }

  // ---------- hub ----------
  if (document.body.dataset.page === 'hub') {
    const host = document.getElementById('buildCards');
    (window.BUILD_LIST || []).forEach(id => {
      const B = window.BUILDS[id];
      const a = h(`<a class="bcard card" href="build.html?b=${id}">
        <div class="bc-top"><span class="char">${esc(B.char)}</span><span class="pill">${esc(B.status || '')}</span></div>
        <div class="bc-t">${esc(B.title)}</div>
        <div class="tags">${(B.tags || []).map(t => `<span class="tag ${t[1] || ''}">${esc(t[0])}</span>`).join('')}</div>
        <p class="sub">${B.sub}</p>
        <div class="bc-f">อัปเดต ${esc(B.updated)} · v${esc(B.version)}</div></a>`);
      host.appendChild(a);
    });
    const log = document.getElementById('changelog');
    (window.CHANGELOG || []).forEach(c => log.appendChild(h(`<li><b>${esc(c.date)}</b> <span class="tag">${esc(c.build)}</span> ${c.text}</li>`)));
    return;
  }

  // ---------- build page ----------
  const id = new URLSearchParams(location.search).get('b');
  const B = window.BUILDS && window.BUILDS[id];
  const main = document.getElementById('main');
  if (!B || !window.TREE) { main.innerHTML = '<section class="card"><h2>ไม่พบ build นี้</h2><p><a href="./">กลับหน้ารวม</a></p></section>'; return; }
  document.title = `${B.title} · ${B.char} · CtE2`;
  const T = window.TREE;
  const sections = [];
  const add = (sid, toc, html) => { const s = h(`<section id="${sid}" class="card">${html}</section>`); main.appendChild(s); sections.push([sid, toc]); return s; };

  // hero
  main.appendChild(h(`<section class="hero card">
    <div class="hero-icon"><img id="heroIcon" alt=""></div>
    <div class="hero-txt">
      <div class="tags">${(B.tags || []).map(t => `<span class="tag ${t[1] || ''}">${esc(t[0])}</span>`).join('')}</div>
      <h1>${esc(B.title)} <span class="charname">· ${esc(B.char)}</span></h1>
      <p class="sub">${B.sub}</p>
      <div class="meta">${(B.meta || []).map(m => `<div><span>${esc(m[0])}</span><b>${esc(m[1])}</b></div>`).join('')}</div>
    </div></section>`));
  const hero = T.nodes.find(n => n.id === B.hero) || B.asc.nodes.find(n => n.id === B.hero);
  if (hero && hero.i) document.getElementById('heroIcon').src = 'icons/' + hero.i;

  // summary
  add('summary', 'สรุปเร็ว', `<h2>สรุปเร็ว</h2>
    <div class="grid4">${B.summary.minis.map(m => `<div class="mini"><div class="k">${esc(m[0])}</div><div class="v">${esc(m[1])}</div><div class="d">${m[2]}</div></div>`).join('')}</div>
    ${(B.summary.notes || []).map(n => `<div class="note ${n[0]}">${n[1]}</div>`).join('')}`);

  // strengths / weaknesses (optional)
  if (B.strengths) {
    const li = a => a.map(x => `<li>${x}</li>`).join('');
    add('strengths', 'จุดเด่น / จุดอ่อน', `<h2>จุดเด่น / จุดอ่อน</h2>
      <div class="sw"><div class="pros"><div class="swh">จุดเด่น</div><ul>${li(B.strengths.pros)}</ul></div>
      <div class="cons"><div class="swh">จุดอ่อน</div><ul>${li(B.strengths.cons)}</ul></div></div>`);
  }

  // variants as tabs (optional): [{name, sub, items:[...], note}]
  if (B.variants) {
    const sec = add('variants', 'Variant', `<h2>Variant <span class="pill">สลับตามสถานการณ์</span></h2>
      <div class="tabs vtabs">${B.variants.map((v, i) => `<button data-v="${i}"${i ? '' : ' class="on"'}>${esc(v.name)}</button>`).join('')}</div>
      ${B.variants.map((v, i) => `<div class="vpane" data-v="${i}"${i ? ' hidden' : ''}><p class="small">${v.sub || ''}</p>
        <ul class="vlist">${v.items.map(x => `<li>${x}</li>`).join('')}</ul>${v.note ? `<div class="note">${v.note}</div>` : ''}</div>`).join('')}`);
    sec.querySelectorAll('.vtabs button').forEach(b => b.addEventListener('click', () => {
      sec.querySelectorAll('.vtabs button').forEach(x => x.classList.toggle('on', x === b));
      sec.querySelectorAll('.vpane').forEach(p => { p.hidden = p.dataset.v !== b.dataset.v; });
    }));
  }

  // combo rotation (optional)
  if (B.combo) {
    const sicon = sid => { for (const sc of B.schools || []) { const n = sc.nodes.find(x => x.id === sid); if (n && n.i) return n.i; } return null; };
    const ct = B.combo.title || 'คอมโบ';
    add('combo', ct, `<h2>${esc(ct)} ${B.combo.pill ? `<span class="pill">${esc(B.combo.pill)}</span>` : ''}</h2>
      <p class="small">${B.combo.intro || ''}</p>
      <div class="combo">${B.combo.steps.map((s, i) => `${i ? '<div class="carrow" aria-hidden="true">›</div>' : ''}<div class="cstep${s.main ? ' main' : ''}">
        <div class="cr">${esc(s.role)}</div>
        <div class="ci">${sicon(s.id) ? `<img src="icons/${sicon(s.id)}" alt="">` : ''}</div>
        <b>${esc(s.name)}</b><span>${s.desc}</span>
        ${s.share != null ? `<div class="share"><i style="width:${s.share}%"></i></div><em>${s.share}% ของดาเมจบอส</em>` : ''}</div>`).join('')}</div>
      ${(B.combo.notes || []).map(n => `<div class="note ${n[0]}">${n[1]}</div>`).join('')}`);
  }

  // sim comparison (optional): rows {name, sub, boss, clear, me}
  if (B.sim) {
    const S = B.sim;
    const fmt = v => v >= 1e6 ? (v / 1e6).toFixed(2) + 'M' : Math.round(v / 1e3) + 'k';
    const col = (k, label) => {
      const rows = S.rows.filter(r => r[k] != null).sort((a, b) => b[k] - a[k]), mx = rows[0][k];
      return `<div class="simcol"><div class="simh">${label}</div>${rows.map(r => `<div class="srow${r.me ? ' me' : ''}${r.ref ? ' ref' : ''}">
        <span class="snm">${esc(r.name)}<i>${esc(r.sub || '')}</i></span><span class="sbar"><i style="width:${(r[k] / mx * 100).toFixed(1)}%"></i></span><b>${fmt(r[k])}</b></div>`).join('')}</div>`;
    };
    add('sim', 'ทำไม build นี้', `<h2>ทำไม build นี้ <span class="pill">${esc(S.pill || 'จำลองดาเมจ')}</span></h2>
      <p class="small">${S.intro || ''}</p>
      <div class="simgrid">${col('boss', 'ตีบอส (DPS ตัวเดียว)')}${col('clear', 'เคลียร์แมพ (ดาเมจรวมทั้งกลุ่ม)')}</div>
      ${(S.notes || []).map(n => `<div class="note ${n[0]}">${n[1]}</div>`).join('')}`);
  }

  // test-before-you-invest checklist (optional) — ticks stay in this browser only
  if (B.checklist) {
    const key = 'cte2-check-' + id;
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (e) { saved = {}; }
    const sec = add('check', 'ทดสอบก่อน', `<h2>ทดสอบก่อนลงทุน <span class="pill" id="ckCount"></span></h2>
      <p class="small">${B.checklist.intro || ''}</p>
      <ul class="check">${B.checklist.items.map((t, i) => `<li><label><input type="checkbox" data-i="${i}"${saved[i] ? ' checked' : ''}><span>${t}</span></label></li>`).join('')}</ul>`);
    const upd = () => { const bx = [...sec.querySelectorAll('input')]; document.getElementById('ckCount').textContent = `${bx.filter(b => b.checked).length} / ${bx.length}`; };
    sec.addEventListener('change', e => {
      saved[e.target.dataset.i] = e.target.checked;
      try { localStorage.setItem(key, JSON.stringify(saved)); } catch (er) { /* private window: ticks just won't persist */ }
      upd();
    });
    upd();
  }

  // stash (optional)
  if (B.stash) {
    add('stash', 'ของในกระเป๋า', `<h2>ของที่มีอยู่แล้ว → ใช้กับ ${esc(B.char)} <span class="pill">${esc(B.stash.when)}</span></h2>
      <p class="small">${B.stash.intro}</p>
      <div class="tablewrap"><table class="tbl stash"><thead><tr><th>ใส่ได้ตอน</th><th>ช่อง</th><th>ของ</th><th>ทำอะไร</th></tr></thead><tbody>
      ${B.stash.rows.map(r => `<tr><td><span class="lvb">Lv ${esc(r[0])}</span></td><td>${esc(r[1])}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}
      </tbody></table></div>
      ${(B.stash.notes || []).map(n => `<div class="note ${n[0]}">${n[1]}</div>`).join('')}`);
  }

  // equipment
  add('equipment', 'Equipment', `<h2>Equipment</h2>
    <div class="gear">${B.equipment.slots.map(s => `<div class="slot"><div class="sl">${esc(s[0])}</div><div class="sn${s[1] === 'ใช้ไม่ได้' ? ' dim' : ''}">${esc(s[1])}</div><ul>${s[2].map(li => li.startsWith('!') ? `<li class="bad">${li.slice(1)}</li>` : `<li>${li}</li>`).join('')}</ul></div>`).join('')}</div>
    ${B.equipment.html || ''}`);

  // stats
  add('stats', 'Stat points', `<h2>Stat points <span class="pill">1 แต้ม / เลเวล</span></h2>
    <div class="statrow">${B.stats.cols.map(c => `<div class="st ${c[0]}"><b>${c[0].toUpperCase()}</b><span>${c[1]}</span><em>${esc(c[2])}</em></div>`).join('')}</div>
    <ol class="steps">${B.stats.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    ${B.stats.html || ''}`);

  // ---------- passive tree ----------
  const treeSec = add('tree', 'Passive Tree', `<h2>Passive Tree (Talents)</h2>
    <p class="small">แต้ม talent ได้ 1 / เลเวล · เส้นทางคำนวณด้วยกฎต่อเส้นเดียวกับโค้ดเกม · กดแท็บเพื่อดูทีละช่วง · แตะ node เพื่อดูรายละเอียด</p>
    <div class="tabs" id="phaseTabs"></div>
    <div class="counter"><span>Talent: <b id="ptCount">0</b></span><span id="phaseDesc"></span></div>
    <div class="treebox" id="treeBox">
      <div class="zoom"><button data-z="in" aria-label="ซูมเข้า">+</button><button data-z="out" aria-label="ซูมออก">−</button><button data-z="fit" aria-label="จัดกลาง">◎</button></div>
      <svg id="treeSvg" xmlns="http://www.w3.org/2000/svg"></svg>
    </div>
    <div class="legend"><span><i class="lg alloc"></i>ลงแต้ม</span><span><i class="lg major"></i>Keystone</span><span><i class="lg notable"></i>Notable</span><span><i class="lg small"></i>Small</span></div>
    <h3>ลำดับลงแต้ม</h3><div id="orderList" class="order"></div>
    ${B.dont && B.dont.length ? `<h3>❌ ห้ามกด</h3><ul class="dont">${B.dont.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}`);
  (function () {
    const svg = document.getElementById('treeSvg'), box = document.getElementById('treeBox');
    const PH = B.route.phases;
    const byPos = new Map(T.nodes.map(n => [n.x + ',' + n.y, n]));
    const route = B.route.nodes.map(r => Object.assign({}, r, { phaseName: r.phase ? PH[r.phase - 1].name : 'จุดเริ่ม' }));
    const routeBy = new Map(route.map(r => [r.x + ',' + r.y, r]));
    const W = 173 * C;
    const gBase = el('g', {}, svg), gRoute = el('g', {}, svg), gNodes = el('g', {}, svg), gNum = el('g', {}, svg);
    let d = '';
    for (const s of T.segs) d += `M${s[0] * C} ${s[1] * C}L${s[2] * C} ${s[3] * C}`;
    el('path', { d, stroke: '#2b2e44', 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' }, gBase);
    const routePaths = [];
    route.forEach(r => {
      let p = '';
      for (const s of r.seg) p += `M${s[0] * C} ${s[1] * C}L${s[2] * C} ${s[3] * C}`;
      if (p) routePaths.push({ phase: r.phase, el: el('path', { d: p, stroke: '#f5b942', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round' }, gRoute) });
    });
    const baseStroke = n => n.t === 'MAJOR' ? '#8a6a30' : n.t === 'SPECIAL' || n.e ? '#5d6080' : '#3f4259';
    const nodeEls = [];
    for (const n of T.nodes) {
      if (n.t === 'CENTER') continue;
      const r = radius(n), cx = n.x * C, cy = n.y * C;
      const g = el('g', { class: 'node' }, gNodes);
      const ring = el('circle', { cx, cy, r: r + 1, fill: '#151622', stroke: baseStroke(n), 'stroke-width': n.t === 'STAT' ? 1.2 : 2 }, g);
      if (n.i && n.t !== 'STAT') el('image', { href: 'icons/' + n.i, x: cx - r * .8, y: cy - r * .8, width: r * 1.6, height: r * 1.6, style: 'image-rendering:pixelated' }, g);
      const ord = routeBy.get(n.x + ',' + n.y);
      nodeEls.push({ n, ring, ord });
      bindTip(g, nodeTip(n, ord));
    }
    const numEls = route.map(r => {
      const t = el('text', { x: r.x * C, y: r.y * C - radius(byPos.get(r.x + ',' + r.y)) - 3, 'text-anchor': 'middle', 'font-size': 7, 'font-weight': 700, fill: '#ffd57a', stroke: '#08090e', 'stroke-width': 2.2, 'paint-order': 'stroke', 'pointer-events': 'none' }, gNum);
      t.textContent = r.k; return { r, t };
    });
    const tabs = document.getElementById('phaseTabs');
    function applyPhase(p) {
      let count = 0;
      nodeEls.forEach(({ n, ring, ord }) => {
        const on = ord && ord.phase <= p;
        if (on) count++;
        const now = ord && ord.phase === p && p > 0;
        ring.setAttribute('stroke', on ? (now ? '#ffe39a' : '#f5b942') : baseStroke(n));
        ring.setAttribute('fill', on ? '#3d3018' : '#151622');
        ring.setAttribute('stroke-width', on ? 2.6 : (n.t === 'STAT' ? 1.2 : 2));
      });
      routePaths.forEach(rp => { rp.el.style.display = rp.phase <= p ? '' : 'none'; rp.el.setAttribute('stroke-opacity', rp.phase === p ? 1 : .75); });
      numEls.forEach(({ r, t }) => { t.style.display = r.phase <= p ? '' : 'none'; });
      document.getElementById('ptCount').textContent = count;
      document.getElementById('phaseDesc').textContent = p === PH.length ? 'ครบทุกช่วง' : PH[p - 1].lv + ' · ' + PH[p - 1].desc;
      tabs.querySelectorAll('button').forEach((b, i) => b.classList.toggle('on', i === (p === PH.length ? PH.length : p - 1)));
    }
    PH.forEach((ph, i) => { const b = document.createElement('button'); b.textContent = `${i + 1}. ${ph.name}`; b.onclick = () => applyPhase(i + 1); tabs.appendChild(b); });
    const all = document.createElement('button'); all.textContent = 'ทั้งหมด'; all.onclick = () => applyPhase(PH.length); tabs.appendChild(all);
    const xs = route.map(r => r.x * C), ys = route.map(r => r.y * C);
    const fitBox = { x: Math.min(...xs) - 60, y: Math.min(...ys) - 60, w: Math.max(...xs) - Math.min(...xs) + 120, h: Math.max(...ys) - Math.min(...ys) + 120 };
    let vb = Object.assign({}, fitBox);
    function setVB() {
      const bw = box.clientWidth || 800, bh = box.clientHeight || 560, ar = bw / bh;
      let w = vb.w, hh = vb.h;
      if (w / hh < ar) w = hh * ar; else hh = w / ar;
      vb.w = w; vb.h = hh;
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
    box.addEventListener('pointerdown', e => { if (e.target.closest('.zoom')) return; drag = { x: e.clientX, y: e.clientY, vx: vb.x, vy: vb.y }; });
    window.addEventListener('pointermove', e => {
      if (!drag || pinch) return;
      const r = box.getBoundingClientRect(), dx = (e.clientX - drag.x) / r.width * vb.w, dy = (e.clientY - drag.y) / r.height * vb.h;
      if (Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y) > 3) hideTip();
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
    setVB(); applyPhase(PH.length);
    const ol = document.getElementById('orderList');
    PH.forEach((ph, i) => {
      const items = route.filter(r => r.phase === i + 1 || (i === 0 && r.phase === 0));
      const last = items.length ? items[items.length - 1].k : 0;
      const div = h(`<div class="ph"><div class="ph-h">${i + 1}. ${esc(ph.name)} <span>${esc(ph.lv)} · รวม ${last} แต้ม</span></div><div class="small">${esc(ph.desc)}</div><div class="ph-n"></div></div>`);
      const wrap = div.querySelector('.ph-n');
      items.forEach(r => {
        const n = byPos.get(r.x + ',' + r.y);
        const s = document.createElement('span');
        s.className = 'nd' + (n.t === 'MAJOR' ? ' key' : n.t === 'SPECIAL' ? ' big' : '');
        s.innerHTML = `${n.i ? `<img src="icons/${n.i}" alt="">` : ''}<i>${r.k}</i>${esc(n.n)}`;
        s.addEventListener('mouseenter', ev => showTip(ev, nodeTip(n, r)));
        s.addEventListener('mouseleave', hideTip);
        s.addEventListener('click', () => { applyPhase(r.phase || 1); vb = { x: r.x * C - 150, y: r.y * C - 110, w: 300, h: 220 }; setVB(); treeSec.scrollIntoView({ behavior: 'smooth' }); });
        wrap.appendChild(s);
      });
      ol.appendChild(div);
    });
  })();

  // ---------- ascendancy ----------
  add('ascendancy', 'Ascendancy', `<h2>Ascendancy — ${esc(B.asc.name)} <span class="pill">9 แต้มจากเควส</span></h2>
    <div class="ascwrap"><svg id="ascSvg" xmlns="http://www.w3.org/2000/svg"></svg>
    <div class="ascinfo"><table class="tbl"><thead><tr><th>แต้ม</th><th>ได้ตอน</th><th>Node</th></tr></thead><tbody>
    ${B.ascTable.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table>
    <p class="small">${B.ascNote || ''}</p></div></div>`);
  (function () {
    const a = document.getElementById('ascSvg');
    const AN = B.asc.nodes;
    const cx0 = Math.min(...AN.map(n => n.x)) - 1.6, cy0 = Math.min(...AN.map(n => n.y)) - 1.6;
    const cw = Math.max(...AN.map(n => n.x)) + 1.6 - cx0, ch = Math.max(...AN.map(n => n.y)) + 1.6 - cy0, side = Math.max(cw, ch);
    a.setAttribute('viewBox', `${(cx0 - (side - cw) / 2) * C} ${(cy0 - (side - ch) / 2) * C} ${side * C} ${side * C}`);
    const rset = new Map(B.ascRoute.map((p, i) => [p[0] + ',' + p[1], i + 1]));
    let p = '';
    for (const s of B.asc.segs) p += `M${s[0] * C} ${s[1] * C}L${s[2] * C} ${s[3] * C}`;
    el('path', { d: p, stroke: '#3a3048', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' }, a);
    let rp = '';
    B.ascRoute.forEach((q, i) => { const par = B.ascPar[i]; if (par) rp += `M${par[0] * C} ${par[1] * C}L${q[0] * C} ${q[1] * C}`; });
    el('path', { d: rp, stroke: '#f5b942', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round' }, a);
    for (const n of AN) {
      const k = rset.get(n.x + ',' + n.y), r = n.t === 'MAJOR' ? 9 : n.t === 'ASC' ? 10.5 : 5;
      const g = el('g', {}, a);
      el('circle', { cx: n.x * C, cy: n.y * C, r: r + 1, fill: k ? '#3d3018' : '#151622', stroke: k ? '#f5b942' : '#5d5070', 'stroke-width': k ? 2.6 : 1.6 }, g);
      if (n.i) el('image', { href: 'icons/' + n.i, x: n.x * C - r * .8, y: n.y * C - r * .8, width: r * 1.6, height: r * 1.6, style: 'image-rendering:pixelated' + (k ? '' : ';opacity:.4') }, g);
      if (k) { el('circle', { cx: n.x * C + r - 1, cy: n.y * C - r, r: 6, fill: '#f5b942' }, g); const t = el('text', { x: n.x * C + r - 1, y: n.y * C - r + 3, 'font-size': 9, 'font-weight': 800, fill: '#1a1300', 'text-anchor': 'middle' }, g); t.textContent = k; }
      bindTip(g, nodeTip(n, k ? { k, phaseName: B.asc.name } : null));
    }
  })();

  // ---------- skills ----------
  const sk = add('skills', 'Skills', `<h2>Skills (คลาส) <span class="pill">ลงได้แค่ 2 คลาส</span></h2>
    <p class="small">แต้มสกิล 1 / เลเวล · เลเวลที่ปลดล็อก = แถวของสกิลในต้นไม้คลาส (เช็คจากโค้ด) · ตัวเลขในวง = ลำดับที่ควรอัป</p>
    <div id="schools"></div><h3>ลำดับอัปสกิล</h3><div class="tablewrap"><table class="tbl" id="skillPrio"></table></div>
    <p class="small">${B.skillNote || ''}</p>`);
  (function () {
    const host = document.getElementById('schools'), prioRows = [];
    B.schools.forEach(sc => {
      const PK = (B.pick || {})[sc.id] || {}, SN = (B.snames || {})[sc.id] || [sc.id, ''];
      const wrap = h(`<div class="school"><div class="school-h">${esc(SN[0])} <span>${esc(SN[1])}</span></div></div>`);
      const grid = document.createElement('div'); grid.className = 'sgrid';
      const at = new Map(sc.nodes.map(n => [n.x + ',' + n.y, n]));
      for (let y = 0; y < 7; y++) {
        const lv = document.createElement('div'); lv.className = 'lv'; lv.textContent = 'Lv ' + sc.lvl[y]; grid.appendChild(lv);
        for (let x = 0; x < 10; x++) {
          const n = at.get(x + ',' + y), c = document.createElement('div'); c.className = 'sc';
          if (n) {
            const pk = PK[n.id];
            c.classList.add('has'); if (n.k === 'passive') c.classList.add('pass'); if (pk) c.classList.add('pick');
            c.innerHTML = (n.i ? `<img src="icons/${n.i}" alt="">` : '') + (pk ? `<span class="pr">${pk.p}</span>` : '');
            const name = n.k === 'passive' ? clean((n.s || [])[0] || n.n).replace(/^\+[\d.]+%?\s*/, '') : n.n;
            const html = `<div class="tt">${esc(SN[0])} · ${n.k === 'spell' ? 'Skill' : 'Passive'} · ปลดล็อก Lv ${sc.lvl[y]} · สูงสุด ${n.max || '?'}</div><div class="tn">${esc(name)}</div>` +
              (n.k === 'passive' ? `<ul>${(n.s || []).map(s => `<li>${esc(clean(s))}</li>`).join('')}</ul>` : `<div class="td">${esc(clean(n.d).slice(0, 260))}${clean(n.d).length > 260 ? '…' : ''}</div>`) +
              (pk ? `<div class="to">${pk.p === 'P' ? 'Passive แนะนำ' : 'ลำดับที่ ' + pk.p} · เป้า ${pk.max} · ${esc(pk.why)}</div>` : '');
            bindTip(c, html);
            if (pk) prioRows.push({ pk, name, sn: SN[0], lv: sc.lvl[y] });
          }
          grid.appendChild(c);
        }
      }
      wrap.appendChild(grid); host.appendChild(wrap);
    });
    prioRows.sort((a, b) => (a.pk.p === 'P') - (b.pk.p === 'P') || (a.pk.p === 'P' ? a.lv - b.lv : a.pk.p - b.pk.p));
    document.getElementById('skillPrio').innerHTML = '<thead><tr><th>#</th><th>สกิล</th><th>คลาส</th><th>ปลดล็อก</th><th>อัปถึง</th><th>ทำไม</th></tr></thead><tbody>' +
      prioRows.map(r => `<tr><td><b style="color:var(--gold)">${r.pk.p}</b></td><td><b>${esc(r.name)}</b></td><td>${esc(r.sn)}</td><td>Lv ${r.lv}</td><td>${esc(r.pk.max)}</td><td>${esc(r.pk.why)}</td></tr>`).join('') + '</tbody>';
  })();

  // gems
  const G = B.gems;
  add('gems', 'Gems & Jewels', `<h2>Gems &amp; Jewels</h2>
    <h3>Socket gems</h3><div class="gemgrid">${G.socket.map(g => `<div class="gem"><div class="gs">${esc(g[0])}</div><b>${esc(g[1])}</b><span>${g[2]}</span><em>${g[3] || ''}</em></div>`).join('')}</div>
    ${G.support.map(s => `<h3>${s[0]}</h3><ol class="chips">${s[1].map(x => `<li>${x}</li>`).join('')}</ol>`).join('')}
    <h3>Aura gems (ใช้ Spirit)</h3><ul class="plain">${G.aura.map(x => `<li>${x}</li>`).join('')}</ul>
    <h3>Jewels</h3><ul class="chips">${G.jewels.map(x => `<li>${x}</li>`).join('')}</ul>
    ${G.html || ''}`);

  add('howto', 'วิธีเล่น', `<h2>วิธีเล่น</h2>
    ${B.binds ? `<h3>ปุ่มสกิลที่แนะนำ</h3><div class="binds">${B.binds.map(k => `<div class="bind"><kbd>${esc(k[0])}</kbd><b>${esc(k[1])}</b><span>${esc(k[2] || '')}</span></div>`).join('')}</div><h3>ลำดับ</h3>` : ''}
    <ol class="steps">${B.howto.map(x => `<li>${x}</li>`).join('')}</ol>`);
  add('faq', 'ควรรู้', `<h2>ควรรู้</h2>${B.faq.map((f, i) => `<details${f[2] ? ' open' : ''}><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}`);
  const mine = (window.CHANGELOG || []).filter(c => c.build === B.char || c.build === 'ทั้งหมด');
  add('changes', 'อัปเดต', `<h2>ประวัติแก้ไข <span class="pill">v${esc(B.version)}</span></h2>
    <p class="small">ถ้าเล่นแล้วเจออะไรไม่ตรง บอก NOVA พร้อมรูป — แก้แล้วจะลงตรงนี้</p>
    <ul class="clog">${mine.map(c => `<li><b>${esc(c.date)}</b> ${c.text}</li>`).join('') || '<li>—</li>'}</ul>`);
  main.appendChild(h(`<footer class="foot">ข้อมูลอ่านจากไฟล์ data ของ Craft to Exile 2 v2.1.4 (Mine and Slash 6.4.13) · ทำให้ Beer · อัปเดต ${esc(B.updated)}</footer>`));

  // toc
  const toc = document.getElementById('tocLinks');
  sections.forEach(([sid, name], i) => toc.appendChild(h(`<a href="#${sid}">${i + 1}. ${esc(name)}</a>`)));
  const links = [...toc.querySelectorAll('a')];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-30% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
})();
