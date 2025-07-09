import { Calculator, Clock, Target, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 overflow-x-auto">
        <div className="flex items-center whitespace-nowrap">
          <span>Accueil</span>
          <span className="mx-1 sm:mx-2">›</span>
          <span>Cours</span>
          <span className="mx-1 sm:mx-2">›</span>
          <span className="text-gray-900 font-medium">Les Coûts Informatiques</span>
        </div>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 flex-shrink-0 self-center sm:self-start">
            <Calculator className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
          </div>

          {/* Course Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
              Chapitre 18 : Les Coûts Informatiques
            </h1>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
              Maîtrisez le calcul des coûts informatiques, de la délimitation des charges 
              à l'imputation par centres d'analyse. Une approche méthodologique pour 
              contrôler l'usage du système d'information.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">4h 15min</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">6 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}