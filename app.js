// ============================================================
// app.js — ยาสีฟันฟลูออไรด์ ≥1400 ppm | กรมอนามัย
// ============================================================

(function () {
  const grid    = document.getElementById('product-grid');
  const sortSel = document.getElementById('sort-select');
  const counter = document.getElementById('result-count');

  // ── filter only ≥1400 ppm ──────────────────────────────────
  const products = PRODUCTS.filter(p => p.fluoride >= 1400);

  // ── sort helpers ────────────────────────────────────────────
  function sortProducts(arr, mode) {
    return [...arr].sort((a, b) => {
      if (mode === 'fluoride-desc') return b.fluoride - a.fluoride;
      if (mode === 'fluoride-asc')  return a.fluoride - b.fluoride;
      if (mode === 'name-asc')      return a.brand.localeCompare(b.brand, 'th');
      if (mode === 'name-desc')     return b.brand.localeCompare(a.brand, 'th');
      return 0;
    });
  }

  // ── card builder ────────────────────────────────────────────
  function buildCard(p, idx) {
    const propsHtml = p.props
      .map(pr => `<li>${pr}</li>`)
      .join('');

    const img = p.image
      ? `<img src="${p.image}" alt="${p.imageAlt || ''}" loading="lazy" />`
      : `<div class="img-placeholder">🦷</div>`;

    return `
    <article class="card" style="animation-delay:${idx * 0.06}s">
      <div class="card-img-wrap">
        ${img}
        <span class="fluoride-badge">${p.fluoride} ppm</span>
      </div>
      <div class="card-body">
        <div class="brand-name">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <table class="info-table">
          <tr>
            <td class="lbl">อายุ:</td>
            <td class="val">${p.age}</td>
          </tr>
          <tr>
            <td class="lbl">ปริมาณฟลูออไรด์:</td>
            <td class="val fluoride-val">${p.fluoride} ppm</td>
          </tr>
          <tr>
            <td class="lbl" style="padding-top:8px">สรรพคุณ:</td>
            <td class="val">
              <ul class="props-list">${propsHtml}</ul>
            </td>
          </tr>
        </table>
        ${p.note ? `<p style="font-size:.78rem;color:#999;margin-top:6px">${p.note}</p>` : ''}
      </div>
    </article>`;
  }

  // ── render ──────────────────────────────────────────────────
  function render() {
    const mode   = sortSel.value;
    const sorted = sortProducts(products, mode);

    grid.innerHTML = sorted.length
      ? sorted.map((p, i) => buildCard(p, i)).join('')
      : `<div class="empty-state">ไม่พบรายการยาสีฟัน</div>`;

    counter.textContent = `รวม ${sorted.length} รายการ`;
  }

  // ── events ──────────────────────────────────────────────────
  sortSel.addEventListener('change', render);

  // ── init ────────────────────────────────────────────────────
  render();

})();
