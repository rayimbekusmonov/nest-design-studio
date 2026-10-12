export type Language = 'uz' | 'en' | 'ru';

export interface ProjectData {
  image: string;
  title: string;
  category: 'Interyer' | 'Eksteryer';
  categoryLabel: string;
  description: string;
}

export interface ServiceData {
  title: string;
  description: string;
}

export interface Translations {
  nav: {
    home: string;
    projects: string;
    services: string;
    about: string;
    contact: string;
    inquireBtn: string;
    subtitle: string;
  };
  hero: {
    coords: string;
    city: string;
    overline: string;
    title1: string;
    title2: string;
    subtitle: string;
    viewProjects: string;
    contactBtn: string;
  };
  marquee: string[];
  stats: {
    completedProjects: string;
    yearsExp: string;
    architects: string;
    awards: string;
  };
  portfolio: {
    overline: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterInterior: string;
    filterExterior: string;
    viewingCount: (count: number) => string;
    startProjectBtn: string;
    modal: {
      tagline: string;
      locationLabel: string;
      locationVal: string;
      disciplineLabel: string;
      statusLabel: string;
      statusVal: string;
      consultBtn: string;
    };
    items: ProjectData[];
  };
  services: {
    overline: string;
    title: string;
    subtitle: string;
    items: ServiceData[];
  };
  about: {
    overline: string;
    titleLine1: string;
    titleLine2: string;
    sinceBadge: string;
    p1Bold: string;
    p1Rest: string;
    p2: string;
    metrics: {
      awards: string;
      experts: string;
      projects: string;
    };
    startProjectBtn: string;
  };
  contact: {
    overline: string;
    title: string;
    subtitle: string;
    telegramHeading: string;
    telegramDesc: string;
    telegramBtn: string;
    bullets: string[];
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    addressVal: string;
    socialLabel: string;
  };
  footer: {
    brandSubtitle: string;
    brandDesc: string;
    quickLinks: string;
    contactTitle: string;
    copyright: string;
    cityCountry: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      home: 'Bosh Sahifa',
      projects: 'Loyihalar',
      services: 'Xizmatlar',
      about: 'Biz Haqimizda',
      contact: 'Aloqa',
      inquireBtn: 'Murojaat',
      subtitle: 'Arxitektura & Dizayn — Toshkent',
    },
    hero: {
      coords: '[ 41.2995° N, 69.2401° E ]',
      city: 'Toshkent',
      overline: 'Nest Design Co — Premium Arxitektura & Dizayn',
      title1: 'Arxitektura',
      title2: 'Yangi Darajada',
      subtitle: 'Zamonaviy arxitekturaviy yechimlar orqali hashamatli va qulay ichki makonlarni yaratamiz',
      viewProjects: "Loyihalarni ko'rish",
      contactBtn: "Bog'lanish",
    },
    marquee: [
      'NEST DESIGN CO',
      'PREMIUM ARXITEKTURA',
      'EKSTERYER & FASAD',
      'HASHAMATLI INTERYER',
      'TOSHKENT — 2026',
      'NEOKLASSIK VILLALAR',
      'LANDSHAFT SAN\'ATI',
      'YASHASH SAN\'ATI',
    ],
    stats: {
      completedProjects: 'Bajarilgan Loyiha',
      yearsExp: 'Yillik Tajriba',
      architects: 'Mutaxassis Arxitektor',
      awards: 'Mukofot va Sertifikat',
    },
    portfolio: {
      overline: 'Portfolio',
      title: 'Tanlangan loyihalar',
      subtitle: "Har bir loyiha ustida individual me'moriy yondashuv bilan ishlanadi",
      filterAll: 'Barchasi',
      filterInterior: 'Interyer',
      filterExterior: 'Eksteryer',
      viewingCount: (c) => `KO'RILMOQDA: ${c} TA LOYIHA — TAFSILOTLAR UCHUN LOYIHANI BOSING`,
      startProjectBtn: "O'z loyihangizni boshlang",
      modal: {
        tagline: 'Nest Design Co · Portfolio',
        locationLabel: 'Joylashuv',
        locationVal: 'Toshkent',
        disciplineLabel: "Yo'nalish",
        statusLabel: 'Status',
        statusVal: 'Muvaffaqiyatli yakunlangan',
        consultBtn: "Loyiha bo'yicha maslahat olish",
      },
      items: [
        { image: '/projects/exterior-5.jpg',  title: 'Klassik villa',             category: 'Eksteryer', categoryLabel: 'Eksteryer', description: 'Favvora va landshaft bog\' bilan bezatilgan ikki qavatli klassik uslubdagi hashamatli villa.' },
        { image: '/projects/interior-1.jpg',  title: 'Yotoqxona — Yashil Lustra', category: 'Interyer',  categoryLabel: 'Interyer',  description: 'Yashil kristall lustro va nafis detallar bilan bezatilgan premium yotoqxona interyeri.' },
        { image: '/projects/exterior-3.png',  title: 'Neoklassik kottej',         category: 'Eksteryer', categoryLabel: 'Eksteryer', description: 'Korinfiya ustunlari va temir panjara balkoni bilan bezatilgan kechki yorug\'likdagi villa fasadi.' },
        { image: '/projects/interior-3.jpg',  title: 'Zamonaviy yotoqxona',       category: 'Interyer',  categoryLabel: 'Interyer',  description: 'Marmar tekstura va yog\'och panel dekorli zamonaviy minimalist yotoqxona dizayni.' },
        { image: '/projects/exterior-2.png',  title: 'Hashamatli uy fasadi',      category: 'Eksteryer', categoryLabel: 'Eksteryer', description: 'Kechki yoritish va neoklassik arxitektura elementlari bilan bezatilgan turar-joy binosi.' },
        { image: '/projects/interior-2.jpg',  title: 'Yotoqxona — TV zona',       category: 'Interyer',  categoryLabel: 'Interyer',  description: 'Klassik gips bezaklar va zamonaviy mebel uyg\'unligidagi hashamatli yotoqxona TV burchagi.' },
        { image: '/projects/exterior-4.png',  title: 'Villa — Aerial Ko\'rinish', category: 'Eksteryer', categoryLabel: 'Eksteryer', description: 'Yuqoridan ko\'rinish: qora shifer tom va oq fasadli neoklassik uslubdagi kottej.' },
        { image: '/projects/interior-4.jpg',  title: 'Kiyinish xonasi',           category: 'Interyer',  categoryLabel: 'Interyer',  description: 'Shisha kupe shkaf va chiziqli yoritish bilan yaratilgan zamonaviy walk-in closet dizayni.' },
        { image: '/projects/exterior-1.jpg',  title: 'Klassik villa fasadi',      category: 'Eksteryer', categoryLabel: 'Eksteryer', description: 'Arkali kirish va balkon panjuralari bilan bezatilgan oq rangli neoklassik villa.' },
        { image: '/projects/interior-5.jpg',  title: 'Mehmonxona burchagi',       category: 'Interyer',  categoryLabel: 'Interyer',  description: 'Aksent devor paneli va gul bezagi bilan yaratilgan qulay o\'tirish burchagi dizayni.' },
      ],
    },
    services: {
      overline: 'Xizmatlar',
      title: 'Bizning xizmatlar',
      subtitle: "Sizning tasavvuringizga moslashtirilgan kompleks me'moriy yechimlar",
      items: [
        { title: 'Arxitektura loyihalash', description: 'Kontseptsiyadan tugatishgacha bo\'lgan har tomonlama arxitektura yechimlari — aniqlik va ijodkorlik bilan ishlab chiqiladi.' },
        { title: 'Interyer dizayn',        description: 'Nafislik, funksionallik va sizning o\'ziga xos tasavvuringizni aks ettiruvchi hashamatli ichki makonlar.' },
        { title: 'Eksteryer dizayn',       description: 'Kuchli taassurot qoldiradigan va vaqt sinovidan o\'tadigan ajoyib tashqi fasad dizayni.' },
        { title: 'Landshaft dizayn',       description: 'Tabiatni zamonaviy qurilgan muhit bilan uyg\'unlashtiruvchi uyg\'un landshaft arxitekturasi.' },
        { title: 'Konsept loyihalar',      description: 'G\'oyadan haqiqatga — innovatsion konsept loyihalar orqali kelajak me\'morchiligini bugun yaratamiz.' },
      ],
    },
    about: {
      overline: 'Biz haqimizda',
      titleLine1: '2020-yildan buyon',
      titleLine2: 'orzu quramiz',
      sinceBadge: 'dan beri',
      p1Bold: 'Nest Design Co',
      p1Rest: ' — 10 yillik tajribaga ega malakali mutaxassislar jamoasi bo\'lib, bizning missiyamiz zamonaviy arxitekturaviy yechimlar orqali hashamatli va qulay ichki makonlarni yaratishdir.',
      p2: 'Biz nafaqat binolar loyihalashtiramiz, balki ilg\'or yondashuvlarimiz bilan yashash san\'atini yangi darajaga olib chiqamiz.',
      metrics: {
        awards: 'Mukofotlar',
        experts: 'Mutaxassislar',
        projects: 'Loyihalar',
      },
      startProjectBtn: 'Loyiha boshlash',
    },
    contact: {
      overline: 'Aloqa',
      title: 'Biz bilan bog\'laning',
      subtitle: "Keyingi me'moriy asaringizni birga yarataylik",
      telegramHeading: 'Telegram orqali\nbog\'laning',
      telegramDesc: 'Loyihangiz haqida gaplashishga tayyormiz. Telegramda yozing — tez javob beramiz va bepul konsultatsiya o\'tkazamiz.',
      telegramBtn: 'Telegramda yozish',
      bullets: [
        'Odatda 1 soat ichida javob beramiz',
        'Birinchi konsultatsiya — bepul',
        'Har qanday hajmdagi loyihalar',
      ],
      phoneLabel: 'Telefon',
      emailLabel: 'Email',
      addressLabel: 'Manzil',
      addressVal: "Maxtumquli ko'chasi, 114A,\nYashnobod tumani,\nToshkent, 100047",
      socialLabel: 'Ijtimoiy tarmoqlar',
    },
    footer: {
      brandSubtitle: 'Arxitektura & Dizayn — Toshkent',
      brandDesc: 'Zamonaviy arxitekturaviy yechimlar orqali hashamatli va qulay makonlar yaratamiz.',
      quickLinks: 'Tezkor havolalar',
      contactTitle: 'Aloqa',
      copyright: '© 2026 Nest Design Co. Barcha huquqlar himoyalangan.',
      cityCountry: 'Toshkent, O\'zbekiston',
    },
  },

  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      inquireBtn: 'Inquire',
      subtitle: 'Architecture & Design — Tashkent',
    },
    hero: {
      coords: '[ 41.2995° N, 69.2401° E ]',
      city: 'Tashkent',
      overline: 'Nest Design Co — Premium Architecture & Design',
      title1: 'Architecture',
      title2: 'Redefined',
      subtitle: 'Crafting bespoke architectural solutions and luxurious, functional spaces tailored to your vision',
      viewProjects: 'Explore Projects',
      contactBtn: 'Get in Touch',
    },
    marquee: [
      'NEST DESIGN CO',
      'PREMIUM ARCHITECTURE',
      'EXTERIOR & FACADE',
      'LUXURY INTERIORS',
      'TASHKENT — 2026',
      'NEOCLASSICAL VILLAS',
      'LANDSCAPE ART',
      'THE ART OF LIVING',
    ],
    stats: {
      completedProjects: 'Completed Projects',
      yearsExp: 'Years Experience',
      architects: 'Expert Architects',
      awards: 'Awards & Honors',
    },
    portfolio: {
      overline: 'Portfolio',
      title: 'Selected Projects',
      subtitle: 'Every project is crafted with a bespoke architectural approach',
      filterAll: 'All',
      filterInterior: 'Interior',
      filterExterior: 'Exterior',
      viewingCount: (c) => `VIEWING: ${c} PROJECTS — CLICK TO EXPAND DETAILS`,
      startProjectBtn: 'Start Your Project',
      modal: {
        tagline: 'Nest Design Co · Portfolio',
        locationLabel: 'Location',
        locationVal: 'Tashkent, Uzbekistan',
        disciplineLabel: 'Discipline',
        statusLabel: 'Status',
        statusVal: 'Completed with Distinction',
        consultBtn: 'Request Project Consultation',
      },
      items: [
        { image: '/projects/exterior-5.jpg',  title: 'Classical Villa',          category: 'Eksteryer', categoryLabel: 'Exterior', description: 'A two-story luxury classical villa featuring a fountain centerpiece and landscaped gardens.' },
        { image: '/projects/interior-1.jpg',  title: 'Master Suite — Emerald Chandelier', category: 'Interyer', categoryLabel: 'Interior', description: 'A bespoke master bedroom interior with a handcrafted emerald crystal chandelier and fine textures.' },
        { image: '/projects/exterior-3.png',  title: 'Neoclassical Estate',      category: 'Eksteryer', categoryLabel: 'Exterior', description: 'Corinthian capitals and wrought iron balconies captured under ambient dusk illumination.' },
        { image: '/projects/interior-3.jpg',  title: 'Contemporary Suite',       category: 'Interyer',  categoryLabel: 'Interior',  description: 'Minimalist luxury bedroom featuring natural marble wall panels and warm ambient strip lights.' },
        { image: '/projects/exterior-2.png',  title: 'Private Residence Facade', category: 'Eksteryer', categoryLabel: 'Exterior', description: 'Dramatically illuminated evening facade with neoclassical symmetry and stone detailing.' },
        { image: '/projects/interior-2.jpg',  title: 'Bedroom — Lounge Area',    category: 'Interyer',  categoryLabel: 'Interior',  description: 'Harmonious fusion of classical plaster moldings and modern bespoke Italian-style furniture.' },
        { image: '/projects/exterior-4.png',  title: 'Estate — Aerial View',     category: 'Eksteryer', categoryLabel: 'Exterior', description: 'High-altitude panoramic view of dark slate roofing and pristine white neoclassical masonry.' },
        { image: '/projects/interior-4.jpg',  title: 'Walk-in Wardrobe',         category: 'Interyer',  categoryLabel: 'Interior',  description: 'Custom glass wardrobe suites with integrated vertical linear LED backlighting.' },
        { image: '/projects/exterior-1.jpg',  title: 'Classical Residence Portico', category: 'Eksteryer', categoryLabel: 'Exterior', description: 'Grand arched entryway and classical balustrade balconies on a serene neoclassical facade.' },
        { image: '/projects/interior-5.jpg',  title: 'Lounge Alcove',            category: 'Interyer',  categoryLabel: 'Interior',  description: 'Sophisticated sitting alcove featuring an accent panel, curated botanicals, and warm lighting.' },
      ],
    },
    services: {
      overline: 'Services',
      title: 'Our Capabilities',
      subtitle: 'Comprehensive architectural and design solutions tailored to your exacting standards',
      items: [
        { title: 'Architectural Planning', description: 'End-to-end architectural engineering from initial concept to completion — executed with precision and artistry.' },
        { title: 'Interior Design',        description: 'Luxurious, ergonomic interior spaces reflecting elegance, refined taste, and individuality.' },
        { title: 'Exterior & Facade',      description: 'Striking exterior facade design that commands presence and endures through generations.' },
        { title: 'Landscape Architecture', description: 'Harmonious outdoor compositions uniting natural beauty with contemporary built environments.' },
        { title: 'Concept Masterplans',    description: 'Transforming ambitious visions into physical reality through visionary conceptual masterplanning.' },
      ],
    },
    about: {
      overline: 'About Studio',
      titleLine1: 'Since 2020',
      titleLine2: 'shaping dreams',
      sinceBadge: 'since',
      p1Bold: 'Nest Design Co',
      p1Rest: ' is an elite studio of architects and interior specialists with over a decade of collective experience, dedicated to crafting luxury living spaces that redefine elegance.',
      p2: 'We do not simply design structures; we elevate the art of living through uncompromising attention to architectural detail and material authenticity.',
      metrics: {
        awards: 'Awards',
        experts: 'Specialists',
        projects: 'Projects',
      },
      startProjectBtn: 'Initiate Project',
    },
    contact: {
      overline: 'Contact',
      title: 'Connect With Us',
      subtitle: 'Let us create your next architectural masterpiece together',
      telegramHeading: 'Connect via\nTelegram',
      telegramDesc: 'Ready to bring your architectural vision to life. Message us on Telegram for immediate response and complimentary consultation.',
      telegramBtn: 'Write on Telegram',
      bullets: [
        'Response typically within 1 hour',
        'Complimentary initial consultation',
        'Projects of any scale and complexity',
      ],
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      addressLabel: 'Studio Address',
      addressVal: '114A Makhtumkuli Street,\nYashnabad District,\nTashkent, 100047',
      socialLabel: 'Social Channels',
    },
    footer: {
      brandSubtitle: 'Architecture & Design — Tashkent',
      brandDesc: 'Creating luxurious, timeless spaces through modern architectural mastery.',
      quickLinks: 'Navigation',
      contactTitle: 'Contact',
      copyright: '© 2026 Nest Design Co. All rights reserved.',
      cityCountry: 'Tashkent, Uzbekistan',
    },
  },

  ru: {
    nav: {
      home: 'Главная',
      projects: 'Проекты',
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты',
      inquireBtn: 'Консультация',
      subtitle: 'Архитектура и Дизайн — Ташкент',
    },
    hero: {
      coords: '[ 41.2995° N, 69.2401° E ]',
      city: 'Ташкент',
      overline: 'Nest Design Co — Премиальная Архитектура и Дизайн',
      title1: 'Архитектура',
      title2: 'На Новом Уровне',
      subtitle: 'Создаем индивидуальные архитектурные решения и роскошные интерьеры с безупречным чувством стиля',
      viewProjects: 'Смотреть проекты',
      contactBtn: 'Связаться с нами',
    },
    marquee: [
      'NEST DESIGN CO',
      'ПРЕМИУМ АРХИТЕКТУРА',
      'ФАСАДЫ И ЭКСТЕРЬЕР',
      'РОСКОШНЫЕ ИНТЕРЬЕРЫ',
      'ТАШКЕНТ — 2026',
      'НЕОКЛАССИЧЕСКИЕ ВИЛЛЫ',
      'ИСКУССТВО ЛАНДШАФТА',
      'ИСКУССТВО ЖИЗНИ',
    ],
    stats: {
      completedProjects: 'Реализованных проектов',
      yearsExp: 'Лет опыта',
      architects: 'Ведущих архитекторов',
      awards: 'Наград и дипломов',
    },
    portfolio: {
      overline: 'Портфолио',
      title: 'Избранные проекты',
      subtitle: 'Каждый проект создается с индивидуальным архитектурным подходом',
      filterAll: 'Все',
      filterInterior: 'Интерьер',
      filterExterior: 'Экстерьер',
      viewingCount: (c) => `ПОКАЗАНО: ${c} ПРОЕКТОВ — НАЖМИТЕ ДЛЯ ДЕТАЛЕЙ`,
      startProjectBtn: 'Начать свой проект',
      modal: {
        tagline: 'Nest Design Co · Портфолио',
        locationLabel: 'Локация',
        locationVal: 'Ташкент, Узбекистан',
        disciplineLabel: 'Направление',
        statusLabel: 'Статус',
        statusVal: 'Успешно реализован',
        consultBtn: 'Консультация по проекту',
      },
      items: [
        { image: '/projects/exterior-5.jpg',  title: 'Классическая вилла',         category: 'Eksteryer', categoryLabel: 'Экстерьер', description: 'Двухэтажная премиальная вилла в классическом стиле с фонтаном и ландшафтным садом.' },
        { image: '/projects/interior-1.jpg',  title: 'Мастер-спальня с изумрудной люстрой', category: 'Interyer', categoryLabel: 'Интерьер', description: 'Роскошный интерьер спальни с эксклюзивной изумрудной люстрой и благородными акцентами.' },
        { image: '/projects/exterior-3.png',  title: 'Неоклассическая резиденция', category: 'Eksteryer', categoryLabel: 'Экстерьер', description: 'Коринфские колонны, кованые балконы и монументальная подсветка в сумерках.' },
        { image: '/projects/interior-3.jpg',  title: 'Современная спальня',        category: 'Interyer',  categoryLabel: 'Интерьер',  description: 'Лаконичный дизайн спальни с мраморной отделкой и теплыми деревянными панелями.' },
        { image: '/projects/exterior-2.png',  title: 'Фасад особняка',             category: 'Eksteryer', categoryLabel: 'Экстерьер', description: 'Вечерняя иллюминация и выверенная симметрия неоклассического фасада.' },
        { image: '/projects/interior-2.jpg',  title: 'Спальня — ТВ-зона',         category: 'Interyer',  categoryLabel: 'Интерьер',  description: 'Гармония классической лепнины и современной дизайнерской мебели.' },
        { image: '/projects/exterior-4.png',  title: 'Вилла — Вид сверху',         category: 'Eksteryer', categoryLabel: 'Экстерьер', description: 'Панорамный вид с высоты: темная сланцевая кровля и светлый неоклассический фасад.' },
        { image: '/projects/interior-4.jpg',  title: 'Гардеробная комната',        category: 'Interyer',  categoryLabel: 'Интерьер',  description: 'Стеклянные шкафы-купе со встроенной линейной подсветкой и продуманной эргономикой.' },
        { image: '/projects/exterior-1.jpg',  title: 'Фасад классической виллы',   category: 'Eksteryer', categoryLabel: 'Экстерьер', description: 'Арочный парадный вход и изящные балконы на белоснежном фасаде.' },
        { image: '/projects/interior-5.jpg',  title: 'Лаунж-зона гостиной',        category: 'Interyer',  categoryLabel: 'Интерьер',  description: 'Уютная зона отдыха с акцентными панелями и мягким рассеянным светом.' },
      ],
    },
    services: {
      overline: 'Услуги',
      title: 'Наши направления',
      subtitle: 'Комплексные архитектурные и дизайнерские решения высочайшего уровня',
      items: [
        { title: 'Архитектурное проектирование', description: 'Полный цикл разработки проекта от концепции до авторского надзора — с математической точностью и вкусом.' },
        { title: 'Дизайн интерьера',             description: 'Роскошные, функциональные интерьеры, отражающие индивидуальность и статус владельца.' },
        { title: 'Дизайн экстерьера',            description: 'Впечатляющие фасады, сохраняющие актуальность и монументальность вне времени.' },
        { title: 'Ландшафтный дизайн',           description: 'Гармоничная интеграция архитектурного ансамбля в природный ландшафт.' },
        { title: 'Концептуальные проекты',       description: 'От смелой идеи к безупречной реализации — создаем архитектуру будущего уже сегодня.' },
      ],
    },
    about: {
      overline: 'О студии',
      titleLine1: 'С 2020 года',
      titleLine2: 'создаем мечты',
      sinceBadge: 'основано',
      p1Bold: 'Nest Design Co',
      p1Rest: ' — команда ведущих архитекторов и дизайнеров с более чем 10-летним профессиональным опытом, создающая шедевры жилой и коммерческой архитектуры.',
      p2: 'Мы не просто проектируем здания — мы возводим культуру пространства и искусство комфортной жизни на принципиально новый уровень.',
      metrics: {
        awards: 'Награды',
        experts: 'Эксперты',
        projects: 'Проекты',
      },
      startProjectBtn: 'Начать проект',
    },
    contact: {
      overline: 'Контакты',
      title: 'Свяжитесь с нами',
      subtitle: 'Давайте вместе создадим ваш следующий архитектурный шедевр',
      telegramHeading: 'Напишите нам в\nTelegram',
      telegramDesc: 'Готовы подробно обсудить ваш будущий проект. Напишите нам в Telegram — ответим оперативно и проведем первичную консультацию.',
      telegramBtn: 'Написать в Telegram',
      bullets: [
        'Отвечаем в среднем в течение 1 часа',
        'Первая консультация — бесплатно',
        'Проекты любого масштаба и сложности',
      ],
      phoneLabel: 'Телефон',
      emailLabel: 'Email',
      addressLabel: 'Адрес студии',
      addressVal: 'ул. Махтумкули, 114А,\nЯшнабадский район,\nТашкент, 100047',
      socialLabel: 'Социальные сети',
    },
    footer: {
      brandSubtitle: 'Архитектура и Дизайн — Ташкент',
      brandDesc: 'Создаем роскошные и функциональные пространства на стыке архитектуры и искусства.',
      quickLinks: 'Навигация',
      contactTitle: 'Контакты',
      copyright: '© 2026 Nest Design Co. Все права защищены.',
      cityCountry: 'Ташкент, Узбекистан',
    },
  },
};
