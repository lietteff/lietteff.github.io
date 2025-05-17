const DEFAULT_IMAGE = 'images/default.jpg';
const placesData = [
      {
        id: 1,
        name: "Казанский Кремль",
        category: "dos",
        description: "Историческая крепость и музейный комплекс, объект Всемирного наследия ЮНЕСКО.",
        image: "kreml.jpg",
        rating: 4.9
      },
      {
        id: 2,
        name: "Мечеть Кул-Шариф",
        category: "dos",
        description: "Главная мечеть Татарстана, построенная в 2005 году.",
        image: "mechet.jpg",
        rating: 4.8
      },
      {
        id: 3,
        name: "Дворец земледельцев",
        category: "dos",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "dvor.jpg",
        rating: 4.7
      },
      {
        id: 4,
        name: "Черное озеро",
        category: "park",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "park.jpg",
        rating: 4.7
      },
      {
        id: 5,
        name: "Набережная озера Кабан",
        category: "park",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "kaban.jpg",
        rating: 4.7
      },
      {
        id: 6,
        name: "Кремлевская набережная",
        category: "park",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "naber_kreml.jpg",
        rating: 4.7
      },
      {
        id: 7,
        name: "Центр семьи Казан",
        category: "dos",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "chasha.jpg",
        rating: 4.7
      },
      {
        id: 8,
        name: "Центральный парк культуры и отдыха им.Горького",
        category: "park",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "gorkogo.jpg",
        rating: 4.7
      },
      {
        id: 9,
        name: "Горкинско-Ометьевский лес",
        category: "park",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "les.jpg",
        rating: 4.7
      },
      {
        id: 10,
        name: "Лядской сад",
        category: "park",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "sad.jpg",
        rating: 4.7
      },
      {
        id: 11,
        name: "Национальная библиотека",
        category: "mesto",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "bibl.jpg",
        rating: 4.7
      },
      {
        id: 12,
        name: "Дворец впечатлений",
        category: "mesto",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "dvorec.jpg",
        rating: 4.7
      },
      {
        id: 13,
        name: "Музей чак-чака",
        category: "mesto",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "myzei.jpg",
        rating: 4.7
      },
      {
        id: 14,
        name: "Artplay Media",
        category: "mesto",
        description: "Памятник архитектуры в стиле эклектики с элементами классицизма.",
        image: "artplay.jpg",
        rating: 4.7
      }
    ];

