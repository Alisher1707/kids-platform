function Cartoons() {
  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-yellow-800 mb-6">
            🎬 Multfilmlar
          </h1>
          <p className="text-xl text-yellow-600 mb-8">
            Bu sahifa hozircha qurilmoqda. Tez orada ta'limiy multfilmlar mavjud bo'ladi.
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-yellow-200 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🎬</div>
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Tez orada!</h2>
            <p className="text-yellow-600">Qiziqarli multfilmlar orqali o'rganish</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartoons;