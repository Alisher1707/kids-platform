function Lessons() {
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-6">
            📚 Darslar
          </h1>
          <p className="text-xl text-blue-600 mb-8">
            Bu sahifa hozircha qurilmoqda. Tez orada ta'limiy darslar mavjud bo'ladi.
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-blue-200 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Tez orada!</h2>
            <p className="text-blue-600">Qiziqarli darslar va mashqlar bilan tanishing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lessons;