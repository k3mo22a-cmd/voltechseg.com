/* =========================================================
   ICON LIBRARY (inline SVG, replaces emoji throughout the site)
   ========================================================= */
var ICONS = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6"/>',
    bolt: '<path d="M12 2 4 13h6l-1 9 9-13h-6l1-7z"/>',
    package: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    shield: '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z"/>',
    'shield-check': '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z"/><path d="m9.5 12 1.8 1.8L15 10"/>',
    chat: '<path d="M4 4h16v11H8l-4 4V4z"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    close: '<path d="m5 5 14 14"/><path d="m19 5-14 14"/>',
    apple: '<path d="M15.5 8.3c-1.1 0-2 .6-2.6.6-.6 0-1.6-.6-2.6-.6-1.9 0-3.9 1.6-3.9 4.6 0 2.7 2 6.4 3.6 6.4.7 0 1.2-.5 2-.5.8 0 1.2.5 2 .5 1.5 0 3.3-3.3 3.3-5-1.6-.5-2.5-2-2.5-3.5 0-1.4.9-2.5 1.7-2.5z"/><path d="M12 5c0-1 .8-2 2-2-.1 1.2-.9 2-2 2z"/>',
    cable: '<circle cx="7" cy="17" r="2.5"/><circle cx="17" cy="7" r="2.5"/><path d="m8.8 15.2 6.4-6.4"/>',
    plug: '<path d="M9 3v6M15 3v6"/><path d="M6 9h12v3a6 6 0 0 1-12 0V9z"/><path d="M12 18v3"/>',
    battery: '<rect x="2" y="8" width="17" height="8" rx="1.5"/><path d="M22 11v2"/><path d="M6 11v2"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    headphones: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="14" width="5" height="7" rx="1.5"/><rect x="17" y="14" width="5" height="7" rx="1.5"/>',
    car: '<path d="M4 16V9l2-4h12l2 4v7"/><path d="M2 16h20v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2z"/><circle cx="7" cy="16" r="1.5"/><circle cx="17" cy="16" r="1.5"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6 6 2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    minus: '<path d="M5 12h14"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    wallet: '<rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><circle cx="17" cy="15" r="1"/>',
    heart: '<path d="M12 20.5s-7-4.35-9.5-8.8C.9 8.4 2.3 5 5.6 4.3c2-.4 3.9.5 5 2.1L12 8l1.4-1.6c1.1-1.6 3-2.5 5-2.1 3.3.7 4.7 4.1 3.1 7.4C19 16.15 12 20.5 12 20.5z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
    tiktok: '<path d="M14 3v10.2a3.2 3.2 0 1 1-2.4-3.1" fill="none"/><path d="M14 3c.3 2.3 2 4 4.5 4.2" fill="none"/>',
    whatsapp: '<path d="M4 20l1.3-3.9A7.9 7.9 0 1 1 8.4 19L4 20z"/><path d="M8.5 8.8c.2-.6.5-.6.8-.6h.6c.2 0 .5 0 .7.5s.8 1.9.8 2 .1.3 0 .5c-.1.2-.2.3-.4.5l-.5.6c-.2.2-.4.4-.2.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.7-.9c.2-.3.5-.2.8-.1l1.7.9c.3.1.5.2.5.4 0 .5-.6 1.5-1.4 1.8-.7.3-1.5.4-2.5.1-1-.3-2.3-.8-4-2.4-2.3-2.2-3-4.6-3.1-4.9-.1-.3-.9-1.4-.9-2.4 0-1 .5-1.5.7-1.7z"/>'
};
function icon(name, size) {
    size = size || 20;
    return '<svg class="icon-svg" viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg>';
}

/* Returns the markup for a product's thumbnail — a real photo (product.image)
   if one is set, otherwise falls back to the inline SVG icon. */
function productImageHtml(product) {
    if (product.image) {
        return '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">';
    }
    return product.icon || '';
}

var PRODUCTS = [
    { id: 1, name: "Anker Smart 45W GaN Charger with Display", category: "chargers", categoryLabel: "Chargers", price: 950, oldPrice: null, rating: 4.7, reviews: 0, badge: "new", image: "images/products/anker-smart-45w-charger.png", description: "45W GaN fast charger with a built-in smart display that shows live charging status and connected device. Foldable prongs, compatible with iPhone 17 down to iPhone 8 and all USB-C devices." },
    { id: 2, name: "Dior Oblique Monogram iPhone Case", category: "cases", categoryLabel: "Phone Cases", price: 250, oldPrice: null, rating: 4.6, reviews: 0, badge: "new", image: "images/products/dior-case.jpg", models: ["14 Pro","14 Pro Max","15","15 Pro","15 Pro Max","16","16 Pro","16 Pro Max","17","17 Pro","17 Pro Max"], description: "Designer-inspired oblique monogram case with raised camera bumper and metal logo detail. Soft-touch fabric finish over a protective TPU shell." },
    { id: 3, name: "Gear4 Crystal Palace Clear Case", category: "cases", categoryLabel: "Phone Cases", price: 200, oldPrice: null, rating: 4.5, reviews: 0, badge: null, image: "images/products/gear4-case.png", models: ["14 Pro","14 Pro Max","15","15 Pro","15 Pro Max","16","16 Pro","16 Pro Max","17","17 Pro","17 Pro Max"], description: "Ultra-clear case with D3O impact protection technology, engineered to survive multiple drops without yellowing. Raised edges protect the screen and camera." },
    { id: 4, name: "Guess 4G Card Holder iPhone Case", category: "cases", categoryLabel: "Phone Cases", price: 250, oldPrice: null, rating: 4.5, reviews: 0, badge: null, image: "images/products/guess-case.jpg", models: ["14 Pro","14 Pro Max","15","15 Pro","15 Pro Max","16","16 Pro","16 Pro Max","17","17 Pro","17 Pro Max"], description: "Licensed Guess 4G monogram case with a built-in card slot and signature metal triangle logo. PU leather finish over a protective hard shell." },
    { id: 5, name: "Louis Vuitton Monogram Card Holder Case", category: "cases", categoryLabel: "Phone Cases", price: 250, oldPrice: null, rating: 4.4, reviews: 0, badge: "new", image: "images/products/lv-case.jpg", models: ["14 Pro","14 Pro Max","15","15 Pro","15 Pro Max","16","16 Pro","16 Pro Max","17","17 Pro","17 Pro Max"], description: "Designer-inspired monogram case with a built-in card slot pocket. Textured canvas print finish with gold-tone logo hardware over a protective shell." },
    { id: 6, name: "PITAKA MagEZ Aramid Fiber Case", category: "cases", categoryLabel: "Phone Cases", price: 400, oldPrice: 600, rating: 4.8, reviews: 0, badge: "sale", image: "images/products/pitaka-case.png", models: ["14 Pro","14 Pro Max","15","15 Pro","15 Pro Max","16","16 Pro","16 Pro Max","17","17 Pro","17 Pro Max"], description: "Ultra-thin, ultra-light case woven from real aramid fiber for a case-less feel. MagSafe compatible with a 3D-textured non-slip grip and raised camera lip." }
];

