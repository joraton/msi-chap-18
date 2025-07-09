import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Calculator, AlertCircle, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 rounded-full p-3">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Introduction</h1>
              <p className="text-gray-600">Les fondements du calcul des coûts informatiques</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Objectifs d'apprentissage</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Comprendre l'importance du calcul des coûts informatiques</li>
                    <li>• Identifier les enjeux de contrôle et de responsabilisation</li>
                    <li>• Maîtriser les concepts fondamentaux</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi calculer les coûts informatiques ?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Le calcul des coûts est une <strong>démarche fondamentale</strong> pour contrôler l'usage 
              du système d'information. Délimiter les différents postes de charges relatifs à une 
              composante du système d'information permet aux décisionnaires d'envisager les 
              investissements en toute connaissance de cause.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Bénéfices du calcul des coûts</h3>
                  <ul className="text-green-800 space-y-2">
                    <li><strong>Contrôle des investissements :</strong> Décisions éclairées sur les projets IT</li>
                    <li><strong>Responsabilisation :</strong> Sensibilisation des utilisateurs et de la DSI</li>
                    <li><strong>Optimisation :</strong> Identification des postes de dépenses à optimiser</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les défis de la délimitation</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              La délimitation des coûts n'est toutefois pas chose aisée. D'un côté, les 
              <strong>services opérationnels</strong> n'y sont pas nécessairement familiarisés et, 
              de l'autre, les <strong>services comptables et directions financières</strong> ont 
              souvent des difficultés à suivre les évolutions rapides de l'IT.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Difficultés courantes</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-amber-800">
                    <div>
                      <h4 className="font-medium mb-1">Services opérationnels</h4>
                      <p className="text-sm">Manque de familiarité avec les méthodes de calcul des coûts</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Services financiers</h4>
                      <p className="text-sm">Difficulté à suivre l'évolution rapide des technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Concepts clés à retenir</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-2">💡 Système d'information</h3>
                <p className="text-purple-800 text-sm">
                  Ensemble des ressources (matérielles, logicielles, humaines) 
                  permettant de collecter, stocker, traiter et diffuser l'information.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="font-bold text-indigo-900 mb-2">💡 Coût informatique</h3>
                <p className="text-indigo-800 text-sm">
                  Regroupement de charges liées au fonctionnement et au développement 
                  du système d'information d'une organisation.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-gray-700 font-medium mb-2">CRID - Les 4 piliers du calcul des coûts :</p>
              <ul className="text-gray-700 space-y-1">
                <li><strong>C</strong>ontrôle des dépenses</li>
                <li><strong>R</strong>esponsabilisation des acteurs</li>
                <li><strong>I</strong>nvestissements éclairés</li>
                <li><strong>D</strong>élimitation précise des charges</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <div className="text-gray-500">
              Introduction
            </div>
            <Link 
              href="/section-1"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Section I →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}