import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  ShieldAlert, 
  Smile,
  BrainCircuit
} from 'lucide-react';
import { KPICard } from '../components/KPICard';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const revenueData = [
  { name: 'Jan', value: 45000 },
  { name: 'Feb', value: 52000 },
  { name: 'Mar', value: 48000 },
  { name: 'Apr', value: 61000 },
  { name: 'May', value: 55000 },
  { name: 'Jun', value: 67000 },
  { name: 'Jul', value: 72000 },
];

const salesData = [
  { name: 'Web', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'API', value: 200 },
  { name: 'Partner', value: 278 },
];

const pieData = [
  { name: 'Cloud', value: 400, color: '#8b5cf6' },
  { name: 'SaaS', value: 300, color: '#3b82f6' },
  { name: 'Enterprise', value: 300, color: '#06b6d4' },
  { name: 'Consulting', value: 200, color: '#f97316' },
];

export const Dashboard = () => {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-white font-poppins">Enterprise Overview</h1>
        <p className="text-gray-400 mt-1">Real-time performance metrics and business intelligence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <KPICard title="Total Revenue" value="$4,250,900" trend={12.5} icon={DollarSign} color="purple" />
        <KPICard title="Total Orders" value="12,450" trend={8.2} icon={ShoppingCart} color="blue" />
        <KPICard title="Active Users" value="84.2k" trend={15.3} icon={Users} color="cyan" />
        <KPICard title="Profit Growth" value="24.8%" trend={4.1} icon={TrendingUp} color="orange" />
        <KPICard title="Fraud Alerts" value="3" trend={-22.5} icon={ShieldAlert} color="purple" />
        <KPICard title="CSAT Score" value="4.8/5" trend={2.4} icon={Smile} color="blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-white">Revenue Stream</h3>
            <select className="bg-black border border-white/10 rounded-lg px-3 py-1 text-xs text-gray-400">
              <option>Last 7 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff20', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorPv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-white">Sales Channels</h3>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-[10px] text-gray-400 uppercase font-bold">Target</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff20', borderRadius: '12px' }}
                   itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {salesData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#8b5cf6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
           <h3 className="text-lg font-bold text-white mb-6">Revenue Mix</h3>
           <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff20', borderRadius: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
           </div>
           <div className="space-y-3 mt-4">
              {pieData.map((item) => (
                <div key={item.name} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-400">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-white">{item.value}%</span>
                </div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-2 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
           <h3 className="text-lg font-bold text-white mb-6">Recent AI Insights</h3>
           <div className="space-y-4">
              {[
                { type: 'growth', text: 'Predicted 14% growth in Q3 based on current sales trajectory.', status: 'High Confidence' },
                { type: 'risk', text: 'Detected potential churn risk in 12 Enterprise accounts.', status: 'Immediate Action' },
                { type: 'optimize', text: 'AWS Lambda costs can be optimized by 22% by resizing memory limits.', status: 'Efficiency' },
                { type: 'alert', text: 'Unusual traffic spike detected from Southeast Asia region.', status: 'Investigating' }
              ].map((insight, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                    insight.type === 'growth' ? "bg-green-500/10 text-green-400" :
                    insight.type === 'risk' ? "bg-red-500/10 text-red-400" :
                    insight.type === 'optimize' ? "bg-blue-500/10 text-blue-400" : "bg-orange-500/10 text-orange-400"
                  )}>
                    <BrainCircuit size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">{insight.text}</p>
                      <span className="text-[10px] font-bold uppercase text-gray-500">{insight.status}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Generated 2 hours ago by Nexus ML Engine</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};


