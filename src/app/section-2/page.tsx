import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Calculator, Mail, Server, User, Building, PieChart } from 'lucide-react';
import Link from 'next/link';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 rounded-full p-3">
              <Calculator className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section II : Méthodes de répartition</h1>
              <p className="text-gray-600">Centres d'analyse et imputation des charges</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">La méthode des centres d'analyse</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Cette démarche repose sur des <strong>centres d'analyse</strong>, que l'on appelle 
              également <strong>méthode des sections homogènes</strong>, qui permettent la répartition 
              des charges indirectes, au-delà des seules charges directes qui sont les plus 
              évidentes à repérer.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">🎯 Objectif</h3>
              <p className="text-purple-800">
                Permettre l'imputation précise des charges communes grâce à des critères 
                de répartition adaptés à chaque type de ressource.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exemple pratique : Coût d'une messagerie</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-bold text-blue-900">Cas d'étude : Messagerie d'entreprise</h3>
              </div>
              
              <div className="grid gap-6">
                {/* Éléments de coût */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="h-5 w-5 text-green-600" />
                      <h4 className="font-bold text-gray-900">Logiciel (Direct)</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">Logiciel exclusif messagerie</p>
                    <p className="text-lg font-bold text-green-600">12 000 € / an</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="h-5 w-5 text-orange-600" />
                      <h4 className="font-bold text-gray-900">Salle serveurs (Indirect)</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">1 serveur parmi 13 total</p>
                    <p className="text-lg font-bold text-orange-600">87 000 € / 13 = 6 692 €</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-5 w-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">Responsable IT (Indirect)</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">2h/semaine × 52 semaines</p>
                    <p className="text-lg font-bold text-blue-600">58 000 € × (104h/1820h) = 3 313 €</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <PieChart className="h-5 w-5 text-purple-600" />
                      <h4 className="font-bold text-gray-900">Frais admin (Indirect)</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">1 application parmi 53</p>
                    <p className="text-lg font-bold text-purple-600">134 000 € / 53 = 2 528 €</p>
                  </div>
                </div>
                
                {/* Total */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">💰 Coût total de la messagerie</h4>
                  <div className="text-2xl font-bold">
                    12 000 + 6 692 + 3 313 + 2 528 = <span className="text-yellow-400">24 533 € / an</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Méthode CIGREF</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Le Cigref propose une méthode de calcul des coûts informatiques qui sert de référence. 
              Elle s'inspire de la <strong>comptabilité par activité (ABC)</strong>. Dans le cas d'une 
              telle méthode, la logique est de déterminer :
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <h4 className="font-bold text-blue-900 mb-2">Activités consommatrices</h4>
                <p className="text-blue-800 text-sm">Quelles activités consomment les ressources ?</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <h4 className="font-bold text-green-900 mb-2">Activités nécessaires</h4>
                <p className="text-green-800 text-sm">Quelles activités pour fournir une prestation IT ?</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <h4 className="font-bold text-purple-900 mb-2">Objets de coûts</h4>
                <p className="text-purple-800 text-sm">Comment réaliser un objet de coûts ?</p>
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">🏗️ Fondements de la méthode CIGREF</h3>
              <div className="grid md:grid-cols-2 gap-4 text-indigo-800">
                <div>
                  <h4 className="font-bold mb-2">Approche par activités</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Identification des processus</li>
                    <li>• Mesure de la consommation</li>
                    <li>• Traçabilité des coûts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Objets de coûts</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Applications métier</li>
                    <li>• Services informatiques</li>
                    <li>• Projets de développement</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Critères de répartition courants</h2>
            
            <div className="grid gap-4 mb-8">
              <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-4 rounded-lg">
                <h4 className="font-bold text-cyan-900 mb-2">🖥️ Infrastructure</h4>
                <p className="text-cyan-800 text-sm">Nombre de serveurs, espace disque, bande passante</p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg">
                <h4 className="font-bold text-teal-900 mb-2">👥 Utilisateurs</h4>
                <p className="text-teal-800 text-sm">Nombre d'utilisateurs, temps d'utilisation, transactions</p>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-lg">
                <h4 className="font-bold text-emerald-900 mb-2">⏱️ Temps</h4>
                <p className="text-emerald-800 text-sm">Heures de développement, temps de maintenance, disponibilité</p>
              </div>
              
              <div className="bg-gradient-to-r from-lime-50 to-lime-100 p-4 rounded-lg">
                <h4 className="font-bold text-lime-900 mb-2">📊 Volume</h4>
                <p className="text-lime-800 text-sm">Nombre d'applications, volume de données, complexité</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-gray-700 font-medium mb-2">REPARTIR - Les étapes de répartition des coûts :</p>
              <ul className="text-gray-700 space-y-1">
                <li><strong>R</strong>econnaissance des charges directes/indirectes</li>
                <li><strong>E</strong>valuation des centres d'analyse</li>
                <li><strong>P</strong>artage selon des critères objectifs</li>
                <li><strong>A</strong>ffectation aux objets de coûts</li>
                <li><strong>R</strong>épartition proportionnelle</li>
                <li><strong>T</strong>raçabilité des calculs</li>
                <li><strong>I</strong>mputation finale</li>
                <li><strong>R</strong>approchement et contrôle</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/section-1"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              ← Section I
            </Link>
            <div className="text-gray-500">
              Section II
            </div>
            <Link 
              href="/section-3"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Section III →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}