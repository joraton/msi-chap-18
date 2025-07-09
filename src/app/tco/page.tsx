import BackToPlanButton from '@/components/content/BackToPlanButton';
import { DollarSign, Shield, Zap, Users, Building, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function TCO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-indigo-100 rounded-full p-3">
              <DollarSign className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Le Total Cost Ownership (TCO)</h1>
              <p className="text-gray-600">Coût total de possession et optimisation</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">📊 Définition du TCO</h3>
              <p className="text-indigo-800">
                Le TCO (Total Cost Ownership) est un indicateur de gestion élaboré par le cabinet Gartner 
                pour déterminer le <strong>coût complet d'utilisation des postes de travail</strong>. 
                Il prend en compte l'intégralité des charges rattachables à l'usage d'un poste de travail.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Composition du TCO</h2>
            
            <div className="grid gap-6 mb-8">
              {/* Coûts directs */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Coûts directs</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2 text-green-800">
                    <li>• Achats de matériels</li>
                    <li>• Achats de logiciels</li>
                    <li>• Personnel informatique</li>
                    <li>• Services d'assistance</li>
                  </ul>
                  <ul className="space-y-2 text-green-800">
                    <li>• Frais de maintenance</li>
                    <li>• Coûts d'infrastructure</li>
                    <li>• Assurances</li>
                    <li>• Frais d'externalisation</li>
                  </ul>
                </div>
              </div>

              {/* Coûts indirects */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">Coûts indirects</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2 text-orange-800">
                    <li>• Quote-part des frais de locaux</li>
                    <li>• Frais d'études et de veille</li>
                  </ul>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Formation des utilisateurs</li>
                    <li>• Accompagnement du changement</li>
                  </ul>
                </div>
              </div>

              {/* Coûts cachés */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-900">Coûts cachés</h3>
                </div>
                <div className="grid md:grid-cols-1 gap-4 text-sm">
                  <ul className="space-y-2 text-red-800">
                    <li>• Impact des arrêts du système d'information</li>
                    <li>• Impact d'un mauvais usage</li>
                    <li>• Impact des usages privés du SI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">⚠️ Limites du TCO</h3>
              <p className="text-amber-800 mb-3">
                Bien que théoriquement utile pour comparer des entreprises, le TCO présente des limites :
              </p>
              <ul className="text-amber-800 space-y-1">
                <li>• Trop hétérogène pour être d'une utilité majeure</li>
                <li>• Coûts indirects basés sur des répartitions subjectives</li>
                <li>• Pas de consensus sur l'évaluation des coûts cachés</li>
                <li>• Amplitude de chiffrage très élevée entre cabinets</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stratégies de réduction du TCO</h2>
            
            <div className="grid gap-6 mb-8">
              {/* Maîtriser son système */}
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-blue-900">Maîtriser son système</h3>
                </div>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Arrêter les applications non utilisées</li>
                  <li>• Mettre à jour l'inventaire des licences</li>
                  <li>• Rationaliser les contrats prestataires</li>
                  <li>• Vérifier le respect des délais</li>
                </ul>
              </div>

              {/* Standardiser */}
              <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-bold text-purple-900">Standardiser</h3>
                </div>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Postes de travail minimalisés</li>
                  <li>• Travail sur serveur distant</li>
                  <li>• Limitation de la maintenance</li>
                  <li>• Réinstallation simplifiée en cas de problème</li>
                </ul>
              </div>

              {/* Infogérance */}
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-bold text-green-900">Infogérance</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-green-800">Court terme :</p>
                    <p className="text-green-700">Mutualisation des ressources, facturation forfaitaire</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Moyen terme :</p>
                    <p className="text-green-700">Centralisation et rationalisation des équipements</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Long terme :</p>
                    <p className="text-green-700">Amélioration continue avec bilans annuels</p>
                  </div>
                </div>
              </div>

              {/* Cloud Computing */}
              <div className="bg-cyan-50 p-6 rounded-lg border-2 border-cyan-200">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-cyan-600" />
                  <h3 className="text-lg font-bold text-cyan-900">Cloud Computing</h3>
                </div>
                <ul className="text-cyan-800 space-y-2 text-sm">
                  <li>• Souplesse dans la gestion du SI</li>
                  <li>• Capacités ajustables en temps réel</li>
                  <li>• Nouveau modèle économique</li>
                  <li>• Remplacement des actifs par des charges</li>
                </ul>
              </div>

              {/* BYOD */}
              <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-200">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-pink-600" />
                  <h3 className="text-lg font-bold text-pink-900">BYOD (Bring Your Own Device)</h3>
                </div>
                <ul className="text-pink-800 space-y-2 text-sm">
                  <li>• Utilisation du matériel personnel</li>
                  <li>• Facilitation des usages</li>
                  <li>• Évitement des temps de formation</li>
                  <li>• Élargissement du temps de travail</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-gray-700 font-medium mb-2">OPTIMISER - Stratégies de réduction du TCO :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-1">
                  <li><strong>O</strong>rganiser et maîtriser son système</li>
                  <li><strong>P</strong>ostes standardisés</li>
                  <li><strong>T</strong>echnologies cloud</li>
                  <li><strong>I</strong>nfogérance stratégique</li>
                </ul>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>M</strong>atériel personnel (BYOD)</li>
                  <li><strong>I</strong>nventaire des licences</li>
                  <li><strong>S</strong>ervices externalisés</li>
                  <li><strong>E</strong>conomies et rationalisation</li>
                  <li><strong>R</strong>éduction des coûts cachés</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/section-3"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              ← Section III
            </Link>
            <div className="text-gray-500">
              TCO
            </div>
            <Link 
              href="/budgets"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Budgets →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}