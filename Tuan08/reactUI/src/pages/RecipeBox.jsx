import { useState } from 'react';
import { Share2, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const savedRecipes = [
  { id: 1, title: 'Italian-style tomato salad', time: '14 minutes', img: '/images/visily-image-39.png' },
  { id: 2, title: 'Vegetable and meat stew', time: '45 minutes', img: '/images/visily-image-40.png' },
  { id: 3, title: 'Roasted chicken with vegetables', time: '60 minutes', img: '/images/visily-image-41.png' },
  { id: 4, title: 'Healthy green salad', time: '10 minutes', img: '/images/visily-image-42.png' },
  { id: 5, title: 'Classic beef burger', time: '25 minutes', img: '/images/visily-image-43.png' },
  { id: 6, title: 'Fresh fruit smoothie', time: '5 minutes', img: '/images/visily-image-44.png' },
  { id: 7, title: 'Grilled Salmon with Lemon', time: '35 minutes', img: '/images/visily-image-45.png' },
  { id: 8, title: 'Creamy Mushroom Soup', time: '20 minutes', img: '/images/visily-image-46.png' },
];

export default function RecipeBox() {
  const [activeTab, setActiveTab] = useState('Saved Recipes');

  return (
    <div className="w-full py-8 px-6 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="text-sm mb-4">
        <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <span className="text-gray-400 mx-2">{'>'}</span>
        <span className="text-pink-500 font-medium">Your Recipe Box</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold font-serif text-gray-900 mb-8">Emma Gonzalez's Recipe Box</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-3xl p-8 mb-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 bg-pink-100 rounded-full scale-110 -z-10"></div>
          <img
            src="/images/visily-avatar-42.png"
            alt="Emma Gonzalez"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-sm"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former line cook and catering manager to help home cooks discover practical, delicious recipes. She is passionate about sharing her culinary journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
            <span className="text-pink-500 font-bold text-lg">6.5k Subscribes</span>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 transition shadow-lg shadow-pink-500/30">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-4 mb-10 border-b border-gray-100 pb-2">
        {['Saved Recipes', 'Folders', 'Recipes by Genevieve'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-bold transition-all ${activeTab === tab
                ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                : 'bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12">
        {savedRecipes.map(recipe => (
          <div key={recipe.id} className="group cursor-pointer">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm border border-gray-100">
              <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="px-1 relative">
              <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 pr-8">{recipe.title}</h3>
              <Bookmark className="w-5 h-5 text-pink-500 absolute top-0 right-1 cursor-pointer hover:fill-pink-500 transition-colors" />
              <div className="text-pink-500 font-medium text-sm px-2 py-1 bg-pink-50 inline-block rounded-lg mt-1">
                {recipe.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8 border-t border-gray-100">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-900">
          <ChevronLeft className="w-5 h-5" />
        </button>

        {[1, 2, 3, 4, '...', 10, 11].map((page, i) => (
          <button
            key={i}
            className={`w-10 h-10 rounded-full font-bold transition-colors flex items-center justify-center ${page === 1
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            {page}
          </button>
        ))}

        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
