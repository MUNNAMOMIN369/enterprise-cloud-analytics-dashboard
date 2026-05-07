import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { Architecture } from './pages/Architecture';
import { Reports } from './pages/Reports';
import { AIInsights } from './pages/AIInsights';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#050505] text-white">
        <Sidebar />
        
        <div className="flex-1 flex flex-col transition-all duration-300 ml-20 lg:ml-64">
          <Navbar />
          
          <main className="flex-1 p-8">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/ai-insights" element={<AIInsights />} />
                <Route path="*" element={<Dashboard />} />
              </Routes>
            </AnimatePresence>
          </main>

          <footer className="px-8 py-6 border-t border-white/5 text-center">
            <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">
              &copy; 2026 Nexus Cloud Systems. All Rights Reserved. Enterprise Version 4.8.2
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
