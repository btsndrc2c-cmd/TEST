const STORAGE_KEY = 'lmdt_v1';
const ADMIN_KEY = 'LMDT-ADMIN-2026';

const i18n = {
  fr: { heroTitle: 'L’art du tatouage, signé à Vertou.', heroSub: 'Une expérience premium : créativité, précision et hygiène dans un cadre artistique.' },
  en: { heroTitle: 'Tattoo art, crafted in Vertou.', heroSub: 'A premium experience: creativity, precision and hygiene in an artistic studio.' }
};

const portfolio = [
  { id: 1, title: 'Corbeau mystique', style: 'Noir & gris', img: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=500' },
  { id: 2, title: 'Pivoine rouge', style: 'Couleur', img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=500' },
  { id: 3, title: 'Initiales fines', style: 'Lettrage', img: 'https://images.unsplash.com/photo-1542728928-0017031cbf65?w=500' },
  { id: 4, title: 'Lune fine line', style: 'Fine line', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500' }
];

const products = [
  { id: 'tee', name: 'T-shirt Signature', price: 35, sizes: ['S', 'M', 'L'], stock: 12, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500' },
  { id: 'hoodie', name: 'Hoodie Atelier', price: 69, sizes: ['M', 'L', 'XL'], stock: 8, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500' },
  { id: 'cap', name: 'Casquette Logo', price: 29, sizes: ['TU'], stock: 20, img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500' }
];

const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || {
  lang: 'fr',
  user: null,
  tattoos: [],
  moderationQueue: [],
  cart: [],
  promo: null,
  analytics: { planityClicks: 0, checkouts: 0 },
  admin: false,
  filter: 'Tous',
  notifications: []
};

function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function routeTo(route) {
  document.querySelectorAll('.view').forEach((v) => v.classList.toggle('active', v.dataset.view === route));
  document.querySelectorAll('.nav-btn[data-route]').forEach((btn) => btn.classList.toggle('active', btn.dataset.route === route));
}

function bindRouting() {
  document.querySelectorAll('[data-route]').forEach((node) => {
    node.addEventListener('click', () => routeTo(node.dataset.route));
  });
}

function applyLang() {
  const t = i18n[state.lang] || i18n.fr;
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.getElementById('hero-sub').textContent = t.heroSub;
  document.getElementById('lang').value = state.lang;
}

function analytics(eventName) {
  if (eventName === 'planity') state.analytics.planityClicks += 1;
  if (eventName === 'checkout') state.analytics.checkouts += 1;
  persist();
}

function planityOpen() {
  analytics('planity');
  window.open('https://www.planity.com', '_blank', 'noopener,noreferrer');
}

function renderPortfolio() {
  const filters = ['Tous', ...new Set(portfolio.map((p) => p.style))];
  const filtersWrap = document.getElementById('portfolio-filters');
  const grid = document.getElementById('portfolio-grid');
  filtersWrap.innerHTML = '';
  filters.forEach((f) => {
    const btn = document.createElement('button');
    btn.className = `chip ${state.filter === f ? 'active' : ''}`;
    btn.textContent = f;
    btn.onclick = () => {
      state.filter = f;
      persist();
      renderPortfolio();
    };
    filtersWrap.appendChild(btn);
  });

  const list = state.filter === 'Tous' ? portfolio : portfolio.filter((p) => p.style === state.filter);
  grid.innerHTML = list.length ? '' : '<p class="muted">Aucun projet dans cette catégorie pour le moment.</p>';
  list.forEach((p) => {
    const el = document.createElement('article');
    el.className = 'item';
    el.innerHTML = `<img src="${p.img}" alt="${p.title}" /><h4>${p.title}</h4><p class="muted">${p.style}</p>`;
    grid.appendChild(el);
  });
}

function renderShop() {
  const grid = document.getElementById('shop-grid');
  grid.innerHTML = '';
  products.forEach((p) => {
    const el = document.createElement('article');
    el.className = 'item';
    const options = p.sizes.map((s) => `<option value="${s}">${s}</option>`).join('');
    el.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
      <h4>${p.name}</h4>
      <p class="muted">${p.price}€ • Stock ${p.stock}</p>
      <label>Taille <select>${options}</select></label>
      <button class="btn">Ajouter au panier</button>
    `;
    el.querySelector('button').onclick = () => {
      const size = el.querySelector('select').value;
      if (p.stock <= 0) return;
      state.cart.push({ id: p.id, name: p.name, price: p.price, size });
      state.notifications.unshift(`Article ajouté : ${p.name} (${size})`);
      persist();
      renderCart();
    };
    grid.appendChild(el);
  });
}

function renderCart() {
  const empty = document.getElementById('cart-empty');
  const list = document.getElementById('cart-list');
  const totalEl = document.getElementById('cart-total');
  list.innerHTML = '';
  empty.style.display = state.cart.length ? 'none' : 'block';
  let subtotal = 0;

  state.cart.forEach((item, idx) => {
    subtotal += item.price;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} (${item.size}) — ${item.price}€ <button class="chip">Retirer</button>`;
    li.querySelector('button').onclick = () => {
      state.cart.splice(idx, 1);
      persist();
      renderCart();
    };
    list.appendChild(li);
  });

  const discount = state.promo === 'FLASH10' ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
  totalEl.textContent = `Sous-total: ${subtotal.toFixed(2)}€ • Réduction: ${discount.toFixed(2)}€ • Total: ${total.toFixed(2)}€`;
}

async function compressImage(file) {
  const bitmap = await createImageBitmap(file);
  const maxW = 1080;
  const ratio = Math.min(1, maxW / bitmap.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * ratio);
  canvas.height = Math.round(bitmap.height * ratio);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', 0.78);
}

function renderTattoos() {
  const empty = document.getElementById('tattoos-empty');
  const list = document.getElementById('tattoos-list');
  const loyalty = document.getElementById('loyalty');
  list.innerHTML = '';

  const approved = state.tattoos.filter((t) => t.status === 'approved');
  empty.style.display = approved.length ? 'none' : 'block';
  approved.forEach((t) => {
    const card = document.createElement('article');
    card.className = 'item';
    card.innerHTML = `<img src="${t.photo}" alt="${t.title}" /><h4>${t.title}</h4><p class="muted">${t.date} • ${t.artist} • ${t.zone}</p><p>${t.note || ''}</p>`;
    list.appendChild(card);
  });

  const points = approved.length * 80;
  loyalty.textContent = `Mes points : ${points} • Prochain avantage à 300 points`;
}

function renderModeration() {
  const empty = document.getElementById('moderation-empty');
  const list = document.getElementById('moderation-list');
  list.innerHTML = '';
  const pending = state.moderationQueue;
  empty.style.display = pending.length ? 'none' : 'block';

  pending.forEach((t) => {
    const row = document.createElement('article');
    row.className = 'item';
    row.innerHTML = `<h4>${t.title}</h4><p class="muted">${t.artist} • ${t.zone}</p><div class="cta-row"><button class="btn">Valider</button><button class="btn btn-ghost danger">Refuser</button></div>`;
    const [ok, ko] = row.querySelectorAll('button');
    ok.onclick = () => {
      const target = state.tattoos.find((x) => x.id === t.id);
      if (target) target.status = 'approved';
      state.moderationQueue = state.moderationQueue.filter((x) => x.id !== t.id);
      persist();
      renderModeration();
      renderTattoos();
    };
    ko.onclick = () => {
      state.tattoos = state.tattoos.filter((x) => x.id !== t.id);
      state.moderationQueue = state.moderationQueue.filter((x) => x.id !== t.id);
      persist();
      renderModeration();
      renderTattoos();
    };
    list.appendChild(row);
  });
}

function bindForms() {
  document.getElementById('lang').onchange = (e) => {
    state.lang = e.target.value;
    persist();
    applyLang();
  };

  document.getElementById('open-planity').onclick = planityOpen;
  document.getElementById('planity-cta').onclick = planityOpen;

  document.getElementById('register-form').onsubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const password = String(fd.get('password') || '');
    const status = document.getElementById('account-status');
    if (password.length < 8) {
      status.textContent = 'Mot de passe trop court (8 caractères minimum).';
      return;
    }
    state.user = {
      name: String(fd.get('name')),
      email: String(fd.get('email')),
      phone: String(fd.get('phone') || ''),
      consentAt: new Date().toISOString()
    };
    state.notifications.unshift('Profil mis à jour.');
    persist();
    status.textContent = 'Compte enregistré avec succès.';
  };

  document.getElementById('tattoo-form').onsubmit = async (e) => {
    e.preventDefault();
    if (!state.user) {
      routeTo('compte');
      document.getElementById('touchup-status').textContent = 'Créez un compte avant d’ajouter un tatouage.';
      return;
    }
    const fd = new FormData(e.target);
    const file = fd.get('file');
    if (!file || file.size === 0) return;
    if (file.size > 6 * 1024 * 1024) {
      document.getElementById('touchup-status').textContent = 'Image trop lourde (max 6 Mo).';
      return;
    }
    const mime = file.type || '';
    if (!mime.startsWith('image/')) {
      document.getElementById('touchup-status').textContent = 'Format non pris en charge.';
      return;
    }

    const photo = await compressImage(file);
    const entry = {
      id: crypto.randomUUID(),
      title: String(fd.get('title')),
      artist: String(fd.get('artist')),
      zone: String(fd.get('zone')),
      date: String(fd.get('date')),
      note: String(fd.get('note') || ''),
      photo,
      status: 'pending'
    };
    state.tattoos.unshift(entry);
    state.moderationQueue.unshift(entry);
    state.notifications.unshift('Nouvelle photo en attente de validation.');
    persist();
    e.target.reset();
    document.getElementById('touchup-status').textContent = 'Votre photo est en cours de validation par l’équipe.';
    renderTattoos();
    renderModeration();
  };

  document.getElementById('request-touchup').onclick = () => {
    document.getElementById('touchup-status').textContent = 'Demande envoyée. L’équipe vous répond sous 24h ouvrées.';
  };

  document.getElementById('apply-promo').onclick = () => {
    const code = document.getElementById('promo').value.trim().toUpperCase();
    const status = document.getElementById('promo-status');
    if (!code) {
      status.textContent = 'Entrez un code promo.';
      return;
    }
    if (code !== 'FLASH10') {
      status.textContent = 'Code promo invalide.';
      return;
    }
    state.promo = code;
    persist();
    status.textContent = 'Code promo appliqué : -10%';
    renderCart();
  };

  document.getElementById('checkout').onclick = () => {
    const status = document.getElementById('checkout-status');
    if (!state.cart.length) {
      status.textContent = 'Votre panier est vide.';
      return;
    }
    analytics('checkout');
    const delivery = document.getElementById('delivery-mode').value;
    state.notifications.unshift(`Commande validée (${delivery === 'collect' ? 'Click & Collect' : 'Livraison'}).`);
    state.cart = [];
    state.promo = null;
    persist();
    renderCart();
    status.textContent = 'Paiement validé (simulation Stripe). Email de confirmation envoyé.';
  };

  document.getElementById('export-data').onclick = () => {
    const data = { user: state.user, tattoos: state.tattoos, analytics: state.analytics, notifications: state.notifications.slice(0, 10) };
    document.getElementById('export-preview').textContent = JSON.stringify(data, null, 2);
  };

  document.getElementById('delete-data').onclick = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  document.getElementById('admin-login').onclick = () => {
    const key = document.getElementById('admin-key').value;
    if (key !== ADMIN_KEY) {
      document.getElementById('admin-status').textContent = 'Clé admin invalide.';
      return;
    }
    state.admin = true;
    persist();
    document.getElementById('admin-status').textContent = 'Mode admin activé.';
    renderModeration();
  };
}

function hydrateAccountForm() {
  if (!state.user) return;
  const form = document.getElementById('register-form');
  form.name.value = state.user.name || '';
  form.email.value = state.user.email || '';
  form.phone.value = state.user.phone || '';
  form.password.value = '********';
  form.consent.checked = true;
}

bindRouting();
bindForms();
applyLang();
renderPortfolio();
renderShop();
renderCart();
renderTattoos();
renderModeration();
hydrateAccountForm();
routeTo('accueil');
