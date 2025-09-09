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
      title: "B harfi va so'zlar",
      description: "B harfi bilan boshlangan ingliz so'zlari",
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
      title: "C harfi va qo'llanishi",
      description: "C harfi bilan ingliz so'z yasash",
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
      title: "D harfi va tovushlari",
      description: "D harfi bilan ingliz so'zlar tuzish",
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
      title: "E harfi va nutqi",
      description: "E harfi bilan yangi ingliz so'zlar",
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
      title: "F harfi va qo'shimchalar",
      description: "F harfi bilan ingliz gaplar tuzish",
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
      title: "G harfi va undoshi",
      description: "G harfi bilan ingliz so'zlarni o'qish",
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
      title: "H harfi va unli tovushi",
      description: "H harfi bilan yangi ingliz so'zlar",
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
      title: "I harfi va imlo qoidalari",
      description: "I harfi bilan ingliz gaplar",
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
      title: "J harfi va nutq rivojlantirish",
      description: "J harfi bilan ingliz hikoyalar",
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
      title: "K harfi va she'rlar",
      description: "K harfi bilan ingliz qofiyali so'zlar",
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
      title: "L harfi va oila so'zlari",
      description: "L harfi bilan ingliz oila a'zolari",
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
      title: "M harfi va tabiat so'zlari",
      description: "M harfi bilan ingliz tabiat haqida",
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
      title: "N harfi va unli tovush",
      description: "N harfi bilan ingliz so'z yasash",
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
      title: "O harfi va hayvonlar",
      description: "O harfi bilan ingliz hayvon nomlari",
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
      title: "P harfi va qishki so'zlar",
      description: "P harfi bilan ingliz so'zlar",
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
      title: "Q harfi va ranglar",
      description: "Q harfi bilan ingliz ranglarni o'rganish",
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
      title: "R harfi va sport so'zlari",
      description: "R harfi bilan ingliz sport turlari",
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
      title: "S harfi va transport",
      description: "S harfi bilan ingliz transport turlari",
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
      title: "T harfi va uy-joy so'zlari",
      description: "T harfi bilan ingliz uy buyumlari",
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
      title: "U harfi va vaqt so'zlari",
      description: "U harfi bilan ingliz vaqt haqida",
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
      title: "V harfi va xalq so'zlari",
      description: "V harfi bilan ingliz an'analari",
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
      title: "W harfi va yoz faslida",
      description: "W harfi bilan ingliz yozgi so'zlar",
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
      title: "X harfi va maxsus so'zlar",
      description: "X harfi bilan ingliz maxsus so'zlar",
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
      title: "Y harfi va rang so'zlari",
      description: "Y harfi bilan ingliz ranglar",
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
      title: "Z harfi va maxsus so'zlar",
      description: "Z harfi bilan ingliz so'zlar",
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
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${lesson.iconBg} text-white shadow-lg`}
                >
                  <span className="text-2xl font-bold">{lesson.letter}</span>
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