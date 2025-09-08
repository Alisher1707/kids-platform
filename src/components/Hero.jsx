import { Link } from 'react-router';

function Hero() {
  const cards = [
    {
      id: 1,
      title: 'Darslar',
      description: 'Ta\'limiy darslar va mashqlar',
      icon: '📚',
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      path: '/lessons'
    },
    {
      id: 2,
      title: 'O\'yinlar',
      description: 'Qiziqarli o\'quv o\'yinlari',
      icon: '🎮',
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-400',
      textColor: 'text-pink-800',
      path: '/games'
    },
    {
      id: 3,
      title: 'Multfilmlar',
      description: 'Ta\'limiy multfilmlar',
      icon: '🎬',
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      iconBg: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      path: '/cartoons'
    }
  ];

  return (
    <div className="bg-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-purple-800 mb-6">
            Bolalar Ta'lim Dunyosi
          </h1>
          <p className="text-2xl text-purple-600">
            3-6 yosh bolalar uchun o'quv va o'yin platformasi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map(card => (
            <Link
              key={card.id}
              to={card.path}
              className={`${card.bgColor} rounded-3xl p-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[280px] flex flex-col justify-center border-4 border-white`}
            >
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${card.iconBg} text-white shadow-lg`}>
                  <span className="text-3xl">{card.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${card.textColor} mb-3`}>
                  {card.title}
                </h3>
                <p className={`text-lg ${card.textColor} opacity-80`}>
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;