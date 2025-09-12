 import { useState } from 'react';
import { toast } from 'react-toastify';

function Tabiat({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Hayvonlar",
      description: "Yovvoyi va uy hayvonlari",
      icon: '🦁',
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
      type: 'animals'
    },
    {
      id: 2,
      title: "O'simliklar",
      description: "Gul, daraxt va mevalar",
      icon: '🌳',
      bgColor: 'bg-emerald-100 hover:bg-emerald-200',
      iconBg: 'bg-emerald-400',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200',
      type: 'plants'
    },
    {
      id: 3,
      title: "Fasllar",
      description: "Bahor, yoz, kuz, qish",
      icon: '🍂',
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
      type: 'seasons'
    },
    {
      id: 4,
      title: "Ob-havo",
      description: "Quyosh, yomg'ir, qor",
      icon: '⛅',
      bgColor: 'bg-sky-100 hover:bg-sky-200',
      iconBg: 'bg-sky-400',
      textColor: 'text-sky-800',
      borderColor: 'border-sky-200',
      type: 'weather'
    },
    {
      id: 5,
      title: "Kosmik jismlar",
      description: "Quyosh, oy, yulduzlar",
      icon: '🌙',
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
      type: 'space'
    },
    {
      id: 6,
      title: "Dengiz dunyosi",
      description: "Baliq va dengiz hayvonlari",
      icon: '🐠',
      bgColor: 'bg-cyan-100 hover:bg-cyan-200',
      iconBg: 'bg-cyan-400',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200',
      type: 'ocean'
    }
  ];

  const openCategory = (category) => {
    if (category.type === 'animals') {
      // Hayvonlar kategoriyasi uchun alohida subcategory selection
      setSelectedCategory(category);
    } else {
      setSelectedCategory(category);
    }
  };

  const closeCategory = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory && selectedCategory.type === 'animals') {
    return <AnimalSubcategories category={selectedCategory} onBack={closeCategory} />;
  }

  if (selectedCategory && selectedCategory.type === 'seasons') {
    return <SeasonSubcategories category={selectedCategory} onBack={closeCategory} />;
  }

  if (selectedCategory) {
    return <TabiatDetail category={selectedCategory} onBack={closeCategory} />;
  }

  return (
    <div className="min-h-screen bg-emerald-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <button 
            onClick={onBack}
            className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors mr-4 text-lg font-semibold"
          >
            ← Orqaga
          </button>
          <h1 className="text-5xl font-bold text-emerald-800">🌱 Tabiat</h1>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">
            Atrofdagi tabiat bilan tanishish
          </h2>
          <p className="text-xl text-emerald-600">
            Bolalar uchun qiziqarli tabiat dunyosi
          </p>
        </div>

        {/* Kategoriyalar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => openCategory(category)}
              className={`${category.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[280px] flex flex-col justify-center border-4 ${category.borderColor}`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${category.iconBg} text-white shadow-lg`}
                >
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${category.textColor} mb-3`}>
                  {category.title}
                </h3>
                <p className={`text-lg ${category.textColor} opacity-80`}>
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabiatDetail({ category, onBack }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);

  // Audio function for animal sounds
  const playAnimalSound = (soundText, animalName) => {
    // Web Speech API uchun text-to-speech
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(soundText);
      utterance.lang = 'uz-UZ'; // O'zbek tili uchun
      utterance.rate = 0.8; // Sekinroq gapirish
      utterance.pitch = 1.2; // Balandroq ovoz
      utterance.volume = 1; // To'liq ovoz balandligi
      
      // Agar mavjud bo'lsa, ovozni to'xtatish
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
      
      // Toast bildirish
      toast.success(`🔊 ${animalName} ovozi: ${soundText}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // Agar speech synthesis mavjud bo'lmasa
      toast.info(`🔊 ${animalName}: ${soundText}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const getContent = () => {
    switch (category.type) {
      case 'animals_domestic':
        return {
          items: [
            { id: 1, name: 'Mushuk', icon: '🐱', sound: 'Miyov!', habitat: 'Uy', food: 'Baliq, sut', facts: ['🏠 Uy hayvoni', '🌙 Kechasi yaxshi ko\'radi', '🛁 Toza hayvon', '🐭 Sichqonlarni tutadi', '😴 Kuniga 16 soat uxlaydi'] },
            { id: 2, name: 'It', icon: '🐶', sound: 'Vov!', habitat: 'Uy', food: 'Go\'sht, suyak', facts: ['❤️ Sodiq do\'st', '🛡️ Uyni qo\'riqlaydi', '🎾 O\'ynashni yaxshi ko\'radi', '👥 Insonning eng yaxshi do\'sti', '👃 Hidni juda yaxshi sezadi'] },
            { id: 3, name: 'Sigir', icon: '🐄', sound: 'Moo!', habitat: 'Ferma', food: 'O\'t, pichon', facts: ['🥛 Sut beradi', '💝 Katta va mehribon', '🌾 O\'tloqda yaydi', '🍖 Go\'sht ham beradi', '🐄 4 ta oshqozoni bor'] },
            { id: 4, name: 'Qo\'y', icon: '🐑', sound: 'Baa!', habitat: 'Ferma', food: 'O\'t', facts: ['🧶 Jun beradi', '👥 Guruh bo\'lib yuradi', '😌 Tinch hayvon', '🍖 Go\'sht ham beradi', '🏃 Chopish biladi'] },
            { id: 5, name: 'Tovuq', icon: '🐔', sound: 'Qoqoriqo!', habitat: 'Hovli', food: 'Don, qurt', facts: ['🥚 Tuxum qo\'yadi', '🌅 Ertalab qichqiradi', '✈️ Qanotlari bor lekin kam uchadi', '🍗 Go\'sht ham beradi', '🪶 Rangbarang patlari bor'] },
            { id: 6, name: 'Ot', icon: '🐴', sound: 'Hihi!', habitat: 'Otxona', food: 'O\'t, arpa', facts: ['🏃 Tez yuguradi', '🏇 Minish uchun', '💪 Kuchli hayvon', '🏆 Sevimli sport hayvoni', '👁️ 360 daraja ko\'radi'] },
            { id: 7, name: 'Echki', icon: '🐐', sound: 'Mee!', habitat: 'Tog\'', food: 'O\'t, barglar', facts: ['🥛 Sut beradi', '🧗 Tog\'ga chiqadi', '🦷 Hammani kemiradi', '🧔 Soqoli bor', '👁️ To\'rtburchak ko\'zlari bor'] },
            { id: 8, name: 'G\'oz', icon: '🪿', sound: 'Gak-gak!', habitat: 'Hovli', food: 'O\'t, don', facts: ['🏊 Suvda suzadi', '✈️ Uchadi', '🪶 Yumshoq patlari bor', '👥 Guruh bo\'lib yuradi', '🛡️ Jajji bo\'ladi'] },
            { id: 9, name: 'O\'rdak', icon: '🦆', sound: 'Krek-krek!', habitat: 'Suv yoni', food: 'Baliq, o\'t', facts: ['🏊 Yaxshi suzadi', '🦆 Cho\'ntagiga o\'xshash tumshug\'i', '🥚 Tuxum qo\'yadi', '🌊 Suvda va quruqlikda yashaydi', '🪶 Suv o\'tmaydigan patlari'] },
            { id: 10, name: 'Quyon', icon: '🐰', sound: 'Squeak!', habitat: 'Qafas', food: 'Sabzavot, o\'t', facts: ['🦷 Uzun quloqlari', '🏃 Juda tez chopadi', '👶 Ko\'p bola beradi', '🥕 Sabzi yaxshi ko\'radi', '👃 Hidni yaxshi biladi'] },
            { id: 11, name: 'Donxo\'r', icon: '🫏', sound: 'Hee-haw!', habitat: 'Ferma', food: 'O\'t, arpa', facts: ['👂 Uzun quloqlari bor', '💪 Kuchli va chidamli', '📦 Yuk ko\'taradi', '🐴 Otning qarindoshi', '🤔 Juda aqlli hayvon'] },
            { id: 12, name: 'Cho\'chqa', icon: '🐷', sound: 'Oink!', habitat: 'Ferma', food: 'Har xil ovqat', facts: ['🧠 Juda aqlli', '🏊 Suzishni biladi', '🌡️ Ter chiqarmaydi', '👃 Hidni juda yaxshi sezadi', '🍖 Go\'sht beradi'] }
          ],
          quiz: [
            { question: 'Qaysi uy hayvoni sut beradi?', options: ['Mushuk', 'Sigir', 'It'], correct: 1, icon: '🐄' },
            { question: 'Insonning eng yaxshi do\'sti qaysi?', options: ['It', 'Mushuk', 'Ot'], correct: 0, icon: '🐶' },
            { question: 'Qaysi hayvon tuxum qo\'yadi?', options: ['Sigir', 'Tovuq', 'Qo\'y'], correct: 1, icon: '🐔' },
            { question: 'Qaysi hayvon ertalab qichqiradi?', options: ['Tovuq', 'Sigir', 'Echki'], correct: 0, icon: '🐔' },
            { question: 'Jun beradigan hayvon qaysi?', options: ['It', 'Qo\'y', 'Ot'], correct: 1, icon: '🐑' },
            { question: 'Kuniga 16 soat uxlaydigan hayvon?', options: ['Mushuk', 'It', 'Ot'], correct: 0, icon: '🐱' },
            { question: '360 daraja ko\'radigan hayvon qaysi?', options: ['Sigir', 'Ot', 'Tovuq'], correct: 1, icon: '🐴' },
            { question: 'Qaysi hayvon uzun quloqlari bilan tanilgan?', options: ['Quyon', 'Mushuk', 'It'], correct: 0, icon: '🐰' },
            { question: 'Suvda suzadigan uy hayvoni?', options: ['Mushuk', 'O\'rdak', 'Qo\'y'], correct: 1, icon: '🦆' },
            { question: '4 ta oshqozoni bor hayvon?', options: ['Ot', 'Sigir', 'Echki'], correct: 1, icon: '🐄' }
          ]
        };
      case 'animals_wild':
        return {
          items: [
            { id: 1, name: 'Sher', icon: '🦁', sound: 'Aurrr!', habitat: 'Savanna', food: 'Go\'sht', facts: ['👑 Hayvonlar shohi', '👨‍👩‍👧‍👦 Guruhda yashaydi', '😴 Kuniga 20 soat uxlaydi', '💪 Kuchli va qahramon', '🔊 3 km uzoqdan eshitiladi'] },
            { id: 2, name: 'Fil', icon: '🐘', sound: 'Trumpet!', habitat: 'Afrika', food: 'O\'t, meva', facts: ['🏆 Eng katta quruqlik hayvoni', '🧠 Ajoyib xotirasi bor', '🏊 Suvni juda yaxshi ko\'radi', '👃 Uzun burun bor', '👂 Katta quloqlari bor'] },
            { id: 3, name: 'Qoplonbarcha', icon: '🐅', sound: 'Roar!', habitat: 'O\'rmon', food: 'Go\'sht', facts: ['🏃 Tez yuguradi', '🎨 Chiroyli yo\'lchalar bor', '🕴️ Yolg\'iz yashaydi', '🌙 Kechasi ov qiladi', '🏊 Suvni yaxshi ko\'radi'] },
            { id: 4, name: 'Girafa', icon: '🦒', sound: 'Hum!', habitat: 'Savanna', food: 'Daraxt barglari', facts: ['📏 Eng uzun hayvon', '💙 Ko\'k tili bor', '❤️ Yuraklari juda katta', '🌳 Baland daraxtlardan yeydi', '👁️ 1 km uzoqni ko\'radi'] },
            { id: 5, name: 'Ayiq', icon: '🐻', sound: 'Grrrr!', habitat: 'O\'rmon', food: 'Baliq, meva', facts: ['💪 Kuchli va katta', '❄️ Qishda uxlaydi', '🎣 Baliq tutadi', '🌳 Daraxtga chiqadi', '👃 Hidni 100 km dan sezadi'] },
            { id: 6, name: 'Bo\'ri', icon: '🐺', sound: 'Auuu!', habitat: 'O\'rmon', food: 'Go\'sht', facts: ['👥 Guruh bo\'lib yashaydi', '🌙 Kechasi uvillaydi', '🐕 Itning ajdodi', '🧠 Aqlli va tez', '🏃 60 km/s tezlikda yuguradi'] },
            { id: 7, name: 'Maymun', icon: '🐒', sound: 'Oo-oo-ah-ah!', habitat: 'O\'rmon', food: 'Meva, barglar', facts: ['🌳 Daraxtlarda yashaydi', '🤸 Sakrashni yaxshi biladi', '🧠 Juda aqlli', '👥 Guruh bo\'lib yashaydi', '🍌 Banan yaxshi ko\'radi'] },
            { id: 8, name: 'Zebra', icon: '🦓', sound: 'Neigh!', habitat: 'Afrika', food: 'O\'t', facts: ['🎨 Qora-oq yo\'lchalar bor', '🐴 Otga o\'xshaydi', '🏃 Tez yuguradi', '👥 Guruh bo\'lib yashaydi', '👶 Tug\'ilganda ham yo\'lchalar bor'] },
            { id: 9, name: 'Kenguru', icon: '🦘', sound: 'Grunt!', habitat: 'Avstraliya', food: 'O\'t', facts: ['🦘 Sakrab yuradi', '👶 Cho\'ntagida bola tashiydi', '🥊 Jang qiladi', '🦵 Kuchli oyoqlari bor', '🏃 70 km/s tezlikda sakraydi'] },
            { id: 10, name: 'Panda', icon: '🐼', sound: 'Bleat!', habitat: 'Xitoy', food: 'Bambuk', facts: ['🎋 Bambuk yeydi', '⚫ Qora-oq rangli', '🧸 Go\'zal va yumaloq', '🌳 Daraxtga chiqadi', '😴 Ko\'p uxlaydi'] },
            { id: 11, name: 'Tulki', icon: '🦊', sound: 'Yap!', habitat: 'O\'rmon', food: 'Sichqon, meva', facts: ['🧠 Juda aqlli', '🔥 Qizil rangli', '🕳️ Yer ostida yashaydi', '🌙 Kechasi ov qiladi', '👂 O\'tkir quloqlari bor'] },
            { id: 12, name: 'Yo\'lbars', icon: '🐆', sound: 'Roar!', habitat: 'Afrika', food: 'Go\'sht', facts: ['🏃 Eng tez hayvon', '⚡ 120 km/s yuguradi', '🎯 Yaxshi ovchi', '🌿 Daraxtda dam oladi', '⚪ Dog\'li terisi bor'] },
            { id: 13, name: 'Gergedan', icon: '🦏', sound: 'Snort!', habitat: 'Afrika', food: 'O\'t', facts: ['🏺 Murdasida shox bor', '💪 Juda kuchli', '🛡️ Qalin terisi bor', '🏃 30 km/s yuguradi', '👁️ Yomon ko\'radi'] },
            { id: 14, name: 'Hipopotam', icon: '🦛', sound: 'Grunt!', habitat: 'Afrika', food: 'O\'t', facts: ['🏊 Suvda yashaydi', '😮 Katta og\'zi bor', '💪 Juda kuchli', '🌊 5 daqiqa suv ostida turadi', '🌙 Kechasi quruqlikka chiqadi'] },
            { id: 15, name: 'Pingvin', icon: '🐧', sound: 'Squawk!', habitat: 'Antarktika', food: 'Baliq', facts: ['❄️ Sovuq joyda yashaydi', '🏊 Yaxshi suzadi', '🤵 Kostyumga o\'xshaydi', '🥚 Tuxum ustida o\'tiradi', '👥 Guruh bo\'lib yashaydi'] }
          ],
          quiz: [
            { question: 'Qaysi hayvon "Hayvonlar shohi" deb ataladi?', options: ['Fil', 'Sher', 'Girafa'], correct: 1, icon: '🦁' },
            { question: 'Eng uzun hayvon qaysi?', options: ['Girafa', 'Fil', 'Qoplonbarcha'], correct: 0, icon: '🦒' },
            { question: 'Qaysi hayvon qishda uxlaydi?', options: ['Ayiq', 'Bo\'ri', 'Sher'], correct: 0, icon: '🐻' },
            { question: 'Eng katta quruqlik hayvoni qaysi?', options: ['Sher', 'Fil', 'Ayiq'], correct: 1, icon: '🐘' },
            { question: '60 km/s tezlikda yuguradigan hayvon?', options: ['Bo\'ri', 'Tulki', 'Yo\'lbars'], correct: 0, icon: '🐺' },
            { question: 'Bambuk yeydigan hayvon qaysi?', options: ['Panda', 'Ayiq', 'Maymun'], correct: 0, icon: '🐼' },
            { question: 'Sakrab yuradigan hayvon?', options: ['Zebra', 'Kenguru', 'Girafa'], correct: 1, icon: '🦘' },
            { question: 'Qora-oq yo\'lchalar bor hayvon?', options: ['Yo\'lbars', 'Zebra', 'Panda'], correct: 1, icon: '🦓' },
            { question: '120 km/s tezlikda yuguradigan hayvon?', options: ['Bo\'ri', 'Yo\'lbars', 'Tulki'], correct: 1, icon: '🐆' },
            { question: 'Cho\'ntagida bola tashiydigan hayvon?', options: ['Ayiq', 'Kenguru', 'Maymun'], correct: 1, icon: '🦘' }
          ]
        };
      case 'animals':
        return {
          items: [
            { id: 1, name: 'Sher', icon: '🦁', sound: 'Aurrr!', habitat: 'Savanna', food: 'Go\'sht', facts: ['Hayvonlar shohi', 'Guruhda yashaydi', 'Kuniga 20 soat uxlaydi'] },
            { id: 2, name: 'Fil', icon: '🐘', sound: 'Trumpet!', habitat: 'Afrika', food: 'O\'t', facts: ['Eng katta quruqlik hayvoni', 'Ajoyib xotirasi bor', 'Suvni juda yaxshi ko\'radi'] },
            { id: 3, name: 'Qoplonbarcha', icon: '🐅', sound: 'Roar!', habitat: 'O\'rmon', food: 'Go\'sht', facts: ['Tez yuguradi', 'Daraxtlarda yashaydi', 'Chiroyli yo\'lchalar bor'] },
            { id: 4, name: 'Girafa', icon: '🦒', sound: 'Hum!', habitat: 'Savanna', food: 'Barglar', facts: ['Eng uzun hayvon', 'Ko\'k tili bor', 'Yuraklari juda katta'] },
            { id: 5, name: 'Mushuk', icon: '🐱', sound: 'Miyov!', habitat: 'Uy', food: 'Baliq', facts: ['Uy hayvoni', 'Kechasi yaxshi ko\'radi', 'Toza hayvon'] },
            { id: 6, name: 'It', icon: '🐶', sound: 'Vov!', habitat: 'Uy', food: 'Go\'sht', facts: ['Sodiq do\'st', 'Qo\'riqlaydi', 'O\'ynashni yaxshi ko\'radi'] }
          ],
          quiz: [
            { question: 'Qaysi hayvon "Hayvonlar shohi" deb ataladi?', options: ['Fil', 'Sher', 'Girafa'], correct: 1, icon: '🦁' },
            { question: 'Eng uzun hayvon qaysi?', options: ['Girafa', 'Fil', 'Qoplonbarcha'], correct: 0, icon: '🦒' },
            { question: 'Mushuklar qanday tovush chiqaradi?', options: ['Vov', 'Miyov', 'Aurrr'], correct: 1, icon: '🐱' }
          ]
        };
      case 'plants':
        return {
          items: [
            { id: 1, name: 'Atirgul', icon: '🌹', color: 'Qizil', use: 'Hid uchun', facts: ['💕 Sevgi ramzi', '🌸 Yoqimli hidi bor', '🔪 Tikanlari bor', '💐 To\'ylar uchun ishlatiladi', '🏡 Bog\'larda o\'sadi'] },
            { id: 2, name: 'Quyoshgul', icon: '🌻', color: 'Sariq', use: 'Yog\' uchun', facts: ['☀️ Quyoshga qaraydi', '📏 3 metr balandlikka o\'sadi', '🌰 Urug\'i foydali', '🛢️ Yog\' olinadi', '🐝 Arilar yaxshi ko\'radi'] },
            { id: 3, name: 'Olma daraxti', icon: '🍎', color: 'Yashil/Qizil', use: 'Meva uchun', facts: ['🍎 Mazali meva beradi', '🌸 Bahorda oq gullar ochadi', '🍏 Vitamin C ko\'p', '🌳 20 yildan ko\'p yashaydi', '❄️ Sovuqni yaxshi ko\'taradi'] },
            { id: 4, name: 'Eman daraxti', icon: '🌳', color: 'Yashil', use: 'Soya uchun', facts: ['💪 Juda kuchli daraxt', '🕰️ 500 yildan ko\'p yashaydi', '🌲 Katta soya beradi', '🐿️ Hayvonlar uchun uy', '🔨 Yog\'och sifatida ishlatiladi'] },
            { id: 5, name: 'Sebarga', icon: '🥕', color: 'To\'q sariq', use: 'Taom uchun', facts: ['👁️ Ko\'z uchun foydali', '🕳️ Yer ostida o\'sadi', '🥗 Xom ham pishirib ham yeyiladi', '🧡 Beta-karotin ko\'p', '🐰 Quyonlar sevimli taomi'] },
            { id: 6, name: 'Paxta', icon: '🌿', color: 'Oq', use: 'Kiyim uchun', facts: ['🤍 Oq paxta beradi', '👕 Kiyim tayyorlashda ishlatiladi', '🇺🇿 O\'zbekistonning asosiy ekinlaridan', '☀️ Issiq iqlimda o\'sadi', '👔 Eng sifatli mato'] },
            { id: 7, name: 'Lola', icon: '🌷', color: 'Turli rangli', use: 'Go\'zallik uchun', facts: ['🌈 Turli ranglarda bo\'ladi', '🌱 Piyozdan o\'sadi', '🌸 Bahorda gullaydi', '🏞️ Bog\'larning bezagi', '🎁 Hadya sifatida beriladi'] },
            { id: 8, name: 'Pomidor', icon: '🍅', color: 'Qizil', use: 'Taom uchun', facts: ['🍅 Mazali va foydali', '🥗 Salatlarda ishlatiladi', '🍲 Palov va sho\'rvada', '☀️ Yozda pishadi', '💧 90% suv'] },
            { id: 9, name: 'Uzum tok', icon: '🍇', color: 'Yashil/Binafsha', use: 'Meva uchun', facts: ['🍇 Shirin meva beradi', '🍷 Sharbat tayyorlanadi', '🌿 Tok bo\'ylab o\'sadi', '☀️ Quyoshli joyni yaxshi ko\'radi', '🏺 Quritib mayiz qilinadi'] },
            { id: 10, name: 'Nok daraxti', icon: '🍐', color: 'Yashil', use: 'Meva uchun', facts: ['🍐 Shirin meva beradi', '🌸 Oq gullar ochadi', '🍯 Asal kabi shirin', '🌿 Bargları oval shaklli', '💚 Yashil rangli meva'] },
            { id: 11, name: 'Qovoq', icon: '🎃', color: 'To\'q sariq', use: 'Taom uchun', facts: ['🎃 Katta va dumaloq', '🥧 Osh va sho\'rva uchun', '🌱 Yerga yoyilib o\'sadi', '🍂 Kuzda yig\'ib olinadi', '🌕 Oy kabi dumaloq'] },
            { id: 12, name: 'Rediska', icon: '🌶️', color: 'Qizil-oq', use: 'Salat uchun', facts: ['🔴 Qizil-oq rangli', '🥗 Salatga qo\'shiladi', '🌿 Tez o\'sadi', '🌶️ Biroz achchiq', '🥬 Barglari ham yeyiladi'] },
            { id: 13, name: 'Kartoshka', icon: '🥔', color: 'Jigarrang', use: 'Taom uchun', facts: ['🥔 Asosiy taom mahsuloti', '🕳️ Yer ostida o\'sadi', '🍟 Turli usulda pishiriladi', '⚡ Energiya beradi', '🌍 Dunyo bo\'ylab yetishtiriladi'] },
            { id: 14, name: 'Bodring', icon: '🥒', color: 'Yashil', use: 'Salat uchun', facts: ['🥒 Yashil va uzun', '💧 95% suv', '🥗 Salatlarda ishlatiladi', '❄️ Salqinlik beradi', '🌿 Poliz bo\'ylab o\'sadi'] },
            { id: 15, name: 'Archa', icon: '🎄', color: 'To\'q yashil', use: 'Bezak uchun', facts: ['🎄 Doim yashil', '❄️ Qishda ham yashil qoladi', '🌲 Baland o\'sadi', '🎁 Yangi yilda bezaladi', '🌿 Yaxshi hid tarqatadi'] }
          ],
          quiz: [
            { question: 'Qaysi o\'simlik quyoshga qaraydi?', options: ['Atirgul', 'Quyoshgul', 'Eman'], correct: 1, icon: '🌻' },
            { question: 'Olma daraxti nima beradi?', options: ['Gul', 'Meva', 'Paxta'], correct: 1, icon: '🍎' },
            { question: 'Sevgi ramzi qaysi gul?', options: ['Atirgul', 'Lola', 'Quyoshgul'], correct: 0, icon: '🌹' },
            { question: 'Qaysi o\'simlikdan yog\' olinadi?', options: ['Quyoshgul', 'Archa', 'Sebarga'], correct: 0, icon: '🌻' },
            { question: 'Yer ostida qaysi o\'simlik o\'sadi?', options: ['Pomidor', 'Kartoshka', 'Uzum'], correct: 1, icon: '🥔' },
            { question: 'Paxta qaysi rangda bo\'ladi?', options: ['Qizil', 'Ko\'k', 'Oq'], correct: 2, icon: '🌿' },
            { question: 'Bahorda qaysi gul gullaydi?', options: ['Lola', 'Qovoq', 'Kartoshka'], correct: 0, icon: '🌷' },
            { question: '90% suv qaysi o\'simlikda bor?', options: ['Archa', 'Pomidor', 'Paxta'], correct: 1, icon: '🍅' },
            { question: '500 yildan ko\'p yashaydigan daraxt?', options: ['Olma', 'Eman', 'Nok'], correct: 1, icon: '🌳' },
            { question: 'Ko\'z uchun foydali sabzavot?', options: ['Pomidor', 'Sebarga', 'Bodring'], correct: 1, icon: '🥕' },
            { question: 'Qishda ham yashil qoladigan daraxt?', options: ['Olma', 'Archa', 'Uzum'], correct: 1, icon: '🎄' },
            { question: '3 metr balandlikka o\'sadigan o\'simlik?', options: ['Lola', 'Quyoshgul', 'Rediska'], correct: 1, icon: '🌻' },
            { question: 'O\'zbekistonning asosiy ekini qaysi?', options: ['Uzum', 'Paxta', 'Olma'], correct: 1, icon: '🌿' },
            { question: 'Salqinlik beradigan sabzavot?', options: ['Sebarga', 'Bodring', 'Rediska'], correct: 1, icon: '🥒' },
            { question: 'Tok bo\'ylab o\'sadigan o\'simlik?', options: ['Bodring', 'Uzum', 'Qovoq'], correct: 1, icon: '🍇' }
          ]
        };
      case 'seasons_spring':
        return {
          items: [
            { id: 1, name: 'Mart', icon: '🌱', weather: 'Iliq', temperature: '10-15°C', facts: ['🌱 Daraxtlar kurtaklanadi', '🌸 Birinchi gullar ochiladi', '🐦 Qushlar qayatadi', '☀️ Kun uzayadi', '🌧️ Yomg\'ir ko\'p yog\'adi'] },
            { id: 2, name: 'Aprel', icon: '🌸', weather: 'Iliq', temperature: '15-20°C', facts: ['🌸 Gullar to\'liq ochiladi', '🌿 Barglar yangilanadi', '🦋 Kapalakllar uchadi', '🌱 Ekish vaqti', '💚 Hamma narsa yashillashadi'] },
            { id: 3, name: 'May', icon: '🌺', weather: 'Issiq', temperature: '20-25°C', facts: ['🌺 Gullar to\'liq gullaydi', '🍓 Birinchi mevalar pishadi', '🦋 Hasharotlar ko\'payadi', '🌳 Daraxtlar to\'liq barglanadi', '☀️ Kun eng uzun bo\'ladi'] }
          ],
          quiz: [
            { question: 'Bahorning birinchi oyi qaysi?', options: ['Aprel', 'Mart', 'May'], correct: 1, icon: '🌱' },
            { question: 'Qaysi oyda gullar to\'liq ochiladi?', options: ['Mart', 'Aprel', 'May'], correct: 1, icon: '🌸' },
            { question: 'Eng issiq bahor oyi qaysi?', options: ['May', 'Mart', 'Aprel'], correct: 0, icon: '🌺' }
          ]
        };
      case 'seasons_summer':
        return {
          items: [
            { id: 1, name: 'Iyun', icon: '☀️', weather: 'Issiq', temperature: '25-30°C', facts: ['☀️ Yilning eng issiq vaqti', '🌻 Quyoshgul gullaydi', '🍒 Olcha pishadi', '🦋 Kapalakllar eng ko\'p', '🌳 Daraxtlar soya beradi'] },
            { id: 2, name: 'Iyul', icon: '🌡️', weather: 'Juda issiq', temperature: '30-35°C', facts: ['🌡️ Eng issiq oy', '🍑 Shaftoli pishadi', '🏊 Suvda suzish vaqti', '🌾 Bug\'doy o\'riladi', '🔥 Harorat eng yuqori'] },
            { id: 3, name: 'Avgust', icon: '🍉', weather: 'Issiq', temperature: '25-30°C', facts: ['🍉 Tarvuz pishadi', '🍇 Uzum to\'yadi', '🌽 Makkajo\'xori pishadi', '🍅 Pomidor to\'yadi', '📚 Maktab tayyorligi'] }
          ],
          quiz: [
            { question: 'Yozning birinchi oyi qaysi?', options: ['Iyul', 'Iyun', 'Avgust'], correct: 1, icon: '☀️' },
            { question: 'Eng issiq oy qaysi?', options: ['Iyul', 'Iyun', 'Avgust'], correct: 0, icon: '🌡️' },
            { question: 'Tarvuz qaysi oyda pishadi?', options: ['Iyun', 'Avgust', 'Iyul'], correct: 1, icon: '🍉' }
          ]
        };
      case 'seasons_autumn':
        return {
          items: [
            { id: 1, name: 'Sentyabr', icon: '🍂', weather: 'Iliq', temperature: '20-25°C', facts: ['🍂 Barglar sarg\'aya boshlaydi', '📚 Maktab boshlanadi', '🍎 Olma yig\'iladi', '🌾 Hosil yig\'ish vaqti', '🦆 Qushlar janubga uchadi'] },
            { id: 2, name: 'Oktyabr', icon: '🍁', weather: 'Salqin', temperature: '15-20°C', facts: ['🍁 Barglar to\'liq sarg\'ayadi', '🌰 Yong\'oq yig\'iladi', '🎃 Qovoq pishadi', '🌧️ Yomg\'ir ko\'payadi', '🧥 Kiyim issiqroq'] },
            { id: 3, name: 'Noyabr', icon: '🌨️', weather: 'Sovuq', temperature: '5-15°C', facts: ['🌨️ Birinchi qor yog\'adi', '🍃 Barglar to\'kiladi', '❄️ Sovuq boshlanadi', '🔥 Isitish kerak', '🦃 Qushlar ucha ketadi'] }
          ],
          quiz: [
            { question: 'Kuzning birinchi oyi qaysi?', options: ['Oktyabr', 'Sentyabr', 'Noyabr'], correct: 1, icon: '🍂' },
            { question: 'Barglar to\'liq sarg\'aydigan oy?', options: ['Sentyabr', 'Oktyabr', 'Noyabr'], correct: 1, icon: '🍁' },
            { question: 'Birinchi qor qaysi oyda yog\'adi?', options: ['Noyabr', 'Oktyabr', 'Sentyabr'], correct: 0, icon: '🌨️' }
          ]
        };
      case 'seasons_winter':
        return {
          items: [
            { id: 1, name: 'Dekabr', icon: '❄️', weather: 'Sovuq', temperature: '0-5°C', facts: ['❄️ Qor yog\'adi', '🎄 Yangi yil tayyorligi', '🧥 Issiq kiyim', '🔥 Isitish kerak', '⭐ Tun eng uzun'] },
            { id: 2, name: 'Yanvar', icon: '🌨️', weather: 'Juda sovuq', temperature: '-5-0°C', facts: ['🌨️ Eng sovuq oy', '🎁 Yangi yil bayrami', '⛄ Qor odam yasash', '🛷 Chana uchish', '❄️ Hamma narsa muzlaydi'] },
            { id: 3, name: 'Fevral', icon: '🌬️', weather: 'Sovuq', temperature: '0-5°C', facts: ['🌬️ Shamol kuchli', '❄️ Qor eriby boshlaydi', '🌱 Bahor yaqinlashadi', '☀️ Kun uzaya boshlaydi', '🧥 Hali ham issiq kiyim'] }
          ],
          quiz: [
            { question: 'Qishning birinchi oyi qaysi?', options: ['Yanvar', 'Dekabr', 'Fevral'], correct: 1, icon: '❄️' },
            { question: 'Eng sovuq oy qaysi?', options: ['Dekabr', 'Yanvar', 'Fevral'], correct: 1, icon: '🌨️' },
            { question: 'Qaysi oyda bahor yaqinlashadi?', options: ['Dekabr', 'Fevral', 'Yanvar'], correct: 1, icon: '🌬️' }
          ]
        };
      case 'seasons':
        return {
          items: [
            { id: 1, name: 'Bahor', icon: '🌸', months: 'Mart, Aprel, May', weather: 'Iliq', facts: ['Gullar ochiladi', 'Qushlar qayatadi', 'Daraxtlar ko\'karadi'] },
            { id: 2, name: 'Yoz', icon: '☀️', months: 'Iyun, Iyul, Avgust', weather: 'Issiq', facts: ['Eng issiq fasl', 'Meva pishadi', 'Ta\'til vaqti'] },
            { id: 3, name: 'Kuz', icon: '🍂', months: 'Sentyabr, Oktyabr, Noyabr', weather: 'Salqin', facts: ['Barglar sarg\'ayadi', 'Hosil vaqti', 'Qushlar janubga uchadi'] },
            { id: 4, name: 'Qish', icon: '❄️', months: 'Dekabr, Yanvar, Fevral', weather: 'Sovuq', facts: ['Qor yog\'adi', 'Daraxtlar yalang\'och', 'Yangi yil fasli'] }
          ],
          quiz: [
            { question: 'Qaysi faslda gullar ochiladi?', options: ['Qish', 'Bahor', 'Kuz'], correct: 1, icon: '🌸' },
            { question: 'Eng issiq fasl qaysi?', options: ['Yoz', 'Bahor', 'Kuz'], correct: 0, icon: '☀️' },
            { question: 'Qaysi faslda qor yog\'adi?', options: ['Kuz', 'Yoz', 'Qish'], correct: 2, icon: '❄️' }
          ]
        };
      case 'weather':
        return {
          items: [
            { id: 1, name: 'Quyoshli kun', icon: '☀️', feeling: 'Issiq', activity: 'Tashqarida o\'ynash', facts: ['Yorug\' va issiq', 'Energiya beradi', 'O\'simliklarni o\'stiradi'] },
            { id: 2, name: 'Yomg\'irli kun', icon: '🌧️', feeling: 'Nam', activity: 'Uyda o\'qish', facts: ['O\'simliklarga foydali', 'Havoni tozalaydi', 'Kamalak paydo bo\'ladi'] },
            { id: 3, name: 'Qorli kun', icon: '❄️', feeling: 'Sovuq', activity: 'Qor o\'yinlari', facts: ['Oq va go\'zal', 'Chang\'i uchun yaxshi', 'Qor odam yasash mumkin'] },
            { id: 4, name: 'Shamolly kun', icon: '💨', feeling: 'Salqin', activity: 'Uchar\'qog\'oz uchirish', facts: ['Bulutlarni harakatga keltiradi', 'Issiq kunlarda salqinlik beradi', 'Shamol tegirmonlari ishlaydi'] },
            { id: 5, name: 'Bulutli kun', icon: '☁️', feeling: 'Bo\'g\'iq', activity: 'Kitob o\'qish', facts: ['Quyoshni yashiradi', 'Yomg\'ir kelishini bildiradi', 'Turli shaklda bo\'ladi'] },
            { id: 6, name: 'Kamalak', icon: '🌈', feeling: 'Baxtli', activity: 'Suratga olish', facts: ['Yomg\'irdan keyin paydo bo\'ladi', '7 ta rangi bor', 'Juda go\'zal'] }
          ],
          quiz: [
            { question: 'Kamalak qachon paydo bo\'ladi?', options: ['Quyoshli kunlarda', 'Yomg\'irdan keyin', 'Qorli kunlarda'], correct: 1, icon: '🌈' },
            { question: 'O\'simliklarga qaysi ob-havo foydali?', options: ['Yomg\'ir', 'Qor', 'Shamol'], correct: 0, icon: '🌧️' },
            { question: 'Energiya qaysi ob-havodan keladim?', options: ['Bulut', 'Quyosh', 'Shamol'], correct: 1, icon: '☀️' }
          ]
        };
      case 'space':
        return {
          items: [
            { id: 1, name: 'Quyosh', icon: '☀️', type: 'Yulduz', distance: '150 million km', sound: 'Quyosh', facts: ['☀️ Bizning eng yaqin yulduzimiz', '🔥 6000°C haroratda', '💡 Yorug\'lik va issiqlik beradi', '⚡ Energiya manbai', '🌍 Quyosh tizimining markazi'] },
            { id: 2, name: 'Oy', icon: '🌙', type: 'Yo\'ldosh', distance: '384,000 km', sound: 'Oy', facts: ['🌙 Yerning yo\'ldoshi', '🌟 Kechasi yorug\'lik beradi', '🔄 Shaklini o\'zgartiradi', '🌊 Dengiz to\'lqinlarini boshqaradi', '👩‍🚀 Insonlar tashrif buyurgan'] },
            { id: 3, name: 'Yulduzlar', icon: '⭐', type: 'Yulduzlar', distance: 'Trilliard km', sound: 'Yulduzlar', facts: ['⭐ Kechasi porlaydi', '🌈 Turli ranglarda bo\'ladi', '🔢 Trilliardlab bor', '✨ O\'zidan yorug\'lik chiqaradi', '🌌 Turli o\'lchamlarda'] },
            { id: 4, name: 'Yer', icon: '🌍', type: 'Sayyora', distance: 'Bu yerda', sound: 'Yer sayyorasi', facts: ['🏠 Bizning uyimiz', '💧 Suvi bor', '🌱 Jonli mavjudotlar yashaydi', '🌬️ Atmosferasi bor', '🧲 Magnit maydoni bor'] },
            { id: 5, name: 'Mars', icon: '🔴', type: 'Sayyora', distance: '225 million km', sound: 'Mars sayyorasi', facts: ['🔴 Qizil sayyora', '❄️ Juda sovuq', '🏔️ Eng baland tog\'i bor', '🤖 Robotlar tadqiq qiladi', '👨‍🚀 Insonlar bormoqchi'] },
            { id: 6, name: 'Jupiter', icon: '🪐', type: 'Sayyora', distance: '778 million km', sound: 'Jupiter sayyorasi', facts: ['🪐 Eng katta sayyora', '💨 Gaz sayyorasi', '🌀 Katta bo\'ron bor', '🌙 79 ta yo\'ldoshi bor', '⚡ Kuchli magnit maydoni'] },
            { id: 7, name: 'Saturn', icon: '💍', type: 'Sayyora', distance: '1.4 milliard km', sound: 'Saturn sayyorasi', facts: ['💍 Halqalari bor', '🎭 Go\'zal sayyora', '🧊 Muzli halqalar', '🌙 82 ta yo\'ldoshi', '💨 Engil sayyora'] },
            { id: 8, name: 'Kamalak', icon: '🌈', type: 'Yorug\'lik hodisasi', distance: 'Atmosferada', sound: 'Kamalak', facts: ['🌈 7 ta rangi bor', '🌧️ Yomg\'irdan keyin paydo bo\'ladi', '☀️ Quyosh nuri kerak', '🎨 Juda chiroyli', '📸 Suratga olishadi'] },
            { id: 9, name: 'Kometa', icon: '☄️', type: 'Kosmik jism', distance: 'Turlicha', sound: 'Kometa', facts: ['☄️ Muzli tog\' bloki', '✨ Yorug\' dumi bor', '🚀 Tez harakatlanadi', '🔄 Quyoshni aylanib yuradi', '👀 Ba\'zan ko\'rinadi'] },
            { id: 10, name: 'Meteorit', icon: '💫', type: 'Kosmik tosh', distance: 'Yerga tushadi', sound: 'Meteorit', facts: ['💫 Kosmosdan keladi', '🔥 Yonib tushadi', '⭐ Yulduz yomg\'iri', '🏔️ Yerga tushadi', '💎 Ba\'zan qimmat tosh'] },
            { id: 11, name: 'Galaktika', icon: '🌌', type: 'Yulduzlar to\'plami', distance: 'Juda uzoq', sound: 'Galaktika', facts: ['🌌 Milliardlab yulduz', '🌀 Aylanuvchi shakl', '🏠 Bizning Somon yo\'li', '✨ Go\'zal manzara', '🔭 Teleskop bilan ko\'rinadi'] },
            { id: 12, name: 'Kosmik stansiya', icon: '🛰️', type: 'Insoniy qurilma', distance: '400 km balandlikda', sound: 'Kosmik stansiya', facts: ['🛰️ Yer atrofida aylanadi', '👩‍🚀 Astronavtlar yashaydi', '🔬 Tadqiqot ishlari', '📡 Ma\'lumot yuboradi', '🌍 Yerni kuzatadi'] }
          ],
          quiz: [
            { question: 'Bizga yorug\'lik va issiqlik nima beradi?', options: ['Oy', 'Quyosh', 'Yulduzlar'], correct: 1, icon: '☀️' },
            { question: 'Yerning yo\'ldoshi nima?', options: ['Quyosh', 'Yulduz', 'Oy'], correct: 2, icon: '🌙' },
            { question: 'Biz qaysi sayyorada yashaymiz?', options: ['Yer', 'Quyosh', 'Oy'], correct: 0, icon: '🌍' },
            { question: 'Qaysi sayyora "Qizil sayyora" deb ataladi?', options: ['Mars', 'Jupiter', 'Saturn'], correct: 0, icon: '🔴' },
            { question: 'Halqalari bo\'lgan sayyora qaysi?', options: ['Mars', 'Saturn', 'Yer'], correct: 1, icon: '💍' },
            { question: 'Eng katta sayyora qaysi?', options: ['Yer', 'Jupiter', 'Saturn'], correct: 1, icon: '🪐' },
            { question: 'Kosmosdan keluvchi tosh nima deb ataladi?', options: ['Kometa', 'Meteorit', 'Yulduz'], correct: 1, icon: '💫' },
            { question: 'Astronavtlar qayerda yashaydi?', options: ['Oy', 'Mars', 'Kosmik stansiya'], correct: 2, icon: '🛰️' }
          ]
        };
      case 'ocean':
        return {
          items: [
            { id: 1, name: 'Baliq', icon: '🐠', habitat: 'Suv ostida', food: 'Algalar, plankton', sound: 'Baliq', facts: ['🏊 Suvda yashaydi', '🌈 Turli ranglarda', '🐟 Suzish uchun yaratilgan', '💧 Suv orqali nafas oladi', '🥚 Tuxum qo\'yadi'] },
            { id: 2, name: 'Kit', icon: '🐋', habitat: 'Okean', food: 'Plankton, kichik baliq', sound: 'Kit', facts: ['🏆 Eng katta hayvon', '💦 Suv purkaydi', '🧠 Juda aqlli', '🫁 Nafas olish uchun yuzaga chiqadi', '🎵 O\'ziga xos qo\'shiq aytadi'] },
            { id: 3, name: 'Delfin', icon: '🐬', habitat: 'Dengiz', food: 'Baliq, kalmar', sound: 'Delfin', facts: ['🧠 Juda aqlli', '🎮 O\'ynashni yaxshi ko\'radi', '👥 Insonlarga do\'st', '👥 Guruh bo\'lib yashaydi', '📡 Ultratovush ishlatadi'] },
            { id: 4, name: 'Dengiz yulduzi', icon: '⭐', habitat: 'Dengiz tubi', food: 'Mollusk, qisqichbaqalar', sound: 'Dengiz yulduzi', facts: ['🖐️ 5 ta qo\'li bor', '🎨 Rang o\'zgartiradi', '🐌 Sekin harakat qiladi', '🔄 Qo\'lini qayta o\'stiradi', '🏖️ Qirg\'oqda uchraydi'] },
            { id: 5, name: 'Qisqichbaqa', icon: '🦀', habitat: 'Qirg\'oq', food: 'Algalar, organik qoldiqlar', sound: 'Qisqichbaqa', facts: ['👈 Yon tomonga yuradi', '✂️ Qisqichlari bor', '🛡️ Qobig\'i qattiq', '🔄 Qobiq almashtiradi', '🏃 Tez yuguradi'] },
            { id: 6, name: 'Akula', icon: '🦈', habitat: 'Okean', food: 'Baliq, dengiz hayvonlari', sound: 'Akula', facts: ['💪 Kuchli yirtqich', '🏃 Juda tez suzadi', '🦷 O\'tkir tishlari bor', '👃 Hidni juda yaxshi sezadi', '⚡ 500 million yildan beri yashaydi'] },
            { id: 7, name: 'Sakkizoyoq', icon: '🐙', habitat: 'Dengiz tubi', food: 'Qisqichbaqa, baliq', sound: 'Sakkizoyoq', facts: ['🦵 8 ta oyog\'i bor', '🧠 3 ta yuragi bor', '🎨 Rang o\'zgartiradi', '🧠 Juda aqlli', '💧 Siyoh chiqaradi'] },
            { id: 8, name: 'Dengiz oti', icon: '🏇', habitat: 'Suv o\'tlari', food: 'Plankton', sound: 'Dengiz oti', facts: ['🐴 Otga o\'xshaydi', '👶 Erkagi homilador bo\'ladi', '🌊 Suvda tik turadi', '🤏 Kichkina hayvon', '💑 Bir juftlikda yashaydi'] },
            { id: 9, name: 'Medusa', icon: '🎐', habitat: 'Okean', food: 'Plankton, kichik baliq', sound: 'Medusa', facts: ['🎐 Shaffof tanasi', '⚡ Ba\'zilari zaharli', '🌊 Suv bilan harakat qiladi', '🧠 Miyasi yo\'q', '🔄 95% suv'] },
            { id: 10, name: 'Kalmar', icon: '🦑', habitat: 'Chuqur dengiz', food: 'Baliq, qisqichbaqa', sound: 'Kalmar', facts: ['🦑 Uzun tentakullari', '💧 Siyoh chiqaradi', '🚀 Reaktiv harakatlanadi', '👁️ Katta ko\'zlari bor', '🌌 Ba\'zilari gigant'] },
            { id: 11, name: 'Dengiz toshbaqasi', icon: '🐢', habitat: 'Issiq dengizlar', food: 'Dengiz o\'tlari', sound: 'Dengiz toshbaqasi', facts: ['🐢 Qobig\'i bor', '🏊 Yaxshi suzadi', '🥚 Qumda tuxum qo\'yadi', '⏳ 100 yildan ko\'p yashaydi', '🧭 Migratsiya qiladi'] },
            { id: 12, name: 'Pingvin', icon: '🐧', habitat: 'Sovuq dengizlar', food: 'Baliq, krill', sound: 'Pingvin', facts: ['🤵 Kostyumga o\'xshaydi', '🏊 Mukammal suzuvchi', '❄️ Sovuqni yaxshi ko\'taradi', '🥚 Tuxumni erkagi asradi', '👥 Katta koloniyalarda yashaydi'] },
            { id: 13, name: 'Dengiz arslon', icon: '🦭', habitat: 'Qirg\'oq', food: 'Baliq, kalmar', sound: 'Dengiz arslon', facts: ['🦭 Suv va quruqlikda yashaydi', '👏 Qo\'l chalib oladi', '🏊 Tez suzadi', '☀️ Quyoshda dam oladi', '👶 Bolalarini sut bilan boqadi'] },
            { id: 14, name: 'Elektr skat', icon: '⚡', habitat: 'Dengiz tubi', food: 'Kichik baliq, qurt', sound: 'Elektr skat', facts: ['⚡ Elektr toki chiqaradi', '🥞 Yassi tanasi', '🏖️ Qumda yashirinadi', '⚡ 200 volt toki', '🛡️ Himoya uchun'] },
            { id: 15, name: 'Dengiz kirpi', icon: '🔵', habitat: 'Tosh qoyalar', food: 'Algalar', sound: 'Dengiz kirpi', facts: ['🔴 Tikli shar', '🗿 Toshlarda yashaydi', '🌿 Algalar yeydi', '🦷 5 ta tishi bor', '🔄 Har tomonga harakat qiladi'] }
          ],
          quiz: [
            { question: 'Eng katta hayvon qaysi?', options: ['Delfin', 'Kit', 'Akula'], correct: 1, icon: '🐋' },
            { question: 'Qaysi hayvon yon tomonga yuradi?', options: ['Qisqichbaqa', 'Baliq', 'Delfin'], correct: 0, icon: '🦀' },
            { question: 'Insonlarga do\'st dengiz hayvoni?', options: ['Akula', 'Delfin', 'Qisqichbaqa'], correct: 1, icon: '🐬' },
            { question: '8 ta oyog\'i bor dengiz hayvoni?', options: ['Sakkizoyoq', 'Dengiz yulduzi', 'Qisqichbaqa'], correct: 0, icon: '🐙' },
            { question: 'Elektr toki chiqaradigan baliq?', options: ['Kit', 'Elektr skat', 'Delfin'], correct: 1, icon: '⚡' },
            { question: '100 yildan ko\'p yashaydigan hayvon?', options: ['Baliq', 'Dengiz toshbaqasi', 'Medusa'], correct: 1, icon: '🐢' },
            { question: 'Kostyumga o\'xshash dengiz hayvoni?', options: ['Pingvin', 'Dengiz arslon', 'Kit'], correct: 0, icon: '🐧' },
            { question: '5 ta qo\'li bor dengiz hayvoni?', options: ['Sakkizoyoq', 'Dengiz yulduzi', 'Kalmar'], correct: 1, icon: '⭐' }
          ]
        };
      default:
        return { items: [], quiz: [] };
    }
  };

  const content = getContent();

  // Quiz uchun ishlatilmagan savollar ichidan 5 ta tasodifiy savol tanlash
  const getRandomQuizQuestions = (allQuestions, usedQuestions, count = 5) => {
    // Ishlatilmagan savollarni topish
    const unusedQuestions = allQuestions.filter(
      (question, index) => !usedQuestions.includes(index)
    );
    
    // Agar ishlatilmagan savollar yetarli bo'lmasa, barcha savollarni qayta ishlatish
    const questionsToUse = unusedQuestions.length >= count ? unusedQuestions : allQuestions;
    
    // Tasodifiy tanlash
    const shuffled = [...questionsToUse].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, questionsToUse.length));
    
    // Tanlangan savollarning indekslarini topish
    const selectedIndices = selected.map(q => allQuestions.findIndex(aq => 
      aq.question === q.question && aq.correct === q.correct
    ));
    
    return { questions: selected, indices: selectedIndices };
  };

  const startQuiz = () => {
    const content = getContent();
    const { questions, indices } = getRandomQuizQuestions(content.quiz, usedQuestions, 5);
    
    setCurrentQuizQuestions(questions);
    setUsedQuestions(prev => [...prev, ...indices]);
    setQuizMode(true);
    setCurrentQuizIndex(0);
    setScore(0);
    
    // Agar barcha savollar ishlatilgan bo'lsa, usedQuestions ni tozalash
    if (usedQuestions.length + indices.length >= content.quiz.length) {
      setUsedQuestions(indices);
    }
  };

  const getScoreMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) {
      return { message: "Ajoyib! Siz hamma savolga to'g'ri javob berdingiz!", emoji: "🏆", color: "text-yellow-600" };
    } else if (percentage >= 80) {
      return { message: "Zo'r! Juda yaxshi natija!", emoji: "🌟", color: "text-green-600" };
    } else if (percentage >= 60) {
      return { message: "Yaxshi! Lekin yana mashq qiling!", emoji: "👍", color: "text-blue-600" };
    } else {
      return { message: "Yaxshi harakat! Yana bir bor urinib ko'ring!", emoji: "💪", color: "text-orange-600" };
    }
  };

  const showQuizCompletionAlert = (finalScore) => {
    const scoreMessage = getScoreMessage(finalScore, currentQuizQuestions.length);
    const percentage = (finalScore / currentQuizQuestions.length) * 100;
    
    // Get stars based on score
    let stars = "";
    if (percentage >= 33.33) stars += "⭐";
    if (percentage >= 66.66) stars += "⭐";
    if (percentage === 100) stars += "⭐";
    
    const alertMessage = `
      ${scoreMessage.emoji} Quiz tugadi!
      
      Natija: ${finalScore}/${currentQuizQuestions.length} ${stars}
      
      ${scoreMessage.message}
    `;

    if (percentage === 100) {
      toast.success(alertMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (percentage >= 80) {
      toast.success(alertMessage, {
        position: "top-center",
        autoClose: 4000,
      });
    } else if (percentage >= 60) {
      toast.info(alertMessage, {
        position: "top-center",
        autoClose: 4000,
      });
    } else {
      toast.warning(alertMessage, {
        position: "top-center",
        autoClose: 4000,
      });
    }
  };

  const handleQuizAnswer = (selectedOption) => {
    const currentQuestion = currentQuizQuestions[currentQuizIndex];
    const newScore = score + (selectedOption === currentQuestion.correct ? 1 : 0);
    setScore(newScore);
    
    if (currentQuizIndex + 1 < currentQuizQuestions.length) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setTimeout(() => {
        showQuizCompletionAlert(newScore);
        setQuizMode(false);
        setScore(0);
        setCurrentQuizIndex(0);
      }, 500);
    }
  };


  if (quizMode) {
    const currentQuestion = currentQuizQuestions[currentQuizIndex];
    const buttonColors = [
      'from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600',
      'from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600', 
      'from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600',
      'from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600'
    ];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 py-8 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce">⭐</div>
        <div className="absolute top-20 right-20 text-3xl animate-pulse">🌟</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-pulse" style={{animationDelay: '1s'}}>💫</div>
        <div className="absolute top-1/2 left-5 text-2xl animate-bounce" style={{animationDelay: '1.5s'}}>🎯</div>
        <div className="absolute top-1/3 right-5 text-2xl animate-pulse" style={{animationDelay: '2s'}}>🎉</div>
        
        <div className="max-w-3xl mx-auto px-6 z-10">
          <div className="bg-white rounded-3xl p-10 shadow-2xl text-center border-4 border-gradient-to-r from-yellow-300 to-pink-300 relative">
            {/* Decorative corners */}
            <div className="absolute top-2 left-2 text-2xl">🌈</div>
            <div className="absolute top-2 right-2 text-2xl">🌈</div>
            <div className="absolute bottom-2 left-2 text-2xl">🌈</div>
            <div className="absolute bottom-2 right-2 text-2xl">🌈</div>
            
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  🧠 Quiz Savoli 🧠
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuizIndex + 1) / currentQuizQuestions.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-lg font-bold text-gray-600">
                Savol {currentQuizIndex + 1} / {currentQuizQuestions.length} | 
                <span className="ml-2 text-2xl">🏆 {score} ball</span>
              </div>
            </div>
            
            {/* Question icon with animation */}
            <div className="text-9xl mb-8 animate-bounce">{currentQuestion.icon}</div>
            
            {/* Question text */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-8 border-3 border-yellow-300">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {currentQuestion.question}
              </h2>
              <div className="text-4xl">🤔</div>
            </div>
            
            {/* Answer buttons */}
            <div className="grid gap-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  className={`w-full bg-gradient-to-r ${buttonColors[index % buttonColors.length]} text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl border-2 border-white`}
                >
                  <div className="flex items-center justify-center">
                    <span className="mr-3 text-2xl">
                      {index === 0 ? '🅰️' : index === 1 ? '🅱️' : '🅲️'}
                    </span>
                    {option}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Fun motivational text */}
            <div className="mt-8 text-center">
              <div className="text-6xl animate-pulse">🌟</div>
              <p className="text-lg font-bold text-purple-600 mt-2">
                Sen uddalaysan! 💪✨
              </p>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 text-xl animate-spin" style={{animationDuration: '3s'}}>🎪</div>
        <div className="absolute top-3/4 right-1/4 text-xl animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}>🎨</div>
      </div>
    );
  }

  if (selectedItem) {
    const item = selectedItem;
    const gradientColors = [
      'from-pink-400 to-purple-500',
      'from-blue-400 to-cyan-500', 
      'from-green-400 to-emerald-500',
      'from-orange-400 to-red-500',
      'from-indigo-400 to-purple-500',
      'from-yellow-400 to-orange-500'
    ];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <button 
            onClick={() => setSelectedItem(null)}
            className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-full hover:from-emerald-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 mb-8 text-lg font-bold shadow-lg"
          >
            ← 🏠 Orqaga
          </button>
          
          {/* Main Animal Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-gradient-to-r from-pink-200 to-purple-200 mb-8">
            <div className="text-center mb-8">
              <div className="text-9xl mb-6 animate-bounce">{item.icon}</div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                {item.name}
              </h1>
              {item.sound && (
                <button 
                  onClick={() => playAnimalSound(item.sound, item.name)}
                  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl active:scale-95"
                >
                  <svg 
                    className="w-6 h-6 mr-3 animate-pulse" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                  {item.sound}
                </button>
              )}
            </div>
            
            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {item.habitat && (
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 border-3 border-blue-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🏡</span>
                    <h3 className="text-xl font-bold text-blue-800">Yashash joyi</h3>
                  </div>
                  <p className="text-blue-700 text-lg font-semibold">{item.habitat}</p>
                </div>
              )}
              {item.food && (
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border-3 border-green-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🍽️</span>
                    <h3 className="text-xl font-bold text-green-800">Ozuqasi</h3>
                  </div>
                  <p className="text-green-700 text-lg font-semibold">{item.food}</p>
                </div>
              )}
              {item.color && (
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border-3 border-purple-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🎨</span>
                    <h3 className="text-xl font-bold text-purple-800">Rangi</h3>
                  </div>
                  <p className="text-purple-700 text-lg font-semibold">{item.color}</p>
                </div>
              )}
              {item.use && (
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border-3 border-teal-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🛠️</span>
                    <h3 className="text-xl font-bold text-teal-800">Foydalanish</h3>
                  </div>
                  <p className="text-teal-700 text-lg font-semibold">{item.use}</p>
                </div>
              )}
              {item.temperature && (
                <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-6 border-3 border-red-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🌡️</span>
                    <h3 className="text-xl font-bold text-red-800">Harorat</h3>
                  </div>
                  <p className="text-red-700 text-lg font-semibold">{item.temperature}</p>
                </div>
              )}
              {item.months && (
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 border-3 border-indigo-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">📅</span>
                    <h3 className="text-xl font-bold text-indigo-800">Oylar</h3>
                  </div>
                  <p className="text-indigo-700 text-lg font-semibold">{item.months}</p>
                </div>
              )}
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-gradient-to-r from-yellow-200 to-orange-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                🎉 Qiziqarli Faktlar! 🎉
              </h2>
              <p className="text-gray-600 text-lg">
                {category.type === 'animals_domestic' || category.type === 'animals_wild' 
                  ? 'Bu hayvon haqida ajoyib faktlarni bilib oling!' 
                  : 'Bu o\'simlik haqida qiziqarli ma\'lumotlarni bilib oling!'}
              </p>
            </div>
            
            <div className="grid gap-4">
              {item.facts.map((fact, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-r ${gradientColors[index % gradientColors.length]} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">⭐</span>
                    <p className="text-lg font-bold">{fact}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Fun Animation */}
            <div className="text-center mt-8">
              <div className="text-6xl animate-pulse">🌟✨🌟✨🌟</div>
              <p className="text-2xl font-bold text-purple-600 mt-4">Ajoyib, shunday emasmi? 🤗</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors text-lg font-semibold"
          >
            ← Orqaga
          </button>
          <button
            onClick={startQuiz}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors text-lg font-semibold"
          >
            🧠 Quiz o'ynash
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-emerald-800 mb-4">
            {category.icon} {category.title}
          </h1>
          <p className="text-xl text-emerald-600">{category.description}</p>
        </div>

        {/* Content items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[200px] flex flex-col justify-center border-4 border-emerald-200 relative"
            >
              <div 
                className="text-center cursor-pointer flex-grow"
                onClick={() => setSelectedItem(item)}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">
                  {item.name}
                </h3>
                {item.sound && (
                  <p className="text-emerald-600 italic mb-3">{item.sound}</p>
                )}
              </div>
              
              {/* Audio button */}
              {item.sound && (
                <div className="flex justify-center mt-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Kartochka ochilishini oldini olish
                      playAnimalSound(item.sound, item.name);
                    }}
                    className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-2 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-xl active:scale-95"
                  >
                    <svg 
                      className="w-5 h-5 animate-pulse" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeasonSubcategories({ category, onBack }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const subcategories = [
    {
      id: 1,
      title: "Bahor",
      description: "Mart, Aprel, May oylari",
      icon: '🌸',
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
      type: 'spring'
    },
    {
      id: 2,
      title: "Yoz",
      description: "Iyun, Iyul, Avgust oylari",
      icon: '☀️',
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
      type: 'summer'
    },
    {
      id: 3,
      title: "Kuz",
      description: "Sentyabr, Oktyabr, Noyabr oylari",
      icon: '🍂',
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
      type: 'autumn'
    },
    {
      id: 4,
      title: "Qish",
      description: "Dekabr, Yanvar, Fevral oylari",
      icon: '❄️',
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
      type: 'winter'
    }
  ];

  const openSubcategory = (subcategory) => {
    const modifiedCategory = {
      ...category,
      title: subcategory.title,
      type: `seasons_${subcategory.type}`,
      icon: subcategory.icon,
      description: subcategory.description
    };
    setSelectedSubcategory(modifiedCategory);
  };

  const closeSubcategory = () => {
    setSelectedSubcategory(null);
  };

  if (selectedSubcategory) {
    return <TabiatDetail category={selectedSubcategory} onBack={closeSubcategory} />;
  }

  return (
    <div className="min-h-screen bg-emerald-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <button 
            onClick={onBack}
            className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors mr-4 text-lg font-semibold"
          >
            ← Orqaga
          </button>
          <h1 className="text-5xl font-bold text-emerald-800">🍂 Fasllar</h1>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">
            Yil fasllarini tanlang
          </h2>
          <p className="text-xl text-emerald-600">
            Har bir faslning oylarini bilib oling
          </p>
        </div>

        {/* Subcategories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {subcategories.map((subcategory) => (
            <div
              key={subcategory.id}
              onClick={() => openSubcategory(subcategory)}
              className={`${subcategory.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[280px] flex flex-col justify-center border-4 ${subcategory.borderColor}`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${subcategory.iconBg} text-white shadow-lg`}
                >
                  <span className="text-3xl">{subcategory.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${subcategory.textColor} mb-3`}>
                  {subcategory.title}
                </h3>
                <p className={`text-lg ${subcategory.textColor} opacity-80`}>
                  {subcategory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimalSubcategories({ category, onBack }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const subcategories = [
    {
      id: 1,
      title: "Uy hayvonlari",
      description: "Uyda boqiladigan hayvonlar",
      icon: '🐱',
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
      type: 'domestic'
    },
    {
      id: 2,
      title: "Yovvoyi hayvonlar",
      description: "Tabiatda yashaydigan hayvonlar",
      icon: '🦁',
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
      type: 'wild'
    }
  ];

  const openSubcategory = (subcategory) => {
    const modifiedCategory = {
      ...category,
      title: subcategory.title,
      type: `animals_${subcategory.type}`,
      icon: subcategory.icon,
      description: subcategory.description
    };
    setSelectedSubcategory(modifiedCategory);
  };

  const closeSubcategory = () => {
    setSelectedSubcategory(null);
  };

  if (selectedSubcategory) {
    return <TabiatDetail category={selectedSubcategory} onBack={closeSubcategory} />;
  }

  return (
    <div className="min-h-screen bg-emerald-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <button 
            onClick={onBack}
            className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors mr-4 text-lg font-semibold"
          >
            ← Orqaga
          </button>
          <h1 className="text-5xl font-bold text-emerald-800">🦁 Hayvonlar</h1>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">
            Hayvonlar turlarini tanlang
          </h2>
          <p className="text-xl text-emerald-600">
            Uy va yovvoyi hayvonlar haqida bilib oling
          </p>
        </div>

        {/* Subcategories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subcategories.map((subcategory) => (
            <div
              key={subcategory.id}
              onClick={() => openSubcategory(subcategory)}
              className={`${subcategory.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[280px] flex flex-col justify-center border-4 ${subcategory.borderColor}`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${subcategory.iconBg} text-white shadow-lg`}
                >
                  <span className="text-3xl">{subcategory.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${subcategory.textColor} mb-3`}>
                  {subcategory.title}
                </h3>
                <p className={`text-lg ${subcategory.textColor} opacity-80`}>
                  {subcategory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabiat;