import { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Cloud, 
  Users, 
  FileText, 
  BrainCircuit, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Database,
  ShieldCheck
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Cloud, label: 'Cloud Arch', path: '/architecture' },
  { icon: TrendingUp, label: 'Revenue', path: '/revenue' },
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: BrainCircuit, label: 'AI Insights', path: '/ai-insights' },
  { icon: Database, label: 'Data Upload', path: '/data-upload' },
  { icon: ShieldCheck, label: 'Admin', path: '/admin' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen z-50 transition-all duration-300 ease-in-out border-r border-white/10 bg-black/40 backdrop-blur-xl",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex h-20 items-center justify-between px-6">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Cloud className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-poppins">
              Nexus
            </span>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mx-auto">
            <Cloud className="text-white w-5 h-5" />
          </div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="mt-4 px-4 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                isActive 
                  ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/20 shadow-[0_0_15px_rgba(147,51,234,0.1)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5",
                isActive ? "text-purple-400" : "group-hover:text-purple-400"
              )} />
              {!isCollapsed && (
                <span className="font-medium tracking-wide text-sm">{item.label}</span>
              )}
              {isActive && (
                <div className="absolute left-0 w-1 h-6 bg-purple-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-8 left-0 w-full px-4">
        <div className={cn(
          "rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/5 p-4 overflow-hidden relative group",
          isCollapsed ? "hidden" : "block"
        )}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 rounded-full -mr-8 -mt-8 blur-2xl" />
          <p className="text-xs text-purple-400 font-semibold mb-1">PRO PLAN</p>
          <p className="text-[10px] text-gray-500 mb-3">Unlock advanced AI predictive models.</p>
          <button className="w-full py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};
