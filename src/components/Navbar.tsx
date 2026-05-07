import { Search, Bell, User, Sun } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="h-20 border-b border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search analytics, reports, or cloud logs..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/30 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-purple-500 rounded-full border-2 border-black" />
        </button>
        <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors">
          <Sun size={20} />
        </button>
        
        <div className="h-10 w-px bg-white/10 mx-2" />
        
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right">
            <p className="text-sm font-semibold text-white leading-none">Alex Rivera</p>
            <p className="text-[10px] text-purple-400 font-medium mt-1">Cloud Architect</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 p-[1px]">
            <div className="w-full h-full rounded-[10px] bg-black flex items-center justify-center overflow-hidden">
              <User className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
