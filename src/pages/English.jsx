import { useState } from 'react';
import EnglishLetters from './EnglishLetters';
import EnglishWords from './EnglishWords';
import LessonDetail from './LessonDetail';

function English({ onBack }) {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Letters",
      description: "Learn English alphabet letters",
      icon: '🔤',
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      title: "Words",
      description: "Learn English words and vocabulary",
      icon: '📝',
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
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

  if (selectedSection?.title === "Letters") {
    return <EnglishLetters onBack={closeSection} onLessonSelect={openLesson} />;
  }

  if (selectedSection?.title === "Words") {
    return <EnglishWords onBack={closeSection} onLessonSelect={openLesson} />;
  }

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
            <h1 className="text-5xl font-bold text-red-800 mb-4">English</h1>
            <p className="text-xl text-red-600">
              Interactive lessons for learning English
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

export default English;