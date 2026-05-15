// === DATA ===
const subjectsData = {
    1: { //для 1 курса
        1: [],
        2: []
    },

    2: { //для 2 курса
        1: [
            {id: 'js', name: 'JavaScript', count: 13},
            {id: 'project-intro', name: 'Введение в управление проектами', count: 6},
            {id: 'ux-ui', name: 'Дизайн взаимодействия пользователя с интерфейсом', count: 8},
            {id: 'discrete-math', name: 'Дискретная математика', count: 4},
            {id: 'html-css', name: 'Основы HTML/CSS', count: 7},
            {id: 'db-design', name: 'Основы анализа и проектирования баз данных', count: 6},
            {id: 'web-servers', name: 'Управление веб-серверами', count: 3},
            {id: 'pe-1', name: 'Физическая культура', count: 7},
            {id: 'evm-1', name: 'Элементы высшей математики', count: 5},
            {id: 'eng-a2-1', name: 'Английский язык, А2+', count: 12},
        ],
        2: [
            {id: 'js-dom', name: 'JavaScript DOM', count: 6},
            {id: 'nodejs', name: 'Node.js', count: 14},
            {id: 'python-web', name: 'Python on web', count: 17},
            {id: 'xml', name: 'XML технологии', count: 9},
            {id: 'algo', name: 'Алгоритмы и структуры данных', count: 5},
            {id: 'eng-a2', name: 'Английский язык, А2+', count: 13},
            {id: 'mlta', name: 'Математическая логика и теория алгоритмов', count: 5},
            {id: 'ts', name: 'ООП на TypeScript', count: 4},
            {id: 'subd', name: 'СУБД (PostgreSQL, MySQL)', count: 18},
            {id: 'tvms', name: 'Теория вероятностей и математическая статистика', count: 7},
            {id: 'practice-r', name: 'Учебная практика Р', count: 1},
            {id: 'pe', name: 'Физическая культура', count: 6},
            {id: 'evm', name: 'Элементы высшей математики', count: 4},
        ]
    },

    3: { //для 3 курса
        1: [
            {id: 'java', name: 'Java', count: 1}
        ],
        2: []
    }
};

