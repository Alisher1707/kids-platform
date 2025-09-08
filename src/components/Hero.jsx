import { Link } from 'react-router';

function Hero() {
  const cards = [
    {
      id: 1,
      title: 'Darslar',
      description: 'Ta\'limiy darslar va mashqlar',
      icon: '📚',
      bg: 'var(--color-primary-100)',
      hover: 'var(--color-primary-200)',
      path: '/lessons'
    },
    {
      id: 2,
      title: 'O\'yinlar',
      description: 'Qiziqarli o\'quv o\'yinlari',
      icon: '🎮',
      bg: 'var(--color-success-100)',
      hover: 'var(--color-success-200)',
      path: '/games'
    },
    {
      id: 3,
      title: 'Multfilmlar',
      description: 'Ta\'limiy multfilmlar',
      icon: '🎬',
      bg: 'var(--color-purple-100)',
      hover: 'var(--color-purple-200)',
      path: '/cartoons'
    }
  ];

  return (
    <div 
      className="py-20"
      style={{
        background: `linear-gradient(to bottom right, var(--color-primary-50), var(--color-secondary-100))`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 
            className="text-6xl font-bold mb-6"
            style={{ color: 'var(--color-gray-800)' }}
          >
            Bolalar Ta'lim Dunyosi
          </h1>
          <p 
            className="text-2xl"
            style={{ color: 'var(--color-gray-600)' }}
          >
            3-6 yosh bolalar uchun o'quv va o'yin platformasi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map(card => (
            <Link
              key={card.id}
              to={card.path}
              className="rounded-2xl p-12 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[300px] flex flex-col justify-center"
              style={{
                backgroundColor: card.bg
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = card.hover}
              onMouseLeave={(e) => e.target.style.backgroundColor = card.bg}
            >
              <div className="text-center">
                <div className="text-8xl mb-6">
                  {card.icon}
                </div>
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{ color: 'var(--color-gray-800)' }}
                >
                  {card.title}
                </h3>
                <p 
                  className="text-lg"
                  style={{ color: 'var(--color-gray-600)' }}
                >
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