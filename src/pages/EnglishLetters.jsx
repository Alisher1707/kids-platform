import LessonDetail from './LessonDetail';

function EnglishLetters({ onBack, onLessonSelect }) {

  const lessons = [
    {
      id: 1,
      letter: "A",
      title: "Learning letter A",
      description: "First letter of English alphabet - A",
      words: ["Apple", "Ant", "Arrow", "Angel"],
      images: ["🍎", "🐜", "🏹", "😇", "✈️", "🚗", "🏠", "📚", "⭐", "🎨"],
      activity: "Find English words that start with A",
      letterImage: "🍎",
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-400',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
    },
    {
      id: 2,
      letter: "B",
      title: "Learning letter B",
      description: "Second letter of English alphabet - B",
      words: ["Ball", "Book", "Bird", "Bus"],
      images: ["⚽", "📚", "🐦", "🚌", "🐻", "🍌", "🦋", "🎈", "🔔", "🚲"],
      activity: "Count objects that start with B",
      letterImage: "⚽",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 3,
      letter: "C",
      title: "Learning letter C",
      description: "Third letter of English alphabet - C",
      words: ["Cat", "Car", "Cup", "Cake"],
      images: ["🐱", "🚗", "☕", "🧁", "🐄", "🥕", "🍪", "🌸", "🎯", "💎"],
      activity: "Find things that start with C",
      letterImage: "🐱",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
    {
      id: 4,
      letter: "D",
      title: "Learning letter D",
      description: "Fourth letter of English alphabet - D",
      words: ["Dog", "Duck", "Door", "Doll"],
      images: ["🐕", "🦆", "🚪", "🪆", "🦌", "🍎", "👁️", "🎭", "⚡", "🏠"],
      activity: "Find animals and objects that start with D",
      letterImage: "🐕",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
    },
    {
      id: 5,
      letter: "E",
      title: "Learning letter E",
      description: "Fifth letter of English alphabet - E",
      words: ["Elephant", "Egg", "Eye", "Ear"],
      images: ["🐘", "🥚", "👁️", "👂", "🦅", "🍎", "⚡", "🎭", "🌍", "🏠"],
      activity: "Learn body parts and animals that start with E",
      letterImage: "🐘",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 6,
      letter: "F",
      title: "Learning letter F",
      description: "Sixth letter of English alphabet - F",
      words: ["Fish", "Fire", "Flag", "Flower"],
      images: ["🐟", "🔥", "🏁", "🌸", "🍓", "🎪", "📷", "⚽", "🦋", "🌈"],
      activity: "Find things that start with F",
      letterImage: "🐟",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-400',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
    },
    {
      id: 7,
      letter: "G",
      title: "Learning letter G",
      description: "Seventh letter of English alphabet - G",
      words: ["Goat", "Green", "Gift", "Girl"],
      images: ["🐐", "💚", "🎁", "👧", "🍇", "🎸", "🌍", "⚙️", "🎯", "🦒"],
      activity: "Find things that start with G",
      letterImage: "🐐",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-400',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
    {
      id: 8,
      letter: "H",
      title: "Learning letter H",
      description: "Eighth letter of English alphabet - H",
      words: ["House", "Hat", "Horse", "Hand"],
      images: ["🏠", "🎩", "🐴", "🤚", "🍯", "🎵", "📦", "🌎", "ℹ️", "🎆"],
      activity: "Find things that start with H",
      letterImage: "🏠",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-400',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
    },
    {
      id: 9,
      letter: "I",
      title: "Learning letter I",
      description: "Ninth letter of English alphabet - I",
      words: ["Ice", "Ink", "Iron", "Insect"],
      images: ["🧊", "🖊️", "👔", "🐛", "🍦", "💪", "✨", "🧘", "🌈", "🎆"],
      activity: "Find things that start with I",
      letterImage: "🧊",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-400',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
    },
    {
      id: 10,
      letter: "J",
      title: "Learning letter J",
      description: "Tenth letter of English alphabet - J",
      words: ["Jump", "Juice", "Jacket", "Jar"],
      images: ["🦘", "🧃", "🧥", "🏺", "💎", "🗝️", "🏆", "🥝", "🎂", "🎨"],
      activity: "Find things that start with J",
      letterImage: "🦘",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
    },
    {
      id: 11,
      letter: "K",
      title: "Learning letter K",
      description: "Eleventh letter of English alphabet - K",
      words: ["Key", "King", "Kite", "Kitchen"],
      images: ["🗝️", "👑", "🪁", "🍳", "🥝", "📚", "🔍", "🎆", "✨", "💕"],
      activity: "Find things that start with K",
      letterImage: "🗝️",
      bgColor: 'bg-lime-100 hover:bg-lime-200',
      iconBg: 'bg-lime-400',
      textColor: 'text-lime-800',
      borderColor: 'border-lime-200',
    },
    {
      id: 12,
      letter: "L",
      title: "Learning letter L",
      description: "Twelfth letter of English alphabet - L",
      words: ["Love", "Light", "Lion", "Leaf"],
      images: ["❤️", "💡", "🦁", "🍃", "🐞", "🎵", "🌙", "💪", "👐", "🏆"],
      activity: "Find things that start with L",
      letterImage: "❤️",
      bgColor: 'bg-emerald-100 hover:bg-emerald-200',
      iconBg: 'bg-emerald-400',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200',
    },
    {
      id: 13,
      letter: "M",
      title: "Learning letter M",
      description: "Thirteenth letter of English alphabet - M",
      words: ["Moon", "Mouse", "Mother", "Music"],
      images: ["🌙", "🐭", "👩", "🎵", "🐵", "💪", "🍄", "🔍", "🎯", "💎"],
      activity: "Find things that start with M",
      letterImage: "🌙",
      bgColor: 'bg-violet-100 hover:bg-violet-200',
      iconBg: 'bg-violet-400',
      textColor: 'text-violet-800',
      borderColor: 'border-violet-200',
    },
    {
      id: 14,
      letter: "N",
      title: "Learning letter N",
      description: "Fourteenth letter of English alphabet - N",
      words: ["Nose", "Night", "Nest", "Number"],
      images: ["👃", "🌙", "🪺", "🔢", "🌊", "🌟", "🎵", "🎆", "📚", "☀️"],
      activity: "Find things that start with N",
      letterImage: "👃",
      bgColor: 'bg-sky-100 hover:bg-sky-200',
      iconBg: 'bg-sky-400',
      textColor: 'text-sky-800',
      borderColor: 'border-sky-200',
    },
    {
      id: 15,
      letter: "O",
      title: "Learning letter O",
      description: "Fifteenth letter of English alphabet - O",
      words: ["Orange", "Owl", "Ocean", "Octopus"],
      images: ["🍊", "🦉", "🌊", "🐙", "🐂", "🍕", "📷", "🎆", "💪", "🎭"],
      activity: "Find things that start with O",
      letterImage: "🍊",
      bgColor: 'bg-rose-100 hover:bg-rose-200',
      iconBg: 'bg-rose-400',
      textColor: 'text-rose-800',
      borderColor: 'border-rose-200',
    },
    {
      id: 16,
      letter: "P",
      title: "Learning letter P",
      description: "Sixteenth letter of English alphabet - P",
      words: ["Pen", "Pizza", "Plane", "Purple"],
      images: ["✏️", "🍕", "✈️", "💜", "🌹", "📚", "🚗", "🏆", "🎆", "✨"],
      activity: "Find things that start with P",
      letterImage: "✏️",
      bgColor: 'bg-amber-100 hover:bg-amber-200',
      iconBg: 'bg-amber-400',
      textColor: 'text-amber-800',
      borderColor: 'border-amber-200',
    },
    {
      id: 17,
      letter: "Q",
      title: "Learning letter Q",
      description: "Seventeenth letter of English alphabet - Q",
      words: ["Queen", "Question", "Quick", "Quiet"],
      images: ["👸", "❓", "⚡", "🤫", "🔴", "🚀", "🏆", "📚", "✨", "🎵"],
      activity: "Find things that start with Q",
      letterImage: "👸",
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-500',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
    },
    {
      id: 18,
      letter: "R",
      title: "Learning letter R",
      description: "Eighteenth letter of English alphabet - R",
      words: ["Red", "Run", "Robot", "Rain"],
      images: ["🔴", "🏃", "🤖", "🌧️", "☀️", "🏊", "🎆", "🎨", "📚", "✨"],
      activity: "Find things that start with R",
      letterImage: "🔴",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 19,
      letter: "S",
      title: "Learning letter S",
      description: "Nineteenth letter of English alphabet - S",
      words: ["Sun", "Star", "Snake", "School"],
      images: ["☀️", "⭐", "🐍", "🏫", "🚗", "🚂", "🐅", "🎯", "🎆", "✨"],
      activity: "Find things that start with S",
      letterImage: "☀️",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-500',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
    {
      id: 20,
      letter: "T",
      title: "Learning letter T",
      description: "Twentieth letter of English alphabet - T",
      words: ["Tree", "Tiger", "Table", "Toy"],
      images: ["🌳", "🐅", "🪑", "🧸", "🦄", "🎆", "📚", "✨", "🎭", "🎨"],
      activity: "Find things that start with T",
      letterImage: "🌳",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-500',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
    },
    {
      id: 21,
      letter: "U",
      title: "Learning letter U",
      description: "Twenty-first letter of English alphabet - U",
      words: ["Under", "Up", "Umbrella", "Uncle"],
      images: ["⬇️", "⬆️", "☂️", "👨", "🎨", "🎆", "📚", "✨", "🎭", "🏆"],
      activity: "Find things that start with U",
      letterImage: "☂️",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-500',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 22,
      letter: "V",
      title: "Learning letter V",
      description: "Twenty-second letter of English alphabet - V",
      words: ["Voice", "Village", "Van", "Violin"],
      images: ["🗣️", "🏘️", "🚐", "🎻", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Find things that start with V",
      letterImage: "🗣️",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-500',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
    },
    {
      id: 23,
      letter: "W",
      title: "Learning letter W",
      description: "Twenty-third letter of English alphabet - W",
      words: ["Water", "Wind", "Window", "Watch"],
      images: ["💧", "💨", "🪟", "⌚", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Find things that start with W",
      letterImage: "💧",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-500',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
    {
      id: 24,
      letter: "X",
      title: "Learning letter X",
      description: "Twenty-fourth letter of English alphabet - X",
      words: ["X-ray", "Xylophone", "Box", "Fox"],
      images: ["🩻", "🎵", "📦", "🦊", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Find things that start with X",
      letterImage: "🩻",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-500',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
    },
    {
      id: 25,
      letter: "Y",
      title: "Learning letter Y",
      description: "Twenty-fifth letter of English alphabet - Y",
      words: ["Yellow", "Yes", "Young", "Year"],
      images: ["💛", "✅", "👶", "📅", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Find things that start with Y",
      letterImage: "💛",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-500',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
    },
    {
      id: 26,
      letter: "Z",
      title: "Learning letter Z",
      description: "Twenty-sixth letter of English alphabet - Z",
      words: ["Zebra", "Zero", "Zoo", "Zone"],
      images: ["🦓", "0️⃣", "🦁", "🏠", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Find things that start with Z",
      letterImage: "🦓",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-500',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
    },
  ];

  const openLesson = (lesson) => {
    if (onLessonSelect) {
      onLessonSelect(lesson);
    }
  };

  return (
    <div className="min-h-screen bg-red-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 mr-6"
          >
            ⬅️ Back
          </button>
          <div className="text-center flex-1">
            <h1 className="text-5xl font-bold text-red-800 mb-4">🔤 English Letters</h1>
            <p className="text-xl text-red-600">
              Learn English alphabet letters - 26 lessons
            </p>
          </div>
        </div>

        {/* English Letter Cards */}
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
                  <span className="text-2xl font-bold">{lesson.letter}</span>
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

export default EnglishLetters;