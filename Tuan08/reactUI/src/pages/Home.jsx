import { Clock, Bookmark, Play } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

// ── Data ─────────────────────────────────────────────────────────────────────

const summerRecipes = [
  { id: 1, title: 'Italian-style tomato salad', time: '14 minutes', img: '/images/visily-image-39.png' },
  { id: 2, title: 'Spaghetti with vegetables & shrimp', time: '30 minutes', img: '/images/visily-image-40.png' },
  { id: 3, title: 'Lotus delight salad', time: '18 minutes', img: '/images/visily-image-41.png' },
  { id: 4, title: 'Snack cakes', time: '25 minutes', img: '/images/visily-image-42.png' },
];

const videoRecipes = [
  { id: 5, title: 'Salad with cabbage and shrimp', time: '20 minutes', img: '/images/visily-image-43.png' },
  { id: 6, title: 'Baked corn beans', time: '35 minutes', img: '/images/visily-image-44.png' },
  { id: 7, title: 'Sunny-side up fried eggs', time: '10 minutes', img: '/images/visily-image-45.png' },
  { id: 8, title: 'Stuffed sticky rice ball', time: '45 minutes', img: '/images/visily-image-46.png' },
];

const editorPicks = [
  {
    id: 9,
    title: 'Strawberry smoothie',
    time: '5 minutes',
    img: '/images/visily-image-47.png',
    author: 'Jennifer King',
    desc: 'A refreshing blend of fresh strawberries, banana, and yogurt. Perfect for a quick and healthy breakfast or snack on the go.',
  },
  {
    id: 10,
    title: 'Latte Art cappuccino',
    time: '10 minutes',
    img: '/images/visily-image-48.png',
    author: 'Marcus Allen',
    desc: 'Learn how to create stunning latte art with this step-by-step guide for making the perfect creamy cappuccino at home.',
  },
  {
    id: 11,
    title: 'Butter fried noodles',
    time: '20 minutes',
    img: '/images/visily-image-49.png',
    author: 'Sophie Turner',
    desc: 'Rich and savory buttered noodles tossed with garlic, parmesan, and fresh herbs. Simple ingredients, extraordinary flavor.',
  },
  {
    id: 12,
    title: 'Pan-fried beef steak',
    time: '35 minutes',
    img: '/images/visily-image-50.png',
    author: 'James Wilson',
    desc: 'A perfectly seared beef steak with rosemary butter sauce. Restaurant quality made easy right in your own kitchen.',
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function StandardCard({ recipe }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm">
        <img
          src={recipe.img}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => e.target.src = 'https://placehold.co/400x400?text=Food'}
        />
        <button
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all shadow-sm ${saved ? 'bg-pink-500 text-white' : 'bg-white/90 text-pink-400 hover:bg-pink-50'
            }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
        </button>
      </div>
      <div className="px-1">
        <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2">{recipe.title}</h3>
        <span className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-500 text-sm font-semibold px-3 py-1 rounded-lg">
          <Clock className="w-3.5 h-3.5" /> {recipe.time}
        </span>
      </div>
    </div>
  );
}

function VideoCard({ recipe }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm">
        <img
          src={recipe.img}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => e.target.src = 'https://placehold.co/400x400?text=Food'}
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 text-pink-500 fill-pink-500 ml-0.5" />
          </div>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all shadow-sm ${saved ? 'bg-pink-500 text-white' : 'bg-white/90 text-pink-400 hover:bg-pink-50'
            }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
        </button>
      </div>
      <div className="px-1">
        <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2">{recipe.title}</h3>
        <span className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-500 text-sm font-semibold px-3 py-1 rounded-lg">
          <Clock className="w-3.5 h-3.5" /> {recipe.time}
        </span>
      </div>
    </div>
  );
}

