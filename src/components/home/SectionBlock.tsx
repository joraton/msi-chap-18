import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export default function SectionBlock({
  title,
  description,
  href,
  icon: Icon,
  color,
  bgColor,
  index
}: SectionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {/* Icon */}
            <div className={`${bgColor} rounded-full p-3 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`h-6 w-6 ${color}`} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Button */}
          <Link
            href={href}
            className={`${color.replace('text-', 'bg-')} hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-md`}
          >
            Commencer
          </Link>
        </div>
      </div>
    </motion.div>
  );
}