// === DATA ===
const subjectsData = {
    1: [
        { id: 'eng-a1', name: 'Английский язык А1', count: 1 },
    ],

    2: [
        //для 2 курса
        { id: 'js-dom', name: 'JavaScript DOM', count: 6 },
        { id: 'nodejs', name: 'Node.js', count: 14 },
        { id: 'python-web', name: 'Python on web', count: 17 },
        { id: 'xml', name: 'XML технологии', count: 9 },
        { id: 'algo', name: 'Алгоритмы и структуры данных', count: 5 },
    ],

    3: [
        { id: 'java', name: 'Java', count: 1 }
    ]
};

const productsData = {
    //для 1 курса
    'eng-a1': [
        { id: 1101, title: 'Checkpoint 1: Introduction to IT', price: 150 },
    ],

    'js-dom': [
        { id: 2101, title: 'КТ №1. Таблица с генерацией чисел', price: 50 },
        { id: 2102, title: 'КТ №2. Работа с контентом на странице', price: 50 },
        { id: 2103, title: 'КТ №3. Создание выпадающего меню', price: 50 },
        { id: 2104, title: 'КТ №4. Слайдер', price: 50 },
        { id: 2105, title: 'КТ №5. Банковская карта', price: 50 },
        { id: 2106, title: 'КТ №6. Создание динамичного веб-приложения', price: 50 }
    ],
    'nodejs': [
        { id: 2201, title: 'КР №1: Введение в Node.js', price: 400 },
        { id: 2202, title: 'КР №2: Express сервер', price: 450 }
    ],
    'python-web': [
        { id: 2301, title: 'КР №1: Flask основы', price: 400 },
        { id: 2302, title: 'КР №2: Django ORM', price: 500 }
    ],
    'xml': [
        { id: 2401, title: 'КР №1: XML и DTD', price: 300 },
        { id: 2402, title: 'КР №2: XSLT трансформации', price: 400 }
    ],
    'algo': [
        { id: 2501, title: 'КР №1: Сортировки', price: 350 },
        { id: 2502, title: 'КР №2: Деревья и графы', price: 450 }
    ],
    'java': [
        { id: 3101, title: 'КР №1: Фундамент и синтаксис', price: 250 }
    ]
};

// === STATE ===
let cart = JSON.parse(localStorage.getItem('lxp_cart')) || [];
let purchases = JSON.parse(localStorage.getItem('lxp_purchases')) || [];
let currentCourseId = 2;
let currentCourseName = '2 курс';
let currentCourseDir = 'Веб-разработка';

// === NAVIGATION ===
function goTo(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);

    if(pageId === 'cart') renderCart();
    if(pageId === 'purchases') renderPurchases();
}

function selectCourse(id, name, dir) {
    currentCourseId = id;
    currentCourseName = name;
    currentCourseDir = dir;

    document.getElementById('courseTitle').textContent = name;
    document.getElementById('courseDir').textContent = dir;

    const list = document.getElementById('subjectList');
    const subs = subjectsData[id] || [];

    if(subs.length === 0) {
        list.innerHTML = '<p style="padding:1rem; color:#666;">Предметы для этого курса пока не добавлены.</p>';
    } else {
        list.innerHTML = subs.map(s => `
                    <div class="subject-item" onclick="openSubject('${s.id}', '${s.name}')">
                        <span class="subject-name">${s.name}</span>
                        <span class="subject-count">${s.count} позиций</span>
                    </div>
                `).join('');
    }
    goTo('subjects');
}

function openSubject(subId, subName) {
    document.getElementById('prodSubjectTitle').textContent = subName;
    const grid = document.getElementById('productsGrid');
    const prods = productsData[subId] || [];

    grid.innerHTML = prods.map(p => `
                <div class="product-card">
                    <div class="prod-tag">${subName}</div>
                    <div class="prod-title">${p.title}</div>
                    <div class="prod-price">${p.price} ₽</div>
                    <div class="prod-btns">
                        <button class="btn-cart" onclick="addToCart(${p.id}, '${p.title}', ${p.price}, '${subName}')">В корзину</button>
                        <button class="btn-buy" onclick="buyNow(${p.id}, '${p.title}', ${p.price}, '${subName}')">Купить</button>
                    </div>
                </div>
            `).join('');
    goTo('products');
}

// === CART LOGIC ===
function addToCart(id, title, price, subject) {
    cart.push({ id, title, price, subject });
    saveCart();
    updateBadge();
    alert(`"${title}" добавлена в корзину`);
}

function buyNow(id, title, price, subject) {
    addToCart(id, title, price, subject);
    goTo('cart');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateBadge();
    renderCart();
}

function saveCart() { localStorage.setItem('lxp_cart', JSON.stringify(cart)); }
function updateBadge() { document.getElementById('cartCount').textContent = cart.length; }

function renderCart() {
    const container = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');

    if(cart.length === 0) {
        container.innerHTML = '<div class="list-card" style="text-align:center; padding:3rem; color:#666;">Корзина пуста</div>';
        footer.style.display = 'none';
        return;
    }

    container.innerHTML = cart.map((item, i) => `
                <div class="list-card cart-item">
                    <div>
                        <div style="font-weight:600;">${item.title}</div>
                        <div style="color:#666; font-size:0.9rem;">${item.subject}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:1rem;">
                        <span style="font-weight:700;">${item.price} ₽</span>
                        <button class="remove-btn" onclick="removeFromCart(${i})">✕</button>
                    </div>
                </div>
            `).join('');

    const total = cart.reduce((sum, i) => sum + i.price, 0);
    document.getElementById('totalPrice').textContent = total + ' ₽';
    footer.style.display = 'block';
}



