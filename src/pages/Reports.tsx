import { FileText, Download, Filter, Search, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const reports = [
  { id: 1, name: 'Monthly Financial Audit Q2', date: 'June 28, 2026', size: '2.4 MB', type: 'PDF', status: 'Generated' },
  { id: 2, name: 'User Growth & Retention Data', date: 'June 25, 2026', size: '1.1 MB', type: 'XLSX', status: 'Scheduled' },
  { id: 3, name: 'AWS Infrastructure Cost Analysis', date: 'June 20, 2026', size: '4.8 MB', type: 'PDF', status: 'Generated' },
  { id: 4, name: 'AI Prediction Model Accuracy', date: 'June 15, 2026', size: '840 KB', type: 'CSV', status: 'Archived' },
  { id: 5, name: 'Quarterly Board Presentation', date: 'June 10, 2026', size: '12.5 MB', type: 'PPTX', status: 'Generated' },
];

export const Reports = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white font-poppins">Enterprise Reports</h1>
          <p className="text-gray-400 mt-1">Exportable business intelligence and system audits.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold rounded-xl transition-colors">
            <Filter size={16} /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded-xl transition-colors">
            <FileText size={16} /> Generate New Report
          </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
           <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search reports by name or date..."
                className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-500/50"
              />
           </div>
           <div className="flex gap-4">
              <span className="text-xs text-gray-500 font-medium">Total: 124 reports</span>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                <th className="px-8 py-4">Report Name</th>
                <th className="px-8 py-4">Date Generated</th>
                <th className="px-8 py-4">File Size</th>
                <th className="px-8 py-4">Type</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {reports.map((report, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={report.id} 
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                        <FileText size={20} />
                      </div>
                      <span className="text-sm font-semibold text-white">{report.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-gray-400 font-medium">{report.date}</td>
                  <td className="px-8 py-5 text-sm text-gray-400 font-medium">{report.size}</td>
                  <td className="px-8 py-5">
                    <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300">
                      {report.type}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        report.status === 'Generated' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' :
                        report.status === 'Scheduled' ? 'bg-blue-500' : 'bg-gray-500'
                      }`} />
                      <span className="text-xs font-semibold text-gray-300">{report.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                       <button className="p-2 rounded-lg bg-white/5 hover:bg-purple-600/20 hover:text-purple-400 transition-all">
                         <Download size={16} />
                       </button>
                       <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                         <MoreHorizontal size={16} />
                       </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
