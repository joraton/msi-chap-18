import BackToPlanButton from '@/components/content/BackToPlanButton';
import { TrendingUp, Target, BarChart, DollarSign, Settings, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Section3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-indigo-100 rounded-full p-3">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section III : Applications pratiques</h1>
              <p className="text-gray-600">Outils de pilotage et optimisation des coûts</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Outils de pilotage des coûts informatiques</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Une fois les coûts calculés selon la méthode des centres d'analyse, il convient 
              de mettre en place des <strong>outils de pilotage</strong> permettant le suivi, 
              l'analyse et l'optimisation des dépenses informatiques.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-blue-900">Tableaux de bord</h3>
                </div>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Suivi des coûts par centre</li>
                  <li>• Évolution mensuelle/annuelle</li>
                  <li>• Comparaison budget/réalisé</li>
                  <li>• Indicateurs de performance</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-bold text-green-900">Benchmarking</h3>
                </div>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• Comparaison sectorielle</li>
                  <li>• Ratios de référence</li>
                  <li>• Bonnes pratiques</li>
                  <li>• Objectifs d'amélioration</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stratégies d'optimisation</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-bold text-purple-900">1. Rationalisation des coûts</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Actions immédiates</h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Audit des licences inutilisées</li>
                      <li>• Consolidation des serveurs</li>
                      <li>• Optimisation des contrats</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Actions à moyen terme</h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Migration vers le cloud</li>
                      <li>• Standardisation des outils</li>
                      <li>• Automatisation des processus</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-orange-900">2. Gouvernance des coûts</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Processus</h4>
                    <ul className="text-orange-700 space-y-1">
                      <li>• Validation des achats</li>
                      <li>• Suivi budgétaire</li>
                      <li>• Reporting régulier</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Responsabilités</h4>
                    <ul className="text-orange-700 space-y-1">
                      <li>• DSI : pilotage technique</li>
                      <li>• DAF : contrôle financier</li>
                      <li>• Métiers : validation besoins</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Outils</h4>
                    <ul className="text-orange-700 space-y-1">
                      <li>• CMDB actualisée</li>
                      <li>• Outils de monitoring</li>
                      <li>• Portails de demande</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cas pratique : Optimisation d'un parc informatique</h2>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🏢 Contexte : Entreprise de 500 salariés</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">📊 Situation initiale</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Coût total annuel :</span>
                      <span className="font-bold text-red-600">2 500 000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coût par utilisateur :</span>
                      <span className="font-bold">5 000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Licences inutilisées :</span>
                      <span className="font-bold text-red-600">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taux d'utilisation serveurs :</span>
                      <span className="font-bold text-red-600">35%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 Après optimisation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Coût total annuel :</span>
                      <span className="font-bold text-green-600">1 950 000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coût par utilisateur :</span>
                      <span className="font-bold">3 900 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Économies réalisées :</span>
                      <span className="font-bold text-green-600">550 000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ROI de l'optimisation :</span>
                      <span className="font-bold text-green-600">22%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-300">
                <h4 className="font-semibold text-gray-800 mb-3">🔧 Actions mises en œuvre</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Audit et suppression des licences inutilisées (-375k€)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Virtualisation et consolidation serveurs (-120k€)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Renégociation des contrats de maintenance (-55k€)</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Indicateurs clés de performance (KPI)</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">📈 KPI Financiers</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Coût par utilisateur</h4>
                    <p className="text-blue-700 text-sm">Coût total IT / Nombre d'utilisateurs</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900">ROI des projets IT</h4>
                    <p className="text-green-700 text-sm">(Bénéfices - Coûts) / Coûts × 100</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900">Évolution budgétaire</h4>
                    <p className="text-purple-700 text-sm">Écart budget vs réalisé</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">⚡ KPI Opérationnels</h3>
                <div className="space-y-3">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900">Taux d'utilisation</h4>
                    <p className="text-orange-700 text-sm">Ressources utilisées / Ressources disponibles</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900">Disponibilité des services</h4>
                    <p className="text-red-700 text-sm">Temps de fonctionnement / Temps total</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900">Satisfaction utilisateurs</h4>
                    <p className="text-indigo-700 text-sm">Enquêtes de satisfaction périodiques</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-gray-700 font-medium mb-2">OPTIMISER - Les étapes d'optimisation des coûts :</p>
              <ul className="text-gray-700 space-y-1">
                <li><strong>O</strong>bserver les coûts actuels</li>
                <li><strong>P</strong>iloter avec des indicateurs</li>
                <li><strong>T</strong>raquer les gaspillages</li>
                <li><strong>I</strong>dentifier les leviers d'action</li>
                <li><strong>M</strong>ettre en place la gouvernance</li>
                <li><strong>I</strong>mpliquer tous les acteurs</li>
                <li><strong>S</strong>uivre les résultats</li>
                <li><strong>E</strong>valuer et ajuster</li>
                <li><strong>R</strong>ecommencer le cycle</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/section-2"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              ← Section II
            </Link>
            <div className="text-gray-500">
              Section III
            </div>
            <Link 
              href="/tco"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              TCO →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}