/* Category order: Phone Cases, Chargers, Screen Protectors first, then the rest. "Smart Home" removed. */
var CATEGORIES = {
    cases: { name: "Phone Cases", tagline: "Protection meets style.", icon: '<img src="images/cases-icon.jpg" alt="Phone Cases">' },
    chargers: { name: "Chargers", tagline: "Power up safely, anytime.", icon: '<img src="images/chargers-icon.jpg" alt="Chargers">' },
    protectors: { name: "Screen Protectors", tagline: "Crystal clear protection.", icon: '<img src="images/protectors-icon.jpg" alt="Screen Protectors">' },
    apple: { name: "Apple", tagline: "Genuine Apple devices and accessories.", icon: '<img src="images/apple-icon.jpg" alt="Apple">' },
    cables: { name: "Cables", tagline: "Fast charging, built to last.", icon: '<img src="images/cables-icon.jpg" alt="Cables">' },
    powerbanks: { name: "Power Banks", tagline: "More power, more freedom.", icon: '<img src="images/powerbanks-icon.jpg" alt="Power Banks">' },
    magsafe: { name: "MagSafe", tagline: "Snap. Charge. Go.", icon: icon('bolt', 28) },
    audio: { name: "Headphones & AirPods", tagline: "Sound that moves you.", icon: icon('headphones', 28) },
    car: { name: "Car Accessories", tagline: "Drive smart, charge smart.", icon: icon('car', 28) },
    accessories: { name: "Accessories", tagline: "Essentials for every device.", icon: icon('sparkle', 28) }
};
var CATEGORY_ORDER = ['cases', 'chargers', 'protectors', 'apple', 'cables', 'powerbanks', 'magsafe', 'audio', 'car', 'accessories'];

function renderProductCard(product) {
    var badgeHtml = product.badge
        ? '<div class="product-badge ' + product.badge + '">' + (product.badge === 'new' ? 'NEW' : 'SALE') + '</div>'
        : '';
    var oldPriceHtml = product.oldPrice
        ? '<span class="price-old">EGP ' + product.oldPrice.toLocaleString() + '</span>'
        : '';
    var reviewCount = getCommentsForProduct(product.id).length;
    var reviewHtml = reviewCount > 0
        ? '<span class="review-count">' + icon('chat', 13) + ' ' + reviewCount + ' review' + (reviewCount === 1 ? '' : 's') + '</span>'
        : '<span class="review-count">' + icon('chat', 13) + ' Be the first to review</span>';
    var favActive = isFavorite(product.id) ? ' active' : '';
    return '<a href="product.html?id=' + product.id + '" class="product-card" style="text-decoration:none;color:inherit;">'
        + badgeHtml
        + '<button class="fav-btn' + favActive + '" data-fav-id="' + product.id + '" onclick="event.preventDefault();event.stopPropagation();toggleFavorite(' + product.id + ', this)" title="Add to Favorites">' + icon('heart', 12) + '</button>'
        + '<div class="product-image">' + productImageHtml(product) + '</div>'
        + '<div class="product-info">'
        + '<div class="product-category">' + product.categoryLabel + '</div>'
        + '<div class="product-name">' + product.name + '</div>'
        + '<div class="product-rating">' + reviewHtml + '</div>'
        + '<div class="product-price"><div><span class="price">EGP ' + product.price.toLocaleString() + '</span>' + oldPriceHtml + '</div>'
        + '<button class="add-cart-btn" onclick="event.preventDefault();event.stopPropagation();addToCart(' + product.id + ')" title="Add to Cart">' + icon('plus', 16) + '</button></div>'
        + '</div></a>';
}

function getUrlParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

/* =========================================================
   CART + CHECKOUT SYSTEM
   ---------------------------------------------------------
   Orders are submitted straight to your inbox via EmailJS
   (https://emailjs.com) — no backend needed. The order lands
   in your email the instant the customer clicks "Place Order",
   with zero action required on their end.

   SETUP (one-time, ~3 minutes):
   1. Go to https://dashboard.emailjs.com and log in (you've
      already added the emailjs.init() script with your public
      key to the <head> of every page — that part is done).
   2. Email Services tab -> Add New Service -> connect your
      Gmail account (voltevhsstore@gmail.com). Copy the
      Service ID it gives you, e.g. "service_abc1234".
   3. Email Templates tab -> Create New Template. Use these
      variable names in the template body/subject so they match
      what sendMail() sends below:
        {{subject}}       {{name}}          {{phone}}
        {{alt_phone}}     {{email}}         {{governorate}}
        {{address}}       {{notes}}         {{payment_method}}
        {{instapay_ref}}  {{total}}         {{items}}
        {{order_summary}} (full plain-text summary, easiest to
                            just drop this alone in the template body)
      Set the "To Email" field in the template settings to your
      inbox (voltevhsstore@gmail.com). Copy the Template ID,
      e.g. "template_xyz789".
   4. Paste both IDs into EMAILJS_SERVICE_ID and
      EMAILJS_TEMPLATE_ID below.
   That's it — every order will email you automatically with
   full customer + order details. If the IDs below are still
   placeholders, or the request fails for any reason (offline,
   wrong IDs, etc.), the site automatically falls back to the
   mailto: flow so no order is ever lost.
   ========================================================= */
