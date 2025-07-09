'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Award, FileText, Calculator, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Exercise {
  id: number;
  title: string;
  context: string;
  question: string;
  data: string[];
  solution: {
    steps: string[];
    result: string;
    methodology: string[];
  };
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Calcul du coût d'un ERP",
    context: "La société TECHNO souhaite calculer le coût annuel de son ERP utilisé par 200 employés.",
    question: "Calculez le coût total annuel de l'ERP et le coût par utilisateur.",
    data: [
      "Licences ERP : 150 000 € (achat)",
      "Maintenance annuelle : 15% du coût des licences",
      "Serveur dédié : 25 000 € (amortissement annuel)",
      "Administrateur ERP : 2 jours/mois à 500 €/jour",
      "Formation utilisateurs : 50 000 € (à répartir sur 3 ans)",
      "Frais de structure : 8% du coût total"
    ],
    solution: {
      steps: [
        "Amortissement licences : 150 000 € / 5 ans = 30 000 €",
        "Maintenance : 150 000 € × 15% = 22 500 €",
        "Serveur : 25 000 €",
        "Administrateur : 2 × 12 × 500 € = 12 000 €",
        "Formation : 50 000 € / 3 = 16 667 €",
        "Sous-total : 30 000 + 22 500 + 25 000 + 12 000 + 16 667 = 106 167 €",
        "Frais de structure : 106 167 € × 8% = 8 493 €",
        "Coût total : 106 167 + 8 493 = 114 660 €",
        "Coût par utilisateur : 114 660 € / 200 = 573 €"
      ],
      result: "Coût total annuel : 114 660 € | Coût par utilisateur : 573 €",
      methodology: [
        "Identifier toutes les charges directes et indirectes",
        "Appliquer les règles d'amortissement appropriées",
        "Calculer les charges de structure en pourcentage",
        "Répartir le coût total sur le nombre d'utilisateurs"
      ]
    }
  },
  {
    id: 2,
    title: "Répartition des coûts d'infrastructure",
    context: "Le centre de données de l'entreprise DIGITAL héberge 3 applications métier. Il faut répartir les coûts d'infrastructure.",
    question: "Répartissez les coûts d'infrastructure entre les 3 applications selon les critères appropriés.",
    data: [
      "Coût total du centre de données : 480 000 €/an",
      "Application A : 4 serveurs, 100 utilisateurs, 40% du trafic réseau",
      "Application B : 6 serveurs, 150 utilisateurs, 35% du trafic réseau",
      "Application C : 2 serveurs, 50 utilisateurs, 25% du trafic réseau",
      "Répartition : 50% selon le nombre de serveurs, 30% selon les utilisateurs, 20% selon le trafic"
    ],
    solution: {
      steps: [
        "Total serveurs : 4 + 6 + 2 = 12 serveurs",
        "Total utilisateurs : 100 + 150 + 50 = 300 utilisateurs",
        "Répartition par serveurs (50% × 480 000 = 240 000 €) :",
        "  - App A : 240 000 × (4/12) = 80 000 €",
        "  - App B : 240 000 × (6/12) = 120 000 €",
        "  - App C : 240 000 × (2/12) = 40 000 €",
        "Répartition par utilisateurs (30% × 480 000 = 144 000 €) :",
        "  - App A : 144 000 × (100/300) = 48 000 €",
        "  - App B : 144 000 × (150/300) = 72 000 €",
        "  - App C : 144 000 × (50/300) = 24 000 €",
        "Répartition par trafic (20% × 480 000 = 96 000 €) :",
        "  - App A : 96 000 × 40% = 38 400 €",
        "  - App B : 96 000 × 35% = 33 600 €",
        "  - App C : 96 000 × 25% = 24 000 €"
      ],
      result: "App A : 166 400 € | App B : 225 600 € | App C : 88 000 €",
      methodology: [
        "Définir des critères de répartition objectifs et mesurables",
        "Appliquer une pondération selon l'importance de chaque critère",
        "Vérifier que la somme des répartitions égale le coût total",
        "Documenter les choix de répartition pour la traçabilité"
      ]
    }
  },
  {
    id: 3,
    title: "Analyse de rentabilité d'un projet IT",
    context: "L'entreprise INNOV envisage de remplacer son système de gestion actuel par une solution cloud.",
    question: "Analysez la rentabilité du projet sur 3 ans et calculez le ROI.",
    data: [
      "Coût actuel du système : 200 000 €/an",
      "Coût de migration vers le cloud : 150 000 € (année 1)",
      "Coût annuel de la solution cloud : 120 000 €/an",
      "Économies de maintenance : 30 000 €/an",
      "Gain de productivité estimé : 50 000 €/an",
      "Formation des équipes : 25 000 € (année 1)"
    ],
    solution: {
      steps: [
        "Coûts du projet :",
        "  - Migration : 150 000 €",
        "  - Formation : 25 000 €",
        "  - Coût total initial : 175 000 €",
        "Coûts annuels :",
        "  - Solution cloud : 120 000 €/an",
        "Économies annuelles :",
        "  - Ancien système évité : 200 000 €",
        "  - Économies maintenance : 30 000 €",
        "  - Gains productivité : 50 000 €",
        "  - Total économies : 280 000 €/an",
        "Bénéfice net annuel : 280 000 - 120 000 = 160 000 €/an",
        "Bénéfices sur 3 ans : 160 000 × 3 = 480 000 €",
        "ROI = (480 000 - 175 000) / 175 000 × 100 = 174%"
      ],
      result: "ROI sur 3 ans : 174% | Retour sur investissement en 13 mois",
      methodology: [
        "Identifier tous les coûts directs et indirects du projet",
        "Quantifier les bénéfices tangibles et mesurables",
        "Calculer les flux de trésorerie sur la période d'analyse",
        "Appliquer les indicateurs financiers appropriés (ROI, VAN, TRI)"
      ]
    }
  }
];