const restaurantsData = [
    {
        id: 1,
        name: "Surf Coffee",
        category: "coffee",
        cuisine: "Татарская",
        image: "surf.jpg",
        rating: 4.9
      },
      {
        id: 2,
        name: "Skuratov",
        category: "Coffee",
        cuisine: "Татарская",
        image: "skuratov.jpg",
        rating: 4.8
      },
      {
        id: 3,
        name: "Eclair",
        category: "Coffee",
        cuisine: "Татарская",
        image: "eclair.jpg",
        rating: 4.7
      },
      {
        id: 4,
        name: "Cups",
        category: "Coffee",
        cuisine: "Татарская",
        image: "cups.jpg",
        rating: 4.7
      },
      {
        id: 5,
        name: "Botanica",
        category: "Coffee",
        cuisine: "Татарская",
        image: "botanica.jpg",
        rating: 4.7
      },
      {
        id: 6,
        name: "Утро",
        category: "Coffee",
        cuisine: "Татарская",
        image: "orig.jpg",
        rating: 4.7
      },
      {
        id: 7,
        name: "Фильтр",
        cuisine: "Татарская",
        image: "f12.jpg",
        rating: 4.7
      },
      {
        id: 8,
        name: "Ураган-Сарай",
        category: "Coffee",
        cuisine: "Татарская",
        image: "yragan.jpg",
        rating: 4.7
      },
      {
        id: 9,
        name: "Smorodina",
        category: "Coffee",
        cuisine: "Татарская",
        image: "smorodina.jpg",
        rating: 4.7
      },
      {
        id: 10,
        name: "Ранняя пташка",
        category: "Coffee",
        cuisine: "Татарская",
        image: "ptashka.jpg",
        rating: 4.7
      },
      {
        id: 11,
        name: "Pesky",
        category: "Coffee",
        cuisine: "Татарская",
        image: "pesky.jpeg",
        rating: 4.7
      },
      {
        id: 12,
        name: "Ясный",
        category: "Coffee",
        cuisine: "Татарская",
        image: "yasni.jpg",
        rating: 4.7
      },
      
      {
        id: 13,
        name: "Olio",
        category: "Rest",
        cuisine: "Татарская",
        image: "olio.jpg",
        rating: 4.7
      },
      {
        id: 14,
        name: "Gina",
        category: "Rest",
        cuisine: "Татарская",
        image: "gina.jpg",
        rating: 4.7
      },
      
      {
        id: 15,
        name: "Dia",
        category: "Rest",
        cuisine: "Татарская",
        image: "kreml.jpg",
        rating: 4.7
      },
      {
        id: 16,
        name: "Begin cafe",
        category: "Rest",
        cuisine: "Татарская",
        image: "begin.jpg",
        rating: 4.7
      },
      
      {
        id: 17,
        name: "Prana",
        category: "Rest",
        cuisine: "Татарская",
        image: "prana.jpg",
        rating: 4.7
      },
      {
        id: 18,
        name: "Счастье",
        category: "Rest",
        cuisine: "Татарская",
        image: "kreml.jpg",
        rating: 4.7
      },
      
      {
        id: 19,
        name: "Горыныч",
        category: "Rest",
        cuisine: "Татарская",
        image: "kreml.jpg",
        rating: 4.7
      },
      {
        id:20,
        name: "Энием",
        category: "Rest",
        cuisine: "Татарская",
        image: "eniem.jpg",
        rating: 4.7
      },
      {
        id: 21,
        name: "Дадиани",
        category: "Rest",
        cuisine: "Татарская",
        image: "dadiani.jpg",
        rating: 4.7
      },
      {
        id: 22,
        name: "Цех",
        category: "Rest",
        cuisine: "Татарская",
        image: "cex.jpg",
        rating: 4.7
      },
      {
        id: 23,
        name: "CiCheti",
        category: "Rest",
        cuisine: "Татарская",
        image: "kreml.jpg",
        rating: 4.7
      },
      {
        id: 24,
        name: "Izakaya bereg",
        category: "Rest",
        cuisine: "Татарская",
        image: "izakaya.jpg",
        rating: 4.7
      },
      {
        id: 25,
        name: "Чирэм",
        category: "Rest",
        cuisine: "Татарская",
        image: "chirem.jpg",
        rating: 4.7
      },
      {
        id: 26,
        name: "Сказки о солнце ",
        category: "Rest",
        cuisine: "Татарская",
        image: "sun.jpg",
        rating: 4.7
      },
      {
        id: 27,
        name: "Соль",
        category: "Bar",
        cuisine: "Татарская",
        image: "sol.jpg",
        rating: 4.7
      },
      {
        id: 28,
        name: "More&more",
        category: "Bar",
        cuisine: "Татарская",
        image: "more.jpeg",
        rating: 4.7
      },
      {
        id: 29,
        name: "ReLab ",
        category: "Bar",
        cuisine: "Татарская",
        image: "relab.jpg",
        rating: 4.7
      },
      {
        id: 30,
        name: "На бокальчик",
        category: "Bar",
        cuisine: "Татарская",
        image: "bocal.jpg",
        rating: 4.7
      },
      {
        id: 31,
        name: "Zero ",
        category: "Bar",
        cuisine: "Татарская",
        image: "zero.jpg",
        rating: 4.7
      },
      {
        id: 32,
        name: "Бункер",
        category: "Bar",
        cuisine: "Татарская",
        image: "bunker.jpg",
        rating: 4.7
      },
      {
        id: 33,
        name: "Нить",
        category: "Bar",
        cuisine: "Татарская",
        image: "nit.jpg",
        rating: 4.7
      },
      {
        id: 34,
        name: "Соседи",
        category: "Bar",
        cuisine: "Татарская",
        image: "sosedi.jpg",
        rating: 4.7
      },
      {
        id: 35,
        name: "Шашлыкoff",
        category: "Bar",
        cuisine: "Татарская",
        image: "off.jpg",
        rating: 4.7
      },
      {
        id: 36,
        name: "Палома",
        category: "Bar",
        cuisine: "Татарская",
        image: "paloma.jpg",
        rating: 4.7
      },
      {
        id: 37,
        name: "ШтофЪ",
        category: "Bar",
        cuisine: "Татарская",
        image: "shtof.jpg",
        rating: 4.7
      },
      {
        id: 38,
        name: "Volna",
        category: "Bar",
        cuisine: "Татарская",
        image: "volna.jpg",
        rating: 4.7
      }
];

const eventsData = [
  {
    id: 1,
    name: "Сабантуй 2023",
    date: "25.06.2023",
    description: "Национальный праздник окончания весенних полевых работ.", // Добавлено описание
    image: "images/sabantuy.jpg",
    rating: 4.5 // Добавим рейтинг для единообразия
  },
  // Добавьте другие мероприятия с обязательным полем description
];



