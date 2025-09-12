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
    setSelectedCategory(category);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
  };

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

  const getContent = () => {
    switch (category.type) {
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
            { id: 1, name: 'Atirgul', icon: '🌹', color: 'Qizil', use: 'Hid uchun', facts: ['Sevgi ramzi', 'Yoqimli hidi bor', 'Tikanlari bor'] },
            { id: 2, name: 'Quyoshgul', icon: '🌻', color: 'Sariq', use: 'Yog\' uchun', facts: ['Quyoshga qaraydi', 'Baland o\'sadi', 'Urug\'i foydali'] },
            { id: 3, name: 'Olma daraxti', icon: '🍎', color: 'Yashil', use: 'Meva uchun', facts: ['Mazali meva beradi', 'Bahorda gulab chiqaradi', 'Foydali vitaminlar bor'] },
            { id: 4, name: 'Eman daraxti', icon: '🌳', color: 'Yashil', use: 'Soya uchun', facts: ['Juda kuchli', 'Uzoq yashaydi', 'Katta soya beradi'] },
            { id: 5, name: 'Sebarga', icon: '🥕', color: 'To\'q sariq', use: 'Taom uchun', facts: ['Ko\'z uchun foydali', 'Yer ostida o\'sadi', 'Vitaminli'] },
            { id: 6, name: 'Paxta', icon: '🌿', color: 'Oq', use: 'Kiyim uchun', facts: ['Oq paxta beradi', 'Kiyim tayyorlashda ishlatiladi', 'O\'zbekistonning asosiy ekinlaridan'] }
          ],
          quiz: [
            { question: 'Qaysi o\'simlik quyoshga qaraydi?', options: ['Atirgul', 'Quyoshgul', 'Eman'], correct: 1, icon: '🌻' },
            { question: 'Olma nima beradi?', options: ['Gul', 'Meva', 'Paxta'], correct: 1, icon: '🍎' },
            { question: 'Sevgi ramzi qaysi gul?', options: ['Atirgul', 'Quyoshgul', 'Paxta'], correct: 0, icon: '🌹' }
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
            { id: 1, name: 'Quyosh', icon: '☀️', type: 'Yulduz', distance: 'Juda uzoq', facts: ['Bizning eng yaqin yulduzimiz', 'Juda issiq', 'Yorug\'lik va issiqlik beradi'] },
            { id: 2, name: 'Oy', icon: '🌙', type: 'Yo\'ldosh', distance: 'Yaqin', facts: ['Yerning yo\'ldoshi', 'Kechasi yorug\'lik beradi', 'Shaklini o\'zgartiradi'] },
            { id: 3, name: 'Yulduzlar', icon: '⭐', type: 'Yulduzlar', distance: 'Juda-juda uzoq', facts: ['Kechasi porlaydi', 'Turli rangda bo\'ladi', 'Juda ko\'p'] },
            { id: 4, name: 'Yer', icon: '🌍', type: 'Sayyora', distance: 'Bu yerda', facts: ['Bizning uyimiz', 'Suvi bor', 'Jonli mavjudotlar yashaydi'] },
            { id: 5, name: 'Bulutlar', icon: '☁️', type: 'Suv bug\'i', distance: 'Osmonda', facts: ['Suvdan hosil bo\'ladi', 'Turli shakllarda', 'Yomg\'ir beradi'] },
            { id: 6, name: 'Kamalak', icon: '🌈', type: 'Yorug\'lik', distance: 'Yaqin', facts: ['Ranglar to\'plami', 'Yomg\'irdan keyin', 'Juda chiroyli'] }
          ],
          quiz: [
            { question: 'Bizga yorug\'lik va issiqlik nima beradi?', options: ['Oy', 'Quyosh', 'Yulduzlar'], correct: 1, icon: '☀️' },
            { question: 'Yerning yo\'ldoshi nima?', options: ['Quyosh', 'Yulduz', 'Oy'], correct: 2, icon: '🌙' },
            { question: 'Biz qaysi sayyorada yashaymiz?', options: ['Yer', 'Quyosh', 'Oy'], correct: 0, icon: '🌍' }
          ]
        };
      case 'ocean':
        return {
          items: [
            { id: 1, name: 'Baliq', icon: '🐠', habitat: 'Suv ostida', food: 'Algalar', facts: ['Suvda yashaydi', 'Turli ranglarda', 'Suzish uchun yaratilgan'] },
            { id: 2, name: 'Kit', icon: '🐋', habitat: 'Okeanda', food: 'Plankton', facts: ['Eng katta hayvon', 'Suv purkaydi', 'Juda aqlli'] },
            { id: 3, name: 'Delfin', icon: '🐬', habitat: 'Dengizda', food: 'Baliq', facts: ['Juda aqlli', 'O\'ynashni yaxshi ko\'radi', 'Insonlarga do\'st'] },
            { id: 4, name: 'Dengiz yulduzi', icon: '⭐', habitat: 'Dengiz tubi', food: 'Molluskalar', facts: ['5 ta qo\'li bor', 'Rang o\'zgartiradi', 'Sekin harakat qiladi'] },
            { id: 5, name: 'Kraب', icon: '🦀', habitat: 'Qirg\'oq', food: 'Algalar', food: 'Organik qoldiqlar', facts: ['Yon tomonga yuradi', 'Qisqichlari bor', 'Qobig\'i qattiq'] },
            { id: 6, name: 'Chuchala baliq', icon: '🦈', habitat: 'Okeanda', food: 'Baliq', facts: ['Kuchli predator', 'Juda tez suzadi', 'O\'tkir tishlari bor'] }
          ],
          quiz: [
            { question: 'Eng katta hayvon qaysi?', options: ['Delfin', 'Kit', 'Chuchala baliq'], correct: 1, icon: '🐋' },
            { question: 'Qaysi hayvon yon tomonga yuradi?', options: ['Kraб', 'Baliq', 'Delfin'], correct: 0, icon: '🦀' },
            { question: 'Insonlarga do\'st dengiz hayvoni?', options: ['Chuchala baliq', 'Delfin', 'Kraб'], correct: 1, icon: '🐬' }
          ]
        };
      default:
        return { items: [], quiz: [] };
    }
  };

  const content = getContent();

  const startQuiz = () => {
    setQuizMode(true);
    setCurrentQuizIndex(0);
    setScore(0);
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
    const scoreMessage = getScoreMessage(finalScore, content.quiz.length);
    const percentage = (finalScore / content.quiz.length) * 100;
    
    // Get stars based on score
    let stars = "";
    if (percentage >= 33.33) stars += "⭐";
    if (percentage >= 66.66) stars += "⭐";
    if (percentage === 100) stars += "⭐";
    
    const alertMessage = `
      ${scoreMessage.emoji} Quiz tugadi!
      
      Natija: ${finalScore}/${content.quiz.length} ${stars}
      
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
    const currentQuestion = content.quiz[currentQuizIndex];
    const newScore = score + (selectedOption === currentQuestion.correct ? 1 : 0);
    setScore(newScore);
    
    if (currentQuizIndex + 1 < content.quiz.length) {
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
    const currentQuestion = content.quiz[currentQuizIndex];
    return (
      <div className="min-h-screen bg-blue-50 py-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
            <div className="text-6xl mb-6">{currentQuestion.icon}</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              {currentQuestion.question}
            </h2>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded-xl transition-colors text-xl"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-6 text-blue-600">
              Savol {currentQuizIndex + 1}/{content.quiz.length} | Ball: {score}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedItem) {
    const item = selectedItem;
    return (
      <div className="min-h-screen bg-emerald-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <button 
            onClick={() => setSelectedItem(null)}
            className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors mb-8 text-lg font-semibold"
          >
            ← Orqaga
          </button>
          
          <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
            <div className="text-8xl mb-6">{item.icon}</div>
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">{item.name}</h1>
            
            {/* Har xil kategoriya uchun turli ma'lumotlar */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {item.sound && (
                <div className="bg-green-100 rounded-xl p-4">
                  <h3 className="font-bold text-green-800">Ovozi:</h3>
                  <p className="text-green-700 text-xl">{item.sound}</p>
                </div>
              )}
              {item.habitat && (
                <div className="bg-blue-100 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800">Yashash joyi:</h3>
                  <p className="text-blue-700">{item.habitat}</p>
                </div>
              )}
              {item.color && (
                <div className="bg-purple-100 rounded-xl p-4">
                  <h3 className="font-bold text-purple-800">Rangi:</h3>
                  <p className="text-purple-700">{item.color}</p>
                </div>
              )}
              {item.months && (
                <div className="bg-orange-100 rounded-xl p-4">
                  <h3 className="font-bold text-orange-800">Oylar:</h3>
                  <p className="text-orange-700">{item.months}</p>
                </div>
              )}
              {item.weather && (
                <div className="bg-yellow-100 rounded-xl p-4">
                  <h3 className="font-bold text-yellow-800">Ob-havo:</h3>
                  <p className="text-yellow-700">{item.weather}</p>
                </div>
              )}
            </div>

            {/* Qiziqarli faktlar */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">🧠 Qiziqarli faktlar:</h3>
              <div className="space-y-3">
                {item.facts.map((fact, index) => (
                  <div key={index} className="bg-emerald-100 rounded-xl p-4">
                    <p className="text-emerald-800 font-semibold">✨ {fact}</p>
                  </div>
                ))}
              </div>
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
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-3xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[200px] flex flex-col justify-center border-4 border-emerald-200"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">
                  {item.name}
                </h3>
                {item.sound && (
                  <p className="text-emerald-600 italic">{item.sound}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabiat;