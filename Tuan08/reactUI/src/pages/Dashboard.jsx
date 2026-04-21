import { useState } from 'react';
import {
  LayoutGrid, FolderOpen, Users, PieChart, MessageSquare, Code2,
  Search, Bell, HelpCircle, TrendingUp, ShoppingCart, DollarSign,
  UserPlus, FileDown, FileUp, Pencil, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { name: 'Dashboard', icon: LayoutGrid, active: true },
  { name: 'Projects', icon: FolderOpen },
  { name: 'Teams', icon: Users },
  { name: 'Analytics', icon: PieChart },
  { name: 'Messages', icon: MessageSquare },
  { name: 'Integrations', icon: Code2 },
];

const stats = [
  { label: 'Turnover', value: '$92,405', change: '+5.39%', icon: ShoppingCart, iconBg: 'bg-pink-100', iconColor: 'text-pink-500' },
  { label: 'Profit', value: '$32,218', change: '+5.39%', icon: DollarSign, iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
  { label: 'New Customers', value: '298', change: '+6.84%', icon: UserPlus, iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
];

const statusColor = {
  New: 'bg-blue-50 text-blue-600',
  'In-progress': 'bg-orange-50 text-orange-600',
  Completed: 'bg-green-50 text-green-700',
};

const orders = [
  { id: 1, customer: 'Marcus Philips', company: 'Acme Inc.', value: '$250.00', date: 'Jan 30, 2024', status: 'New', avatar: '/images/visily-avatar-42.png' },
  { id: 2, customer: 'Sophie Turner', company: 'BrightCo', value: '$890.00', date: 'Feb 12, 2024', status: 'In-progress', avatar: '/images/visily-avatar-42.png' },
  { id: 3, customer: 'Liam Johnson', company: 'FreshMart', value: '$430.00', date: 'Feb 20, 2024', status: 'Completed', avatar: '/images/visily-avatar-42.png' },
  { id: 4, customer: 'Emily Davis', company: 'NovaTech', value: '$1,200.00', date: 'Mar 5, 2024', status: 'New', avatar: '/images/visily-avatar-42.png' },
  { id: 5, customer: 'James Wilson', company: 'GreenLeaf', value: '$310.00', date: 'Mar 14, 2024', status: 'Completed', avatar: '/images/visily-avatar-42.png' },
];

export default function Dashboard() {
  const { logout } = useAuth();
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3, 4, '...', 10, 11];

  return (
    <div className="flex min-h-[calc(100vh-80px)] bg-gray-50">
      {/* ─── Sidebar ─── */}
      <aside className="w-20 lg:w-64 bg-white border-r border-gray-100 flex flex-col py-8 px-3 lg:px-5 shrink-0">
        {/* Nav Items */}
        <nav className="flex-1 space-y-2 mt-4">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => setActiveNav(item.name)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl font-semibold text-sm transition-all ${activeNav === item.name
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:block">{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Promo Card */}
        <div className="hidden lg:block bg-blue-50 rounded-2xl p-4 mt-6">
          <img
            src="/images/visily-image-1859.png"
            alt="Promo"
            className="w-full h-24 object-cover rounded-xl mb-3"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <p className="text-sm font-bold text-gray-800 mb-2">V2.0 is available</p>
          <button className="w-full py-1.5 border-2 border-blue-400 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors">
            Try now
          </button>
        </div>
      </aside>

      {/* ─── Main Area ─── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Inner Header */}
        <div className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
          <h1 className="text-2xl font-extrabold text-pink-500">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 w-44"
              />
            </div>
            <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
            <img
              src="/images/visily-avatar-42.png"
              alt="User"
              className="w-9 h-9 rounded-full border-2 border-pink-100 object-cover cursor-pointer hover:border-pink-300 transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 p-8 space-y-8 overflow-auto">
          {/* ─── Stats ─── */}
          <section>
            <h2 className="flex items-center gap-2 text-base font-extrabold text-gray-800 mb-5">
              <LayoutGrid className="w-4 h-4 text-pink-500" /> Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stats.map(stat => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-5">
                  <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
                    <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
                    <p className="text-xs font-semibold text-green-500 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> {stat.change} period of change
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Detailed Report Table ─── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="flex items-center gap-2 text-base font-extrabold text-gray-800">
                <FileDown className="w-4 h-4 text-pink-500" /> Detailed report
              </h2>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border-2 border-pink-400 text-pink-500 rounded-xl text-sm font-bold hover:bg-pink-50 transition-colors">
                  <FileDown className="w-4 h-4" /> Import
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border-2 border-pink-400 text-pink-500 rounded-xl text-sm font-bold hover:bg-pink-50 transition-colors">
                  <FileUp className="w-4 h-4" /> Export
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/60">
                    <th className="w-10 px-5 py-4">
                      <input type="checkbox" className="w-4 h-4 accent-pink-500 rounded" />
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-extrabold text-gray-400 uppercase tracking-wider">Customer Name</th>
                    <th className="px-4 py-4 text-left text-xs font-extrabold text-gray-400 uppercase tracking-wider hidden md:table-cell">Company</th>
                    <th className="px-4 py-4 text-left text-xs font-extrabold text-gray-400 uppercase tracking-wider">Order Value</th>
                    <th className="px-4 py-4 text-left text-xs font-extrabold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Order Date</th>
                    <th className="px-4 py-4 text-left text-xs font-extrabold text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr key={order.id} className={`border-b border-gray-50 hover:bg-pink-50/30 transition-colors ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}>
                      <td className="px-5 py-4">
                        <input type="checkbox" className="w-4 h-4 accent-pink-500 rounded" />
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={order.avatar}
                            alt={order.customer}
                            className="w-8 h-8 rounded-full object-cover border-2 border-pink-50"
                            onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(order.customer)}&background=fce7f3&color=ec4899&size=32`}
                          />
                          <span className="font-semibold text-gray-800">{order.customer}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-500 hidden md:table-cell">{order.company}</td>
                      <td className="px-4 py-4 font-bold text-gray-900">{order.value}</td>
                      <td className="px-4 py-4 text-gray-500 hidden lg:table-cell">{order.date}</td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${statusColor[order.status]}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <button className="text-gray-300 hover:text-pink-500 transition-colors">
                          <Pencil className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Table Footer */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-50">
                <p className="text-sm text-gray-500 font-medium">63 results</p>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {pages.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => typeof p === 'number' && setCurrentPage(p)}
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold transition-colors ${p === currentPage ? 'bg-pink-500 text-white shadow-md shadow-pink-500/30'
                        : typeof p === 'number' ? 'text-gray-600 hover:bg-gray-100'
                          : 'text-gray-400 cursor-default'
                        }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(p => p + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
