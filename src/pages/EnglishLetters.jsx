import { useState } from 'react';
import LessonDetail from './LessonDetail';

function EnglishLetters({ onBack, onLessonSelect }) {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      letter: "A",
      title: "A harfi bilan tanishish",
      description: "Ingliz alifbosining birinchi harfi - A",
      words: ["Apple", "Ant", "Arrow", "Angel"],
      images: ["🍎", "🐜", "🏹", "😇", "✈️", "🚗", "🏠", "📚", "⭐", "🎨"],
      activity: "A harfi bilan boshlanadigan ingliz so'zlarini toping",
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-400',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
    },
    {
      id: 2,
      letter: "B",
      title: "B harfi bilan tanishish",
      description: "Ingliz alifbosining ikkinchi harfi - B",
      words: ["Ball", "Book", "Bird", "Bus"],
      images: ["⚽", "📚", "🐦", "🚌", "🐻", "🍌", "🦋", "🎈", "🔔", "🚲"],
      activity: "B harfi bilan boshlanadigan buyumlarni sanang",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 3,
      letter: "C",
      title: "C harfi bilan tanishish",
      description: "Ingliz alifbosining uchinchi harfi - C",
      words: ["Cat", "Car", "Cup", "Cake"],
      images: ["🐱", "🚗", "☕", "🧁", "🐄", "🥕", "🍪", "🌸", "🎯", "💎"],
      activity: "C harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
    {
      id: 4,
      letter: "D",
      title: "D harfi bilan tanishish",
      description: "Ingliz alifbosining to'rtinchi harfi - D",
      words: ["Dog", "Duck", "Door", "Doll"],
      images: ["🐕", "🦆", "🚪", "🪆", "🦌", "🍎", "👁️", "🎭", "⚡", "🏠"],
      activity: "D harfi bilan hayvonlar va buyumlarni toping",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
    },
    {
      id: 5,
      letter: "E",
      title: "E harfi bilan tanishish",
      description: "Ingliz alifbosining beshinchi harfi - E",
      words: ["Elephant", "Egg", "Eye", "Ear"],
      images: ["🐘", "🥚", "👁️", "👂", "🦅", "🍎", "⚡", "🎭", "🌍", "🏠"],
      activity: "E harfi bilan tananing qismlari va hayvonlarni o'rganing",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 6,
      letter: "F",
      title: "F harfi bilan tanishish",
      description: "Ingliz alifbosining oltinchi harfi - F",
      words: ["Fish", "Fire", "Flag", "Flower"],
      images: ["🐟", "🔥", "🏁", "🌸", "🍓", "🎪", "📷", "⚽", "🦋", "🌈"],
      activity: "F harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-400',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
    },
    {
      id: 7,
      letter: "G",
      title: "G harfi bilan tanishish",
      description: "Ingliz alifbosining yettinchi harfi - G",
      words: ["Goat", "Green", "Gift", "Girl"],
      images: ["🐐", "💚", "🎁", "👧", "🍇", "🎸", "🌍", "⚙️", "🎯", "🦒"],
      activity: "G harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-400',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
    {
      id: 8,
      letter: "H",
      title: "H harfi bilan tanishish",
      description: "Ingliz alifbosining sakkizinchi harfi - H",
      words: ["House", "Hat", "Horse", "Hand"],
      images: ["🏠", "🎩", "🐴", "🤚", "🍯", "🎵", "📦", "🌎", "ℹ️", "🎆"],
      activity: "H harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-400',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
    },
    {
      id: 9,
      letter: "I",
      title: "I harfi bilan tanishish",
      description: "Ingliz alifbosining to'qqizinchi harfi - I",
      words: ["Ice", "Ink", "Iron", "Insect"],
      images: ["🧊", "🖊️", "👔", "🐛", "🍦", "💪", "✨", "🧘", "🌈", "🎆"],
      activity: "I harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-400',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
    },
    {
      id: 10,
      letter: "J",
      title: "J harfi bilan tanishish",
      description: "Ingliz alifbosining o'ninchi harfi - J",
      words: ["Jump", "Juice", "Jacket", "Jar"],
      images: ["🦘", "🧃", "🧥", "🏺", "💎", "🗝️", "🏆", "🥝", "🎂", "🎨"],
      activity: "J harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
    },
    {
      id: 11,
      letter: "K",
      title: "K harfi bilan tanishish",
      description: "Ingliz alifbosining o'n birinchi harfi - K",
      words: ["Key", "King", "Kite", "Kitchen"],
      images: ["🗝️", "👑", "🪁", "🍳", "🥝", "📚", "🔍", "🎆", "✨", "💕"],
      activity: "K harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-lime-100 hover:bg-lime-200',
      iconBg: 'bg-lime-400',
      textColor: 'text-lime-800',
      borderColor: 'border-lime-200',
    },
    {
      id: 12,
      letter: "L",
      title: "L harfi bilan tanishish",
      description: "Ingliz alifbosining o'n ikkinchi harfi - L",
      words: ["Love", "Light", "Lion", "Leaf"],
      images: ["❤️", "💡", "🦁", "🍃", "🐞", "🎵", "🌙", "💪", "👐", "🏆"],
      activity: "L harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-emerald-100 hover:bg-emerald-200',
      iconBg: 'bg-emerald-400',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200',
    },
    {
      id: 13,
      letter: "M",
      title: "M harfi bilan tanishish",
      description: "Ingliz alifbosining o'n uchinchi harfi - M",
      words: ["Moon", "Mouse", "Mother", "Music"],
      images: ["🌙", "🐭", "👩", "🎵", "🐵", "💪", "🍄", "🔍", "🎯", "💎"],
      activity: "M harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-violet-100 hover:bg-violet-200',
      iconBg: 'bg-violet-400',
      textColor: 'text-violet-800',
      borderColor: 'border-violet-200',
    },
    {
      id: 14,
      letter: "N",
      title: "N harfi bilan tanishish",
      description: "Ingliz alifbosining o'n to'rtinchi harfi - N",
      words: ["Nose", "Night", "Nest", "Number"],
      images: ["👃", "🌙", "🪺", "🔢", "🌊", "🌟", "🎵", "🎆", "📚", "☀️"],
      activity: "N harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-sky-100 hover:bg-sky-200',
      iconBg: 'bg-sky-400',
      textColor: 'text-sky-800',
      borderColor: 'border-sky-200',
    },
    {
      id: 15,
      letter: "O",
      title: "O harfi bilan tanishish",
      description: "Ingliz alifbosining o'n beshinchi harfi - O",
      words: ["Orange", "Owl", "Ocean", "Octopus"],
      images: ["🍊", "🦉", "🌊", "🐙", "🐂", "🍕", "📷", "🎆", "💪", "🎭"],
      activity: "O harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-rose-100 hover:bg-rose-200',
      iconBg: 'bg-rose-400',
      textColor: 'text-rose-800',
      borderColor: 'border-rose-200',
    },
    {
      id: 16,
      letter: "P",
      title: "P harfi bilan tanishish",
      description: "Ingliz alifbosining o'n oltinchi harfi - P",
      words: ["Pen", "Pizza", "Plane", "Purple"],
      images: ["✏️", "🍕", "✈️", "💜", "🌹", "📚", "🚗", "🏆", "🎆", "✨"],
      activity: "P harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-amber-100 hover:bg-amber-200',
      iconBg: 'bg-amber-400',
      textColor: 'text-amber-800',
      borderColor: 'border-amber-200',
    },
    {
      id: 17,
      letter: "Q",
      title: "Q harfi bilan tanishish",
      description: "Ingliz alifbosining o'n yettinchi harfi - Q",
      words: ["Queen", "Question", "Quick", "Quiet"],
      images: ["👸", "❓", "⚡", "🤫", "🔴", "🚀", "🏆", "📚", "✨", "🎵"],
      activity: "Q harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-500',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
    },
    {
      id: 18,
      letter: "R",
      title: "R harfi bilan tanishish",
      description: "Ingliz alifbosining o'n sakkizinchi harfi - R",
      words: ["Red", "Run", "Robot", "Rain"],
      images: ["🔴", "🏃", "🤖", "🌧️", "☀️", "🏊", "🎆", "🎨", "📚", "✨"],
      activity: "R harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 19,
      letter: "S",
      title: "S harfi bilan tanishish",
      description: "Ingliz alifbosining o'n to'qqizinchi harfi - S",
      words: ["Sun", "Star", "Snake", "School"],
      images: ["☀️", "⭐", "🐍", "🏫", "🚗", "🚂", "🐅", "🎯", "🎆", "✨"],
      activity: "S harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-500',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
    {
      id: 20,
      letter: "T",
      title: "T harfi bilan tanishish",
      description: "Ingliz alifbosining yigirmanchi harfi - T",
      words: ["Tree", "Tiger", "Table", "Toy"],
      images: ["🌳", "🐅", "🪑", "🧸", "🦄", "🎆", "📚", "✨", "🎭", "🎨"],
      activity: "T harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-500',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
    },
    {
      id: 21,
      letter: "U",
      title: "U harfi bilan tanishish",
      description: "Ingliz alifbosining yigirma birinchi harfi - U",
      words: ["Under", "Up", "Umbrella", "Uncle"],
      images: ["⬇️", "⬆️", "☂️", "👨", "🎨", "🎆", "📚", "✨", "🎭", "🏆"],
      activity: "U harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-500',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 22,
      letter: "V",
      title: "V harfi bilan tanishish",
      description: "Ingliz alifbosining yigirma ikkinchi harfi - V",
      words: ["Voice", "Village", "Van", "Violin"],
      images: ["🗣️", "🏘️", "🚐", "🎻", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "V harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-500',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
    },
    {
      id: 23,
      letter: "W",
      title: "W harfi bilan tanishish",
      description: "Ingliz alifbosining yigirma uchinchi harfi - W",
      words: ["Water", "Wind", "Window", "Watch"],
      images: ["💧", "💨", "🪟", "⌚", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "W harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-500',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
    {
      id: 24,
      letter: "X",
      title: "X harfi bilan tanishish",
      description: "Ingliz alifbosining yigirma to'rtinchi harfi - X",
      words: ["X-ray", "Xylophone", "Box", "Fox"],
      images: ["🩻", "🎵", "📦", "🦊", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "X harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-500',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
    },
    {
      id: 25,
      letter: "Y",
      title: "Y harfi bilan tanishish",
      description: "Ingliz alifbosining yigirma beshinchi harfi - Y",
      words: ["Yellow", "Yes", "Young", "Year"],
      images: ["💛", "✅", "👶", "📅", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Y harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-500',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
    },
    {
      id: 26,
      letter: "Z",
      title: "Z harfi bilan tanishish",
      description: "Ingliz alifbosining yigirma oltinchi harfi - Z",
      words: ["Zebra", "Zero", "Zoo", "Zone"],
      images: ["🦓", "0️⃣", "🦁", "🏠", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Z harfi bilan boshlanadigan narsalarni toping",
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
            ⬅️ Orqaga
          </button>
          <div className="text-center flex-1">
            <h1 className="text-5xl font-bold text-red-800 mb-4">🔤 English Letters</h1>
            <p className="text-xl text-red-600">
              Ingliz alifbosi harflarini o'rganish - 26 darslik
            </p>
          </div>
        </div>

        {/* Darsliklar kartochkalari */}
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
                    {lesson.id}-dars
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