import { useState, useEffect } from 'react';

function Cartoons() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const defaultVideos = [
    { id: 'YQHsXMglC9A', title: 'Bolalar uchun alifbo', thumbnail: `https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg` },
    { id: '_OBlgSz8sSM', title: 'Ranglar haqida', thumbnail: `https://img.youtube.com/vi/_OBlgSz8sSM/maxresdefault.jpg` },
    { id: 'hFdnZgHKgB4', title: 'Hayvonlar dunyosi', thumbnail: `https://img.youtube.com/vi/hFdnZgHKgB4/maxresdefault.jpg` },
    { id: 'WSjZ7emONZI', title: 'Raqamlar bilan tanishish', thumbnail: `https://img.youtube.com/vi/WSjZ7emONZI/maxresdefault.jpg` },
    { id: 'S0MzMNbaM4I', title: 'Meva va sabzavotlar', thumbnail: `https://img.youtube.com/vi/S0MzMNbaM4I/maxresdefault.jpg` },
    { id: 'eKmRkS1os7k', title: 'Transport vositalari', thumbnail: `https://img.youtube.com/vi/eKmRkS1os7k/maxresdefault.jpg` },
    { id: 'BaMW2PHqDzI', title: 'Odob-axloq qoidalari', thumbnail: `https://img.youtube.com/vi/BaMW2PHqDzI/maxresdefault.jpg` },
    { id: 'hLRGGT-zqfY', title: 'Tabiat va fasllar', thumbnail: `https://img.youtube.com/vi/hLRGGT-zqfY/maxresdefault.jpg` },
    { id: 'GCdwKhTtNNw', title: 'Do\'stlik haqida', thumbnail: `https://img.youtube.com/vi/GCdwKhTtNNw/maxresdefault.jpg` }
  ];

  useEffect(() => {
    // Sahifa yuklanganda bolalar uchun multfilmlarni yukla
    const loadInitialVideos = async () => {
      setLoading(true);
      try {
        const results = await searchYouTube("bolalar multfilm qo'shiqlar");
        if (results && results.length > 0) {
          setVideos(results);
        } else {
          setVideos(defaultVideos);
        }
      } catch (error) {
        // Error loading initial videos
        setVideos(defaultVideos);
      } finally {
        setLoading(false);
      }
    };

    loadInitialVideos();
  }, []);

  const searchYouTube = async (query) => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    
    if (!API_KEY) {
      // YouTube API key not found
      return defaultVideos;
    }

    try {
      // Agar "bolalar multfilm qo'shiqlar" qidiruvi bo'lsa, maxsus query
      let searchQuery;
      if (query === "bolalar multfilm qo'shiqlar") {
        searchQuery = "kids songs nursery rhymes uzbek children cartoon bolalar qo'shiqlar";
      } else {
        searchQuery = `${query} bolalar multfilm uzbek ta'limiy`;
      }
      
      // Boshlang'ich yuklash uchun 9ta, qidiruv uchun 18ta video
      const maxResults = query === "bolalar multfilm qo'shiqlar" ? 9 : 18;
      
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}&safeSearch=strict&videoDefinition=high&order=relevance`
      );

      if (!response.ok) {
        throw new Error(`YouTube API xatolik: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        return data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url
        }));
      }
      
      return defaultVideos;
    } catch (error) {
      // YouTube search error
      return defaultVideos;
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setVideos(defaultVideos);
      return;
    }

    setLoading(true);
    
    try {
      const results = await searchYouTube(searchQuery);
      setVideos(results);
    } catch (error) {
      // Search error
      setVideos(defaultVideos);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-800 mb-6">
            🎬 Multfilmlar
          </h1>
          <p className="text-xl text-yellow-600 mb-8">
            Bolalar uchun qiziqarli va ta'limiy multfilmlar
          </p>

          {/* Qidiruv input */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg border-4 border-yellow-200">
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Multfilm qidiring..."
                  className="flex-1 px-6 py-3 text-lg rounded-full border-none outline-none text-yellow-800 placeholder-yellow-400"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-yellow-400 hover:bg-yellow-500 text-yellow-800 font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-md"
                >
                  {loading ? '⏳' : '🔍'}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Loading holati */}
        {loading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⏳</div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">Videolar yuklanmoqda...</h3>
            <p className="text-yellow-600">Iltimos kuting</p>
          </div>
        )}

        {/* Video kartochkalari */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-yellow-200 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-video bg-black rounded-t-3xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  {video.title}
                </h3>
                <div className="flex items-center text-yellow-600">
                  <span className="text-sm">YouTube</span>
                  <span className="ml-2">🎥</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        {videos.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">Hech narsa topilmadi</h3>
            <p className="text-yellow-600">Boshqa kalit so'z bilan qidirib ko'ring</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cartoons;