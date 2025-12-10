document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const items = document.getElementById('items');

  loader.classList.add('loader_active');

  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(r => r.json())
    .then(data => {
      items.innerHTML = '';
      for (let c in data.response.Valute) {
        let v = data.response.Valute[c];
        items.innerHTML += `
          <div class="item">
            <div class="item__code">${v.CharCode}</div>
            <div class="item__value">${v.Value.toFixed(4)}</div>
            <div class="item__currency">руб.</div>
          </div>`;
      }
    })
    .finally(() => loader.classList.remove('loader_active'));
});