var EMAILJS_SERVICE_ID = "service_4hd0pn5";
var EMAILJS_TEMPLATE_ID = "template_gmey22u";
var ORDER_EMAIL = "voltevhsstore@gmail.com";
var INSTAPAY_NUMBER = "01000000000"; // TODO: replace with your real Instapay-linked number
var CART_KEY = "voltechs_cart";

function getCart() {
    try {
        var raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId, qty, variant) {
    qty = qty || 1;
    variant = variant || null;
    var cart = getCart();
    var entry = null;
    for (var i = 0; i < cart.length; i++) { if (cart[i].id === productId && (cart[i].variant || null) === variant) { entry = cart[i]; break; } }
    if (entry) { entry.qty += qty; } else { cart.push({ id: productId, qty: qty, variant: variant }); }
    saveCart(cart);
    if (typeof renderCartDrawer === 'function') renderCartDrawer();
    flashCartButton();
}

function removeFromCart(productId, variant) {
    variant = variant || null;
    var cart = getCart().filter(function(c) { return !(c.id === productId && (c.variant || null) === variant); });
    saveCart(cart);
    renderCartDrawer();
}

function setCartQty(productId, qty, variant) {
    variant = variant || null;
    var cart = getCart();
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === productId && (cart[i].variant || null) === variant) {
            cart[i].qty = qty;
            if (cart[i].qty < 1) cart.splice(i, 1);
            break;
        }
    }
    saveCart(cart);
    renderCartDrawer();
}

function getCartDetailed() {
    return getCart().map(function(c) {
        var p = getProductById(c.id);
        return p ? { product: p, qty: c.qty, variant: c.variant || null, lineTotal: p.price * c.qty } : null;
    }).filter(Boolean);
}

function getCartCount() {
    return getCart().reduce(function(sum, c) { return sum + c.qty; }, 0);
}

function getCartTotal() {
    return getCartDetailed().reduce(function(sum, d) { return sum + d.lineTotal; }, 0);
}

function updateCartBadge() {
    var count = getCartCount();
    document.querySelectorAll('.cart-count').forEach(function(el) { el.textContent = count; });
}

function flashCartButton() {
    document.querySelectorAll('.cart-btn').forEach(function(btn) {
        btn.style.transform = 'scale(1.12)';
        setTimeout(function() { btn.style.transform = ''; }, 150);
    });
}

