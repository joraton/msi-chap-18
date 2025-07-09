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
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3 sm:gap-4 flex-1">
            {/* Icon */}
            <div className={`${bgColor} rounded-full p-2.5 sm:p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
              <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 truncate">
                {title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          {/* Button */}
          <Link
            href={href}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-md text-sm sm:text-base text-center flex-shrink-0"
          >
            Commencer
          </Link>
        </div>
      </div>
    </motion.div>
  );
}