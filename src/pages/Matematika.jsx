import { useState } from 'react';
import MatematikaNumbers from './MatematikaNumbers';
import MatematikaOperations from './MatematikaOperations';
import MatematikaTest from './MatematikaTest';

function Matematika({ onBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const mathTopics = [
    {
      id: 1,
      title: "Sonlar bilan tanishish",
      description: "1 dan 100 gacha sonlarni o'rganamiz",
      icon: "🔢",
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
      component: 'numbers',
      visual: "📊"
    },
    {
      id: 2,
      title: "Qo'shish va Ayirish",
      description: "Rasmlar bilan oddiy hisob-kitob",
      icon: "➕➖",
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
      component: 'operations',
      visual: "🧮"
    },
    {
      id: 3,
      title: "Matematik Test",
      description: "Qiziqarli savollar va testlar",
      icon: "🧠",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
      component: 'test',
      visual: "🏆"
    },
  ];

  const openTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const closeTopic = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic?.component === 'numbers') {
    return <MatematikaNumbers onBack={closeTopic} />;
  }

  if (selectedTopic?.component === 'operations') {
    return <MatematikaOperations onBack={closeTopic} />;
  }

  if (selectedTopic?.component === 'test') {
    return <MatematikaTest onBack={closeTopic} />;
  }

  return (
    <div className="min-h-screen bg-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-orange-200 text-orange-800 rounded-full hover:bg-orange-300 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>←</span> Orqaga
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-orange-800 mb-6">🔢 Matematika</h1>
          <p className="text-2xl text-orange-600 mb-8">
            Sonlar va hisob-kitob dunyosiga sayohat qilamiz!
          </p>
        </div>

        {/* Matematik mavzular kartochkalari */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mathTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => openTopic(topic)}
              className={`${topic.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[320px] flex flex-col justify-center border-4 ${topic.borderColor} relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-4 right-4 text-6xl opacity-20">
                {topic.visual}
              </div>
              
              <div className="text-center relative z-10">
                <div
                  className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${topic.iconBg} text-white shadow-lg transform hover:rotate-12 transition-transform`}
                >
                  <span className="text-3xl">{topic.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${topic.textColor} mb-4`}>
                  {topic.title}
                </h3>
                <p className={`text-lg ${topic.textColor} opacity-80 leading-relaxed`}>
                  {topic.description}
                </p>
                
                {/* Fun elements */}
                <div className="mt-6 flex justify-center gap-2">
                  <span className="text-2xl animate-bounce">⭐</span>
                  <span className="text-2xl animate-bounce delay-100">✨</span>
                  <span className="text-2xl animate-bounce delay-200">🎯</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="text-center mt-16">
          <div className="text-6xl mb-4">
            <span className="animate-pulse">🎲</span>
            <span className="animate-bounce mx-4">📐</span>
            <span className="animate-pulse">📏</span>
          </div>
          <p className="text-xl text-orange-600 font-medium">
            Matematik sarguzashtlar sizni kutmoqda!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Matematika;