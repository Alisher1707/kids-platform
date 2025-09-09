import { useState } from 'react';
import LessonDetail from './LessonDetail';

function RussianLetters({ onBack, onLessonSelect }) {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      letter: "А",
      title: "А harfi bilan tanishish",
      description: "Rus alifbosining birinchi harfi - А",
      words: ["Арбуз", "Автобус", "Акула", "Анanas"],
      images: ["🍉", "🚌", "🦈", "🍍", "✈️", "🚗", "🏠", "📚", "⭐", "🎨"],
      activity: "А harfi bilan boshlanadigan rus so'zlarini toping",
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-400',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
    },
    {
      id: 2,
      letter: "Б",
      title: "Б harfi va so'zlar",
      description: "Б harfi bilan boshlangan rus so'zlari",
      words: ["Банан", "Белка", "Бабочка", "Барабан"],
      images: ["🍌", "🐿️", "🦋", "🥁", "🐻", "⚽", "📖", "🎈", "🔔", "🚲"],
      activity: "Б harfi bilan boshlanadigan buyumlarni sanang",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 3,
      letter: "В",
      title: "В harfi va qo'llanishi",
      description: "В harfi bilan rus so'z yasash",
      words: ["Волк", "Ворон", "Велосипед", "Вода"],
      images: ["🐺", "🐦‍⬛", "🚲", "💧", "🌸", "🎯", "💎", "🥛", "🌊", "🌟"],
      activity: "В harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
    {
      id: 4,
      letter: "Г",
      title: "Г harfi va tovushlari",
      description: "Г harfi bilan rus so'zlar tuzish",
      words: ["Гусь", "Гриб", "Голубь", "Гитара"],
      images: ["🦢", "🍄", "🕊️", "🎸", "🦌", "🍎", "👁️", "🎭", "⚡", "🏠"],
      activity: "Г harfi bilan hayvonlar va buyumlarni toping",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
    },
    {
      id: 5,
      letter: "Д",
      title: "Д harfi va nutqi",
      description: "Д harfi bilan yangi rus so'zlar",
      words: ["Дом", "Дерево", "Дракон", "Дождь"],
      images: ["🏠", "🌳", "🐲", "🌧️", "🦅", "🍎", "⚡", "🎭", "🌍", "🏞️"],
      activity: "Д harfi bilan tabiat va binolarni o'rganing",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 6,
      letter: "Е",
      title: "Е harfi va qo'shimchalar",
      description: "Е harfi bilan rus gaplar tuzish",
      words: ["Енот", "Ель", "Единорог", "Еж"],
      images: ["🦝", "🎄", "🦄", "🦔", "🍓", "🎪", "📷", "⚽", "🦋", "🌈"],
      activity: "Е harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-400',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
    },
    {
      id: 7,
      letter: "Ё",
      title: "Ё harfi va undoshi",
      description: "Ё harfi bilan rus so'zlarni o'qish",
      words: ["Ёж", "Ёлка", "Ёршик", "Ёмкость"],
      images: ["🦔", "🎄", "🧽", "🪣", "🍇", "🎸", "🌍", "⚙️", "🎯", "🦒"],
      activity: "Ё harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-400',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
    {
      id: 8,
      letter: "Ж",
      title: "Ж harfi va unli tovushi",
      description: "Ж harfi bilan yangi rus so'zlar",
      words: ["Жук", "Жираф", "Жаба", "Желтый"],
      images: ["🪲", "🦒", "🐸", "💛", "🍯", "🎵", "📦", "🌎", "ℹ️", "🎆"],
      activity: "Ж harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-400',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
    },
    {
      id: 9,
      letter: "З",
      title: "З harfi va imlo qoidalari",
      description: "З harfi bilan rus gaplar",
      words: ["Заяц", "Змея", "Зонт", "Звезда"],
      images: ["🐰", "🐍", "☂️", "⭐", "🍿", "💪", "✨", "🧘", "🌈", "🎆"],
      activity: "З harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-400',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
    },
    {
      id: 10,
      letter: "И",
      title: "И harfi va nutq rivojlantirish",
      description: "И harfi bilan rus hikoyalar",
      words: ["Игра", "Игла", "Индюк", "Изюм"],
      images: ["🎮", "📌", "🦃", "🍇", "💎", "🗝️", "🏆", "🥝", "🎂", "🎨"],
      activity: "И harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
    },
    {
      id: 11,
      letter: "Й",
      title: "Й harfi va she'rlar",
      description: "Й harfi bilan rus qofiyali so'zlar",
      words: ["Йогурт", "Йод", "Йога", "Йети"],
      images: ["🥛", "🩹", "🧘", "🦣", "🥝", "📚", "🔍", "🎆", "✨", "💕"],
      activity: "Й harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-lime-100 hover:bg-lime-200',
      iconBg: 'bg-lime-400',
      textColor: 'text-lime-800',
      borderColor: 'border-lime-200',
    },
    {
      id: 12,
      letter: "К",
      title: "К harfi va oila so'zlari",
      description: "К harfi bilan rus oila a'zolari",
      words: ["Кот", "Корова", "Книга", "Кукла"],
      images: ["🐱", "🐄", "📚", "🪆", "🐵", "🎵", "🌙", "💪", "👐", "🏆"],
      activity: "К harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-emerald-100 hover:bg-emerald-200',
      iconBg: 'bg-emerald-400',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200',
    },
    {
      id: 13,
      letter: "Л",
      title: "Л harfi va tabiat so'zlari",
      description: "Л harfi bilan rus tabiat haqida",
      words: ["Лев", "Лошадь", "Лимон", "Лодка"],
      images: ["🦁", "🐴", "🍋", "⛵", "🎶", "🎆", "📚", "🌙", "🐟", "🎯"],
      activity: "Л harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-violet-100 hover:bg-violet-200',
      iconBg: 'bg-violet-400',
      textColor: 'text-violet-800',
      borderColor: 'border-violet-200',
    },
    {
      id: 14,
      letter: "М",
      title: "М harfi va unli tovush",
      description: "М harfi bilan rus so'z yasash",
      words: ["Медведь", "Молоко", "Мяч", "Машина"],
      images: ["🐻", "🥛", "⚽", "🚗", "🌊", "🌟", "🎵", "🎆", "📚", "☀️"],
      activity: "М harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-sky-100 hover:bg-sky-200',
      iconBg: 'bg-sky-400',
      textColor: 'text-sky-800',
      borderColor: 'border-sky-200',
    },
    {
      id: 15,
      letter: "Н",
      title: "Н harfi va hayvonlar",
      description: "Н harfi bilan rus hayvon nomlari",
      words: ["Носорог", "Ножницы", "Нос", "Небо"],
      images: ["🦏", "✂️", "👃", "☁️", "🐂", "🍕", "📷", "🎆", "💪", "🎭"],
      activity: "Н harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-rose-100 hover:bg-rose-200',
      iconBg: 'bg-rose-400',
      textColor: 'text-rose-800',
      borderColor: 'border-rose-200',
    },
    {
      id: 16,
      letter: "О",
      title: "О harfi va qishki so'zlar",
      description: "О harfi bilan rus so'zlar",
      words: ["Олень", "Окно", "Облако", "Огонь"],
      images: ["🦌", "🪟", "☁️", "🔥", "🌹", "📚", "🚗", "🏆", "🎆", "✨"],
      activity: "О harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-amber-100 hover:bg-amber-200',
      iconBg: 'bg-amber-400',
      textColor: 'text-amber-800',
      borderColor: 'border-amber-200',
    },
    {
      id: 17,
      letter: "П",
      title: "П harfi va ranglar",
      description: "П harfi bilan rus ranglarni o'rganish",
      words: ["Петух", "Паук", "Пингвин", "Пицца"],
      images: ["🐓", "🕷️", "🐧", "🍕", "🔴", "🚀", "🏆", "📚", "✨", "🎵"],
      activity: "П harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-500',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
    },
    {
      id: 18,
      letter: "Р",
      title: "Р harfi va sport so'zlari",
      description: "Р harfi bilan rus sport turlari",
      words: ["Рыба", "Робот", "Радуга", "Ракета"],
      images: ["🐟", "🤖", "🌈", "🚀", "☀️", "🏊", "🎆", "🎨", "📚", "✨"],
      activity: "Р harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 19,
      letter: "С",
      title: "С harfi va transport",
      description: "С harfi bilan rus transport turlari",
      words: ["Солнце", "Собака", "Слон", "Самолет"],
      images: ["☀️", "🐕", "🐘", "✈️", "🚗", "🚂", "🐅", "🎯", "🎆", "✨"],
      activity: "С harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-500',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
    {
      id: 20,
      letter: "Т",
      title: "Т harfi va uy-joy so'zlari",
      description: "Т harfi bilan rus uy buyumlari",
      words: ["Тигр", "Телефон", "Торт", "Туча"],
      images: ["🐅", "📞", "🎂", "☁️", "🦄", "🎆", "📚", "✨", "🎭", "🎨"],
      activity: "Т harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-500',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
    },
    {
      id: 21,
      letter: "У",
      title: "У harfi va vaqt so'zlari",
      description: "У harfi bilan rus vaqt haqida",
      words: ["Утка", "Улитка", "Удочка", "Утро"],
      images: ["🦆", "🐌", "🎣", "🌅", "🎨", "🎆", "📚", "✨", "🎭", "🏆"],
      activity: "У harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-500',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 22,
      letter: "Ф",
      title: "Ф harfi va xalq so'zlari",
      description: "Ф harfi bilan rus an'analari",
      words: ["Фламинго", "Фонарь", "Флаг", "Фрукт"],
      images: ["🦩", "🔦", "🏁", "🍎", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ф harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-500',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
    },
    {
      id: 23,
      letter: "Х",
      title: "Х harfi va yoz faslida",
      description: "Х harfi bilan rus yozgi so'zlar",
      words: ["Хомяк", "Хлеб", "Химия", "Холод"],
      images: ["🐹", "🍞", "🧪", "❄️", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Х harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-500',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
    {
      id: 24,
      letter: "Ц",
      title: "Ц harfi va maxsus so'zlar",
      description: "Ц harfi bilan rus maxsus so'zlar",
      words: ["Цветок", "Цирк", "Царь", "Цыпленок"],
      images: ["🌸", "🎪", "👑", "🐤", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ц harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-500',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
    },
    {
      id: 25,
      letter: "Ч",
      title: "Ч harfi va rang so'zlari",
      description: "Ч harfi bilan rus ranglar",
      words: ["Черепаха", "Часы", "Чай", "Черный"],
      images: ["🐢", "⏰", "☕", "⚫", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ч harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-500',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
    },
    {
      id: 26,
      letter: "Ш",
      title: "Ш harfi va maxsus so'zlar",
      description: "Ш harfi bilan rus so'zlar",
      words: ["Шар", "Школа", "Шляпа", "Шоколад"],
      images: ["🎈", "🏫", "🎩", "🍫", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ш harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-500',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
    },
    {
      id: 27,
      letter: "Щ",
      title: "Щ harfi va birikma undosh",
      description: "Щ harfi bilan rus so'z tuzish",
      words: ["Щенок", "Щука", "Щетка", "Щит"],
      images: ["🐶", "🐟", "🪥", "🛡️", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Щ harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-emerald-100 hover:bg-emerald-200',
      iconBg: 'bg-emerald-500',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200',
    },
    {
      id: 28,
      letter: "Ъ",
      title: "Ъ ajratuvchi belgisi",
      description: "Ъ belgisi bilan rus so'zlar",
      words: ["Подъезд", "Объект", "Съемка", "Разъем"],
      images: ["🏢", "📦", "📹", "🔌", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ъ belgisi bilan so'zlarni o'rganing",
      bgColor: 'bg-violet-100 hover:bg-violet-200',
      iconBg: 'bg-violet-500',
      textColor: 'text-violet-800',
      borderColor: 'border-violet-200',
    },
    {
      id: 29,
      letter: "Ы",
      title: "Ы unli tovushi",
      description: "Ы tovushi bilan rus so'zlar",
      words: ["Мыло", "Рыба", "Сыр", "Дым"],
      images: ["🧼", "🐟", "🧀", "💨", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ы tovushi bilan so'zlarni toping",
      bgColor: 'bg-sky-100 hover:bg-sky-200',
      iconBg: 'bg-sky-500',
      textColor: 'text-sky-800',
      borderColor: 'border-sky-200',
    },
    {
      id: 30,
      letter: "Ь",
      title: "Ь yumshatuvchi belgisi",
      description: "Ь belgisi bilan rus so'z yasash",
      words: ["Медведь", "Олень", "Конь", "Тюлень"],
      images: ["🐻", "🦌", "🐴", "🦭", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ь belgisi bilan so'zlarni o'rganing",
      bgColor: 'bg-rose-100 hover:bg-rose-200',
      iconBg: 'bg-rose-500',
      textColor: 'text-rose-800',
      borderColor: 'border-rose-200',
    },
    {
      id: 31,
      letter: "Э",
      title: "Э unli tovushi",
      description: "Э tovushi bilan rus so'zlar",
      words: ["Эскимо", "Экран", "Этаж", "Эхо"],
      images: ["🍦", "💻", "🏢", "🔊", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Э tovushi bilan so'zlarni toping",
      bgColor: 'bg-amber-100 hover:bg-amber-200',
      iconBg: 'bg-amber-500',
      textColor: 'text-amber-800',
      borderColor: 'border-amber-200',
    },
    {
      id: 32,
      letter: "Ю",
      title: "Ю qo'shma unli tovushi",
      description: "Ю tovushi bilan rus so'zlar",
      words: ["Юла", "Юрта", "Южный", "Юмор"],
      images: ["🌀", "🏘️", "🧭", "😄", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ю tovushi bilan so'zlarni o'rganing",
      bgColor: 'bg-lime-100 hover:bg-lime-200',
      iconBg: 'bg-lime-500',
      textColor: 'text-lime-800',
      borderColor: 'border-lime-200',
    },
    {
      id: 33,
      letter: "Я",
      title: "Я qo'shma unli tovushi",
      description: "Я tovushi bilan rus so'zlar",
      words: ["Яблоко", "Ящерица", "Язык", "Ягода"],
      images: ["🍎", "🦎", "👅", "🍓", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Я tovushi bilan so'zlarni toping",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-500',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
  ];

  const openLesson = (lesson) => {
    if (onLessonSelect) {
      onLessonSelect(lesson);
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 mr-6"
          >
            ⬅️ Orqaga
          </button>
          <div className="text-center flex-1">
            <h1 className="text-5xl font-bold text-purple-800 mb-4">🔤 Русские буквы</h1>
            <p className="text-xl text-purple-600">
              Rus alifbosi harflarini o'rganish - 33 darslik
            </p>
          </div>
        </div>

        {/* Darsliklar kartochkalari */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => openLesson(lesson)}
              className={`${lesson.bgColor} rounded-3xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[240px] flex flex-col justify-center border-4 ${lesson.borderColor} overflow-hidden`}
            >
              <div className="text-center w-full px-2">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${lesson.iconBg} text-white shadow-lg`}
                >
                  <span className="text-2xl font-bold">{lesson.letter}</span>
                </div>
                <div className="bg-white bg-opacity-80 rounded-full px-3 py-1 mb-3">
                  <span className={`text-sm font-bold ${lesson.textColor}`}>
                    {lesson.id}-dars
                  </span>
                </div>
                <h3 className={`text-base font-bold ${lesson.textColor} mb-2 break-words leading-tight`}>
                  {lesson.title}
                </h3>
                <p className={`text-xs ${lesson.textColor} opacity-80 break-words leading-tight`}>
                  {lesson.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RussianLetters;