const productsData = {
    //для 1 курса
    //


    //для 2 курса
    //веб-разработка
    'js': [
        {id: 210101, title: 'КТ №1. Решение задач по темам "переменные", "типы данных", "условный оператор"', price: 100},
        {id: 210102, title: 'КТ №2. Решение задач по теме "функции"', price: 100},
        {id: 210103, title: 'Тест по темам раздела 3', price: 100},
        {id: 210104, title: 'КТ №4. Решение задач по теме "массивы"', price: 100},
        {id: 210105, title: 'Тест по темам раздела 1', price: 100},
        {id: 210106, title: 'КТ №7. Решение задач по теме "циклы"', price: 100},
        {id: 210107, title: 'Тест по темам раздела 2', price: 100},
        {id: 210108, title: 'КТ №8. Решение задач', price: 100},
        {id: 210109, title: 'Тест по темам раздела 5', price: 100},
        {id: 210110, title: 'КТ №10. Решение задач по теме "массивы"', price: 100},
        {id: 210111, title: 'Практическая работа по разделу 6 (ч2)', price: 100},
        {id: 210112, title: 'Тест по темам раздела 6', price: 100},
        {id: 210113, title: 'КТ №12. Решение задач по узученным темам', price: 100}
    ],
    'project-intro': [
        {id: 210201, title: 'КТ №1: Сетевое планирование проекта', price: 100},
        {id: 210202, title: 'КТ №2: Решение кейса "Конфликт в команде"', price: 100},
        {id: 210203, title: 'КТ №3: PERT-анализ', price: 100},
        {id: 210204, title: 'КТ №4: Разработка матрицы рисков проекта', price: 100},
        {id: 210205, title: 'КТ №5: Решение кейса "Мониторинг процессов проекта"', price: 100},
        {id: 210206, title: 'КТ №6: Расчёт показателей метода освоенного объёма', price: 100}
    ],
    'ux-ui': [
        {id: 210301, title: 'КТ 1: Продвинутые методы исследования пользователей', price: 100},
        {id: 210302, title: 'КТ 2: Информационная архитектура и дизайн навигации', price: 100},
        {id: 210303, title: 'КТ 3: Адаптивный и отзывчивый дизайн', price: 100},
        {id: 210304, title: 'КТ 4: Презентация проекта №1', price: 100},
        {id: 210305, title: 'КТ 5: Тестирование удобства пользования и пользовательская обратная связь', price: 100},
        {id: 210306, title: 'КТ 6: Презентация проекта №2', price: 100},
        {id: 210307, title: 'КТ 7: Проведение тестирования первого клика', price: 100},
        {id: 210308, title: 'КТ 8: Презентация проекта №3', price: 100}
    ],
    'discrete-math': [
        {id: 210401, title: 'Логические схемы', price: 100},
        {id: 210402, title: 'Моделирование с помощью рекуррентных отношений', price: 100},
        {id: 210403, title: 'Построение графовой модели', price: 100},
        {id: 210404, title: 'Анализ графовой модели', price: 100}
    ],
    'html-css': [
        {id: 210501, title: 'Практическая работа 1', price: 100},
        {id: 210502, title: 'Практическая работа 2', price: 100},
        {id: 210503, title: 'Практическая работа 3', price: 100},
        {id: 210504, title: 'Практическая работа 4', price: 100},
        {id: 210505, title: 'Практическая работа 5', price: 100},
        {id: 210506, title: 'Практическая работа 6', price: 100},
        {id: 210507, title: 'Итоговая КТ: создание веб-сайта', price: 100}
    ],
    'db-design': [
        {id: 210601, title: 'КТ 1. Анализ предметной области.', price: 100},
        {id: 210602, title: 'КТ 2. Приведение отношения к 1 НФ', price: 100},
        {id: 210603, title: 'КТ 3. Приведение отношения к 2 и 3 Нормальными формам', price: 100},
        {id: 210604, title: 'КТ 4. Проектирование инфологической модели данных', price: 100},
        {id: 210605, title: 'КТ 5. Проектирование словаря данных', price: 100},
        {id: 210606, title: 'КТ 6. Проектирование даталогической модели данных', price: 100}
    ],
    'web-servers': [
        {id: 210701, title: 'WWW: контрольная точка', price: 100},
        {id: 210702, title: 'Apache: контрольная точка', price: 100},
        {id: 210703, title: 'Nginx: контрольная точка', price: 100}
    ],
    'pe-1': [
        {id: 210801, title: 'SMART цели', price: 100},
        {id: 210802, title: 'Техника выполнения базовых упражнений, адаптация организма к нагрузкам', price: 100},
        {id: 210803, title: 'Общефизическая направленность', price: 100},
        {id: 210804, title: 'Стретчинг, йога, пилатес', price: 100},
        {id: 210805, title: 'Изучение правильного питания', price: 100},
        {id: 210806, title: 'Составление плана БЖУ, расчёт потребления и расхода калорий', price: 100},
        {id: 210807, title: 'Эмоциональный контроль: медитация и дыхательные практики', price: 100}
    ],
    'evm-1': [
        {id: 210901, title: 'Контрольная точка: операции с матрицами, нахождение определителя, метод Крамера', price: 100},
        {id: 210902, title: 'Контрольная точка: нахождение обратной матрицы, применение обратной матрицы при решении СЛАУ', price: 100},
        {id: 210903, title: 'Контрольная точка: решение СЛАУ методом Гаусса, определение ранга матрицы, поиск количества решений СЛАУ с помощью ранга матрицы', price: 100},
        {id: 210904, title: 'Контрольная точка: решение уравнений высших степеней', price: 100},
        {id: 210905, title: 'Итоговый контроль', price: 100}
    ],
    'eng-a2-1': [
        {id: 211001, title: '1.4 My future job', price: 100},
        {id: 211002, title: '2.4 A business call', price: 100},
        {id: 211003, title: '3.4 My perfect vacation', price: 100},
        {id: 211004, title: '4.5 A person I admire', price: 100},
        {id: 211005, title: '5.4 Mid-term test', price: 100},
        {id: 211006, title: '6.4 What would you change in operating systems?', price: 100},
        {id: 211007, title: '7.4 Project', price: 100},
        {id: 211008, title: '8.4 Spreadsheets', price: 100},
        {id: 211009, title: '9.4 Video Conference Call', price: 100},
        {id: 211010, title: '10.4 Technology\'s possible future', price: 100},
        {id: 211011, title: '11.4 Fame vs Security', price: 100},
        {id: 211012, title: '12.5 Final Presentation', price: 100}
    ],
    'js-dom': [
        {id: 211101, title: 'КТ №1. Таблица с генерацией чисел', price: 100},
        {id: 211102, title: 'КТ №2. Работа с контентом на странице', price: 100},
        {id: 211103, title: 'КТ №3. Создание выпадающего меню', price: 100},
        {id: 211104, title: 'КТ №4. Слайдер', price: 100},
        {id: 211105, title: 'КТ №5. Банковская карта', price: 100},
        {id: 211106, title: 'КТ №6. Создание динамичного веб-приложения', price: 100}
    ],
    'nodejs': [
        {id: 211201, title: 'КТ №1. Установка Node.js. REPL', price: 100},
        {id: 211202, title: 'КТ №2. Модули. Глобальные объекты', price: 100},
        {id: 211203, title: 'КТ №3. NPM. Package.json. Работа с пакетами', price: 100},
        {id: 211204, title: 'КТ № 4. Nodemon. Асинхронность в Node.js.', price: 100},
        {id: 211205, title: 'КТ № 5. Работа с файлами. События в Node.js. Потоки данных. Канал Pipe.', price: 100},
        {id: 211206, title: 'КТ №6. Сервер. Получение данных от клиента. Шаблоны', price: 100},
        {id: 211207, title: 'КТ №7. Подключение и выполнение запросов к MySQL. Операции с данными', price: 100},
        {id: 211208, title: 'КТ №8. Пулы подключений', price: 100},
        {id: 211209, title: 'КТ № 9. Express. Отправка ответа. Маршрутизация.', price: 100},
        {id: 211210, title: 'КТ № 10. Express. Переадресация. POST-запросы. JSON и AJAX.', price: 100},
        {id: 211211, title: 'КТ № 11. Express. Handlebars.', price: 100},
        {id: 211212, title: 'КТ № 12. Express. EJS. Pug.', price: 100},
        {id: 211213, title: 'КТ № 13. Express. Создание API.', price: 100},
        {id: 211214, title: 'КТ № 14. Конфигурация multer. Загрузка файлов с помощью multer.', price: 100}
    ],
    'python-web': [
        {id: 211301, title: 'Функции ввода-вывода. Строки. Управляющие конструкции', price: 100},
        {id: 211302, title: 'Работа с упорядоченными и структурированными данными', price: 100},
        {id: 211303, title: 'Функции и модули', price: 100},
        {id: 211304, title: 'Введение в Flask', price: 100},
        {id: 211305, title: 'Маршруты в Flask', price: 100},
        {id: 211306, title: 'Шаблонизатор Jinja2', price: 100},
        {id: 211307, title: 'Использование базы данных', price: 100},
        {id: 211308, title: 'Миграция базы данных', price: 100},
        {id: 211309, title: 'Добавление аутентификации', price: 100},
        {id: 211310, title: 'Создание WEB-приложения на Flask', price: 100},
        {id: 211311, title: 'Первое приложение Django', price: 100},
        {id: 211312, title: 'Знакомство с веб-фреймворком Django', price: 100},
        {id: 211313, title: 'Приложение Pages', price: 100},
        {id: 211314, title: 'Приложение «Доска объявлений»', price: 100},
        {id: 211315, title: 'Приложение "Блог"', price: 100},
        {id: 211316, title: 'Формы', price: 100},
        {id: 211317, title: 'Учетные записи пользователей. Пользовательская модель. Аутентификация пользователя', price: 100}
    ],
    'xml': [
        {id: 211401, title: 'КТ: DTD', price: 100},
        {id: 211402, title: 'КТ: Schema', price: 100},
        {id: 211403, title: 'Язык Xpath', price: 100},
        {id: 211404, title: 'Создание узлов', price: 100},
        {id: 211405, title: 'Управление кодом и его оптимизация', price: 100},
        {id: 211406, title: 'КТ: оптимизация', price: 100},
        {id: 211407, title: 'Переменные и параметры', price: 100},
        {id: 211408, title: 'КТ: группировка', price: 100},
        {id: 211409, title: 'КТ: практикум', price: 100}
    ],
    'algo': [
        {id: 211501, title: 'Оценка времени работы алгоритмов. Бинарный поиск', price: 100},
        {id: 211502, title: 'Рекурсия. Принцип "Разделяй и властвуй"', price: 100},
        {id: 211503, title: 'Очередь, дек', price: 100},
        {id: 211504, title: 'Сравнительный анализ методов сортировки', price: 100},
        {id: 211505, title: 'Бинарное дерево поиска', price: 100}
    ],
    'eng-a2': [
        {id: 211601, title: 'Checkpoint 1: Introduction to IT', price: 100},
        {id: 211602, title: 'Checkpoint 2: Managing Files and Systems', price: 100},
        {id: 211603, title: 'Checkpoint 3:  Exploring the Internet Ecosystem', price: 100},
        {id: 211604, title: 'Checkpoint 4: Startup Challenge', price: 100},
        {id: 211605, title: 'Checkpoint 5: The IT Troubleshooter Challenge', price: 100},
        {id: 211606, title: 'Checkpoint 6: Careers in IT', price: 100},
        {id: 211607, title: 'Checkpoint 7: QA Testing', price: 100},
        {id: 211608, title: 'Checkpoint 8: Programming Languages', price: 100},
        {id: 211609, title: 'Checkpoint 9: Famous People in Tech', price: 100},
        {id: 211610, title: 'Checkpoint 10: My First Open-Source Contribution', price: 100},
        {id: 211611, title: 'Checkpoint 11: Chatting in Tech', price: 100},
        {id: 211612, title: 'Checkpoint 12: Test Your IT Resume Knowledge', price: 100},
        {id: 211613, title: 'Final test: Test Your IT Knowledge', price: 100}
    ],
    'mlta': [
        {id: 211701, title: 'Отношения и функции', price: 100},
        {id: 211702, title: 'Приложения логики высказываний', price: 100},
        {id: 211703, title: 'Доказательство кванторных выражений', price: 100},
        {id: 211704, title: 'Анализ эффективности алгоритмов', price: 100},
        {id: 211705, title: 'Упрощение конечных автоматов', price: 100}
    ],
    'ts': [
        {id: 211801, title: 'Контрольная точка 1', price: 100},
        {id: 211802, title: 'Контрольная точка 2', price: 100},
        {id: 211803, title: 'Контрольная точка 3', price: 100},
        {id: 211804, title: 'Итог', price: 100}
    ],
    'subd': [
        {id: 211901, title: 'КТ № 1. Установка и конфигурация СУБД и IDE', price: 100},
        {id: 211902, title: 'КТ № 2. Анализ предметной области, реализация ролей', price: 100},
        {id: 211903, title: 'КТ № 3. PostgreSQL. Реализация таблиц', price: 100},
        {id: 211904, title: 'КТ № 4. MySQL. Реализация таблиц', price: 100},
        {id: 211905, title: 'КТ № 5. PostgreSQL. Манипулирование данными', price: 100},
        {id: 211906, title: 'КТ № 6. MySQL. Манипулирование данными', price: 100},
        {id: 211907, title: 'КТ № 7. Дополнительные требования к предметной области и подсистемам', price: 100},
        {id: 211908, title: 'КТ № 8. PostgreSQL. Сопровождение объектов БД', price: 100},
        {id: 211909, title: 'КТ № 9. MySQL. Сопровождение объектов БД', price: 100},
        {id: 211910, title: 'КТ № 10. PostgreSQL. Актуализация данных в БД', price: 100},
        {id: 211911, title: 'КТ № 11. MySQL. Актуализация данных в БД', price: 100},
        {id: 211912, title: 'КТ № 12. PostgreSQL. Реализация виртуальных таблиц', price: 100},
        {id: 211913, title: 'КТ № 13. MySQL.  Реализация виртуальных таблиц', price: 100},
        {id: 211914, title: 'КТ № 14. PostgreSQL. Реализация пользовательских функций', price: 100},
        {id: 211915, title: 'КТ № 15. MySQL. Реализация пользовательских функций', price: 100},
        {id: 211916, title: 'КТ № 16. PostgreSQL. Реализация триггеров', price: 100},
        {id: 211917, title: 'КТ № 17. MySQL. Реализация триггеров', price: 100},
        {id: 211918, title: 'КТ № 18. Восстановление структуры БД', price: 100}
    ],
    'tvms': [
        {id: 212001, title: 'КТ 1. Случайные события и вероятность', price: 100},
        {id: 212002, title: 'КТ2. Дискретные случайные величины', price: 100},
        {id: 212003, title: 'КТ3. Непрерывные случайные величины', price: 100},
        {id: 212004, title: 'КТ4. Обобщение данных', price: 100},
        {id: 212005, title: 'КТ5. Точечное и доверительное оценивание', price: 100},
        {id: 212006, title: 'КТ6. Проверка статистических гипотез', price: 100},
        {id: 212007, title: 'КТ7. Теория вероятностей и ее практическое применение', price: 100}
    ],
    'practice-r': [
        {id: 212101, title: 'Деплоймент', price: 100}
    ],
    'pe': [
        {id: 212201, title: 'Мотивация, самоанализ и целеполагание: составление целей на семестр.', price: 100},
        {id: 212202, title: 'Функциональный тренинг: два комплекса на каждый день.', price: 100},
        {id: 212203, title: 'Йога: два комплекса на каждый день.', price: 100},
        {id: 212204, title: 'Типы телосложения и их особенности.', price: 100},
        {id: 212205, title: 'Гормоны и здоровье: взаимосвязь. Как поддержать гормональный фон?', price: 100},
        {id: 212206, title: 'Самоанализ: как улучшить качество жизни?', price: 100}
    ],
    'evm': [
        {id: 212301, title: 'Контрольная точка по теме "Неопределенный интеграл"', price: 100},
        {id: 212302, title: 'Контрольная точка по теме "Производная функции двух переменных. Двойные интегралы"', price: 100},
        {id: 212303, title: 'Контрольная точка по теме "Исследование рядов на сходимость"', price: 100},
        {id: 212304, title: 'Итоговая работа', price: 100}
    ],


    //для 3 курса
    'java': [
        {id: 3101, title: 'КР №1: Фундамент и синтаксис', price: 250}
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

    if (pageId === 'cart') renderCart();
    if (pageId === 'purchases') renderPurchases();
}

function selectCourse(id, name, dir) {
    currentCourseId = id;
    currentCourseName = name;
    currentCourseDir = dir;

    document.getElementById('courseTitle').textContent = name;
    document.getElementById('courseDir').textContent = dir;

    const list = document.getElementById('subjectList');
    const semesters = subjectsData[id] || {};
    const semesterNumbers = Object.keys(semesters).sort((a, b) => Number(a) - Number(b));
    const hasSubjects = semesterNumbers.some(semester => semesters[semester].length > 0);

    if (!hasSubjects) {
        list.innerHTML = '<p style="padding:1rem; color:#666;">Предметы для этого курса пока не добавлены.</p>';
    } else {
        list.innerHTML = semesterNumbers.map(semester => {
            const subs = semesters[semester];
            const items = subs.length
                ? subs.map(s => `
                            <div class="subject-item" onclick="openSubject('${s.id}', '${s.name}')">
                                <span class="subject-name">${s.name}</span>
                                <span class="subject-count">${s.count} позиций</span>
                            </div>
                        `).join('')
                : '<p class="semester-empty">Предметы для этого семестра пока не добавлены.</p>';

            return `
                        <section class="semester-block">
                            <h3 class="semester-title">${semester} семестр</h3>
                            <div class="semester-subjects">${items}</div>
                        </section>
                    `;
        }).join('');
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
    cart.push({id, title, price, subject});
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

function saveCart() {
    localStorage.setItem('lxp_cart', JSON.stringify(cart));
}

function updateBadge() {
    document.getElementById('cartCount').textContent = cart.length;
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');

    if (cart.length === 0) {
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
        alert('Ошибка при создании платежа: ' + error.message + '\nПопробуйте включить или отключить VPN');
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
        if (!p.created_at) return '';

        // ✅ Явно указываем что дата в UTC (добавляем Z если нет)
        const dateString = p.created_at.endsWith('Z') ? p.created_at : p.created_at + 'Z';
        const purchaseTime = new Date(dateString).getTime();

        // ✅ Считаем разницу
        const diff = now - purchaseTime;
        const safeDiff = diff < 0 ? 0 : diff;

        // ✅ Считаем оставшиеся часы
        const hoursLeft = Math.max(0, Math.floor((H24 - safeDiff) / (60 * 60 * 1000)));
        const isExp = safeDiff >= H24;

        // ✅ Форматируем для отображения в МСК
        const displayDate = new Date(dateString).toLocaleString('ru-RU', {
            timeZone: 'Europe/Moscow',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        return `
            <div class="list-card" style="border-left: 4px solid ${isExp ? 'var(--danger)' : 'var(--success)'}">
                <span class="purchase-status ${isExp ? 'status-exp' : 'status-ok'}">
                    ${isExp ? 'Ссылка истекла' : `Активно (${hoursLeft} ч.)`}
                </span>
                <h3 style="margin-bottom:1rem;">${p.product_title || 'Без названия'}</h3>
                
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
                    <div class="meta-label">Дата покупки (МСК)</div>
                    <div class="meta-value" style="font-size:0.85rem;">
                        ${displayDate}
                    </div>
                </div>
            </div>`;
    }).join('');
}

// Init
updateBadge();
