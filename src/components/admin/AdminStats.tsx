import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatItem {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

interface AdminStatsProps {
  stats: StatItem[];
}

const AdminStats: React.FC<AdminStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <span className={`text-sm font-medium ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AdminStats;