import { useState } from 'react';
import RussianLetters from './RussianLetters';
import LessonDetail from './LessonDetail';

function Russian({ onBack }) {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Буквы",
      description: "Rus alifbosi harflarini o'rganish",
      icon: '🔤',
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 2,
      title: "Слова",
      description: "Rus tilida so'zlarni o'rganish",
      icon: '📝',
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-400',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
  ];

  const openSection = (section) => {
    setSelectedSection(section);
  };

  const closeSection = () => {
    setSelectedSection(null);
    setSelectedLesson(null);
  };

  const openLesson = (lesson) => {
    setSelectedLesson(lesson);
  };

  const closeLesson = () => {
    setSelectedLesson(null);
  };

  if (selectedLesson) {
    return <LessonDetail lesson={selectedLesson} onBack={closeLesson} />;
  }

  if (selectedSection?.title === "Буквы") {
    return <RussianLetters onBack={closeSection} onLessonSelect={openLesson} />;
  }

  return (
    <div className="min-h-screen bg-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 mr-6"
          >
            ⬅️ Orqaga
          </button>
          <div className="text-center flex-1">
            <h1 className="text-5xl font-bold text-purple-800 mb-4">Rus tili</h1>
            <p className="text-xl text-purple-600">
              Rus tilini o'rganish uchun interaktiv darslar
            </p>
          </div>
        </div>

        {/* Sections kartochkalari */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => openSection(section)}
              className={`${section.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[280px] flex flex-col justify-center border-4 ${section.borderColor}`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${section.iconBg} text-white shadow-lg`}
                >
                  <span className="text-3xl">{section.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${section.textColor} mb-3`}>
                  {section.title}
                </h3>
                <p className={`text-lg ${section.textColor} opacity-80`}>
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Russian;