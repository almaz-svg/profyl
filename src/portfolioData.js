export const portfolio = {
  theme: {
    background: 'white',
    accentUse: 'restrained',
  },
  sections: [
    { id: 'hero', label: 'Главная' },
    { id: 'intro', label: 'Подход' },
    { id: 'achievement', label: 'Достижение' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'service', label: 'Услуги' },
    { id: 'process', label: 'Процесс' },
    { id: 'collaboration', label: 'Работа' },
    { id: 'contact', label: 'Контакты' },
  ],
  nav: [
    { label: 'обо мне', href: '#intro' },
    { label: 'достижение', href: '#achievement' },
    { label: 'проекты', href: '#cases' },
    { label: 'процесс', href: '#process' },
    { label: 'контакты', href: '#contact' },
  ],
  hero: {
    eyebrow: 'AI / FRONTEND PORTFOLIO',
    title: ['ALMAZ', 'FRONTEND', 'DEVELOPER'],
    text: 'Создаю интерфейсы на React и Node.js, работаю с идеями в сфере AI и превращаю студенческие проекты в понятные цифровые продукты.',
    cta: { label: 'смотреть достижения', href: '#achievement' },
  },
  intro: {
    quote:
      'Для меня хороший проект — это не только красивый экран. Это понятная идея, рабочая логика, чистая структура и результат, который можно показать людям.',
    note: 'React, Node.js, AI-проекты и командные решения',
  },
  achievement: {
    team: 'IPT Group',
    participant: 'Мұсұлманқұл Алмаз',
    place: 'I место',
    prize: '500 000 тенге',
    contest: 'AI Sana – Digital Kazakhstan: Projects of the Future',
    university: 'Таразский университет имени М.Х. Дулати',
    text:
      'Команда IPT Group заняла первое место на республиканском конкурсе студенческих проектов, где оценивались новизна идеи, практическая значимость, технологический уровень и качество презентации.',
    image: {
      src: 'https://zhetysu.edu.kz/wp-content/uploads/2026/03/2-17-1-600x400.jpg',
      alt: 'Команда IPT Group на конкурсе AI Sana Digital Kazakhstan',
    },
    source:
      'https://zhetysu.edu.kz/2026/03/31/%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D1%81-%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%87%D0%B5%D1%81%D0%BA%D0%B8/',
  },
  cases: [
    {
      title: 'AI Dashboard Concept',
      type: 'interface',
      year: '2026',
      text: 'Концепт панели для анализа данных, рисков и ключевых показателей в понятном интерфейсе.',
    },
    {
      title: 'IPT Project Page',
      type: 'team',
      year: '2026',
      text: 'Подача командного достижения IPT Group с фото, источником и фактами конкурса.',
    },
    {
      title: 'React Portfolio',
      type: 'frontend',
      year: '2026',
      text: 'Адаптивная страница-портфолио с отдельными секциями, проверками и Node.js preview.',
    },
  ],
  service: {
    kicker: '1. основной стек',
    title: 'REACT + NODE',
    price: 'frontend / backend basics',
    text:
      'Собираю интерфейсы, продумываю структуру, подключаю данные и проверяю сборку. Главная цель — сделать проект понятным, аккуратным и готовым к демонстрации.',
    details: ['React', 'Node.js', 'AI ideas'],
  },
  process: [
    {
      number: '01',
      title: 'Идея',
      text: 'Определяю задачу, аудиторию и главный результат, который должен показать проект.',
    },
    {
      number: '02',
      title: 'Интерфейс',
      text: 'Собираю структуру экранов, контент, визуальный ритм и адаптивные состояния.',
    },
    {
      number: '03',
      title: 'Запуск',
      text: 'Переношу в код, проверяю сборку, тесты и локальный запуск проекта.',
    },
  ],
  collaboration: {
    title: 'разрабатываю спокойно, понятно и по шагам',
    text:
      'Мне важно, чтобы проект выглядел уверенно и не был просто копией чужого решения. Поэтому я меняю структуру, текст, подачу и оставляю только то, что работает на задачу.',
    points: ['React-компоненты', 'адаптив под экраны', 'проверяемая сборка'],
  },
  contact: {
    title: 'СВЯЖЕМСЯ И ОБСУДИМ СЛЕДУЮЩИЙ ПРОЕКТ',
    email: 'almaz@example.com',
    actions: [
      { label: 'telegram', href: 'https://t.me/example' },
      { label: 'whatsapp', href: 'https://wa.me/70000000000' },
      { label: 'написать', href: 'mailto:almaz@example.com' },
    ],
  },
};
