const btnFull = document.getElementById('btn-full');
const btnVeg = document.getElementById('btn-veg');
const btnCats = document.getElementById('btn-cats');
const output = document.getElementById('output');

const API_BASE = ''; // same origin (served by Express)

// utility to show error
function showError(msg) {
  output.innerHTML = `<p class="error">${msg}</p>`;
}

// render full menu items
function renderMenu(items) {
  if (!items.length) {
    output.innerHTML = '<p class="hint">No items found.</p>';
    return;
  }
  output.innerHTML = items.map(item => `
    <div class="card">
      <div class="info">
        <h3>${item.name} ${item.isVegetarian ? '<span class="badge">Veg</span>' : ''}</h3>
        <p><strong>Category:</strong> ${item.category}</p>
        <p>${item.description}</p>
      </div>
      <div class="meta">
        <div class="price">₹${item.price}</div>
      </div>
    </div>
  `).join('');
}

// render categories
function renderCategories(data) {
  const cats = data.categories || [];
  if (!cats.length) {
    output.innerHTML = '<p class="hint">No categories found.</p>';
    return;
  }
  output.innerHTML = `<div class="categories">${cats.map(c => `
    <div class="cat">
      <h4>${c.name}</h4>
      <p>Items: <strong>${c.itemCount}</strong></p>
    </div>
  `).join('')}</div>`;
}

// fetch wrapper
async function fetchJson(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
    return await res.json();
  } catch (err) {
    throw err;
  }
}

// event handlers
btnFull.addEventListener('click', async () => {
  output.innerHTML = '<p class="hint">Loading full menu...</p>';
  try {
    const data = await fetchJson('/menu');
    renderMenu(data);
  } catch (err) {
    showError('Failed to load menu. ' + err.message);
  }
});

btnVeg.addEventListener('click', async () => {
  output.innerHTML = '<p class="hint">Loading vegetarian options...</p>';
  try {
    const data = await fetchJson('/menu/vegetarian');
    renderMenu(data);
  } catch (err) {
    showError('Failed to load vegetarian menu. ' + err.message);
  }
});

btnCats.addEventListener('click', async () => {
  output.innerHTML = '<p class="hint">Loading categories...</p>';
  try {
    const data = await fetchJson('/menu/categories');
    renderCategories(data);
  } catch (err) {
    showError('Failed to load categories. ' + err.message);
  }
});
