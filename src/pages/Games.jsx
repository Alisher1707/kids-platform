function Games() {
  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-pink-800 mb-6">
            🎮 O'yinlar
          </h1>
          <p className="text-xl text-pink-600 mb-8">
            Bu sahifa hozircha qurilmoqda. Tez orada qiziqarli o'yinlar mavjud bo'ladi.
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-pink-200 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold text-pink-800 mb-4">Tez orada!</h2>
            <p className="text-pink-600">O'yin va o'rganish birgalikda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;