async function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    // Показываем индикатор загрузки
    const checkoutBtn = document.querySelector('.checkout-btn');
    const originalText = checkoutBtn.textContent;
    checkoutBtn.textContent = 'Обработка...';
    checkoutBtn.disabled = true;

    try {
        // Создаем платеж через Cloudflare Worker
        const response = await fetch('https://lxpshop-webhook.emilovchinnikov.workers.dev/create-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: cart,
                total: total,
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка создания платежа');
        }

        const data = await response.json();

        // Перенаправляем на страницу оплаты ЮKassa
        if (data.confirmation_url) {
            // Сохраняем номер заказа в localStorage
            localStorage.setItem('current_order_id', data.order_id);
            // Переходим на оплату
            window.location.href = data.confirmation_url;
        } else {
            throw new Error('Нет ссылки на оплату');
        }

    } catch (error) {
        console.error('Payment error:', error);
        alert('Ошибка при создании платежа: ' + error.message);
        checkoutBtn.textContent = originalText;
        checkoutBtn.disabled = false;
    }
}

// Проверка статуса платежа при загрузке страницы
document.addEventListener('DOMContentLoaded', async () => {
    updateBadge(); // ✅ Сначала обновляем бейдж

    // Проверяем, есть ли параметр ?success=true в URL
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = localStorage.getItem('current_order_id');

    // Показываем страницу покупок, если есть success=true
    if (urlParams.get('success') === 'true') {
        // Показываем страницу покупок СРАЗУ
        goTo('purchases');

        if (orderId) {
            // Загружаем данные о покупке
            try {
                const response = await fetch(`https://lxpshop-webhook.emilovchinnikov.workers.dev/get-purchase/${orderId}`);

                if (response.ok) {
                    const purchase = await response.json();
                    console.log('✅ Purchase loaded:', purchase);

                    // Добавляем покупку в localStorage
                    let purchases = JSON.parse(localStorage.getItem('lxp_purchases')) || [];

                    // Проверяем, нет ли уже такой покупки
                    const exists = purchases.some(p => p.order_id === purchase.order_id);
                    if (!exists) {
                        purchases.unshift(purchase);
                        localStorage.setItem('lxp_purchases', JSON.stringify(purchases));

                        // Очищаем корзину и текущий заказ
                        cart = [];
                        localStorage.setItem('lxp_cart', JSON.stringify(cart));
                        localStorage.removeItem('current_order_id');

                        // Перерисовываем покупки
                        renderPurchases();
                    }
                } else {
                    console.error('Failed to load purchase, status:', response.status);
                }
            } catch (error) {
                console.error('Error loading purchase:', error);
            }
        }
    }
});



function showSuccessPage() {
    alert('✅ Оплата прошла успешно! Перенаправляем в раздел "Мои покупки"...');
}

// === PURCHASES LOGIC ===
function renderPurchases() {
    const container = document.getElementById('purchasesList');
    if(purchases.length === 0) {
        container.innerHTML = '<div class="list-card" style="text-align:center; padding:3rem; color:#666;">Покупок пока нет</div>';
        return;
    }

    const now = Date.now();
    const H24 = 24 * 60 * 60 * 1000;

    container.innerHTML = purchases.map(p => {
        // Используем правильные имена полей из базы
        const purchaseDate = p.created_at ? new Date(p.created_at).getTime() : now;
        const diff = now - purchaseDate;
        const isExp = diff > H24;
        const hoursLeft = Math.max(0, Math.floor((H24 - diff) / (60 * 60 * 1000)));

        return `
                <div class="list-card" style="border-left: 4px solid ${isExp ? 'var(--danger)' : 'var(--success)'}">
                    <span class="purchase-status ${isExp ? 'status-exp' : 'status-ok'}">
                        ${isExp ? 'Ссылка истекла' : `Активно (${hoursLeft} ч.)`}
                    </span>
                    <h3 style="margin-bottom:1rem;">${p.product_title || 'Без названия'}</h3>
                    ${p.product_subject ? `<p style="color:#666; font-size:0.9rem; margin-bottom:1rem;">${p.product_subject}</p>` : ''}

                    <div class="meta-box">
                        <div class="meta-label">Пароль от архива (доступен всегда)</div>
                        <div class="meta-value" style="color:var(--accent); font-size:1.1rem;">${p.password || 'Не указан'}</div>
                    </div>

                    <div class="meta-box">
                        <div class="meta-label">Ссылка на скачивание (24 часа)</div>
                        <div class="meta-value">
                            ${isExp
            ? '<span class="link-expired">Срок действия истек</span>'
            : `<a href="${p.download_link || '#'}" class="link-active" download>Скачать файл</a>`
        }
                        </div>
                    </div>
                    
                    <div class="meta-box">
                        <div class="meta-label">Дата покупки</div>
                        <div class="meta-value" style="font-size:0.85rem;">
                            ${p.created_at ? new Date(p.created_at).toLocaleString('ru-RU') : 'Неизвестно'}
                        </div>
                    </div>
                </div>`;
    }).join('');
}

// Init
updateBadge();
