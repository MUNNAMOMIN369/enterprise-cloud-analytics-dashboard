import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Sparkles, 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  ArrowRight,
  Target
} from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const radarData = [
  { subject: 'Reliability', A: 120, B: 110, fullMark: 150 },
  { subject: 'Scalability', A: 98, B: 130, fullMark: 150 },
  { subject: 'Cost Efficiency', A: 86, B: 130, fullMark: 150 },
  { subject: 'Security', A: 99, B: 100, fullMark: 150 },
  { subject: 'Performance', A: 85, B: 90, fullMark: 150 },
  { subject: 'Innovation', A: 65, B: 85, fullMark: 150 },
];

export const AIInsights = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white font-poppins flex items-center gap-3">
            <Sparkles className="text-purple-400" /> AI Command Center
          </h1>
          <p className="text-gray-400 mt-1">Autonomous business intelligence and predictive analysis.</p>
        </div>
        <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-sm shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform">
          Re-train Models
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="p-6 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/20 backdrop-blur-md relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Target size={80} />
                </div>
                <div className="flex items-center gap-3 mb-4 text-purple-400">
                  <BrainCircuit size={24} />
                  <span className="text-xs font-bold uppercase tracking-widest">Growth Engine</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Market Expansion Opportunity</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Based on pattern recognition in user clusters, there is a 78% probability of successful expansion in the Nordic region.
                </p>
                <button className="mt-6 flex items-center gap-2 text-purple-400 text-sm font-bold group">
                  View Cluster Data <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </motion.div>

             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="p-6 rounded-3xl bg-gradient-to-br from-orange-600/10 to-transparent border border-orange-500/20 backdrop-blur-md relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <AlertTriangle size={80} />
                </div>
                <div className="flex items-center gap-3 mb-4 text-orange-400">
                  <TrendingUp size={24} />
                  <span className="text-xs font-bold uppercase tracking-widest">Risk Analysis</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Churn Probability Alert</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enterprise Tier customers show a 12% decline in API interaction. Recommended action: 1:1 strategy session.
                </p>
                <button className="mt-6 flex items-center gap-2 text-orange-400 text-sm font-bold group">
                  Identify Accounts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </motion.div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
             <div className="flex justify-between items-center mb-8">
                <div>
                   <h3 className="text-xl font-bold text-white">Predictive Capability Score</h3>
                   <p className="text-gray-500 text-sm">Autonomous model performance across core metrics.</p>
                </div>
             </div>
             <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#ffffff10" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <PolarRadiusAxis stroke="#ffffff10" />
                    <Radar
                      name="Model Alpha"
                      dataKey="A"
                      stroke="#8b5cf6"
                      fill="#8b5cf6"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="Model Beta"
                      dataKey="B"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-6">Live AI Stream</h3>
              <div className="space-y-6">
                 {[
                   { icon: Lightbulb, title: 'Optimization Found', time: 'Just now', desc: 'S3 storage lifecycle policy could save $2.4k/mo.' },
                   { icon: TrendingUp, title: 'Trend Detected', time: '12m ago', desc: 'Interest in "Nexus Private Cloud" is up 45%.' },
                   { icon: Target, title: 'Lead Scoring', time: '1h ago', desc: '5 new high-intent enterprise leads identified.' },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 text-purple-400">
                        <item.icon size={20} />
                      </div>
                      <div>
                         <div className="flex justify-between items-center">
                            <h4 className="text-sm font-bold text-white">{item.title}</h4>
                            <span className="text-[10px] text-gray-500 font-bold">{item.time}</span>
                         </div>
                         <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-2">Nexus AI Chat</h3>
              <p className="text-white/70 text-sm mb-6">Ask anything about your business data.</p>
              <div className="bg-black/20 rounded-xl p-3 text-xs text-white/90 italic mb-4">
                "What was the main reason for the revenue spike in March?"
              </div>
              <div className="relative">
                 <input 
                   type="text" 
                   placeholder="Ask Nexus AI..."
                   className="w-full bg-white/10 border border-white/20 rounded-xl py-2 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all"
                 />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
