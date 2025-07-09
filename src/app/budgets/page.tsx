import BackToPlanButton from '@/components/content/BackToPlanButton';
import { PieChart, TrendingUp, Target, AlertCircle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Budgets() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-emerald-100 rounded-full p-3">
              <PieChart className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Les budgets informatiques</h1>
              <p className="text-gray-600">Contrôle, pilotage et centres de responsabilité</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-emerald-900 mb-3">🎯 Objectif de l'approche budgétaire</h3>
              <p className="text-emerald-800">
                L'approche budgétaire est un <strong>outil fondamental de contrôle et de pilotage</strong>. 
                Elle consiste à prévoir un budget pour la fonction DSI et à le suivre, afin d'identifier 
                régulièrement les écarts entre prévisions et réalisations.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Centres de responsabilité</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🏛️ Délégation de pouvoir</h3>
              <p className="text-blue-800 mb-3">
                Pour qu'un responsable puisse gérer son budget, il doit disposer d'un certain degré d'autonomie. 
                Cette autonomie repose sur la notion de <strong>centre de responsabilité</strong>.
              </p>
              <p className="text-blue-800">
                La DSI doit être rattachée à l'un des types de centres de responsabilité pour permettre 
                une gestion budgétaire efficace.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Structure budgétaire fondamentale</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* RUN */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">RUN - Fonctionnement</h3>
                </div>
                <div className="text-green-800 space-y-2 text-sm">
                  <p><strong>Définition :</strong> Exploitation et maintenance du SI existant</p>
                  <p><strong>Caractéristiques :</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• Coûts récurrents</li>
                    <li>• Maintenance des applications</li>
                    <li>• Support utilisateurs</li>
                    <li>• Infrastructure technique</li>
                  </ul>
                </div>
              </div>

              {/* BUILD */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-purple-900">BUILD - Développement</h3>
                </div>
                <div className="text-purple-800 space-y-2 text-sm">
                  <p><strong>Définition :</strong> Projets et nouvelles solutions</p>
                  <p><strong>Caractéristiques :</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• Investissements ponctuels</li>
                    <li>• Nouveaux développements</li>
                    <li>• Évolutions majeures</li>
                    <li>• Innovation technologique</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Tendance à la hausse des budgets
              </h3>
              <p className="text-amber-800 mb-3">
                La distinction RUN/BUILD explique la tendance des budgets DSI à croître significativement :
              </p>
              <p className="text-amber-800">
                <strong>Effet retardé :</strong> Les dépenses de développement (BUILD) d'une année 
                entraînent une augmentation du coût de fonctionnement (RUN) les années suivantes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exercice pratique d'évolution budgétaire</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">📊 Énoncé de l'exercice</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-bold text-blue-800 mb-2">Données initiales</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Budget initial : <strong>70 de fonctionnement + 30 de développement = 100</strong></li>
                    <li>• <strong>20% des dépenses de développement</strong> donnent lieu à de nouvelles applications</li>
                    <li>• Ces nouvelles applications entraînent une <strong>augmentation correspondante du budget de fonctionnement</strong></li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-4 rounded border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-2">❓ Questions à résoudre</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-amber-800">Situation 1 :</p>
                      <p className="text-amber-700 text-sm">Comment va évoluer ce budget si l'on souhaite <strong>conserver un budget total constant</strong> ?</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-amber-800">Situation 2 :</p>
                      <p className="text-amber-700 text-sm">Quelles vont être les conséquences si l'on souhaite <strong>conserver un budget étude constant</strong> ?</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-amber-800">Situation 3 :</p>
                      <p className="text-amber-700 text-sm">Comment va évoluer le budget si l'on souhaite <strong>conserver un budget type</strong> (même répartition RUN/BUILD) ?</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">💡 Éléments de réflexion</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Chaque année, 20% de 30 = <strong>6 unités</strong> de nouveaux coûts RUN</li>
                    <li>• Impact sur l'équilibre budgétaire à moyen terme</li>
                    <li>• Arbitrages nécessaires entre innovation et maîtrise des coûts</li>
                    <li>• Effet cumulatif des projets sur plusieurs années</li>
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded border border-red-200">
                    <h5 className="font-bold text-red-800 mb-2">Scénario 1</h5>
                    <p className="text-red-700 text-sm mb-2">Budget total constant</p>
                    <p className="text-red-600 text-xs">→ Réduction progressive du BUILD</p>
                    <p className="text-red-600 text-xs">→ Moins d'innovation</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded border border-orange-200">
                    <h5 className="font-bold text-orange-800 mb-2">Scénario 2</h5>
                    <p className="text-orange-700 text-sm mb-2">BUILD constant</p>
                    <p className="text-orange-600 text-xs">→ Augmentation continue du budget</p>
                    <p className="text-orange-600 text-xs">→ Dérive budgétaire</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h5 className="font-bold text-blue-800 mb-2">Scénario 3</h5>
                    <p className="text-blue-700 text-sm mb-2">Ratio RUN/BUILD constant</p>
                    <p className="text-blue-600 text-xs">→ Croissance maîtrisée</p>
                    <p className="text-blue-600 text-xs">→ Équilibre innovation/coûts</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Enjeux de l'élaboration budgétaire</h2>
            
            <div className="grid gap-6 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Délimitation du périmètre
                </h3>
                <p className="text-red-800 mb-3">
                  La simple délimitation du périmètre peut entraîner des <strong>différences de chiffrages significatives</strong>.
                </p>
                <div className="text-red-800 space-y-2">
                  <p><strong>Questions clés :</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• Quels services inclure dans le périmètre DSI ?</li>
                    <li>• Comment répartir les coûts partagés ?</li>
                    <li>• Faut-il inclure les coûts cachés ?</li>
                    <li>• Comment traiter l'amortissement des investissements ?</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bonnes pratiques budgétaires</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">✅ À faire</h3>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• Définir clairement le périmètre</li>
                  <li>• Séparer RUN et BUILD</li>
                  <li>• Prévoir l'impact des projets sur le RUN</li>
                  <li>• Mettre en place un suivi régulier</li>
                  <li>• Analyser les écarts</li>
                  <li>• Communiquer sur les évolutions</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">❌ À éviter</h3>
                <ul className="text-red-800 space-y-2 text-sm">
                  <li>• Périmètre flou ou changeant</li>
                  <li>• Mélanger RUN et BUILD</li>
                  <li>• Ignorer l'effet retardé des projets</li>
                  <li>• Suivi uniquement en fin d'année</li>
                  <li>• Pas d'analyse des causes d'écarts</li>
                  <li>• Communication insuffisante</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-gray-700 font-medium mb-2">BUDGET - Gestion budgétaire efficace :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-1">
                  <li><strong>B</strong>uild et Run séparés</li>
                  <li><strong>U</strong>nités de responsabilité définies</li>
                  <li><strong>D</strong>élimitation claire du périmètre</li>
                </ul>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>G</strong>estion des écarts</li>
                  <li><strong>E</strong>ffet retardé anticipé</li>
                  <li><strong>T</strong>raçabilité et suivi régulier</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/tco"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              ← TCO
            </Link>
            <div className="text-gray-500">
              Budgets
            </div>
            <Link 
              href="/facturation"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Facturation →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}