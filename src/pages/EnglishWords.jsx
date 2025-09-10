import LessonDetail from './LessonDetail';

function EnglishWords({ onBack, onLessonSelect }) {

  const lessons = [
    {
      id: 1,
      title: "Animals",
      description: "Learn about different animals in English",
      words: ["Cat", "Dog", "Bird", "Fish", "Lion", "Elephant", "Tiger", "Bear"],
      images: ["🐱", "🐶", "🐦", "🐟", "🦁", "🐘", "🐅", "🐻", "🦊", "🐰"],
      activity: "Match the animals with their names",
      letterImage: "🐱",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
    },
    {
      id: 2,
      title: "Colors",
      description: "Learn colors and their names in English",
      words: ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black"],
      images: ["🔴", "🔵", "🟢", "🟡", "🟠", "🟣", "🩷", "⚫", "⚪", "🟤"],
      activity: "Name the colors you see",
      letterImage: "🔴",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-400',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
    },
    {
      id: 3,
      title: "Family",
      description: "Learn family members in English",
      words: ["Mother", "Father", "Sister", "Brother", "Baby", "Grandma", "Grandpa", "Uncle"],
      images: ["👩", "👨", "👧", "👦", "👶", "👵", "👴", "👨‍🦲", "👩‍🦳", "👨‍🦱"],
      activity: "Learn about family relationships",
      letterImage: "👩",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 4,
      title: "Food",
      description: "Learn food names in English",
      words: ["Apple", "Bread", "Milk", "Cake", "Pizza", "Banana", "Orange", "Egg"],
      images: ["🍎", "🍞", "🥛", "🍰", "🍕", "🍌", "🍊", "🥚", "🍇", "🥕"],
      activity: "Identify different types of food",
      letterImage: "🍎",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
    {
      id: 5,
      title: "Body Parts",
      description: "Learn body parts in English",
      words: ["Head", "Eye", "Nose", "Mouth", "Hand", "Foot", "Ear", "Hair"],
      images: ["👤", "👁️", "👃", "👄", "✋", "🦶", "👂", "🦱", "🫀", "🧠"],
      activity: "Point to different body parts",
      letterImage: "👤",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 6,
      title: "Numbers",
      description: "Learn numbers from 1 to 10 in English",
      words: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
      images: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
      activity: "Count from 1 to 10 in English",
      letterImage: "1️⃣",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-400',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
    {
      id: 7,
      title: "School Items",
      description: "Learn school and classroom items",
      words: ["Book", "Pen", "Pencil", "Paper", "Desk", "Chair", "Bag", "Teacher"],
      images: ["📚", "✒️", "✏️", "📄", "🪑", "💺", "🎒", "👩‍🏫", "📝", "📐"],
      activity: "Name things you find in school",
      letterImage: "📚",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-400',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
    },
    {
      id: 8,
      title: "Weather",
      description: "Learn weather conditions in English",
      words: ["Sunny", "Rainy", "Cloudy", "Windy", "Hot", "Cold", "Snow", "Storm"],
      images: ["☀️", "🌧️", "☁️", "💨", "🔥", "❄️", "⛄", "⛈️", "🌈", "🌙"],
      activity: "Describe today's weather",
      letterImage: "☀️",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
    },
    {
      id: 9,
      title: "Transportation",
      description: "Learn vehicles and transportation",
      words: ["Car", "Bus", "Train", "Plane", "Bike", "Boat", "Truck", "Taxi"],
      images: ["🚗", "🚌", "🚂", "✈️", "🚲", "⛵", "🚛", "🚕", "🚁", "🚀"],
      activity: "Name different ways to travel",
      letterImage: "🚗",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-400',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
    },
    {
      id: 10,
      title: "Toys",
      description: "Learn toy names in English",
      words: ["Ball", "Doll", "Car", "Bear", "Puzzle", "Block", "Game", "Robot"],
      images: ["⚽", "🪆", "🚗", "🧸", "🧩", "🧱", "🎮", "🤖", "🎯", "🪀"],
      activity: "Talk about your favorite toys",
      letterImage: "⚽",
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
    <div className="min-h-screen bg-green-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 mr-6"
          >
            ⬅️ Back
          </button>
          <div className="text-center flex-1">
            <h1 className="text-5xl font-bold text-green-800 mb-4">📝 English Words</h1>
            <p className="text-xl text-green-600">
              Learn English vocabulary with fun interactive lessons
            </p>
          </div>
        </div>

        {/* Word lessons kartochkalari */}
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
                    Lesson {lesson.id}
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

export default EnglishWords;