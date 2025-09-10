import { useState } from 'react';

function LessonDetail({ lesson, onBack }) {
  // Determine if this is a Russian lesson
  const isRussianLesson = lesson.letter ? /[А-Яа-яЁё]/.test(lesson.letter) : 
    (lesson.title && (lesson.title.includes('Изучаем букву') || lesson.title.includes('русского алфавита')));

  const playLetterSound = (letter) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(letter);
      utterance.lang = isRussianLesson ? 'ru-RU' : 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      speechSynthesis.speak(utterance);
    }
  };

  const getLetterImage = (letter) => {
    const letterImageMap = {
      'A': '🍎', 'B': '⚽', 'C': '🐱', 'D': '🐕', 'E': '🐘', 'F': '🐟', 'G': '🐐', 'H': '🏠', 
      'I': '🧊', 'J': '🦘', 'K': '🗝️', 'L': '❤️', 'M': '🌙', 'N': '👃', 'O': '🍊', 'P': '✏️', 
      'Q': '👸', 'R': '🔴', 'S': '☀️', 'T': '🌳', 'U': '☂️', 'V': '🗣️', 'W': '💧', 'X': '🩻', 
      'Y': '💛', 'Z': '🦓',
      'А': '🍉', 'Б': '🍌', 'В': '🐺', 'Г': '🦢', 'Д': '🏠', 'Е': '🦝', 'Ё': '🦔', 'Ж': '🪲', 
      'З': '🐰', 'И': '🎮', 'Й': '🥛', 'К': '🐱', 'Л': '🦁', 'М': '🐻', 'Н': '🦏', 'О': '🦌', 
      'П': '🐓', 'Р': '🐟', 'С': '☀️', 'Т': '🐅', 'У': '🦆', 'Ф': '🦩', 'Х': '🐹', 'Ц': '🌸', 
      'Ч': '🐢', 'Ш': '🎈', 'Щ': '🐶', 'Ъ': '🏢', 'Ы': '🧼', 'Ь': '🐻', 'Э': '🍦', 'Ю': '🌀', 'Я': '🍎'
    };
    return letterImageMap[letter] || '';
  };
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const nextWord = () => {
    if (currentWordIndex < lesson.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const prevWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    }
  };

  const currentWord = lesson.words[currentWordIndex];

  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 mr-6"
          >
            {isRussianLesson ? '⬅️ Назад' : 
             (lesson.title && lesson.title.includes('harfi')) ? '⬅️ Orqaga' :
             '⬅️ Back'}
          </button>
          <div className="flex items-center space-x-6 flex-1">
            <div className={`w-16 h-16 ${lesson.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
              <span className="text-3xl font-bold text-white">{lesson.letter}</span>
            </div>
            <div>
              <h1 className={`text-4xl font-bold ${lesson.textColor}`}>{lesson.title}</h1>
              <p className={`text-lg ${lesson.textColor} opacity-80`}>{lesson.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Letter and current word */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-green-200">
              <div className="text-center">
                <div className={`w-40 h-40 mx-auto mb-6 rounded-3xl flex items-center justify-center ${lesson.iconBg} text-white shadow-2xl relative`}>
                  <span className="text-8xl font-bold">{lesson.letter}</span>
                  {(lesson.letterImage || getLetterImage(lesson.letter)) && (
                    <div className="absolute -top-4 -right-4 text-6xl animate-bounce">
                      {lesson.letterImage || getLetterImage(lesson.letter)}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <h2 className={`text-3xl font-bold ${lesson.textColor}`}>
                    {isRussianLesson ? `Буква ${lesson.letter || ''}` : 
                     (lesson.title && lesson.title.includes('harfi')) ? `${lesson.letter || ''} harfi` :
                     `Letter ${lesson.letter || ''}`}
                  </h2>
                  {lesson.letter && (
                    <button
                      onClick={() => playLetterSound(lesson.letter)}
                      className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-200 animate-pulse"
                      title={isRussianLesson ? `Послушайте букву ${lesson.letter}` : 
                             (lesson.title && lesson.title.includes('harfi')) ? `${lesson.letter} harfini tinglang` :
                             `Listen to letter ${lesson.letter}`}
                    >
                      <span className="text-xl">🔊</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-blue-200">
              <h3 className={`text-2xl font-bold ${lesson.textColor} mb-6 text-center`}>
                {isRussianLesson ? 'Текущее слово:' : 
                 (lesson.title && lesson.title.includes('harfi')) ? 'Joriy so\'z:' :
                 'Current Word:'}
              </h3>
              <div className="text-center overflow-hidden">
                <div className={`text-4xl sm:text-5xl md:text-6xl font-bold ${lesson.textColor} mb-6 whitespace-nowrap px-2`}>
                  {currentWord}
                </div>
                
                <div className="flex justify-center items-center space-x-4 mb-6">
                  <button
                    onClick={prevWord}
                    disabled={currentWordIndex === 0}
                    className={`bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 ${currentWordIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isRussianLesson ? '⬅️ Предыдущее' : 
                     (lesson.title && lesson.title.includes('harfi')) ? '⬅️ Oldingi' :
                     '⬅️ Previous'}
                  </button>
                  
                  <span className={`font-bold text-xl ${lesson.textColor}`}>
                    {currentWordIndex + 1} / {lesson.words.length}
                  </span>
                  
                  <button
                    onClick={nextWord}
                    disabled={currentWordIndex === lesson.words.length - 1}
                    className={`bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 ${currentWordIndex === lesson.words.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isRussianLesson ? 'Следующее ➡️' : 
                     (lesson.title && lesson.title.includes('harfi')) ? 'Keyingi ➡️' :
                     'Next ➡️'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - All words */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-purple-200">
              <h3 className={`text-2xl font-bold ${lesson.textColor} mb-6 text-center`}>
                {isRussianLesson ? 'Все слова:' : 
                 (lesson.title && lesson.title.includes('harfi')) ? 'Barcha so\'zlar:' :
                 'All Words:'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lesson.words.map((word, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentWordIndex(index)}
                    className={`p-6 rounded-xl border-3 transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                      index === currentWordIndex 
                        ? `${lesson.bgColor} ${lesson.borderColor}` 
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`font-bold text-lg whitespace-nowrap ${
                      index === currentWordIndex ? lesson.textColor : 'text-gray-800'
                    }`}>
                      {word}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-yellow-200">
              <h3 className={`text-2xl font-bold ${lesson.textColor} mb-4 text-center`}>
                {isRussianLesson ? '📖 Практика' : 
                 (lesson.title && lesson.title.includes('harfi')) ? '📖 Mashq qilish' :
                 '📖 Practice'}
              </h3>
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">
                  {isRussianLesson 
                    ? `Найдите предметы на букву ${lesson.letter || ''}` 
                    : (lesson.title && lesson.title.includes('harfi'))
                    ? `Rasmdan ${lesson.letter || ''} harfiga oid narsalarni toping`
                    : `Find things that start with letter ${lesson.letter || ''}`
                  }
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-4 border-blue-200">
                  <div className="grid grid-cols-5 gap-4">
                    {lesson.images && lesson.images.map((image, index) => (
                      <div key={index} className="text-6xl hover:scale-110 transition-transform duration-200 cursor-pointer">{image}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonDetail;