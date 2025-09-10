import LessonDetail from './LessonDetail';

function RussianWords({ onBack, onLessonSelect }) {

  const lessons = [
    {
      id: 1,
      title: "Животные",
      description: "Изучите названия разных животных на русском языке",
      words: ["Кот", "Собака", "Птица", "Рыба", "Лев", "Слон", "Тигр", "Медведь"],
      images: ["🐱", "🐶", "🐦", "🐟", "🦁", "🐘", "🐅", "🐻", "🦊", "🐰"],
      activity: "Сопоставьте животных с их названиями",
      letterImage: "🐱",
      letter: "А",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
    },
    {
      id: 2,
      title: "Цвета",
      description: "Изучите цвета и их названия на русском языке",
      words: ["Красный", "Синий", "Зелёный", "Жёлтый", "Оранжевый", "Фиолетовый", "Розовый", "Чёрный"],
      images: ["🔴", "🔵", "🟢", "🟡", "🟠", "🟣", "🩷", "⚫", "⚪", "🟤"],
      activity: "Назовите цвета, которые вы видите",
      letterImage: "🔴",
      letter: "Б",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-400',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
    },
    {
      id: 3,
      title: "Семья",
      description: "Изучите членов семьи на русском языке",
      words: ["Мама", "Папа", "Сестра", "Брат", "Ребёнок", "Бабушка", "Дедушка", "Дядя"],
      images: ["👩", "👨", "👧", "👦", "👶", "👵", "👴", "👨‍🦲", "👩‍🦳", "👨‍🦱"],
      activity: "Изучите семейные отношения",
      letterImage: "👩",
      letter: "В",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 4,
      title: "Еда",
      description: "Изучите названия еды на русском языке",
      words: ["Яблоко", "Хлеб", "Молоко", "Торт", "Пицца", "Банан", "Апельсин", "Яйцо"],
      images: ["🍎", "🍞", "🥛", "🍰", "🍕", "🍌", "🍊", "🥚", "🍇", "🥕"],
      activity: "Определите разные виды еды",
      letterImage: "🍎",
      letter: "Г",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
    {
      id: 5,
      title: "Части тела",
      description: "Изучите части тела на русском языке",
      words: ["Голова", "Глаз", "Нос", "Рот", "Рука", "Нога", "Ухо", "Волосы"],
      images: ["👤", "👁️", "👃", "👄", "✋", "🦶", "👂", "🦱", "🫀", "🧠"],
      activity: "Покажите разные части тела",
      letterImage: "👤",
      letter: "Д",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 6,
      title: "Числа",
      description: "Изучите числа от 1 до 10 на русском языке",
      words: ["Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять", "Десять"],
      images: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
      activity: "Считайте от 1 до 10 на русском языке",
      letterImage: "1️⃣",
      letter: "Е",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-400',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
    {
      id: 7,
      title: "Школьные предметы",
      description: "Изучите школьные и классные предметы",
      words: ["Книга", "Ручка", "Карандаш", "Бумага", "Парта", "Стул", "Сумка", "Учитель"],
      images: ["📚", "✒️", "✏️", "📄", "🪑", "💺", "🎒", "👩‍🏫", "📝", "📐"],
      activity: "Назовите вещи, которые вы находите в школе",
      letterImage: "📚",
      letter: "Ж",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-400',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
    },
    {
      id: 8,
      title: "Погода",
      description: "Изучите погодные условия на русском языке",
      words: ["Солнечно", "Дождливо", "Облачно", "Ветрено", "Жарко", "Холодно", "Снег", "Гроза"],
      images: ["☀️", "🌧️", "☁️", "💨", "🔥", "❄️", "⛄", "⛈️", "🌈", "🌙"],
      activity: "Опишите сегодняшнюю погоду",
      letterImage: "☀️",
      letter: "З",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
    },
    {
      id: 9,
      title: "Транспорт",
      description: "Изучите транспортные средства и передвижение",
      words: ["Машина", "Автобус", "Поезд", "Самолёт", "Велосипед", "Лодка", "Грузовик", "Такси"],
      images: ["🚗", "🚌", "🚂", "✈️", "🚲", "⛵", "🚛", "🚕", "🚁", "🚀"],
      activity: "Назовите разные способы путешествия",
      letterImage: "🚗",
      letter: "И",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-400',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
    },
    {
      id: 10,
      title: "Игрушки",
      description: "Изучите названия игрушек на русском языке",
      words: ["Мяч", "Кукла", "Машина", "Медведь", "Пазл", "Кубик", "Игра", "Робот"],
      images: ["⚽", "🪆", "🚗", "🧸", "🧩", "🧱", "🎮", "🤖", "🎯", "🪀"],
      activity: "Расскажите о ваших любимых игрушках",
      letterImage: "⚽",
      letter: "Й",
      bgColor: 'bg-rose-100 hover:bg-rose-200',
      iconBg: 'bg-rose-400',
      textColor: 'text-rose-800',
      borderColor: 'border-rose-200',
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
            ⬅️ Назад
          </button>
          <div className="text-center flex-1">
            <h1 className="text-5xl font-bold text-purple-800 mb-4">📝 Русские слова</h1>
            <p className="text-xl text-purple-600">
              Изучайте русскую лексику с весёлыми интерактивными уроками
            </p>
          </div>
        </div>

        {/* Word lessons карточки */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => openLesson(lesson)}
              className={`${lesson.bgColor} rounded-3xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[240px] flex flex-col justify-center border-4 ${lesson.borderColor}`}
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${lesson.iconBg} text-white shadow-lg relative`}
                >
                  <span className="text-2xl font-bold">{lesson.id}</span>
                  {lesson.letterImage && (
                    <div className="absolute -top-2 -right-2 text-3xl animate-bounce">
                      {lesson.letterImage}
                    </div>
                  )}
                </div>
                <div className="bg-white bg-opacity-80 rounded-full px-3 py-1 mb-3">
                  <span className={`text-sm font-bold ${lesson.textColor}`}>
                    Урок {lesson.id}
                  </span>
                </div>
                <h3 className={`text-lg font-bold ${lesson.textColor} mb-2`}>
                  {lesson.title}
                </h3>
                <p className={`text-sm ${lesson.textColor} opacity-80`}>
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

export default RussianWords;