import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ArrowRight,
  Workflow,
  Zap
} from 'lucide-react';

const ArchNode = ({ icon: Icon, title, desc, delay = 0, color = "purple" }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center group relative"
  >
    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color === 'purple' ? 'from-purple-600 to-blue-600 shadow-purple-500/20' : 'from-cyan-600 to-blue-600 shadow-cyan-500/20'} flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300 z-10 relative`}>
      <Icon className="text-white w-8 h-8" />
      <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
    </div>
    <div className="mt-4 text-center">
      <h4 className="text-sm font-bold text-white uppercase tracking-tighter">{title}</h4>
      <p className="text-[10px] text-gray-500 font-medium max-w-[120px] leading-tight mt-1">{desc}</p>
    </div>
  </motion.div>
);

const Connector = ({ delay = 0 }: { delay?: number }) => (
  <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent relative min-w-[60px] max-w-[100px] mt-8">
    <motion.div 
      initial={{ left: '0%' }}
      animate={{ left: '100%' }}
      transition={{ 
        repeat: Infinity, 
        duration: 2, 
        ease: "linear",
        delay
      }}
      className="absolute top-1/2 -translate-y-1/2 w-4 h-1 bg-purple-400 blur-sm"
    />
  </div>
);

export const Architecture = () => {
  return (
    <div className="space-y-12 pb-20">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white font-poppins">Cloud Architecture</h1>
          <p className="text-gray-400 mt-1">High-level overview of our enterprise data pipeline and service mesh.</p>
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded-xl transition-colors">
             <Workflow size={16} /> Deploy New Stack
           </button>
        </div>
      </div>

      <div className="relative p-12 rounded-[40px] bg-black/40 border border-white/5 backdrop-blur-xl overflow-hidden">
        {/* Abstract Background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 blur-[100px]" />
           <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 blur-[100px]" />
        </div>

        <div className="relative space-y-20">
          {/* Layer 1: Access */}
          <div className="flex justify-center items-start gap-4">
             <ArchNode icon={Users} title="End Users" desc="Web & Mobile Clients" delay={0.1} color="blue" />
             <Connector delay={0} />
             <ArchNode icon={Globe} title="CDN / Edge" desc="Amazon CloudFront" delay={0.2} color="blue" />
             <Connector delay={0.2} />
             <ArchNode icon={ShieldCheck} title="WAF / Auth" desc="AWS Cognito & WAF" delay={0.3} />
          </div>

          {/* Layer 2: Logic */}
          <div className="flex justify-center items-start gap-4">
             <div className="w-[120px] h-[2px] mt-8" /> {/* Offset */}
             <ArchNode icon={Server} title="API Gateway" desc="REST/GraphQL Gateway" delay={0.4} />
             <Connector delay={0.4} />
             <ArchNode icon={Zap} title="Lambda" desc="Serverless Compute" delay={0.5} />
             <Connector delay={0.6} />
             <ArchNode icon={Cpu} title="ML Engine" desc="SageMaker Inference" delay={0.6} />
          </div>

          {/* Layer 3: Storage */}
          <div className="flex justify-center items-start gap-4">
             <div className="w-[240px] h-[2px] mt-8" />
             <ArchNode icon={Database} title="RDS / Aurora" desc="PostgreSQL Primary" delay={0.7} color="cyan" />
             <Connector delay={0.8} />
             <ArchNode icon={Layers} title="S3 Buckets" desc="Object Data Storage" delay={0.8} color="cyan" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="text-yellow-400" size={24} /> System Health
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Compute Utilization', value: 42, color: 'bg-purple-500' },
              { label: 'Database I/O', value: 68, color: 'bg-blue-500' },
              { label: 'Network Latency', value: 12, color: 'bg-green-500' },
              { label: 'Error Rate', value: 0.04, color: 'bg-red-500' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 font-medium">{stat.label}</span>
                  <span className="text-white font-bold">{stat.value}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${stat.color} shadow-[0_0_10px_rgba(147,51,234,0.5)]`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ArrowRight className="text-purple-400" size={24} /> Deployment Logs
          </h3>
          <div className="space-y-4 font-mono text-xs">
            {[
              { time: '14:20:05', msg: 'CloudFormation stack deployment initiated...', status: 'info' },
              { time: '14:21:12', msg: 'RDS Instance: rds-prod-01 update COMPLETE', status: 'success' },
              { time: '14:22:30', msg: 'Lambda functions warm-up in progress...', status: 'info' },
              { time: '14:25:00', msg: 'Deployment successful. Version 2.4.0-stable', status: 'success' },
            ].map((log, i) => (
              <div key={i} className="flex gap-4 p-3 rounded-lg bg-black/40 border border-white/5">
                <span className="text-gray-600 shrink-0">{log.time}</span>
                <span className={log.status === 'success' ? 'text-green-400' : 'text-blue-400'}>{log.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
