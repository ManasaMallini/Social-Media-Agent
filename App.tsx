import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PostCreator from './components/PostCreator';
import Studio from './components/Studio';
import TrendWatch from './components/TrendWatch';
import { View } from './types';
import { Activity, Zap, Users } from 'lucide-react';

const Dashboard: React.FC<{ onChangeView: (v: View) => void }> = ({ onChangeView }) => (
  <div className="p-8 max-w-7xl mx-auto w-full">
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-white mb-2">Welcome back, Creator.</h1>
      <p className="text-slate-400">Here's what's happening with your AI agent today.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-6 text-white shadow-xl shadow-brand-900/20">
        <div className="flex items-start justify-between mb-8">
          <div className="p-3 bg-white/10 rounded-xl">
            <Activity className="w-6 h-6" />
          </div>
          <span className="text-brand-100 text-sm font-medium">+12% vs last week</span>
        </div>
        <div className="text-3xl font-bold mb-1">1,248</div>
        <div className="text-brand-100">Posts Generated</div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-start justify-between mb-8">
          <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
            <Zap className="w-6 h-6" />
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-1">2.4s</div>
        <div className="text-slate-400">Avg. Generation Time</div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-start justify-between mb-8">
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
            <Users className="w-6 h-6" />
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-1">4</div>
        <div className="text-slate-400">Active Personas</div>
      </div>
    </div>

    <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <button onClick={() => onChangeView(View.Creator)} className="group p-6 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-brand-500/50 rounded-2xl text-left transition-all">
        <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="text-2xl">✍️</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Draft a New Post</h3>
        <p className="text-sm text-slate-400">Create engaging content for Twitter, LinkedIn, or Instagram in seconds.</p>
      </button>

      <button onClick={() => onChangeView(View.Studio)} className="group p-6 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-purple-500/50 rounded-2xl text-left transition-all">
        <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="text-2xl">🎨</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Generate Visuals</h3>
        <p className="text-sm text-slate-400">Create stunning AI images to accompany your social posts.</p>
      </button>

      <button onClick={() => onChangeView(View.Trends)} className="group p-6 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-blue-500/50 rounded-2xl text-left transition-all">
        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="text-2xl">📈</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Check Trends</h3>
        <p className="text-sm text-slate-400">See what the world is talking about right now via Google Search.</p>
      </button>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Dashboard);

  const renderView = () => {
    switch (currentView) {
      case View.Dashboard:
        return <Dashboard onChangeView={setCurrentView} />;
      case View.Creator:
        return <PostCreator />;
      case View.Studio:
        return <Studio />;
      case View.Trends:
        return <TrendWatch />;
      default:
        return <Dashboard onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {/* Top bar mobile only */}
        <header className="lg:hidden h-16 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
           <span className="text-brand-500 font-bold text-lg">SocialPulse</span>
        </header>
        
        <div className="flex-1 overflow-y-auto bg-grid-slate-900/[0.04]">
           {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;