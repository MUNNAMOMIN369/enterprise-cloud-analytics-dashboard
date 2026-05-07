import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface KPICardProps {
  title: string;
  value: string;
  trend: number;
  icon: LucideIcon;
  color: 'purple' | 'blue' | 'cyan' | 'orange';
}

const colors = {
  purple: 'from-purple-500/20 to-purple-600/5 border-purple-500/20 text-purple-400',
  blue: 'from-blue-500/20 to-blue-600/5 border-blue-500/20 text-blue-400',
  cyan: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 text-cyan-400',
  orange: 'from-orange-500/20 to-orange-600/5 border-orange-500/20 text-orange-400',
};

const iconColors = {
  purple: 'bg-purple-500/10 text-purple-400',
  blue: 'bg-blue-500/10 text-blue-400',
  cyan: 'bg-cyan-500/10 text-cyan-400',
  orange: 'bg-orange-500/10 text-orange-400',
};

export const KPICard = ({ title, value, trend, icon: Icon, color }: KPICardProps) => {
  const isPositive = trend >= 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 bg-gradient-to-br backdrop-blur-sm",
        colors[color]
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{title}</p>
          <h3 className="text-3xl font-bold mt-2 text-white">{value}</h3>
        </div>
        <div className={cn("p-2.5 rounded-xl", iconColors[color])}>
          <Icon size={24} />
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-2">
        <div className={cn(
          "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
          isPositive ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
        )}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {Math.abs(trend)}%
        </div>
        <span className="text-xs text-gray-500 font-medium">vs last month</span>
      </div>

      <div className="absolute -right-4 -bottom-4 opacity-5">
        <Icon size={100} />
      </div>
    </motion.div>
  );
};
