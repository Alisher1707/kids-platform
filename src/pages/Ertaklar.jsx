import { useState } from 'react';

function Ertaklar({ onBack }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTale, setSelectedTale] = useState(null);

  const languages = [
    {
      id: 1,
      title: "O'zbekcha Ertaklar",
      description: "O'zbek xalq ertaklari",
      icon: '🇺🇿',
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
      type: 'uzbek'
    },
    {
      id: 2,
      title: "English Fairy Tales",
      description: "Classic English stories",
      icon: '🇺🇸',
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
      type: 'english'
    },
    {
      id: 3,
      title: "Русские Сказки",
      description: "Русские народные сказки",
      icon: '🇷🇺',
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-400',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
      type: 'russian'
    }
  ];

  const uzbekTales = [
    {
      id: 1,
      title: "Yomg'ir Poyakasi",
      shortText: "Kichkina mushuk yomg'irdan qochib...",
      image: "🐱☔",
      fullText: "Bir kuni kichkina mushuk ko'chada yurgan ekan, to'satdan kuchli yomg'ir boshlanadi. Mushuk yomg'irdan himoyalanish uchun daraxt tagida yashirinadi. U yerda boshqa hayvonlar ham bor edi - quyoncha, sincapcha va qushcha. Ular bir-biriga yordam berib, yomg'irdan qochib qoladilar. Ertak bolalarga do'stlik va yordam berish haqida o'rgatadi."
    },
    {
      id: 2,
      title: "Mehribon Ayiq",
      shortText: "Katta ayiq kichkina hayvonlarga...",
      image: "🐻❤️",
      fullText: "O'rmonda katta va mehribon ayiq yashar ekan. U hamma kichkina hayvonlarga yordam beradi. Quyonchaga sabzi topishda, sincapchaga yong'oq terishda yordam beradi. Bir kun o'rmonda yong'in chiqadi. Ayiq barcha hayvonlarni xavfsiz joyga olib chiqadi. Bolalar bu ertakdan mehribonlik va yordam berishni o'rganadilar."
    },
    {
      id: 3,
      title: "Sehrli Gul",
      shortText: "Qizcha sehrli gul topib...",
      image: "🌸✨",
      fullText: "Kichkina qiz bog'da o'ynayotganda g'alati nur chiqarayotgan gul ko'radi. Bu sehrli gul edi! Gul qizchaga tilak berish imkoniyatini beradi. Lekin qizcha o'zi uchun emas, balki kasallikdan aziyat chekayotgan buvisi uchun sog'lom bo'lishni tilaydi. Gul bu mehribon ish uchun qizchaning barcha orzu-tilakalarini amalga oshiradi."
    }
  ];

  const englishTales = [
    {
      id: 1,
      title: "The Magic Rainbow",
      shortText: "A little bunny finds colors...",
      image: "🐰🌈",
      fullText: "Once upon a time, a little bunny lost all the colors in the forest. Everything became gray and sad. The bunny decided to find the magic rainbow to bring colors back. On the journey, bunny met a wise owl who gave a special map. After helping other animals along the way, bunny found the rainbow and restored all the beautiful colors to the forest."
    },
    {
      id: 2,
      title: "Friendly Dragon",
      shortText: "A kind dragon helps children...",
      image: "🐲😊",
      fullText: "In a peaceful village lived a small, friendly dragon named Spark. Unlike scary dragons in other stories, Spark loved to help people. When children lost their toys, Spark would fly high to find them. When flowers needed water, Spark would bring gentle rain. All the children loved playing with their dragon friend who taught them that being different makes you special."
    },
    {
      id: 3,
      title: "The Singing Stars",
      shortText: "Stars teach a shy girl to sing...",
      image: "⭐🎵",
      fullText: "Little Emma was too shy to sing, even though she loved music. One night, she heard beautiful singing from the sky. The stars were having a concert! The brightest star invited Emma to join them. With the stars' encouragement, Emma found her voice and sang the most beautiful song. From that night, Emma was never afraid to share her talents with others."
    }
  ];

  const russianTales = [
    {
      id: 1,
      title: "Добрый Медвежонок",
      shortText: "Медвежонок дружит со всеми...",
      image: "🐻🤗",
      fullText: "Жил-был в лесу маленький медвежонок, который дружил со всеми зверями. Он помогал зайчикам собирать морковку, белочкам - орешки, а птичкам - строить гнёзда. Когда пришла зима, все друзья пригласили медвежонка к себе в гости. Так медвежонок понял, что доброта всегда возвращается к тебе."
    },
    {
      id: 2,
      title: "Волшебная Кисточка",
      shortText: "Девочка рисует чудеса...",
      image: "🖌️✨",
      fullText: "Маленькая художница Маша нашла в бабушкином чердаке старую кисточку. Оказалось, что всё, что она рисует этой кисточкой, становится настоящим! Маша рисовала цветы для мамы, игрушки для младшего брата, и еду для голодных животных. Кисточка научила Машу, что настоящее волшебство - это помощь другим."
    },
    {
      id: 3,
      title: "Солнечный Зайчик",
      shortText: "Зайчик приносит радость всем...",
      image: "🐰☀️",
      fullText: "В тёмном лесу жил солнечный зайчик, который светился золотым светом. Везде, где он пробегал, расцветали цветы и пели птицы. Однажды злая туча закрыла солнце, и лес погрузился в темноту. Но зайчик не сдался! Он собрал всех лесных друзей, и вместе они прогнали тучу, вернув свет и радость в лес."
    }
  ];

  const getTalesByLanguage = (type) => {
    switch (type) {
      case 'uzbek': return uzbekTales;
      case 'english': return englishTales;
      case 'russian': return russianTales;
      default: return [];
    }
  };

  const openLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const closeLanguage = () => {
    setSelectedLanguage(null);
    setSelectedTale(null);
  };

  const openTale = (tale) => {
    setSelectedTale(tale);
  };

  const closeTale = () => {
    setSelectedTale(null);
  };

  // Tale detail view
  if (selectedTale) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back button */}
          <button
            onClick={closeTale}
            className="mb-6 bg-white hover:bg-gray-50 text-purple-600 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center space-x-2 transform hover:scale-105"
          >
            <span>←</span>
            <span>Orqaga</span>
          </button>

          {/* Tale content */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 animate-bounce">
                {selectedTale.image}
              </div>
              <h1 className="text-4xl font-bold text-purple-800 mb-4">
                {selectedTale.title}
              </h1>
            </div>

            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed text-justify">
              <p className="text-xl first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                {selectedTale.fullText}
              </p>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex space-x-2 text-2xl animate-pulse">
                <span>⭐</span>
                <span>📚</span>
                <span>✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Language tales list
  if (selectedLanguage) {
    const tales = getTalesByLanguage(selectedLanguage.type);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <button
              onClick={closeLanguage}
              className="mb-6 bg-white hover:bg-gray-50 text-purple-600 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center space-x-2 mx-auto transform hover:scale-105"
            >
              <span>←</span>
              <span>Orqaga</span>
            </button>
            
            <div className="text-6xl mb-4">
              {selectedLanguage.icon}📖
            </div>
            <h1 className="text-4xl font-bold text-purple-800 mb-4">
              {selectedLanguage.title}
            </h1>
            <p className="text-xl text-purple-600">
              {selectedLanguage.description}
            </p>
          </div>

          {/* Tales grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tales.map((tale) => (
              <div
                key={tale.id}
                onClick={() => openTale(tale)}
                className="bg-white rounded-3xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-bounce transition-all duration-300">
                    {tale.image}
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-3">
                    {tale.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tale.shortText}
                  </p>
                  
                  <div className="mt-4 inline-flex items-center space-x-1 text-purple-500 text-sm font-medium">
                    <span>O'qish</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Main languages selection
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="mb-6 bg-white hover:bg-gray-50 text-purple-600 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center space-x-2 mx-auto transform hover:scale-105"
          >
            <span>←</span>
            <span>Orqaga</span>
          </button>
          
          <div className="text-6xl mb-4 animate-bounce">
            📚✨
          </div>
          <h1 className="text-5xl font-bold text-purple-800 mb-4">
            Ertaklar Dunyosi
          </h1>
          <p className="text-xl text-purple-600 mb-8">
            Qiziqarli va ibratli ertaklar
          </p>
        </div>

        {/* Language cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {languages.map((language) => (
            <div
              key={language.id}
              onClick={() => openLanguage(language)}
              className={`${language.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[280px] flex flex-col justify-center border-4 ${language.borderColor} group`}
            >
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${language.iconBg} text-white shadow-lg group-hover:animate-pulse`}>
                  <span className="text-3xl">{language.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${language.textColor} mb-3`}>
                  {language.title}
                </h3>
                <p className={`text-lg ${language.textColor} opacity-80 mb-4`}>
                  {language.description}
                </p>
                
                <div className={`inline-flex items-center space-x-1 ${language.textColor} font-medium`}>
                  <span>3 ta ertak</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="text-center mt-12">
          <div className="inline-flex space-x-4 text-4xl animate-pulse">
            <span>🌟</span>
            <span>📖</span>
            <span>✨</span>
            <span>🎭</span>
            <span>🏰</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ertaklar;