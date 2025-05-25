// Language translations and dynamic switching for SmartTurist
const translations = {
  en: {
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    blog: "Blog",
    contact: "Contact",
    search_placeholder: "Search Here...",
    logo: "SmartTurist",
    footer_title: "Current Time",
    main_title: "Welcome to our <span>Uzbekistan</span>",
    main_desc: "Uzbekistan – a land where the ancient Silk Road meets a vibrant modern lifestyle. Through cities like Samarkand, Bukhara, and Khiva, you can feel the traces of a civilization thousands of years old. This country welcomes you with its hospitable people, unique national cuisine, rich culture, and historical heritage. Today, Uzbekistan is more open, safe, and convenient for travelers, offering modern infrastructure and digital services to make your journey easier.",
    main_btn: "Explore the Cities",
    about_subtitle: "About Us",
    about_title: "Discover the <span>story of Uzbekistan</span>",
    about_desc: "Uzbekistan is a country in the East with unique cultural and historical wealth. Its ancient cities like Samarkand, Bukhara, and Khiva are listed as UNESCO World Heritage Sites. The country's nature is diverse, featuring mountains, deserts, and rivers. Uzbekistan is also growing economically, known globally for its cotton, gold, and gas exports. Recent reforms have elevated the country on the global stage.",
    watch_registan: "Watch the Registan",
    our_cities: "Our Cities",
    menu_title: "Wake up early, <span>Then travel to thousand-year-old historic sites, & Uzbekistan</span>",
    all: "All",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    book_table: "Book Table",
    our_team: "Our Team",
    what_they_say: "What they say",
    newsletter_title: "Subscribe to our Newsletter",
    minaret_title: "Minorai Kalon",
    minaret_desc: "The Kalon Minaret (meaning \"Great Minaret\") is one of the most famous architectural landmarks of Bukhara. It was built in the 12th century, in the year 1127, by the Karakhanid ruler Arslan Khan. Standing 46.5 meters tall, the minaret has served not only as a call to prayer for the mosque but also as a watchtower for the city throughout the centuries."
  },
  ru: {
    home: "Главная",
    about: "О нас",
    menu: "Меню",
    gallery: "Галерея",
    blog: "Блог",
    contact: "Контакты",
    search_placeholder: "Поиск...",
    logo: "SmartTurist",
    footer_title: "Текущее время",
    main_title: "Добро пожаловать в <span>Узбекистан</span>",
    main_desc: "Узбекистан — страна, где древний Шёлковый путь встречается с современной жизнью. В таких городах, как Самарканд, Бухара и Хива, ощущается тысячелетняя история цивилизации. Эта страна встречает вас гостеприимным народом, уникальной кухней, богатой культурой и историческим наследием. Сегодня Узбекистан открыт, безопасен и удобен для путешественников, предлагая современную инфраструктуру и цифровые сервисы.",
    main_btn: "Исследуйте города",
    about_subtitle: "О нас",
    about_title: "Откройте для себя <span>историю Узбекистана</span>",
    about_desc: "Узбекистан — страна Востока с уникальным культурным и историческим наследием. Древние города, такие как Самарканд, Бухара и Хива, входят в список объектов Всемирного наследия ЮНЕСКО. Природа страны разнообразна: горы, пустыни, реки. Экономика развивается, страна известна хлопком, золотом и газом. Реформы последних лет вывели Узбекистан на мировой уровень.",
    watch_registan: "Смотреть Регистан",
    our_cities: "Наши города",
    menu_title: "Просыпайтесь рано, <span>путешествуйте по тысячелетним историческим местам и Узбекистану</span>",
    all: "Все",
    breakfast: "Завтрак",
    lunch: "Обед",
    dinner: "Ужин",
    book_table: "Забронировать стол",
    our_team: "Наша команда",
    what_they_say: "Отзывы",
    newsletter_title: "Подпишитесь на нашу рассылку",
    minaret_title: "Минарет Калян",
    minaret_desc: "Минарет Калян (в переводе — \"Великий минарет\") — одна из самых известных архитектурных достопримечательностей Бухары. Он был построен в XII веке, в 1127 году, караханидским правителем Арслан-ханом. Высота минарета составляет 46,5 метров. На протяжении веков он служил не только для призыва к молитве, но и как сторожевая башня города."
  },
  ja: {
    home: "ホーム",
    about: "私たちについて",
    menu: "メニュー",
    gallery: "ギャラリー",
    blog: "ブログ",
    contact: "連絡先",
    search_placeholder: "ここで検索...",
    logo: "SmartTurist",
    footer_title: "現在時刻",
    main_title: "ようこそ <span>ウズベキスタン</span> へ",
    main_desc: "ウズベキスタンは、古代シルクロードと現代的なライフスタイルが交差する国です。サマルカンド、ブハラ、ヒヴァのような都市を通じて、何千年もの歴史を感じることができます。この国は、親切な人々、独特の料理、豊かな文化、歴史的遺産で皆さんを歓迎します。現代のインフラとデジタルサービスで、旅行者にとってより便利で安全な場所となっています。",
    main_btn: "都市を探検する",
    about_subtitle: "私たちについて",
    about_title: "ウズベキスタンの <span>物語を発見</span>",
    about_desc: "ウズベキスタンは東洋の国で、独自の文化と歴史的な富があります。サマルカンド、ブハラ、ヒヴァなどの古代都市はユネスコの世界遺産に登録されています。山、砂漠、川など多様な自然も魅力です。経済も成長しており、綿花、金、ガスの輸出で有名です。近年の改革で国際的な地位も高まっています。",
    watch_registan: "レギスタンを見る",
    our_cities: "私たちの都市",
    menu_title: "早起きして、<span>何千年もの歴史ある場所やウズベキスタンを旅しよう</span>",
    all: "すべて",
    breakfast: "朝食",
    lunch: "昼食",
    dinner: "夕食",
    book_table: "テーブルを予約する",
    our_team: "私たちのチーム",
    what_they_say: "お客様の声",
    newsletter_title: "ニュースレターを購読する",
    minaret_title: "カロン・ミナレット",
    minaret_desc: "カロン・ミナレット（「偉大なミナレット」という意味）は、ブハラで最も有名な建築物の一つです。12世紀、1127年にカラハン朝のアルスラン・ハンによって建てられました。高さ46.5メートルで、モスクのアザーンのためだけでなく、街の見張り塔としても何世紀にもわたり使われてきました。"
  },
  uz: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    menu: "Menyu",
    gallery: "Galereya",
    blog: "Blog",
    contact: "Aloqa",
    search_placeholder: "Qidiruv...",
    logo: "SmartTurist",
    footer_title: "Joriy vaqt",
    main_title: "Xush kelibsiz <span>Oʻzbekistonga</span>",
    main_desc: "Oʻzbekiston — qadimiy Ipak yo‘li va zamonaviy hayot tarzining uchrashgan joyi. Samarqand, Buxoro va Xiva kabi shaharlar orqali ming yillik sivilizatsiya izlarini his qilishingiz mumkin. Bu yurt sizni mehmondo‘st xalqi, betakror milliy taomlari, boy madaniyati va tarixiy merosi bilan kutib oladi. Bugungi kunda Oʻzbekiston sayohatchilar uchun ochiq, xavfsiz va qulay, zamonaviy infratuzilma va raqamli xizmatlarni taklif etadi.",
    main_btn: "Shaharlarni ko‘ring",
    about_subtitle: "Biz haqimizda",
    about_title: "Oʻzbekiston <span>tarixini kashf eting</span>",
    about_desc: "Oʻzbekiston — sharqdagi noyob madaniy va tarixiy boyliklarga ega mamlakat. Samarqand, Buxoro va Xiva kabi qadimiy shaharlari YuNESKO merosi roʻyxatiga kiritilgan. Tabiati turli-tuman: togʻlar, choʻllar, daryolar. Iqtisodi rivojlanmoqda, paxta, oltin va gaz eksporti bilan mashhur. So‘nggi islohotlar mamlakatni jahon maydoniga olib chiqdi.",
    watch_registan: "Registonni tomosha qiling",
    our_cities: "Shaharlarimiz",
    menu_title: "Ertalab erta turing, <span>ming yillik tarixiy joylarga va Oʻzbekistonga sayohat qiling</span>",
    all: "Barchasi",
    breakfast: "Nonushta",
    lunch: "Tushlik",
    dinner: "Kechki ovqat",
    book_table: "Stol buyurtma qilish",
    our_team: "Bizning jamoamiz",
    what_they_say: "Mijozlar fikri",
    newsletter_title: "Yangiliklarga obuna boʻling",
    minaret_title: "Minorai Kalon",
    minaret_desc: "Minorai Kalon (\"Buyuk minorara\" degan ma'noni anglatadi) Buxoroning eng mashhur me'moriy yodgorliklaridan biridir. U 12-asrda, 1127-yilda Qoraxoniylar hukmdori Arslonxon tomonidan qurilgan. Balandligi 46,5 metr bo'lib, asrlar davomida nafaqat masjidga azon aytish, balki shahar uchun kuzatuv minorasi sifatida ham xizmat qilgan."
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('langDropdownBtn');
  var dropdown = document.getElementById('langDropdown');
  var flagSpan = document.getElementById('selectedLangFlag');
  var options = dropdown.querySelectorAll('.lang-option');
  // Set initial language
  const lang = localStorage.getItem('lang') || 'en';
  setLanguage(lang);
  // Dropdown logic
  btn.onclick = function(e) {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  };
  options.forEach(function(opt) {
    opt.onclick = function() {
      flagSpan.textContent = opt.getAttribute('data-flag');
      dropdown.style.display = 'none';
      setLanguage(opt.getAttribute('data-lang'));
    };
  });
  document.body.onclick = function() {
    dropdown.style.display = 'none';
  };
});
