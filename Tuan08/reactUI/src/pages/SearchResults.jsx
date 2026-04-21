import { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown, ChevronUp, Star, Clock, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

const allRecipes = [
  { id: 1,  title: 'Avocado toast with egg',          time: '8 minutes',  img: '/images/visily-image-39.png' },
  { id: 2,  title: 'Granola bowl with berries',        time: '5 minutes',  img: '/images/visily-image-40.png' },
  { id: 3,  title: 'Fluffy buttermilk pancakes',       time: '20 minutes', img: '/images/visily-image-41.png' },
  { id: 4,  title: 'Chia seed pudding',                time: '5 minutes',  img: '/images/visily-image-42.png' },
  { id: 5,  title: 'Grilled chicken salad',            time: '25 minutes', img: '/images/visily-image-43.png' },
  { id: 6,  title: 'Pan-fried beef steak',             time: '35 minutes', img: '/images/visily-image-44.png' },
  { id: 7,  title: 'Baked salmon with herbs',          time: '40 minutes', img: '/images/visily-image-45.png' },
  { id: 8,  title: 'Greek salad classic',              time: '10 minutes', img: '/images/visily-image-46.png' },
  { id: 9,  title: 'Caesar salad deluxe',              time: '15 minutes', img: '/images/visily-image-47.png' },
  { id: 10, title: 'Corn salad with avocado',          time: '8 minutes',  img: '/images/visily-image-48.png' },
  { id: 11, title: 'Warm lentil salad',                time: '30 minutes', img: '/images/visily-image-49.png' },
  { id: 12, title: 'Chocolate lava cake',              time: '25 minutes', img: '/images/visily-image-50.png' },
  { id: 13, title: 'Italian-style tomato salad',       time: '14 minutes', img: '/images/visily-image-32.png' },
  { id: 14, title: 'Vegetable and meat stew',          time: '45 minutes', img: '/images/visily-image-72.png' },
  { id: 15, title: 'Roasted chicken with vegetables',  time: '60 minutes', img: '/images/visily-image-93.png' },
  { id: 16, title: 'Healthy green salad bowl',         time: '10 minutes', img: '/images/visily-container-136.png' },
  { id: 17, title: 'Classic beef burger',              time: '25 minutes', img: '/images/visily-image-105.png' },
  { id: 18, title: 'Creamy mushroom pasta',            time: '30 minutes', img: '/images/visily-image-130.png' },
];

const typeFilters = ['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'];
const ratingFilters = [5, 4, 3, 2, 1];

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Filter recipes by query (real-time)
  const filteredRecipes = query.trim()
    ? allRecipes.filter(r => r.title.toLowerCase().includes(query.trim().toLowerCase()))
    : allRecipes;
  const [selectedTypes, setSelectedTypes] = useState(['Grilled', 'Roasted']);
  const [selectedRatings, setSelectedRatings] = useState([4, 3, 2]);
  const [timeRange, setTimeRange] = useState([30, 50]);
  const [sortBy, setSortBy] = useState('A-Z');
  const [showTypeFilter, setShowTypeFilter] = useState(true);
  const [showTimeFilter, setShowTimeFilter] = useState(true);
  const [showRatingFilter, setShowRatingFilter] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleType = (type) => setSelectedTypes(prev =>
    prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
  );
  const toggleRating = (r) => setSelectedRatings(prev =>
    prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]
  );

  const totalPages = [1, 2, 3, 4, '...', 10, 11];

  return (
    <div className="w-full py-8 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* ─── Sidebar Filters ─── */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-28">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5 text-gray-700" />
              <h2 className="font-extrabold text-gray-800 uppercase tracking-widest text-sm">Filters</h2>
            </div>

            {/* Type */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between mb-4"
                onClick={() => setShowTypeFilter(v => !v)}
              >
                <span className="font-bold text-gray-800">Type</span>
                {showTypeFilter
                  ? <ChevronUp className="w-4 h-4 text-pink-500" />
                  : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              {showTypeFilter && (
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {typeFilters.map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <div
                        onClick={() => toggleType(type)}
                        className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors ${
                          selectedTypes.includes(type) ? 'bg-pink-500 border-pink-500' : 'border-gray-300 hover:border-pink-400'
                        }`}
                      >
                        {selectedTypes.includes(type) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Time */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between mb-4"
                onClick={() => setShowTimeFilter(v => !v)}
              >
                <span className="font-bold text-gray-800">Time</span>
                {showTimeFilter
                  ? <ChevronUp className="w-4 h-4 text-pink-500" />
                  : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              {showTimeFilter && (
                <div>
                  <div className="flex justify-between text-sm font-bold text-gray-700 mb-4">
                    <span>{timeRange[0]} minutes</span>
                    <span>{timeRange[1]} minutes</span>
                  </div>
                  <div className="relative h-6 flex items-center">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full relative">
                      <div
                        className="absolute h-1.5 bg-pink-500 rounded-full"
                        style={{
                          left: `${(timeRange[0] / 120) * 100}%`,
                          right: `${100 - (timeRange[1] / 120) * 100}%`
                        }}
                      />
                    </div>
                    <input
                      type="range" min="0" max="120"
                      value={timeRange[0]}
                      onChange={e => setTimeRange([+e.target.value, timeRange[1]])}
                      className="absolute w-full h-1.5 opacity-0 cursor-pointer"
                    />
                    <input
                      type="range" min="0" max="120"
                      value={timeRange[1]}
                      onChange={e => setTimeRange([timeRange[0], +e.target.value])}
                      className="absolute w-full h-1.5 opacity-0 cursor-pointer"
                    />
                    {/* Thumb visuals */}
                    <div
                      className="absolute w-5 h-5 bg-white border-2 border-pink-500 rounded-full shadow-md pointer-events-none"
                      style={{ left: `calc(${(timeRange[0] / 120) * 100}% - 10px)` }}
                    />
                    <div
                      className="absolute w-5 h-5 bg-white border-2 border-pink-500 rounded-full shadow-md pointer-events-none"
                      style={{ left: `calc(${(timeRange[1] / 120) * 100}% - 10px)` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="mb-8">
              <button
                className="w-full flex items-center justify-between mb-4"
                onClick={() => setShowRatingFilter(v => !v)}
              >
                <span className="font-bold text-gray-800">Rating</span>
                {showRatingFilter
                  ? <ChevronUp className="w-4 h-4 text-pink-500" />
                  : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              {showRatingFilter && (
                <div className="space-y-3">
                  {ratingFilters.map(r => (
                    <label key={r} className="flex items-center gap-3 cursor-pointer">
                      <div
                        onClick={() => toggleRating(r)}
                        className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors ${
                          selectedRatings.includes(r) ? 'bg-pink-500 border-pink-500' : 'border-gray-300 hover:border-pink-400'
                        }`}
                      >
                        {selectedRatings.includes(r) && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < r ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button className="w-full py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/25">
              Apply
            </button>
          </div>
        </aside>

        {/* ─── Results ─── */}
        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">
              {query ? (query.charAt(0).toUpperCase() + query.slice(1)) : 'All Recipes'}{' '}
              <span className="text-gray-400 font-semibold text-xl">({filteredRecipes.length})</span>
            </h1>
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white cursor-pointer"
              >
                <option>A-Z</option>
                <option>Z-A</option>
                <option>Newest</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          {/* Recipe Grid — 3 columns */}
          {filteredRecipes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              {/* Main message */}
              <p className="text-xl font-bold text-gray-900 mb-8 max-w-lg leading-snug">
                Sorry, no results were found for{' '}
                <span className="text-pink-500">"{query}"</span>
              </p>

              {/* Illustration */}
              <img
                src="/images/visily-image-105.png"
                alt="No results found"
                className="w-48 h-48 object-contain mb-8"
                onError={(e) => e.target.src = 'https://placehold.co/200x200?text=Not+Found'}
              />

              {/* Subtext */}
              <p className="text-gray-500 mb-8 text-base max-w-sm leading-relaxed">
                We have all your Independence Day sweets covered.
              </p>

              {/* Suggestion Pills */}
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { label: 'Sweet Cake', bg: 'bg-pink-100 text-pink-700' },
                  { label: 'Black Cake', bg: 'bg-indigo-100 text-indigo-700' },
                  { label: 'Pozole Verde', bg: 'bg-orange-100 text-orange-700' },
                  { label: 'Healthy food', bg: 'bg-cyan-100 text-cyan-700' },
                ].map(pill => (
                  <button
                    key={pill.label}
                    className={`px-5 py-2 rounded-full font-semibold text-sm transition-all hover:opacity-80 ${pill.bg}`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mb-12">
              {filteredRecipes.map(recipe => (
                <div key={recipe.id} className="group cursor-pointer">
                  <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm border border-gray-100 bg-gray-50">
                    <img
                      src={recipe.img}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative px-1">
                    <h3 className="font-bold text-gray-900 text-base leading-tight pr-8 line-clamp-2 mb-2">
                      {recipe.title}
                    </h3>
                    <button className="absolute top-0 right-1 text-pink-500 transition-colors">
                      <Bookmark className="w-5 h-5 stroke-pink-500" />
                    </button>
                    <div className="inline-flex items-center gap-1 bg-pink-50 text-pink-500 font-semibold text-sm px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4" />
                      {recipe.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1.5 pt-8 border-t border-gray-100">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {totalPages.map((page, i) => (
              <button
                key={i}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                className={`w-10 h-10 rounded-full font-bold text-sm flex items-center justify-center transition-colors ${
                  page === currentPage
                    ? 'bg-pink-500 text-white shadow-md shadow-pink-500/30'
                    : typeof page === 'number'
                    ? 'text-gray-600 hover:bg-gray-100'
                    : 'text-gray-400 cursor-default'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => p + 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