function EditorPickCard({ recipe }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="group flex gap-5 bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
      {/* Square Image */}
      <div className="relative w-36 h-36 flex-shrink-0 rounded-2xl overflow-hidden">
        <img
          src={recipe.img}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => e.target.src = 'https://placehold.co/200x200?text=Food'}
        />
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-1 relative">
        <button
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className={`absolute top-0 right-0 p-1.5 rounded-full transition-all ${saved ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'
            }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-pink-500' : ''}`} />
        </button>

        <div>
          <div className="flex items-center gap-2 mb-1.5 pr-8">
            <h3 className="font-bold text-gray-900 leading-snug line-clamp-1">{recipe.title}</h3>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-medium mb-2">
            <Clock className="w-3 h-3" /> {recipe.time}
          </span>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{recipe.desc}</p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mt-3">
          <img
            src="/images/visily-avatar-42.png"
            alt={recipe.author}
            className="w-7 h-7 rounded-full object-cover border-2 border-pink-50"
            onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(recipe.author)}&background=fce7f3&color=ec4899&size=28`}
          />
          <span className="text-sm font-semibold text-gray-700">{recipe.author}</span>
        </div>
      </div>
    </div>
  );
}

// ── Section Header ────────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{title}</h2>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const { isLoggedIn, setShowLoginModal } = useAuth();

  return (
    <div className="w-full">

      {/* ── Banner ── */}
      {!isLoggedIn ? (
        <section className="w-full rounded-3xl my-6 overflow-hidden relative shadow-md min-h-[450px] flex flex-col items-center justify-center text-center group cursor-pointer">
          <img
            src="/images/visily-image-32.png"
            alt="Welcome to Chefify"
            className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700"
            onError={(e) => e.target.src = 'https://placehold.co/1200x450'}
          />
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
          <div className="relative z-20 px-6 py-12 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Discover Your Next <br /> <span className="text-pink-400">Favorite Recipe</span>
            </h1>
            <p className="text-gray-100 mb-10 max-w-2xl text-lg md:text-xl mx-auto drop-shadow-md font-medium">
              Chefify is your personal recipe box. Search thousands of recipes, plan your meals, and get inspired every day.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => setShowLoginModal(true)} className="px-8 py-3.5 bg-pink-500 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-lg shadow-pink-500/30">
                Get Started for Free
              </button>
              <Link to="/pricing" className="px-8 py-3.5 bg-white/20 backdrop-blur-md text-white border-2 border-white/50 rounded-full font-bold text-lg hover:bg-white/30 transition shadow-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="w-full rounded-3xl my-6 overflow-hidden relative shadow-md min-h-[400px] flex items-center group cursor-pointer">
          <img
            src="/images/visily-image-32.png"
            alt="Recipe of the day"
            className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none" />
          <div className="relative z-20 p-10 md:p-14 w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center text-left">
            <span className="text-pink-400 font-extrabold uppercase tracking-widest text-xs mb-4 block">Recipe of the day</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              Delicious <br /> Sweet & Savory <br /> Pancakes
            </h1>
            <p className="text-gray-200 mb-8 text-base leading-relaxed drop-shadow-md">
              Start your day right with fluffy pancakes, topped with fresh berries and maple syrup.
            </p>
            <button className="px-8 py-3 bg-pink-500 text-white rounded-full font-bold text-sm hover:bg-pink-600 transition shadow-lg shadow-pink-500/30 w-fit">
              View Recipe
            </button>
          </div>
        </section>
      )}

      {/* ── Recipe Sections (full-width, no sidebar) ── */}
      <div className="py-8 px-6 space-y-16">

        {/* 1 ── This Summer Recipes — 4-column grid */}
        <section>
          <SectionHeader
            title="This Summer Recipes"
            subtitle="We have all your Independence Day sweets covered."
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {summerRecipes.map(r => <StandardCard key={r.id} recipe={r} />)}
          </div>
        </section>

        {/* 2 ── Recipes With Videos — 4-column grid with play button */}
        <section>
          <SectionHeader
            title="Recipes With Videos"
            subtitle="Cooking Up Culinary Creations with Step-by-Step Videos"
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoRecipes.map(r => <VideoCard key={r.id} recipe={r} />)}
          </div>
        </section>

        {/* 3 ── Editor's Pick — 2-column horizontal cards */}
        <section>
          <SectionHeader
            title="Editor's pick"
            subtitle="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {editorPicks.map(r => <EditorPickCard key={r.id} recipe={r} />)}
          </div>
        </section>

      </div>
    </div>
  );
}
