import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, FileText, Users, Server, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 rounded-full p-3">
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section I : Les bases du calcul des coûts</h1>
              <p className="text-gray-600">Éléments comptables et démarche méthodologique</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">A. Les éléments comptables</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              On sait qu'un <strong>coût correspond à un regroupement de charges</strong>. L'essentiel 
              de ces charges est enregistré dans le cadre de la tenue des comptes, et ce dans le 
              cadre d'une classification par nature. Cette saisie initiale est parfaitement fiable, 
              même si elle peut justifier diverses modifications.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Point clé</h3>
              <p className="text-blue-800">
                Le SI est à la croisée de très nombreuses opérations comptables, 
                d'où la grande variété des postes de charges concernés.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Classification des charges informatiques</h3>
            
            <div className="grid gap-6 mb-8">
              {/* Personnel */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h4 className="text-lg font-bold text-blue-900">Personnel</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Salaires (641) :</strong> Y compris participation et intéressement</p>
                    <p><strong>Charges sociales (645) :</strong> Cotisations employeur</p>
                    <p><strong>Formations (631) :</strong> Formation des collaborateurs IT</p>
                  </div>
                  <div>
                    <p><strong>Notes de frais (625) :</strong> Déplacements, missions</p>
                    <p><strong>Autres frais (621) :</strong> Personnel détaché, intérim, recrutement</p>
                    <p><strong>Véhicules (613) :</strong> Véhicules de service/fonction</p>
                  </div>
                </div>
              </div>

              {/* Prestations externes */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-bold text-green-900">Prestations externes</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Forfaits (611) :</strong> Infogérance, développement, TMA</p>
                    <p><strong>Achat de service (611) :</strong> ASP, SaaS</p>
                  </div>
                  <div>
                    <p><strong>Assistance technique (611) :</strong> Contrats avec obligation de moyens</p>
                    <p><strong>Honoraires (622) :</strong> Conseil juridique, audit DSI</p>
                  </div>
                </div>
              </div>

              {/* Matériels et Logiciels */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="h-6 w-6 text-purple-600" />
                  <h4 className="text-lg font-bold text-purple-900">Matériels & Logiciels</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Achats (681) :</strong> Matériels et logiciels</p>
                    <p><strong>Maintenance (615) :</strong> Support technique</p>
                  </div>
                  <div>
                    <p><strong>Locations (613) :</strong> Leasing, abonnements</p>
                    <p><strong>Petits matériels (605, 606) :</strong> Consommables</p>
                  </div>
                </div>
              </div>

              {/* Télécom et Structure */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                  <h4 className="text-lg font-bold text-orange-900">Télécom & Structure</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Data & Voix (626) :</strong> Communications</p>
                    <p><strong>Locaux (614, 615) :</strong> Y compris énergie</p>
                  </div>
                  <div>
                    <p><strong>Assurances (616) :</strong> Couverture des risques</p>
                    <p><strong>Impôts et taxes (631, 635, 637) :</strong> Taxe professionnelle</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">B. La démarche de calcul</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Même si les coûts informatiques ne sont pas normalisés, la démarche de calcul 
              ne nécessite pas de réinventer la roue : les <strong>outils traditionnels de calcul 
              des coûts</strong> sont tout à fait pertinents.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">⚖️ Choix de délimitation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-amber-800 mb-2">Coût complet</h4>
                  <p className="text-amber-700 text-sm mb-2">✅ Vision plus riche</p>
                  <p className="text-amber-700 text-sm">❌ Choix arbitraires, contenu sujet à caution</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-800 mb-2">Coût partiel</h4>
                  <p className="text-amber-700 text-sm mb-2">✅ Focus sur charges significatives</p>
                  <p className="text-amber-700 text-sm">❌ Pas toujours pertinent pour le contrôle</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Distinction fondamentale des charges</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h4 className="font-bold text-green-900 mb-3">📍 Charges directes</h4>
                <p className="text-green-800 text-sm mb-3">
                  Se rattachent <strong>sans ambiguïté</strong> à l'élément analysé
                </p>
                <div className="bg-green-100 p-3 rounded text-xs text-green-700">
                  <strong>Exemple :</strong> Coût des licences d'un logiciel de suivi des ventes 
                  → rattachement direct à la fonction commerciale
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-3">🔄 Charges communes</h4>
                <p className="text-red-800 text-sm mb-3">
                  Nécessitent des <strong>critères de répartition</strong> pour leur imputation
                </p>
                <div className="bg-red-100 p-3 rounded text-xs text-red-700">
                  <strong>Note :</strong> Correspondent souvent à la majorité des charges, 
                  obligent à une analyse préalable
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-gray-700 font-medium mb-2">DIRECT - Méthode de classification des charges :</p>
              <ul className="text-gray-700 space-y-1">
                <li><strong>D</strong>irectes : rattachement immédiat</li>
                <li><strong>I</strong>ndirectes : répartition nécessaire</li>
                <li><strong>R</strong>épartition par centres d'analyse</li>
                <li><strong>E</strong>valuation des critères</li>
                <li><strong>C</strong>alcul du coût complet</li>
                <li><strong>T</strong>raçabilité des imputations</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/introduction"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              ← Introduction
            </Link>
            <div className="text-gray-500">
              Section I
            </div>
            <Link 
              href="/section-2"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Section II →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}