// DOM элементы
const placesContainer = document.getElementById('placesContainer');
const restaurantsContainer = document.getElementById('restaurantsContainer');
const eventsContainer = document.getElementById('eventsContainer');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalRating = document.getElementById('modalRating');
const closeBtn = document.querySelector('.close-btn');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const colorizeBtn = document.getElementById('colorizeBtn');
const heroSection = document.querySelector('.hero');

// Функции рендеринга
function renderPlaces(places) {
  if (!placesContainer) return;
  
  placesContainer.innerHTML = places.map(place => `
    <div class="card" data-category="${place.category}">
      <img src="images/${place.image}" alt="${place.name}" 
           onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}'">
      <div class="card-content">
        <h3>${place.name}</h3>
        <p>${place.description.substring(0, 100)}...</p>
        <div class="rating">★ ${place.rating.toFixed(1)}</div>
      </div>
    </div>
  `).join('');
}


function renderRestaurants(restaurants) {
  if (!restaurantsContainer) return;
  
  restaurantsContainer.innerHTML = restaurants.map(restaurant => `
    <div class="card" data-category="${restaurant.category}">
      <img src="images/${restaurant.image || 'restaurant-default.jpg'}" 
           alt="${restaurant.name}"
           onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}'">
      <div class="card-content">
        <h3>${restaurant.name}</h3>
        <p class="cuisine">${restaurant.cuisine}</p>
        <div class="rating">★ ${restaurant.rating?.toFixed(1) || '5.0'}</div>
        <div class="category-badge">${getCategoryName(restaurant.category)}</div>
      </div>
    </div>
  `).join('');
}

function renderEvents(events) {
  if (!eventsContainer) return;
  
  eventsContainer.innerHTML = events.map(event => `
    <div class="card">
      <img src="images/${event.image || 'event-default.jpg'}" 
           alt="${event.name}"
           onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}'">
      <div class="card-content">
        <h3>${event.name}</h3>
        <p class="event-date">Дата: ${event.date}</p>
        <p class="description">${event.description?.substring(0, 100) || 'Описание отсутствует'}...</p>
        ${event.rating ? `<div class="rating">★ ${event.rating.toFixed(1)}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// Вспомогательные функции
function getCategoryName(category) {
  if (!category) return '';
  if (category.includes('coffee')) return 'Кофейня';
  if (category.includes('rest')) return 'Ресторан';
  if (category.includes('bar')) return 'Бар';
  return '';
}

function filterRestaurants(category) {
  if (!restaurantsData) return [];
  if (category === 'all') return restaurantsData;
  
  return restaurantsData.filter(r => {
    if (!r.category) return false;
    return r.category.toLowerCase().includes(category.toLowerCase());
  });
}

function openModal(item) {
  if (!modal || !modalTitle || !modalImage || !modalDescription) return;
  
  modalTitle.textContent = item.name;
  modalImage.src = `images/${item.image}`;
  modalImage.onerror = () => modalImage.src = 'images/default.jpg';
  modalDescription.textContent = item.description || 'Описание отсутствует';
  modalRating.innerHTML = item.rating ? `Рейтинг: <span class="rating">${item.rating.toFixed(1)}/5</span>` : '';
  modal.style.display = 'flex';
}

// Обработчики событий
function setupEventListeners() {
  // Фильтрация мест
  document.querySelectorAll('#places .filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;
      document.querySelectorAll('#places .filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filtered = filter === 'all' 
        ? placesData 
        : placesData.filter(p => p.category === filter);
      renderPlaces(filtered);
    });
  });

  // Фильтрация ресторанов
  document.querySelectorAll('#food .filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter.toLowerCase();
      document.querySelectorAll('#food .filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filtered = filterRestaurants(filter);
      renderRestaurants(filtered);
    });
  });

  // Модальное окно
  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
  }
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Бургер-меню
  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      burger.classList.toggle('toggle');
  
      // Блокируем прокрутку при открытом меню
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Плавная прокрутка
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (navLinks) navLinks.classList.remove('active');
        if (burger) burger.classList.remove('toggle');
      }
    });
  });

  // Эффект раскрашивания
  if (colorizeBtn && heroSection) {
    let isColorized = false;
    colorizeBtn.addEventListener('click', () => {
      isColorized = !isColorized;
      heroSection.classList.toggle('colorized', isColorized);
    });
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  // Проверка и рендеринг данных
  if (placesData.length) renderPlaces(placesData);
  if (restaurantsData.length) renderRestaurants(restaurantsData);
  if (eventsData.length) renderEvents(eventsData);
  
  // Настройка обработчиков событий
  setupEventListeners();
  
  // Активация первого фильтра
  const firstFilter = document.querySelector('#places .filter-btn');
  if (firstFilter) firstFilter.click();
  
  console.log('Приложение инициализировано');
});