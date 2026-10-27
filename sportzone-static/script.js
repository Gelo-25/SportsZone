const PRODUCTS = [
  {
    id: 1,
    name: "Court Control Basketball",
    category: "Basketball",
    price: 899,
    tag: "GAME DAY",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=700&q=80",
    description: "A versatile basketball for practice and recreational play.",
  },
  {
    id: 2,
    name: "Indoor Training Ball",
    category: "Football / Soccer",
    price: 749,
    tag: "TRAINING",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=700&q=80",
    description: "A training ball for casual games and skill sessions.",
  },
  {
    id: 3,
    name: "Everyday Running Shoes",
    category: "Running",
    price: 2199,
    tag: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    description:
      "Lightweight-looking running shoes for daily movement. Sample listing.",
  },
  {
    id: 4,
    name: "Performance Training Tee",
    category: "Sportswear",
    price: 599,
    tag: "ESSENTIAL",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    description: "A versatile training top for workouts and everyday wear.",
  },
  {
    id: 5,
    name: "Resistance Band Set",
    category: "Gym & Fitness",
    price: 399,
    tag: "TRAIN SMART",
    image:
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=700&q=80",
    description: "A compact sample resistance band set for home workouts.",
  },
  {
    id: 6,
    name: "Training Duffel Bag",
    category: "Accessories",
    price: 1099,
    tag: "CARRY MORE",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    description: "A practical bag concept for carrying training essentials.",
  },
  {
    id: 7,
    name: "Court Training Shorts",
    category: "Sportswear",
    price: 549,
    tag: "MOVE FREE",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=700&q=80",
    description: "Comfort-focused shorts for active days.",
  },
  {
    id: 8,
    name: "Grip Training Gloves",
    category: "Gym & Fitness",
    price: 349,
    tag: "GYM ESSENTIAL",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80",
    description: "A demonstration listing for gym training gloves.",
  },
  {
    id: 9,
    name: "Hydration Sports Bottle",
    category: "Accessories",
    price: 249,
    tag: "STAY READY",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80",
    description: "A reusable bottle concept for everyday hydration.",
  },
  {
    id: 10,
    name: "Football Shin Guards",
    category: "Football / Soccer",
    price: 299,
    tag: "PITCH READY",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=700&q=80",
    description:
      "A sample protective gear listing. Confirm specifications before sale.",
  },
  {
    id: 11,
    name: "Jump Rope",
    category: "Gym & Fitness",
    price: 199,
    tag: "QUICK SESSION",
    image:
      "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=700&q=80",
    description: "A compact cardio accessory concept.",
  },
  {
    id: 12,
    name: "Everyday Sports Socks",
    category: "Sportswear",
    price: 179,
    tag: "DAILY BASIC",
    image:
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=700&q=80",
    description: "A placeholder listing for everyday athletic socks.",
  },
  {
    id: 13,
    name: "Yoga & Stretch Mat",
    category: "Gym & Fitness",
    price: 899,
    tag: "RECOVER",
    image:
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=700&q=80",
    description: "A sample mat listing for stretching and floor exercises.",
  },
  {
    id: 14,
    name: "Training Cones Set",
    category: "Accessories",
    price: 249,
    tag: "DRILL READY",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=700&q=80",
    description: "Training cones for practice drills and agility sessions.",
  },
  {
    id: 15,
    name: "Basketball Arm Sleeve",
    category: "Basketball",
    price: 229,
    tag: "COURT GEAR",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=80",
    description: "A sample basketball accessory listing.",
  },
  {
    id: 16,
    name: "Football Training Jersey",
    category: "Football / Soccer",
    price: 699,
    tag: "TEAM SPIRIT",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=700&q=80",
    description:
      "A generic sports jersey concept. No team affiliation implied.",
  },
  {
    id: 17,
    name: "Training Sneakers",
    category: "Running",
    price: 1899,
    tag: "EVERYDAY",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    description:
      "A sample training shoe listing; confirm sizes and stock before sale.",
  },
  {
    id: 18,
    name: "Agility Resistance Kit",
    category: "Gym & Fitness",
    price: 649,
    tag: "LEVEL UP",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80",
    description: "A sample fitness kit concept for training routines.",
  },
];
const CATEGORIES = [
  {
    name: "Basketball",
    sub: "OWN THE COURT",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Football / Soccer",
    sub: "READY FOR KICKOFF",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Running",
    sub: "FIND YOUR PACE",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Gym & Fitness",
    sub: "PUSH YOUR LIMITS",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sportswear",
    sub: "MOVE YOUR WAY",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Accessories",
    sub: "THE EXTRA EDGE",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
  },
];
const CART_KEY = "sportzone-demo-cart-v1";
let cart = loadCart();
let toastTimer;
const $ = (id) => document.getElementById(id);
const peso = (n) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(
    n,
  );
const safe = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function loadCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(parsed)
      ? parsed.filter(
          (x) =>
            PRODUCTS.some((p) => p.id === x.id) &&
            Number.isInteger(x.qty) &&
            x.qty > 0,
        )
      : [];
  } catch {
    return [];
  }
}
function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {}
}
function renderCategories() {
  $("categoryGrid").innerHTML = CATEGORIES.map(
    (c) =>
      `<button class="category-card" data-category="${safe(c.name)}"><img src="${c.image}" alt="" loading="lazy"><div><strong>${safe(c.name)}</strong><span>${safe(c.sub)} ↗</span></div></button>`,
  ).join("");
  $("categoryFilter").innerHTML =
    '<option value="All">All categories</option>' +
    CATEGORIES.map(
      (c) => `<option value="${safe(c.name)}">${safe(c.name)}</option>`,
    ).join("");
}
function filteredProducts() {
  const query = $("searchInput").value.trim().toLowerCase(),
    category = $("categoryFilter").value,
    sort = $("sortSelect").value;
  let list = PRODUCTS.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(query),
  );
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  else if (sort === "high") list.sort((a, b) => b.price - a.price);
  else if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}
function renderProducts() {
  const list = filteredProducts();
  $("resultsCount").textContent =
    `Showing ${list.length} of ${PRODUCTS.length} products`;
  $("productGrid").innerHTML = list.length
    ? list
        .map(
          (p) => `<article class="product-card">
  <div class="product-image"><img src="${p.image}" alt="${safe(p.name)}" loading="lazy"><span class="product-tag">${safe(p.tag)}</span></div>
  <div class="product-info"><div class="product-category">${safe(p.category)}</div><h3 class="product-name">${safe(p.name)}</h3><div class="product-price">${peso(p.price)}</div><div class="product-actions"><button class="add-button" data-add="${p.id}">ADD TO CART +</button><button class="quick-button" data-details="${p.id}" aria-label="View details for ${safe(p.name)}">↗</button></div></div>
 </article>`,
        )
        .join("")
    : '<div class="no-results"><strong>No gear found.</strong><p>Try another search or clear your filters.</p></div>';
}
function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0),
    subtotal = cart.reduce(
      (sum, item) =>
        sum + PRODUCTS.find((p) => p.id === item.id).price * item.qty,
      0,
    );
  $("cartCount").textContent = count;
  $("drawerCount").textContent = `(${count})`;
  $("cartSubtotal").textContent = peso(subtotal);
  $("checkoutSubtotal").textContent = peso(subtotal);
  if (!cart.length) {
    $("cartItems").innerHTML =
      '<div class="cart-empty"><div style="font-size:36px;margin-bottom:12px">＋</div><strong>Your cart is waiting.</strong><p>Add a few essentials and get ready to move.</p></div>';
    $("checkoutOpen").disabled = true;
    $("checkoutOpen").style.opacity = ".5";
  } else {
    $("checkoutOpen").disabled = false;
    $("checkoutOpen").style.opacity = "1";
    $("cartItems").innerHTML = cart
      .map((item) => {
        const p = PRODUCTS.find((x) => x.id === item.id);
        return `<div class="cart-line"><img src="${p.image}" alt=""><div><h3>${safe(p.name)}</h3><div class="line-price">${peso(p.price)}</div><div class="line-controls"><button data-qty="${p.id}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-qty="${p.id}" data-delta="1" aria-label="Increase quantity">+</button></div></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove ${safe(p.name)}">×</button></div>`;
      })
      .join("");
  }
}
function showToast(message) {
  const t = $("toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2300);
}
function openCart() {
  $("cartDrawer").classList.add("open");
  $("overlay").classList.add("show");
  $("cartDrawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("overlay").classList.remove("show");
  $("cartDrawer").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function openCheckout() {
  if (!cart.length) {
    showToast("Your cart is empty.");
    return;
  }
  closeCart();
  $("checkoutModal").classList.add("open");
  $("checkoutModal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCheckout() {
  $("checkoutModal").classList.remove("open");
  $("checkoutModal").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function addToCart(id) {
  const item = cart.find((x) => x.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  showToast(`${PRODUCTS.find((p) => p.id === id).name} added to cart.`);
}
function init() {
  $("year").textContent = new Date().getFullYear();
  renderCategories();
  renderProducts();
  renderCart();
  ["searchInput", "categoryFilter", "sortSelect"].forEach((id) =>
    $(id).addEventListener(
      id === "searchInput" ? "input" : "change",
      renderProducts,
    ),
  );
  $("clearFilters").addEventListener("click", () => {
    $("searchInput").value = "";
    $("categoryFilter").value = "All";
    $("sortSelect").value = "featured";
    renderProducts();
  });
  $("categoryGrid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-category]");
    if (card) {
      $("categoryFilter").value = card.dataset.category;
      renderProducts();
      $("shop").scrollIntoView({ behavior: "smooth" });
    }
  });
  $("productGrid").addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]"),
      details = e.target.closest("[data-details]");
    if (add) addToCart(Number(add.dataset.add));
    if (details) {
      const p = PRODUCTS.find((x) => x.id === Number(details.dataset.details));
      alert(
        `${p.name}\n\n${p.description}\n\nSample price: ${peso(p.price)}\n\nThis is a demo listing. Product details and availability must be verified before purchase.`,
      );
    }
  });
  $("openCart").addEventListener("click", openCart);
  $("closeCart").addEventListener("click", closeCart);
  $("overlay").addEventListener("click", closeCart);
  $("continueShopping").addEventListener("click", closeCart);
  $("cartItems").addEventListener("click", (e) => {
    const qty = e.target.closest("[data-qty]"),
      remove = e.target.closest("[data-remove]");
    if (qty) {
      const id = Number(qty.dataset.qty),
        item = cart.find((x) => x.id === id);
      if (item) {
        item.qty += Number(qty.dataset.delta);
        if (item.qty <= 0) cart = cart.filter((x) => x.id !== id);
        saveCart();
        renderCart();
      }
    }
    if (remove) {
      cart = cart.filter((x) => x.id !== Number(remove.dataset.remove));
      saveCart();
      renderCart();
    }
  });
  $("checkoutOpen").addEventListener("click", openCheckout);
  $("closeCheckout").addEventListener("click", closeCheckout);
  $("checkoutModal").addEventListener("click", (e) => {
    if (e.target === $("checkoutModal")) closeCheckout();
  });
  $("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cart.length) {
      showToast("Your cart is empty.");
      closeCheckout();
      return;
    }
    const data = new FormData(e.currentTarget);
    const firstName = String(data.get("fullName") || "there")
      .trim()
      .split(/\s+/)[0];
    const itemCount = cart.reduce((n, x) => n + x.qty, 0);
    alert(
      `Demo checkout complete, ${firstName}!\n\nItems: ${itemCount}\nSubtotal: ${$("cartSubtotal").textContent}\n\nNo real order was placed, no payment was processed, and these details were not sent to a server.`,
    );
    cart = [];
    saveCart();
    renderCart();
    e.currentTarget.reset();
    closeCheckout();
    showToast("Demo checkout completed. No real order was placed.");
  });
  $("menuToggle").addEventListener("click", () => {
    const open = $("navLinks").classList.toggle("open");
    $("menuToggle").setAttribute("aria-expanded", String(open));
  });
  $("navLinks").addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      $("navLinks").classList.remove("open");
      $("menuToggle").setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeCheckout();
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
