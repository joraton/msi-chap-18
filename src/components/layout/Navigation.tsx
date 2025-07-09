'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Home } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  
  // Ne pas afficher le bouton sur la page d'accueil
  if (pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="hidden xs:inline">Retour au plan</span>
          <span className="xs:hidden">Retour</span>
        </Link>
      </div>
    </nav>
  );
}