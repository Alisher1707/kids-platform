import { useState } from 'react';
import OnaTili from './OnaTili';
import LessonDetail from './LessonDetail';
import English from './English';
import Russian from './Russian';
import Matematika from './Matematika';

function Lessons() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const subjects = [
    {
      id: 1,
      title: "Ona tili",
      description: "O'zbek tili va adabiyoti darslari",
      icon: '📝',
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
    },
    {
      id: 2,
      title: "English",
      description: "Ingliz tili darslari",
      icon: '🇺🇸',
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-400',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
    },
    {
      id: 3,
      title: "Rus tili",
      description: "Rus tili darslari",
      icon: '🇷🇺',
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200',
    },
    {
      id: 4,
      title: "Matematika",
      description: "Raqamlar va hisob-kitob",
      icon: '🔢',
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200',
    },
    {
      id: 5,
      title: "Tabiat",
      description: "Atrofdagi olam haqida",
      icon: '🌱',
      bgColor: 'bg-emerald-100 hover:bg-emerald-200',
      iconBg: 'bg-emerald-400',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200',
    },
    {
      id: 6,
      title: "Ertaklar",
      description: "Qiziqarli va ibratli ertaklar",
      icon: '📖',
      bgColor: 'bg-indigo-100 hover:bg-indigo-200',
      iconBg: 'bg-indigo-400',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200',
    },
  ];

  const openSubject = (subject) => {
    setSelectedSubject(subject);
  };

  const closeSubject = () => {
    setSelectedSubject(null);
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

  if (selectedSubject?.title === "Ona tili") {
    return <OnaTili onBack={closeSubject} onLessonSelect={openLesson} />;
  }

  if (selectedSubject?.title === "English") {
    return <English onBack={closeSubject} />;
  }

  if (selectedSubject?.title === "Rus tili") {
    return <Russian onBack={closeSubject} />;
  }

  if (selectedSubject?.title === "Matematika") {
    return <Matematika onBack={closeSubject} />;
  }

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-800 mb-6">📚 Darslar</h1>
          <p className="text-xl text-blue-600 mb-8">
            Bolalar uchun qiziqarli ta'limiy darslar
          </p>
        </div>

        {/* Darslar kartochkalari */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() => openSubject(subject)}
              className={`${subject.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[280px] flex flex-col justify-center border-4 ${subject.borderColor}`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${subject.iconBg} text-white shadow-lg`}
                >
                  <span className="text-3xl">{subject.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${subject.textColor} mb-3`}>
                  {subject.title}
                </h3>
                <p className={`text-lg ${subject.textColor} opacity-80`}>
                  {subject.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lessons;