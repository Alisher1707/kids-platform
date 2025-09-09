import { useState } from 'react';

function OnaTili({ onBack, onLessonSelect }) {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      letter: "A",
      title: "A harfi bilan tanishish",
      description: "Alifboning birinchi harfi - A",
      words: ["Ata", "Ana", "Ariq", "Askar"],
      images: ["🍎", "👨", "🌊", "👮", "✈️", "🚗", "🏠", "📚", "⭐", "🎨"],
      activity: "A harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-400',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
      letterImage: "🍎", // A harfi uchun qiziq rasm - olma
    },
    {
      id: 2,
      letter: "B",
      title: "B harfi va so'zlar",
      description: "B harfi bilan boshlangan so'zlar",
      words: ["Bola", "Bog'", "Bosh", "Bino"],
      images: ["👶", "🌳", "👤", "🏢", "🐻", "🏀", "🍌", "📖", "🦋", "⚽"],
      activity: "B harfi bilan boshlanadigan buyumlarni sanang",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
      letterImage: "🏀",
    },
    {
      id: 3,
      letter: "D",
      title: "D harfi va qo'llanishi",
      description: "D harfi bilan so'z yasash",
      words: ["Dala", "Dars", "Do'st", "Daraxt"],
      images: ["🌾", "📚", "👫", "🌳", "🐕", "🚪", "🥛", "🌸", "🎯", "💎"],
      activity: "D harfi bilan tabiatga oid so'zlarni toping",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
      letterImage: "🌳",
    },
    {
      id: 4,
      letter: "E",
      title: "E harfi va tovushlari",
      description: "E harfi bilan so'zlar tuzish",
      words: ["Eshak", "Ertak", "Eng", "Erta"],
      images: ["🐴", "📖", "🏆", "🌅", "🦅", "🍎", "👁️", "🎭", "⚡", "🏠"],
      activity: "E harfi bilan hayvonlar va ertak qahramonlarini toping",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
      letterImage: "🐴",
    },
    {
      id: 5,
      letter: "F",
      title: "F harfi va nutqi",
      description: "F harfi bilan yangi so'zlar",
      words: ["Fasl", "Fikr", "Fursat", "Film"],
      images: ["🍂", "💭", "⏰", "🎬", "🌸", "🔥", "🐟", "🎪", "📷", "⚽"],
      activity: "F harfi bilan vaqt va fikrlash haqida so'zlarni o'rganing",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
      letterImage: "🍂",
    },
    {
      id: 6,
      letter: "G",
      title: "G harfi va qo'shimchalar",
      description: "G harfi bilan gaplar tuzish",
      words: ["Gap", "Gul", "Gala", "Gulxan"],
      images: ["🌹", "🗣️", "🎆", "👧", "🍇", "🎸", "🐐", "⚙️", "🎯", "🌍"],
      activity: "G harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-400',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
      letterImage: "🌹",
    },
    {
      id: 7,
      letter: "H",
      title: "H harfi va undoshi",
      description: "H harfi bilan so'zlarni o'qish",
      words: ["Havo", "Harf", "Hayot", "Haqida"],
      images: ["🌬️", "🔤", "❤️", "❓", "🏠", "🌈", "🤲", "📚", "🚀", "🎭"],
      activity: "H harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-400',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
      letterImage: "🌬️",
    },
    {
      id: 8,
      letter: "I",
      title: "I harfi va unli tovushi",
      description: "I harfi bilan yangi so'zlar",
      words: ["Ish", "Il", "Inson", "Ichki"],
      images: ["👷", "🐍", "👨", "💖", "🍿", "🎵", "📦", "🌎", "ℹ️", "🎆"],
      activity: "I harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-400',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
      letterImage: "👷",
    },
    {
      id: 9,
      letter: "J",
      title: "J harfi va imlo qoidalari",
      description: "J harfi bilan gaplar",
      words: ["Joy", "Juda", "Javob", "Jimjit"],
      images: ["🏠", "😊", "✅", "🤫", "🌿", "💪", "✨", "🧘", "🌈", "🎆"],
      activity: "J harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-400',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
      letterImage: "🏠",
    },
    {
      id: 10,
      letter: "K",
      title: "K harfi va nutq rivojlantirish",
      description: "K harfi bilan hikoyalar",
      words: ["Kuz", "Kitob", "Kecha", "Katta"],
      images: ["🍂", "📚", "🌙", "🐘", "🐈", "🗝️", "🏆", "🥝", "🎂", "🎨"],
      activity: "K harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
      letterImage: "📚",
    },
    {
      id: 11,
      letter: "L",
      title: "L harfi va she'rlar",
      description: "L harfi bilan qofiyali so'zlar",
      words: ["Lola", "Lagan", "Limon", "Latof"],
      images: ["🌷", "🍲", "🍋", "🤩", "🦁", "📚", "🔍", "🎆", "✨", "💕"],
      activity: "L harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-lime-100 hover:bg-lime-200',
      iconBg: 'bg-lime-400',
      textColor: 'text-lime-800',
      borderColor: 'border-lime-200',
      letterImage: "🌷",
    },
    {
      id: 12,
      letter: "M",
      title: "M harfi va oila so'zlari",
      description: "M harfi bilan oila a'zolari",
      words: ["Mama", "Maktab", "Meva", "Matn"],
      images: ["👩", "🏠", "🍎", "📝", "🐵", "🎵", "🌙", "💪", "👐", "🏆"],
      activity: "M harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-emerald-100 hover:bg-emerald-200',
      iconBg: 'bg-emerald-400',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200',
      letterImage: "👩",
    },
    {
      id: 13,
      letter: "N",
      title: "N harfi va tabiat so'zlari",
      description: "N harfi bilan tabiat haqida",
      words: ["Nur", "Noma", "Nafas", "Nazar"],
      images: ["☀️", "✉️", "😮‍💨", "👁️", "🎶", "🎆", "📚", "🌙", "🐟", "🎯"],
      activity: "N harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-violet-100 hover:bg-violet-200',
      iconBg: 'bg-violet-400',
      textColor: 'text-violet-800',
      borderColor: 'border-violet-200',
      letterImage: "☀️",
    },
    {
      id: 14,
      letter: "O",
      title: "O harfi va unli tovush",
      description: "O harfi bilan so'z yasash",
      words: ["Ona", "Osh", "Olma", "Odam"],
      images: ["👩", "🍲", "🍎", "👨", "🌊", "🌟", "🚘", "🎆", "📚", "☀️"],
      activity: "O harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-sky-100 hover:bg-sky-200',
      iconBg: 'bg-sky-400',
      textColor: 'text-sky-800',
      borderColor: 'border-sky-200',
      letterImage: "👩",
    },
    {
      id: 15,
      letter: "P",
      title: "P harfi va hayvonlar",
      description: "P harfi bilan hayvon nomlari",
      words: ["Palov", "Poyezd", "Paxtazor", "Pilla"],
      images: ["🍛", "🚂", "🌾", "🐛", "🐧", "🍕", "📷", "🎆", "💪", "🎭"],
      activity: "P harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-rose-100 hover:bg-rose-200',
      iconBg: 'bg-rose-400',
      textColor: 'text-rose-800',
      borderColor: 'border-rose-200',
      letterImage: "🍛",
    },
    {
      id: 16,
      letter: "Q",
      title: "Q harfi va qishki so'zlar",
      description: "Q harfi bilan qish faslida",
      words: ["Qor", "Qush", "Qalam", "Qisqa"],
      images: ["❄️", "🐦", "✏️", "📌", "🌹", "📚", "🚗", "🏆", "🎆", "✨"],
      activity: "Q harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-amber-100 hover:bg-amber-200',
      iconBg: 'bg-amber-400',
      textColor: 'text-amber-800',
      borderColor: 'border-amber-200',
      letterImage: "❄️",
    },
    {
      id: 17,
      letter: "R",
      title: "R harfi va ranglar",
      description: "R harfi bilan ranglarni o'rganish",
      words: ["Rang", "Rasm", "Ro'za", "Raqs"],
      images: ["🌈", "🎨", "🌹", "💃", "🔴", "🚀", "🏆", "📚", "✨", "🎵"],
      activity: "R harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-500',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
      letterImage: "🌈",
    },
    {
      id: 18,
      letter: "S",
      title: "S harfi va sport so'zlari",
      description: "S harfi bilan sport turlari",
      words: ["Salom", "Suv", "Sport", "Savol"],
      images: ["👋", "💧", "⚽", "❓", "☀️", "🏊", "🎆", "🎨", "📚", "✨"],
      activity: "S harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
      letterImage: "👋",
    },
    {
      id: 19,
      letter: "T",
      title: "T harfi va transport",
      description: "T harfi bilan transport turlari",
      words: ["Tosh", "Tog'", "Tez", "Taxta"],
      images: ["🪨", "⛰️", "⚡", "🪵", "🚗", "🚂", "🐅", "🎯", "🎆", "✨"],
      activity: "T harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-500',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
      letterImage: "🚗",
    },
    {
      id: 20,
      letter: "U",
      title: "U harfi va uy-joy so'zlari",
      description: "U harfi bilan uy buyumlari",
      words: ["Uy", "Usta", "Urush", "Ulug'"],
      images: ["🏠", "👷", "⚔️", "🏆", "🦄", "🎆", "📚", "✨", "🎭", "🎨"],
      activity: "U harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-500',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
      letterImage: "🏠",
    },
    {
      id: 21,
      letter: "V",
      title: "V harfi va vaqt so'zlari",
      description: "V harfi bilan vaqt haqida",
      words: ["Vaqt", "Vazifa", "Vatan", "Vodiy"],
      images: ["⏰", "📝", "🏁", "🌄", "🎨", "🎆", "📚", "✨", "🎭", "🏆"],
      activity: "V harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-500',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
      letterImage: "⏰",
    },
    {
      id: 22,
      letter: "X",
      title: "X harfi va xalq so'zlari",
      description: "X harfi bilan xalq an'analari",
      words: ["Xat", "Xayr", "Xotin", "Xurmo"],
      images: ["✉️", "👋", "👩", "🌴", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "X harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-500',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200',
      letterImage: "✉️",
    },
    {
      id: 23,
      letter: "Y",
      title: "Y harfi va yoz faslida",
      description: "Y harfi bilan yozgi so'zlar",
      words: ["Yoz", "Yer", "Yaqin", "Yurak"],
      images: ["☀️", "🌍", "🤝", "❤️", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Y harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-500',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
      letterImage: "☀️",
    },
    {
      id: 24,
      letter: "Z",
      title: "Z harfi va ziyoratgohlar",
      description: "Z harfi bilan maxsus so'zlar",
      words: ["Zor", "Zavod", "Zamon", "Zarur"],
      images: ["💪", "🏢", "⏰", "❕", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Z harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-500',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200',
      letterImage: "💪",
    },
    {
      id: 25,
      letter: "Gʻ",
      title: "Gʻ harfi va maxsus tovushi",
      description: "Gʻ harfi bilan so'zlar",
      words: ["G'oya", "G'alaba", "G'ariq", "G'isht"],
      images: ["💡", "🏆", "🌊", "🧱", "🎆", "🎨", "📚", "✨", "🎭", "🎯"],
      activity: "Gʻ harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-500',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
      letterImage: "💡",
    },
    {
      id: 26,
      letter: "Oʻ",
      title: "Oʻ harfi va qo'shimcha unli",
      description: "Oʻ harfi bilan yangi so'zlar",
      words: ["O'qish", "O'yin", "O'zbek", "O'tir"],
      images: ["📚", "🎲", "🇺🇿", "🧘", "🎆", "🎨", "📝", "✨", "🎭", "🏆"],
      activity: "Oʻ harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-500',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
      letterImage: "📚",
    },
    {
      id: 27,
      letter: "Sh",
      title: "Sh harfi va birikma tovush",
      description: "Sh harfi bilan qo'shma tovushlar",
      words: ["Sher", "Shahar", "Shosh", "Shaxs"],
      images: ["🦁", "🏢", "⏰", "👨", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Sh harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-lime-100 hover:bg-lime-200',
      iconBg: 'bg-lime-500',
      textColor: 'text-lime-800',
      borderColor: 'border-lime-200',
      letterImage: "🦁",
    },
    {
      id: 28,
      letter: "Ch",
      title: "Ch harfi va birikma undosh",
      description: "Ch harfi bilan so'z tuzish",
      words: ["Choy", "Chap", "Chiroq", "Chiziq"],
      images: ["☕", "🤚", "💫", "📎", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ch harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-emerald-100 hover:bg-emerald-200',
      iconBg: 'bg-emerald-500',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200',
      letterImage: "☕",
    },
    {
      id: 29,
      letter: "Ng",
      title: "Ng harfi va burun tovushi",
      description: "Ng harfi bilan maxsus so'zlar",
      words: ["Rang", "Bong", "Tong", "Ning"],
      images: ["🌈", "🔔", "🌅", "💑", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Ng harfi bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-violet-100 hover:bg-violet-200',
      iconBg: 'bg-violet-500',
      textColor: 'text-violet-800',
      borderColor: 'border-violet-200',
      letterImage: "🔔",
    },
    {
      id: 30,
      letter: "'",
      title: "Tutuq belgisi va qo'llanishi",
      description: "Apostrof bilan so'z yasash",
      words: ["Ma'no", "Sa'y", "Ba'zi", "Ta'lim"],
      images: ["💡", "💪", "🔢", "🎓", "🎆", "🎨", "📚", "✨", "🎭", "🏆"],
      activity: "Apostrof bilan boshlanadigan narsalarni toping",
      bgColor: 'bg-sky-100 hover:bg-sky-200',
      iconBg: 'bg-sky-500',
      textColor: 'text-sky-800',
      borderColor: 'border-sky-200',
      letterImage: "🎓",
    },
    {
      id: 31,
      letter: "Takrorlash",
      title: "Barcha harflarni takrorlash",
      description: "Alifboni to'liq o'rganish",
      words: ["Alifbo", "Harflar", "So'zlar", "Nutq"],
      images: ["🔤", "🎆", "🗣️", "🎓", "🎨", "📚", "✨", "🎭", "🏆", "🌈"],
      activity: "Barcha harflarni takrorlang",
      bgColor: 'bg-rose-100 hover:bg-rose-200',
      iconBg: 'bg-rose-500',
      textColor: 'text-rose-800',
      borderColor: 'border-rose-200',
      letterImage: "🌈",
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
            ⬅️ Orqaga
          </button>
          <div className="text-center flex-1">
            <h1 className="text-5xl font-bold text-green-800 mb-4">📝 Ona tili</h1>
            <p className="text-xl text-green-600">
              O'zbek alifbosi va so'z boyligini o'rganish - 31 darslik
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


export default OnaTili;