export default function QuestionsDSCG() {
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});

  const toggleExercise = (id: number) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  const toggleSolution = (id: number) => {
    setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-violet-100 rounded-full p-3">
              <Award className="h-8 w-8 text-violet-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cas pratiques</h1>
            <p className="text-gray-600">Exercices pratiques et méthodologie d'examen</p>
            </div>
          </div>

          <div className="bg-violet-50 border-l-4 border-violet-500 p-6 mb-8 rounded-r-lg">
            <h3 className="text-lg font-semibold text-violet-900 mb-3">🎯 Conseils pour l'examen DSCG</h3>
            <div className="grid md:grid-cols-2 gap-4 text-violet-800">
              <div>
                <h4 className="font-bold mb-2">Méthodologie</h4>
                <ul className="text-sm space-y-1">
                  <li>• Lire attentivement l'énoncé</li>
                  <li>• Identifier les charges directes/indirectes</li>
                  <li>• Choisir les critères de répartition</li>
                  <li>• Présenter les calculs de façon structurée</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Points clés</h4>
                <ul className="text-sm space-y-1">
                  <li>• Justifier les choix méthodologiques</li>
                  <li>• Vérifier la cohérence des résultats</li>
                  <li>• Analyser les résultats obtenus</li>
                  <li>• Proposer des recommandations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleExercise(exercise.id)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-violet-100 rounded-full p-2">
                      <FileText className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Exercice {exercise.id} : {exercise.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{exercise.context}</p>
                    </div>
                  </div>
                  {expandedExercise === exercise.id ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {expandedExercise === exercise.id && (
                  <div className="p-6 bg-white">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">📋 Énoncé</h4>
                      <p className="text-gray-700 mb-4">{exercise.question}</p>
                      
                      <h5 className="font-semibold text-gray-900 mb-2">Données :</h5>
                      <ul className="space-y-1">
                        {exercise.data.map((item, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                            <span className="text-violet-600 font-bold">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => toggleSolution(exercise.id)}
                      className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg font-medium transition-colors mb-4"
                    >
                      <Calculator className="h-4 w-4" />
                      {showSolution[exercise.id] ? 'Masquer la solution' : 'Voir la solution'}
                    </button>

                    {showSolution[exercise.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-6"
                      >
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                          <h5 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            Résolution détaillée
                          </h5>
                          <ol className="space-y-2">
                            {exercise.solution.steps.map((step, idx) => (
                              <li key={idx} className="text-green-800 text-sm flex items-start gap-2">
                                <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                                  {idx + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                          <h5 className="font-bold text-blue-900 mb-2">🎯 Résultat final</h5>
                          <p className="text-blue-800 font-semibold">{exercise.solution.result}</p>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                          <h5 className="font-bold text-amber-900 mb-3">💡 Points méthodologiques</h5>
                          <ul className="space-y-1">
                            {exercise.solution.methodology.map((point, idx) => (
                              <li key={idx} className="text-amber-800 text-sm flex items-start gap-2">
                                <span className="text-amber-600 font-bold">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🧠 Moyen mnémotechnique pour l'examen</h3>
            <p className="text-gray-700 font-medium mb-2">EXAMINER - Méthode de résolution des exercices DSCG :</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-1">
                <li><strong>E</strong>noncer clairement le problème</li>
                <li><strong>X</strong>aminer toutes les données</li>
                <li><strong>A</strong>nalyser les charges directes/indirectes</li>
                <li><strong>M</strong>éthodologie de répartition</li>
              </ul>
              <ul className="text-gray-700 space-y-1">
                <li><strong>I</strong>mputer selon les critères choisis</li>
                <li><strong>N</strong>ombres : vérifier tous les calculs</li>
                <li><strong>E</strong>valuer la cohérence des résultats</li>
                <li><strong>R</strong>ecommandations et conclusion</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link 
              href="/quiz"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              ← Quiz
            </Link>
            <div className="text-gray-500">
              Cas pratiques
            </div>
            <Link 
              href="/questions-dscg"
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Questions DSCG →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}