function cartItemRowHtml(d) {
    var variantHtml = d.variant ? '<div class="cart-item-variant" style="font-size:12px;color:var(--text-muted);">Model: ' + d.variant + '</div>' : '';
    var vArg = d.variant ? ",'" + d.variant.replace(/'/g, "\\'") + "'" : ',null';
    return '<div class="cart-item">' +
        '<div class="cart-item-img">' + productImageHtml(d.product) + '</div>' +
        '<div class="cart-item-info">' +
            '<div class="cart-item-name">' + d.product.name + '</div>' +
            variantHtml +
            '<div class="cart-item-price">EGP ' + d.lineTotal.toLocaleString() + '</div>' +
            '<div class="cart-item-row">' +
                '<div class="cart-item-qty">' +
                    '<button onclick="setCartQty(' + d.product.id + ',' + (d.qty - 1) + vArg + ')">' + icon('minus', 14) + '</button>' +
                    '<span>' + d.qty + '</span>' +
                    '<button onclick="setCartQty(' + d.product.id + ',' + (d.qty + 1) + vArg + ')">' + icon('plus', 14) + '</button>' +
                '</div>' +
                '<button class="cart-item-remove" onclick="removeFromCart(' + d.product.id + vArg + ')">Remove</button>' +
            '</div>' +
        '</div>' +
    '</div>';
}

function renderCartDrawer() {
    var body = document.getElementById('cart-drawer-body');
    var footer = document.getElementById('cart-drawer-footer');
    var title = document.getElementById('cart-drawer-title');
    if (!body) return;
    var items = getCartDetailed();
    if (title) title.innerHTML = icon('cart', 18) + ' Your Cart';
    document.getElementById('cart-back-btn').style.display = 'none';
    if (items.length === 0) {
        body.innerHTML = '<div class="cart-empty"><div class="icon">' + icon('cart', 40) + '</div><p>Your cart is empty.</p></div>';
        footer.innerHTML = '';
        return;
    }
    body.innerHTML = items.map(cartItemRowHtml).join('');
    var total = getCartTotal();
    footer.innerHTML =
        '<div class="cart-subtotal-row"><span>Subtotal</span><span class="amt">EGP ' + total.toLocaleString() + '</span></div>' +
        '<button class="cart-checkout-btn" onclick="renderCheckoutForm()">Checkout ' + icon('arrow', 16) + '</button>';
}

function openCart() {
    renderCartDrawer();
    document.getElementById('cart-drawer').classList.add('open');
    document.getElementById('cart-overlay').classList.add('open');
}

function closeCart() {
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('open');
}

function renderCheckoutForm() {
    var body = document.getElementById('cart-drawer-body');
    var footer = document.getElementById('cart-drawer-footer');
    var title = document.getElementById('cart-drawer-title');
    var items = getCartDetailed();
    if (items.length === 0) { renderCartDrawer(); return; }
    if (title) title.innerHTML = icon('wallet', 18) + ' Checkout';
    var backBtn = document.getElementById('cart-back-btn');
    backBtn.style.display = 'inline-block';
    backBtn.onclick = renderCartDrawer;

    var total = getCartTotal();
    var summaryHtml = '<div class="checkout-order-summary">' +
        items.map(function(d) { return '<div><span>' + d.qty + '&times; ' + d.product.name + (d.variant ? ' (' + d.variant + ')' : '') + '</span><span>EGP ' + d.lineTotal.toLocaleString() + '</span></div>'; }).join('') +
        '<div class="cos-total"><span>Total</span><span>EGP ' + total.toLocaleString() + '</span></div>' +
    '</div>';

    var acc = getAccount();
    var prefillName = acc ? acc.name : '';
    var prefillEmail = acc ? acc.email : '';
    var prefillPhone = acc && acc.phone ? acc.phone : '';

    var governorates = ["Cairo","Giza","Alexandria","Qalyubia","Sharqia","Dakahlia","Gharbia","Monufia","Beheira","Kafr El Sheikh","Damietta","Port Said","Ismailia","Suez","Faiyum","Beni Suef","Minya","Asyut","Sohag","Qena","Luxor","Aswan","Red Sea","New Valley","Matrouh","North Sinai","South Sinai"];
    var govOptions = '<option value="">Select governorate...</option>' + governorates.map(function(g) { return '<option value="' + g + '">' + g + '</option>'; }).join('');

    body.innerHTML = summaryHtml +
        '<div class="form-group"><label class="form-label">Full Name</label><input type="text" id="co-name" class="form-input" placeholder="e.g. Ahmed Mostafa" value="' + prefillName + '"></div>' +
        '<div class="form-row2">' +
            '<div class="form-group"><label class="form-label">Phone Number</label><input type="tel" id="co-phone" class="form-input" placeholder="01xxxxxxxxx" value="' + prefillPhone + '"></div>' +
            '<div class="form-group"><label class="form-label">Alt. Phone (optional)</label><input type="tel" id="co-phone2" class="form-input" placeholder="01xxxxxxxxx"></div>' +
        '</div>' +
        '<div class="form-group"><label class="form-label">Email</label><input type="email" id="co-email" class="form-input" placeholder="you@example.com" value="' + prefillEmail + '"></div>' +
        '<div class="form-group"><label class="form-label">Governorate</label><select id="co-governorate" class="form-input">' + govOptions + '</select></div>' +
        '<div class="form-group"><label class="form-label">Delivery Address</label><textarea id="co-address" class="form-textarea" placeholder="Street, building, floor/apt, city, nearest landmark..."></textarea></div>' +
        '<div class="form-group"><label class="form-label">Order Notes (optional)</label><textarea id="co-notes" class="form-textarea" placeholder="Preferred delivery time, gift note, special instructions..."></textarea></div>' +
        '<div class="form-error" id="co-error">Please fill in all required fields: name, phone, email, governorate, and address.</div>' +
        '<div class="form-group">' +
            '<label class="form-label">Payment Method</label>' +
            '<div class="pay-options">' +
                '<label class="pay-option selected" id="pay-opt-instapay">' +
                    '<input type="radio" name="pay-method" value="instapay" checked onchange="onPayMethodChange(this)">' +
                    '<div><div class="pay-label">' + icon('phone', 16) + ' InstaPay</div><div class="pay-desc">Pay instantly via InstaPay app</div></div>' +
                '</label>' +
                '<label class="pay-option" id="pay-opt-cod">' +
                    '<input type="radio" name="pay-method" value="cod" onchange="onPayMethodChange(this)">' +
                    '<div><div class="pay-label">' + icon('wallet', 16) + ' Cash on Delivery</div><div class="pay-desc">Pay cash when your order arrives</div></div>' +
                '</label>' +
            '</div>' +
            '<div class="instapay-note" id="instapay-note">Send <strong>EGP ' + total.toLocaleString() + '</strong> to InstaPay number <strong>' + INSTAPAY_NUMBER + '</strong>, then enter your transaction reference below (optional but helps us confirm faster).</div>' +
            '<div class="form-group" id="instapay-ref-group" style="margin-top:10px;"><label class="form-label">InstaPay Transaction Ref (optional)</label><input type="text" id="co-instapay-ref" class="form-input" placeholder="e.g. IP-928374"></div>' +
        '</div>';

    footer.innerHTML = '<button class="cart-place-order-btn" onclick="submitOrder()">Place Order ' + icon('bolt', 16) + '</button>';
}

function onPayMethodChange(input) {
    document.getElementById('pay-opt-instapay').classList.toggle('selected', input.value === 'instapay');
    document.getElementById('pay-opt-cod').classList.toggle('selected', input.value === 'cod');
    document.getElementById('instapay-note').style.display = input.value === 'instapay' ? 'block' : 'none';
    document.getElementById('instapay-ref-group').style.display = input.value === 'instapay' ? 'block' : 'none';
}

function submitOrder() {
    var name = document.getElementById('co-name').value.trim();
    var phone = document.getElementById('co-phone').value.trim();
    var phone2 = document.getElementById('co-phone2').value.trim();
    var email = document.getElementById('co-email').value.trim();
    var governorate = document.getElementById('co-governorate').value;
    var address = document.getElementById('co-address').value.trim();
    var notes = document.getElementById('co-notes').value.trim();
    var payMethod = document.querySelector('input[name="pay-method"]:checked').value;
    var instapayRef = document.getElementById('co-instapay-ref') ? document.getElementById('co-instapay-ref').value.trim() : '';

    if (!name || !phone || !email || !governorate || !address) {
        document.getElementById('co-error').classList.add('show');
        return;
    }
    document.getElementById('co-error').classList.remove('show');

    var items = getCartDetailed();
    var total = getCartTotal();
    var payLabel = payMethod === 'instapay' ? 'InstaPay' : 'Cash on Delivery (COD)';

    var bodyLines = [];
    bodyLines.push('NEW ORDER - VOLTECHS STORE');
    bodyLines.push('');
    bodyLines.push('Customer: ' + name);
    bodyLines.push('Phone: ' + phone);
    if (phone2) bodyLines.push('Alt. Phone: ' + phone2);
    bodyLines.push('Email: ' + email);
    bodyLines.push('Governorate: ' + governorate);
    bodyLines.push('Address: ' + address);
    if (notes) bodyLines.push('Notes: ' + notes);
    bodyLines.push('Payment Method: ' + payLabel);
    if (payMethod === 'instapay' && instapayRef) bodyLines.push('InstaPay Ref: ' + instapayRef);
    bodyLines.push('');
    bodyLines.push('Items:');
    items.forEach(function(d) { bodyLines.push('- ' + d.qty + 'x ' + d.product.name + (d.variant ? ' (' + d.variant + ')' : '') + ' — EGP ' + d.lineTotal.toLocaleString()); });
    bodyLines.push('');
    bodyLines.push('TOTAL: EGP ' + total.toLocaleString());

    var subject = 'New Order from ' + name + ' (' + payLabel + ')';
    var messageText = bodyLines.join('\n');

    var placeBtn = document.querySelector('.cart-place-order-btn');
    if (placeBtn) { placeBtn.disabled = true; placeBtn.innerHTML = 'Placing Order...'; }

    function mailtoFallback() {
        var mailto = 'mailto:' + ORDER_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(messageText);
        window.location.href = mailto;
        showOrderSuccess(payLabel, true);
    }

    var idsConfigured = EMAILJS_SERVICE_ID.indexOf('YOUR_SERVICE_ID') === -1 &&
                         EMAILJS_TEMPLATE_ID.indexOf('YOUR_TEMPLATE_ID') === -1 &&
                         typeof emailjs !== 'undefined';

    if (!idsConfigured) {
        // EmailJS isn't hooked up yet — use mailto so no order is lost.
        mailtoFallback();
        return;
    }

    var params = {
        subject: subject,
        name: name,
        phone: phone,
        alt_phone: phone2 || '(not provided)',
        email: email,
        governorate: governorate,
        address: address,
        notes: notes || '(none)',
        payment_method: payLabel,
        instapay_ref: instapayRef || '(none)',
        total: 'EGP ' + total.toLocaleString(),
        items: items.map(function(d) { return d.qty + 'x ' + d.product.name + (d.variant ? ' (' + d.variant + ')' : '') + ' — EGP ' + d.lineTotal.toLocaleString(); }).join('\n'),
        order_summary: messageText,
        reply_to: email
    };

    sendMail(params, function success() {
        showOrderSuccess(payLabel, false);
    }, function failure() {
        mailtoFallback();
    });
}

/* Sends the order to your inbox via EmailJS.
   Called by submitOrder() above — you shouldn't need to call this
   directly. onSuccess/onFailure are callbacks so submitOrder() can
   decide what to show the customer. */
function sendMail(params, onSuccess, onFailure) {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
        .then(function() {
            if (onSuccess) onSuccess();
        })
        .catch(function(err) {
            console.error('EmailJS error:', err);
            if (onFailure) onFailure();
        });
}

function showOrderSuccess(payLabel, viaEmailApp) {
    saveCart([]);
    var body = document.getElementById('cart-drawer-body');
    var footer = document.getElementById('cart-drawer-footer');
    var title = document.getElementById('cart-drawer-title');
    document.getElementById('cart-back-btn').style.display = 'none';
    if (title) title.innerHTML = icon('check', 18) + ' Order Ready';
    var message = viaEmailApp
        ? 'Your email app should have opened with your order details addressed to us. Just hit <strong>Send</strong> to confirm your order with ' + payLabel + '.'
        : 'We\'ve received your order and it\'s already in our inbox — no further action needed. We\'ll confirm your order with ' + payLabel + ' shortly.';
    body.innerHTML = '<div class="order-success"><div class="icon">' + icon('check', 30) + '</div><h3>' + (viaEmailApp ? 'Almost done!' : 'Order placed!') + '</h3><p>' + message + ' If you need anything in the meantime, message us on <a href="https://wa.me/201000700965" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600;">WhatsApp</a>.</p></div>';
    footer.innerHTML = '<button class="cart-place-order-btn" onclick="closeCart()">Close</button>';
}

var CART_DRAWER_HTML =
    '<div class="cart-overlay" id="cart-overlay" onclick="closeCart()"></div>' +
    '<div class="cart-drawer" id="cart-drawer">' +
        '<div class="cart-drawer-header">' +
            '<button class="cart-back-btn" id="cart-back-btn" style="display:none;">' + icon('arrow', 16) + '</button>' +
            '<h3 id="cart-drawer-title">' + icon('cart', 18) + ' Your Cart</h3>' +
            '<button class="cart-close-btn" onclick="closeCart()">' + icon('close', 16) + '</button>' +
        '</div>' +
        '<div class="cart-drawer-body" id="cart-drawer-body"></div>' +
        '<div class="cart-drawer-footer" id="cart-drawer-footer"></div>' +
    '</div>';

function initCartUI() {
    if (document.getElementById('cart-drawer')) return;
    document.body.insertAdjacentHTML('beforeend', CART_DRAWER_HTML);
    document.querySelectorAll('.cart-btn').forEach(function(btn) {
        btn.addEventListener('click', openCart);
    });
    updateCartBadge();
}

/* =========================================================
   FAVORITES / WISHLIST
   ========================================================= */
var FAV_KEY = "voltechs_favorites";

function getFavorites() {
    try {
        var raw = localStorage.getItem(FAV_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
}

function saveFavorites(favs) {
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
    updateFavBadge();
}

function isFavorite(productId) {
    return getFavorites().indexOf(productId) !== -1;
}

function toggleFavorite(productId, btnEl) {
    var favs = getFavorites();
    var idx = favs.indexOf(productId);
    var nowActive;
    if (idx === -1) { favs.push(productId); nowActive = true; }
    else { favs.splice(idx, 1); nowActive = false; }
    saveFavorites(favs);

    // Update every heart button for this product on the page (card + any open drawer)
    document.querySelectorAll('[data-fav-id="' + productId + '"]').forEach(function(el) {
        el.classList.toggle('active', nowActive);
    });
    if (btnEl) {
        btnEl.classList.add('pulse');
        setTimeout(function() { btnEl.classList.remove('pulse'); }, 300);
    }
    if (typeof renderFavDrawer === 'function') renderFavDrawer();
}

function getFavoriteProducts() {
    return getFavorites().map(getProductById).filter(Boolean);
}

function updateFavBadge() {
    var count = getFavorites().length;
    document.querySelectorAll('.fav-count').forEach(function(el) { el.textContent = count; });
}

var FAV_DRAWER_HTML =
    '<div class="cart-overlay" id="fav-overlay" onclick="closeFavDrawer()"></div>' +
    '<div class="cart-drawer" id="fav-drawer">' +
        '<div class="cart-drawer-header">' +
            '<h3>' + icon('heart', 18) + ' My Favorites</h3>' +
            '<button class="cart-close-btn" onclick="closeFavDrawer()">' + icon('close', 16) + '</button>' +
        '</div>' +
        '<div class="cart-drawer-body" id="fav-drawer-body"></div>' +
    '</div>';

function initFavUI() {
    if (document.getElementById('fav-drawer')) return;
    document.body.insertAdjacentHTML('beforeend', FAV_DRAWER_HTML);
    document.querySelectorAll('.fav-btn-header').forEach(function(btn) {
        btn.addEventListener('click', openFavDrawer);
    });
    updateFavBadge();
}

function favItemRowHtml(p) {
    return '<div class="cart-item">' +
        '<div class="cart-item-img">' + productImageHtml(p) + '</div>' +
        '<a href="product.html?id=' + p.id + '" class="cart-item-info" style="text-decoration:none;color:inherit;">' +
            '<div class="cart-item-name">' + p.name + '</div>' +
            '<div class="cart-item-price">EGP ' + p.price.toLocaleString() + '</div>' +
        '</a>' +
        '<div style="display:flex;flex-direction:column;gap:8px;">' +
            '<button class="cart-item-remove" data-fav-id="' + p.id + '" onclick="toggleFavorite(' + p.id + ')">Remove</button>' +
            '<button class="fav-add-cart" onclick="addToCart(' + p.id + ')" title="Add to Cart">' + icon('cart', 14) + '</button>' +
        '</div>' +
    '</div>';
}

function renderFavDrawer() {
    var body = document.getElementById('fav-drawer-body');
    if (!body) return;
    var favs = getFavoriteProducts();
    if (favs.length === 0) {
        body.innerHTML = '<div class="cart-empty"><div class="icon">' + icon('heart', 40) + '</div><p>No favorites yet. Tap the heart on any product to save it here.</p></div>';
        return;
    }
    body.innerHTML = favs.map(favItemRowHtml).join('');
}

function openFavDrawer() {
    renderFavDrawer();
    document.getElementById('fav-drawer').classList.add('open');
    document.getElementById('fav-overlay').classList.add('open');
}

function closeFavDrawer() {
    document.getElementById('fav-drawer').classList.remove('open');
    document.getElementById('fav-overlay').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
    initCartUI();
    initFavUI();
    initSearchBar();
    initAccountUI();
});

/* =========================================================
   SEARCH (with live autocomplete suggestions)
   ========================================================= */
function initSearchBar() {
    document.querySelectorAll('.search-bar').forEach(function(bar) {
        var input = bar.querySelector('input');
        var btn = bar.querySelector('button');
        if (!input) return;

        var dd = document.createElement('div');
        dd.className = 'search-suggestions';
        bar.appendChild(dd);

        var activeIndex = -1;
        var currentItems = [];

        function closeDd() { dd.classList.remove('open'); dd.innerHTML = ''; activeIndex = -1; currentItems = []; }

        function openDd(query) {
            var matches = searchProducts(query).slice(0, 6);
            currentItems = matches;
            activeIndex = -1;
            if (matches.length === 0) {
                dd.innerHTML = '<div class="sugg-empty">No products match "' + query + '"</div>';
            } else {
                dd.innerHTML = matches.map(function(p) {
                    return '<div class="sugg-item" data-id="' + p.id + '">' +
                        '<div class="sugg-img">' + productImageHtml(p) + '</div>' +
                        '<div class="sugg-info"><div class="sugg-name">' + p.name + '</div><div class="sugg-cat">' + p.categoryLabel + '</div></div>' +
                        '<div class="sugg-price">EGP ' + p.price.toLocaleString() + '</div>' +
                    '</div>';
                }).join('') + '<div class="sugg-viewall">View all results for "' + query + '" ' + icon('arrow', 12) + '</div>';
                dd.querySelectorAll('.sugg-item').forEach(function(el) {
                    el.addEventListener('click', function() {
                        window.location.href = 'product.html?id=' + el.getAttribute('data-id');
                    });
                });
                dd.querySelector('.sugg-viewall').addEventListener('click', function() { runSearch(query); });
            }
            dd.classList.add('open');
        }

        input.addEventListener('input', function() {
            var q = input.value.trim();
            if (q.length === 0) { closeDd(); return; }
            openDd(q);
        });

        input.addEventListener('focus', function() {
            var q = input.value.trim();
            if (q.length > 0) openDd(q);
        });

        input.addEventListener('keydown', function(e) {
            var items = dd.querySelectorAll('.sugg-item');
            if (e.key === 'ArrowDown' && items.length) {
                e.preventDefault();
                activeIndex = Math.min(activeIndex + 1, items.length - 1);
                items.forEach(function(el, i) { el.classList.toggle('active', i === activeIndex); });
                items[activeIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'ArrowUp' && items.length) {
                e.preventDefault();
                activeIndex = Math.max(activeIndex - 1, 0);
                items.forEach(function(el, i) { el.classList.toggle('active', i === activeIndex); });
                items[activeIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (activeIndex >= 0 && currentItems[activeIndex]) {
                    window.location.href = 'product.html?id=' + currentItems[activeIndex].id;
                } else {
                    runSearch(input.value);
                }
            } else if (e.key === 'Escape') {
                closeDd();
            }
        });

        document.addEventListener('click', function(e) {
            if (!bar.contains(e.target)) closeDd();
        });

        if (btn) btn.addEventListener('click', function(e) { e.preventDefault(); runSearch(input.value); });
    });
    // If we're on shop.html with a ?q= param, prefill the header search inputs
    var q = getUrlParam('q');
    if (q) {
        document.querySelectorAll('.search-bar input').forEach(function(input) { input.value = q; });
    }
}

function runSearch(query) {
    query = (query || '').trim();
    if (!query) return;
    window.location.href = 'shop.html?q=' + encodeURIComponent(query);
}

/* =========================================================
   ACCOUNT (local sign-in, stored on this device)
   ---------------------------------------------------------
   No backend is connected yet, so this keeps a lightweight
   account profile in localStorage on the customer's own
   device — enough to greet them by name and speed up
   checkout. To back this with real accounts, replace
   accountLogin()/accountSignup() with calls to your auth API.
   ========================================================= */
var ACCOUNT_KEY = "voltechs_account";

function getAccount() {
    try {
        var raw = localStorage.getItem(ACCOUNT_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
}

function saveAccount(acc) {
    localStorage.setItem(ACCOUNT_KEY, JSON.stringify(acc));
    updateAccountButton();
}

function logoutAccount() {
    localStorage.removeItem(ACCOUNT_KEY);
    updateAccountButton();
    renderAccountModal();
}

function initials(name) {
    var parts = name.trim().split(/\s+/);
    var s = parts[0] ? parts[0][0] : '';
    if (parts.length > 1) s += parts[parts.length - 1][0];
    return s.toUpperCase();
}

function updateAccountButton() {
    var acc = getAccount();
    document.querySelectorAll('.acc-btn').forEach(function(btn) {
        btn.classList.toggle('acc-logged-in', !!acc);
        var initEl = btn.querySelector('.acc-initial');
        var labelEl = btn.querySelector('.btn-label');
        if (acc) {
            if (!initEl) {
                initEl = document.createElement('span');
                initEl.className = 'acc-initial';
                btn.insertBefore(initEl, btn.firstChild);
            }
            initEl.textContent = initials(acc.name);
            if (labelEl) labelEl.lastChild.textContent = ' ' + acc.name.split(' ')[0];
        } else {
            if (labelEl) labelEl.lastChild.textContent = ' Account';
        }
    });
}

var ACCOUNT_MODAL_HTML =
    '<div class="acc-overlay" id="acc-overlay" onclick="if(event.target===this) closeAccountModal()">' +
        '<div class="acc-modal" id="acc-modal"></div>' +
    '</div>';

function initAccountUI() {
    if (!document.getElementById('acc-overlay')) {
        document.body.insertAdjacentHTML('beforeend', ACCOUNT_MODAL_HTML);
    }
    document.querySelectorAll('.header-btn').forEach(function(btn) {
        if (btn.classList.contains('cart-btn') || btn.classList.contains('fav-btn-header')) return;
        btn.classList.add('acc-btn');
        btn.addEventListener('click', openAccountModal);
    });
    updateAccountButton();
}

function openAccountModal() {
    renderAccountModal();
    document.getElementById('acc-overlay').classList.add('open');
}

function closeAccountModal() {
    document.getElementById('acc-overlay').classList.remove('open');
}

function renderAccountModal(tab) {
    var modal = document.getElementById('acc-modal');
    var acc = getAccount();

    if (acc) {
        modal.innerHTML =
            '<div class="acc-header"><h3>' + icon('user', 18) + ' My Account</h3><button class="cart-close-btn" onclick="closeAccountModal()">' + icon('close', 16) + '</button></div>' +
            '<div class="acc-body">' +
                '<div class="acc-welcome"><div class="acc-avatar">' + initials(acc.name) + '</div><h4>Welcome back, ' + acc.name.split(' ')[0] + '</h4><p>Signed in on this device</p></div>' +
                '<div class="acc-info-row"><span>Name</span><span>' + acc.name + '</span></div>' +
                '<div class="acc-info-row"><span>Email</span><span>' + acc.email + '</span></div>' +
                (acc.phone ? '<div class="acc-info-row"><span>Phone</span><span>' + acc.phone + '</span></div>' : '') +
                '<button class="acc-logout-btn" onclick="logoutAccount()">Log Out</button>' +
            '</div>';
        return;
    }

    tab = tab || 'login';
    modal.innerHTML =
        '<div class="acc-header"><h3>' + icon('user', 18) + (tab === 'login' ? ' Log In' : ' Create Account') + '</h3><button class="cart-close-btn" onclick="closeAccountModal()">' + icon('close', 16) + '</button></div>' +
        '<div class="acc-tabs">' +
            '<div class="acc-tab' + (tab === 'login' ? ' active' : '') + '" onclick="renderAccountModal(\'login\')">Log In</div>' +
            '<div class="acc-tab' + (tab === 'signup' ? ' active' : '') + '" onclick="renderAccountModal(\'signup\')">Sign Up</div>' +
        '</div>' +
        '<div class="acc-body">' +
            (tab === 'signup' ? '<div class="form-group"><label class="form-label">Full Name</label><input type="text" id="acc-name" class="form-input" placeholder="e.g. Ahmed Mostafa"></div>' : '') +
            '<div class="form-group"><label class="form-label">Email</label><input type="email" id="acc-email" class="form-input" placeholder="you@example.com"></div>' +
            (tab === 'signup' ? '<div class="form-group"><label class="form-label">Phone Number</label><input type="tel" id="acc-phone" class="form-input" placeholder="01xxxxxxxxx"></div>' : '') +
            '<div class="form-error" id="acc-error">' + (tab === 'signup' ? 'Please enter your name, email, and phone number.' : 'Please enter your email to continue.') + '</div>' +
            '<button class="add-big" style="width:100%;justify-content:center;box-shadow:none;" onclick="' + (tab === 'signup' ? 'accountSignup()' : 'accountLogin()') + '">' + (tab === 'signup' ? 'Create Account' : 'Log In') + '</button>' +
        '</div>';
}

function accountLogin() {
    var email = document.getElementById('acc-email').value.trim();
    if (!email) { document.getElementById('acc-error').classList.add('show'); return; }
    var name = email.split('@')[0].replace(/[._]/g, ' ');
    name = name.replace(/\b\w/g, function(c) { return c.toUpperCase(); });
    saveAccount({ name: name, email: email });
    renderAccountModal();
}

function accountSignup() {
    var name = document.getElementById('acc-name').value.trim();
    var email = document.getElementById('acc-email').value.trim();
    var phone = document.getElementById('acc-phone').value.trim();
    if (!name || !email || !phone) { document.getElementById('acc-error').classList.add('show'); return; }
    saveAccount({ name: name, email: email, phone: phone });
    renderAccountModal();
}

function searchProducts(query) {
    var q = query.toLowerCase();
    return PRODUCTS.filter(function(p) {
        return p.name.toLowerCase().indexOf(q) !== -1 ||
               p.categoryLabel.toLowerCase().indexOf(q) !== -1 ||
               p.description.toLowerCase().indexOf(q) !== -1;
    });
}

/* =========================================================
   COMMENT SECTION (real, user-submitted — replaces fake reviews)
   Stored locally per-product in localStorage.
   ========================================================= */
var COMMENTS_KEY = 'voltechs_comments';

function getAllComments() {
    try {
        var raw = localStorage.getItem(COMMENTS_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
}

function getCommentsForProduct(productId) {
    var all = getAllComments();
    return all[productId] || [];
}

function addComment(productId, name, text) {
    var all = getAllComments();
    if (!all[productId]) all[productId] = [];
    all[productId].unshift({
        name: name,
        text: text,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    });
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(all));
}

function renderCommentCard(c) {
    return '<div class="ccard"><div class="ccard-top"><span class="ccard-name">' + c.name + '</span><span class="ccard-date">' + c.date + '</span></div><div class="ccard-text">' + c.text + '</div></div>';
}

function renderCommentsSection(productId) {
    var comments = getCommentsForProduct(productId);
    var listHtml = comments.length > 0
        ? comments.map(renderCommentCard).join('')
        : '<p class="comments-empty">No comments yet. Be the first to share your thoughts on this product.</p>';

    return '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;"><h2 class="section-title">Comments</h2></div>' +
        '<div class="comment-form">' +
            '<div class="form-group"><label class="form-label">Your Name</label><input type="text" id="cm-name" class="form-input" placeholder="e.g. Ahmed Mostafa"></div>' +
            '<div class="form-group"><label class="form-label">Your Comment</label><textarea id="cm-text" class="form-textarea" placeholder="Share your thoughts about this product..."></textarea></div>' +
            '<div class="form-error" id="cm-error">Please enter your name and a comment.</div>' +
            '<button class="add-big" style="box-shadow:none;" onclick="submitComment(' + productId + ')">Post Comment</button>' +
        '</div>' +
        '<div id="comments-list">' + listHtml + '</div>';
}

function submitComment(productId) {
    var name = document.getElementById('cm-name').value.trim();
    var text = document.getElementById('cm-text').value.trim();
    if (!name || !text) {
        document.getElementById('cm-error').classList.add('show');
        return;
    }
    document.getElementById('cm-error').classList.remove('show');
    addComment(productId, name, text);
    document.getElementById('cm-name').value = '';
    document.getElementById('cm-text').value = '';
    document.getElementById('comments-list').innerHTML = getCommentsForProduct(productId).map(renderCommentCard).join('');
}

function getProductById(id) {
    for (var i = 0; i < PRODUCTS.length; i++) {
        if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
}

function getRelatedProducts(product) {
    return PRODUCTS.filter(function(p) {
        return p.category === product.category && p.id !== product.id;
    }).slice(0, 4);
}

function buildNavLinks(activePage) {
    var labels = { apple: 'Apple', cables: 'Cables', chargers: 'Chargers', powerbanks: 'Power Banks', cases: 'Phone Cases', protectors: 'Screen Protectors', magsafe: 'MagSafe', audio: 'Headphones & AirPods' };
    var cats = ['cases', 'chargers', 'protectors', 'apple', 'cables', 'powerbanks', 'magsafe', 'audio'];
    var html = '<a class="nav-link' + (activePage === 'home' ? ' active' : '') + '" href="index.html">' + icon('home', 15) + ' Home</a>';
    for (var i = 0; i < cats.length; i++) {
        html += '<a class="nav-link" href="category.html?cat=' + cats[i] + '">' + labels[cats[i]] + '</a>';
    }
    html += '<a class="nav-link" href="shop.html">Shop All</a>';
    return html;
}

function buildSidebarLinks(activeCat) {
    var html = '';
    for (var i = 0; i < CATEGORY_ORDER.length; i++) {
        var key = CATEGORY_ORDER[i];
        var cat = CATEGORIES[key];
        var active = key === activeCat ? ' active' : '';
        html += '<a href="category.html?cat=' + key + '" class="sidebar-link' + active + '"><span class="icon">' + icon(iconKeyFor(key), 16) + '</span> ' + cat.name + '</a>';
    }
    return html;
}

function iconKeyFor(catKey) {
    var map = { cases: 'phone', chargers: 'plug', protectors: 'shield-check', apple: 'apple', cables: 'cable', powerbanks: 'battery', magsafe: 'bolt', audio: 'headphones', car: 'car', accessories: 'sparkle' };
    return map[catKey] || 'sparkle';
}
