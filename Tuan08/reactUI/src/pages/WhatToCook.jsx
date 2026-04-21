import { useState } from 'react';
import { Star, Clock, Users, ChevronRight, Heart, CheckSquare, Square, MessageSquare, ThumbsUp, Image, Bookmark, ChevronDown, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const ingredients = [
  '1 lb (450g) fresh strawberries, sliced',
  '¼ cup (50g) granulated sugar',
  '2 cups (250g) all-purpose flour',
  '1 tablespoon baking powder',
  '½ teaspoon salt',
  '⅓ cup (75g) cold unsalted butter, cubed',
  '¾ cup (180ml) heavy whipping cream',
  '2 tablespoons powdered sugar',
  '1 teaspoon vanilla extract',
];

const steps = [
  { n: 1, text: 'Combine sliced strawberries with granulated sugar in a bowl. Stir gently, cover and let sit at room temperature for 30 minutes until juices form.', img: '/images/visily-image-47.png' },
  { n: 2, text: 'Preheat oven to 425°F (220°C). Whisk together flour, baking powder and salt. Cut in cold butter until mixture resembles coarse crumbs.', img: null },
  { n: 3, text: 'Add ½ cup cream and stir until just combined. Turn onto a lightly floured surface, pat to ¾-inch thickness and cut into rounds.', img: '/images/visily-image-48.png' },
  { n: 4, text: 'Bake shortcakes for 12–15 minutes until golden. Let cool slightly on a wire rack before splitting.', img: null },
  { n: 5, text: 'Whip remaining cream with powdered sugar and vanilla until soft peaks form. Split shortcakes, fill with strawberries and cream. Serve immediately.', img: '/images/visily-image-49.png' },
];

const notes = [
  { id: 1, user: 'Emily Davis', time: '2 days ago', text: 'Absolutely delicious! I added a bit of lemon zest to the shortcakes and it elevated the flavor so much. Will definitely make again.', helpful: 24, avatar: '/images/visily-avatar-42.png' },
  { id: 2, user: 'Marcus Allen', time: '5 days ago', text: 'Simple and perfect. My family loved it. I used frozen strawberries and they worked great too — just thaw them first.', helpful: 18, avatar: '/images/visily-avatar-42.png' },
  { id: 3, user: 'Sophie Turner', time: '1 week ago', text: 'The shortcake texture was spot on — fluffy inside, crisp outside. I slightly under-sugared the strawberries and it was still amazing.', helpful: 11, avatar: '/images/visily-avatar-42.png' },
];

const recentlyViewed = [
  { id: 1, title: 'Baked corn beans',           time: '20 minutes', img: '/images/visily-image-43.png' },
  { id: 2, title: 'Sunny-side up fried eggs',   time: '10 minutes', img: '/images/visily-image-44.png' },
  { id: 3, title: 'Stuffed sticky rice ball',   time: '45 minutes', img: '/images/visily-image-45.png' },
  { id: 4, title: 'Strawberry smoothie',        time: '5 minutes',  img: '/images/visily-image-50.png' },
];

export default function WhatToCook() {
  const [checked, setChecked] = useState([]);
  const [noteTab, setNoteTab] = useState('All Notes');
  const [followed, setFollowed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [noteText, setNoteText] = useState('');

  const toggleCheck = (i) =>
    setChecked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-8">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-pink-500 font-medium">Cooking guide</span>
      </div>

      {/* ── Hero ── */}
      <div className="flex flex-col lg:flex-row gap-10 mb-12">
        {/* Left: Title + Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            How to make a Strawberry Shortcake
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-6">
            <img src="/images/visily-avatar-42.png" alt="Emma Gonzales" className="w-10 h-10 rounded-full object-cover border-2 border-pink-50" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Emma Gonzales</p>
              <p className="text-xs text-gray-400">Recipe Author</p>
            </div>
            <button
              onClick={() => setFollowed(f => !f)}
              className={`ml-2 px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all ${
                followed ? 'bg-pink-500 text-white border-pink-500' : 'border-pink-400 text-pink-500 hover:bg-pink-50'
              }`}
            >
              {followed ? 'Following' : 'Follow'}
            </button>
            <button
              onClick={() => setSaved(s => !s)}
              className={`ml-auto p-2 rounded-full transition-all ${saved ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'}`}
            >
              <Bookmark className={`w-5 h-5 ${saved ? 'fill-pink-500' : ''}`} />
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-6 p-5 bg-gray-50 rounded-2xl">
            <div className="text-center">
              <Clock className="w-5 h-5 text-pink-500 mx-auto mb-1" />
              <p className="text-xs text-gray-400 font-medium">Time</p>
              <p className="font-extrabold text-gray-900 text-sm">45 minutes</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <Users className="w-5 h-5 text-pink-500 mx-auto mb-1" />
              <p className="text-xs text-gray-400 font-medium">Yields</p>
              <p className="font-extrabold text-gray-900 text-sm">Serves 4</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-200 fill-yellow-200'}`} />
                ))}
              </div>
              <p className="text-xs text-gray-400 font-medium">Rating</p>
              <p className="font-extrabold text-gray-900 text-sm">4.5 / 5</p>
            </div>
          </div>

          {/* Intro */}
          <p className="text-gray-600 leading-relaxed text-sm">
            This classic Strawberry Shortcake is the perfect summer dessert — tender, buttery shortcakes layered with sweet macerated strawberries and pillowy whipped cream. Simple ingredients, extraordinary results. Great for gatherings or a special family treat!
          </p>
        </div>

        {/* Right: Featured Image */}
        <div className="lg:w-1/2">
          <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src="/images/visily-image-50.png"
              alt="Strawberry Shortcake"
              className="w-full h-full object-cover"
              onError={(e) => e.target.src = 'https://placehold.co/600x600?text=Strawberry+Shortcake'}
            />
          </div>
        </div>
      </div>

      {/* ── Ingredients + Steps ── */}
      <div className="flex flex-col lg:flex-row gap-10 mb-14">
        {/* Ingredients */}
        <div className="lg:w-5/12">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">Ingredients</h2>
          <ul className="space-y-3 mb-8">
            {ingredients.map((ing, i) => (
              <li
                key={i}
                onClick={() => toggleCheck(i)}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <div className="mt-0.5 flex-shrink-0">
                  {checked.includes(i)
                    ? <CheckSquare className="w-5 h-5 text-pink-500 fill-pink-50" />
                    : <Square className="w-5 h-5 text-gray-300 group-hover:text-pink-400 transition-colors" />}
                </div>
                <span className={`text-sm leading-relaxed ${checked.includes(i) ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {ing}
                </span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3.5 bg-pink-500 text-white rounded-2xl font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2">
            <Heart className="w-5 h-5" /> Add to the recipe list
          </button>
        </div>

        {/* Steps */}
        <div className="lg:w-7/12">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">Instructions</h2>
          <div className="space-y-8">
            {steps.map(step => (
              <div key={step.n}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow-sm shadow-pink-500/30">
                    {step.n}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm pt-1">{step.text}</p>
                </div>
                {step.img && (
                  <div className="ml-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <img
                      src={step.img}
                      alt={`Step ${step.n}`}
                      className="w-full h-48 object-cover"
                      onError={(e) => e.target.src = 'https://placehold.co/600x300?text=Step'}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cooking Notes ── */}
      <section className="mb-14">
        <h2 className="text-xl font-extrabold text-gray-900 mb-5">Cooking note</h2>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-xl w-fit">
          {[`All Notes (${notes.length * 18 + 1})`, 'Most Helpful (10)', 'Photos (5)'].map(tab => (
            <button
              key={tab}
              onClick={() => setNoteTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                noteTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Write a note */}
        <div className="flex gap-3 mb-8">
          <img src="/images/visily-avatar-42.png" alt="You" className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-pink-50" />
          <div className="flex-1">
            <textarea
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
              placeholder="Write a note..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:bg-white resize-none transition-all"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button className="px-6 py-2 bg-pink-500 text-white rounded-xl text-sm font-bold hover:bg-pink-600 transition-colors shadow-sm">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Notes list */}
        <div className="space-y-5">
          {notes.map(note => (
            <div key={note.id} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <img src={note.avatar} alt={note.user} className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-pink-50" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-gray-900 text-sm">{note.user}</span>
                  <span className="text-xs text-gray-400">{note.time}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{note.text}</p>
                <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-pink-500 transition-colors font-medium">
                  <ThumbsUp className="w-3.5 h-3.5" /> Helpful ({note.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-5 py-3 border-2 border-gray-200 rounded-2xl text-sm font-bold text-gray-500 hover:border-pink-300 hover:text-pink-500 transition-colors flex items-center justify-center gap-2">
          <ChevronDown className="w-4 h-4" /> Show more 10 notes...
        </button>
      </section>

      {/* ── Recently Viewed ── */}
      <section>
        <h2 className="text-xl font-extrabold text-gray-900 mb-6">Your Recently Viewed</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {recentlyViewed.map(r => (
            <div key={r.id} className="group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 shadow-sm">
                <img
                  src={r.img}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => e.target.src = 'https://placehold.co/300x300?text=Food'}
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 line-clamp-2">{r.title}</h3>
              <span className="inline-flex items-center gap-1 bg-pink-50 text-pink-500 text-xs font-semibold px-2 py-1 rounded-lg">
                <Clock className="w-3 h-3" /> {r.time}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
