import { Calculator, Clock, Target, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <span>Accueil</span>
        <span className="mx-2">›</span>
        <span>Cours</span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Les Coûts Informatiques</span>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-violet-700 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-start gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex-shrink-0">
            <Calculator className="h-12 w-12 text-white" />
          </div>

          {/* Course Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">
              Chapitre 18 : Les Coûts Informatiques
            </h1>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              Maîtrisez le calcul des coûts informatiques, de la délimitation des charges 
              à l'imputation par centres d'analyse. Une approche méthodologique pour 
              contrôler l'usage du système d'information.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span className="text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">4h 15min</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">6 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}