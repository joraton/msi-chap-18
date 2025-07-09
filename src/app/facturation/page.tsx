import BackToPlanButton from '@/components/content/BackToPlanButton';
import { CreditCard, Users, Settings, Activity, Gift, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function Facturation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-teal-100 rounded-full p-3">
              <CreditCard className="h-8 w-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Les modes de facturation</h1>
              <p className="text-gray-600">Solutions innovantes de tarification IT</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-teal-900 mb-3">💡 Contexte</h3>
              <p className="text-teal-800">
                De nombreux prestataires informatiques ont adopté des <strong>solutions innovantes de tarification</strong>. 
                Le responsable DSI doit comprendre la logique économique de ces différentes approches.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Les 5 modalités principales</h2>
            
            <div className="space-y-8">
              {/* Modalité 1 : Tarification à l'utilisateur */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900">Modalité 1 : Tarification à l'utilisateur</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-blue-800 mb-2">Principe</h4>
                    <p className="text-blue-700 text-sm">
                      Modèle courant pour les SaaS : paiement selon le nombre de personnes utilisant le service.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded">
                      <h5 className="font-semibold text-green-800 mb-1">✅ Avantages</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Modèle simple et compréhensible</li>
                        <li>• Coûts prévisibles</li>
                        <li>• Équitable selon l'usage</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-1">❌ Inconvénients</h5>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Limite le nombre d'utilisateurs</li>
                        <li>• Effets de seuils</li>
                        <li>• Peut restreindre l'usage</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-800 mb-1">💡 Solution</h5>
                    <p className="text-blue-700 text-sm">
                      Tarification échelonnée par tranches (5, 10 utilisateurs) pour éviter les effets de seuils.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modalité 2 : Tarification basée sur les services */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-purple-900">Modalité 2 : Tarification basée sur les services</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-purple-800 mb-2">Principe</h4>
                    <p className="text-purple-700 text-sm">
                      Offre finement paramétrable permettant de choisir les fonctionnalités nécessaires.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">⚠️ Piège du &quot;bouquet TV&quot;</h4>
                    <p className="text-amber-700 text-sm">
                      Comme pour un bouquet TV, on ne utilise souvent qu'une partie des fonctionnalités proposées 
                      dans un package, mais le choix se base sur un sentiment de complétude.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded">
                      <h5 className="font-semibold text-green-800 mb-1">✅ Avantages</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Personnalisation possible</li>
                        <li>• Paiement selon les besoins</li>
                        <li>• Évolutivité</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-1">❌ Inconvénients</h5>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Complexité du choix</li>
                        <li>• Fonctionnalités inutilisées</li>
                        <li>• Tarif unitaire plus élevé</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modalité 3 : Tarification à l'usage */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Modalité 3 : Tarification à l'usage</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-green-800 mb-2">Principe</h4>
                    <p className="text-green-700 text-sm">
                      Facturation basée sur des indicateurs volumiques de consommation.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">📊 Exemple AWS</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Requête : 7 $ le To de données manipulées</li>
                      <li>• Serveur : 0,20 $ l'heure</li>
                      <li>• Stockage : selon l'espace utilisé</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded">
                      <h5 className="font-semibold text-green-800 mb-1">✅ Avantages</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Parfait pour usage irrégulier</li>
                        <li>• Coûts ajustés à l'intensité</li>
                        <li>• Pas de gaspillage</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-1">❌ Inconvénients</h5>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Difficile à prévoir</li>
                        <li>• Mauvaises surprises possibles</li>
                        <li>• Complexité de suivi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modalité 4 : Freemium */}
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-lg border-2 border-pink-200">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-6 w-6 text-pink-600" />
                  <h3 className="text-xl font-bold text-pink-900">Modalité 4 : Le Freemium</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-pink-800 mb-2">Principe</h4>
                    <p className="text-pink-700 text-sm">
                      Offre de base gratuite + montées en gamme payantes. Attirer puis convertir.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">📱 Exemples</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• <strong>Dropbox :</strong> Stockage gratuit jusqu'à une limite, puis payant</li>
                      <li>• <strong>Google :</strong> Services de base gratuits, options premium payantes</li>
                      <li>• <strong>LinkedIn :</strong> Version gratuite + formules professionnelles</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded">
                      <h5 className="font-semibold text-green-800 mb-1">✅ Avantages</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Découverte sans risque</li>
                        <li>• Adoption progressive</li>
                        <li>• Large base d'utilisateurs</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-1">❌ Inconvénients</h5>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Taux de conversion faible</li>
                        <li>• Coûts de la version gratuite</li>
                        <li>• Dépendance à la publicité</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modalité 5 : Tarif fixe */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-gray-600" />
                  <h3 className="text-xl font-bold text-gray-900">Modalité 5 : Le tarif fixe</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-2">Principe</h4>
                    <p className="text-gray-700 text-sm">
                      Modèle le plus simple : un service, un prix unique, mensuel ou annuel.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded">
                      <h5 className="font-semibold text-green-800 mb-1">✅ Avantages</h5>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Simplicité maximale</li>
                        <li>• Visibilité claire des coûts</li>
                        <li>• Communication percutante</li>
                        <li>• Facilite les prévisions</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-1">❌ Inconvénients</h5>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Aucune flexibilité</li>
                        <li>• Ne s'adapte pas aux besoins</li>
                        <li>• Peut être sur ou sous-dimensionné</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h5 className="font-semibold text-gray-800 mb-1">🔄 Comparaison</h5>
                    <p className="text-gray-700 text-sm">
                      Similaire aux licences logicielles traditionnelles, mais en mode abonnement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Guide de choix</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">🎯 Critères de sélection</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Pour l'entreprise</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Prévisibilité des coûts</li>
                    <li>• Flexibilité des besoins</li>
                    <li>• Régularité d'usage</li>
                    <li>• Complexité acceptable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Pour le prestataire</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Récurrence des revenus</li>
                    <li>• Coûts de gestion</li>
                    <li>• Acquisition clients</li>
                    <li>• Différenciation concurrentielle</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-gray-700 font-medium mb-2">TARIF - Modalités de facturation :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-1">
                  <li><strong>T</strong>arif fixe (simplicité)</li>
                  <li><strong>A</strong>bonnement par utilisateur</li>
                  <li><strong>R</strong>épartition par services</li>
                </ul>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>I</strong>ntensité d'usage (volumétrie)</li>
                  <li><strong>F</strong>reemium (gratuit + premium)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/budgets"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              ← Budgets
            </Link>
            <div className="text-gray-500">
              Facturation
            </div>
            <Link 
              href="/quiz"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Quiz →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}