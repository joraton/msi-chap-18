'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la principale difficulté dans le calcul des coûts informatiques ?",
    options: [
      "Le manque d'outils comptables",
      "La délimitation des charges directes et indirectes",
      "L'absence de normes comptables",
      "Le coût élevé des logiciels"
    ],
    correct: 1,
    explanation: "La délimitation des coûts n'est pas chose aisée car les services opérationnels ne sont pas familiarisés avec ces méthodes et les services financiers ont du mal à suivre l'évolution rapide de l'IT."
  },
  {
    id: 2,
    question: "Dans quel compte comptable enregistre-t-on les salaires du personnel informatique ?",
    options: [
      "Compte 611",
      "Compte 641",
      "Compte 681",
      "Compte 615"
    ],
    correct: 1,
    explanation: "Les salaires (y compris participation et intéressement) sont enregistrés dans le compte 641."
  },
  {
    id: 3,
    question: "Quelle méthode le CIGREF recommande-t-il pour le calcul des coûts informatiques ?",
    options: [
      "La méthode des coûts directs",
      "La comptabilité par activité (ABC)",
      "La méthode des coûts variables",
      "L'imputation rationnelle"
    ],
    correct: 1,
    explanation: "Le CIGREF s'inspire de la comptabilité par activité (ABC) qui détermine quelles activités consomment les ressources et sont nécessaires pour fournir une prestation informatique."
  },
  {
    id: 4,
    question: "Dans l'exemple de la messagerie, quel est le critère de répartition pour la salle serveurs ?",
    options: [
      "Le nombre d'utilisateurs",
      "Le temps d'utilisation",
      "Le nombre de serveurs",
      "La puissance de calcul"
    ],
    correct: 2,
    explanation: "La salle serveurs coûte 87 000 € et contient 13 serveurs. Le coût est réparti proportionnellement : 87 000 € / 13 = 6 692 € par serveur."
  },
  {
    id: 5,
    question: "Quel est l'avantage principal d'un coût complet par rapport à un coût partiel ?",
    options: [
      "Il est plus facile à calculer",
      "Il donne une vision plus riche",
      "Il évite les choix arbitraires",
      "Il se concentre sur l'essentiel"
    ],
    correct: 1,
    explanation: "Un coût complet donne une vision plus riche mais repose sur de nombreux choix arbitraires, contrairement au coût partiel qui se focalise sur les charges les plus significatives."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="mb-8">
              <Trophy className={`h-16 w-16 mx-auto mb-4 ${
                percentage >= 80 ? 'text-yellow-500' : 
                percentage >= 60 ? 'text-gray-400' : 'text-orange-500'
              }`} />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz terminé !</h1>
              <p className="text-gray-600">Voici vos résultats</p>
            </div>

            <div className={`text-6xl font-bold mb-4 ${
              percentage >= 80 ? 'text-green-600' : 
              percentage >= 60 ? 'text-orange-600' : 'text-red-600'
            }`}>
              {percentage}%
            </div>
            
            <p className="text-xl text-gray-700 mb-8">
              Vous avez obtenu <strong>{score}</strong> bonne(s) réponse(s) sur <strong>{questions.length}</strong>
            </p>

            <div className={`p-6 rounded-lg mb-8 ${
              percentage >= 80 ? 'bg-green-50 border-green-200' : 
              percentage >= 60 ? 'bg-orange-50 border-orange-200' : 'bg-red-50 border-red-200'
            } border-2`}>
              <h3 className={`text-lg font-bold mb-2 ${
                percentage >= 80 ? 'text-green-900' : 
                percentage >= 60 ? 'text-orange-900' : 'text-red-900'
              }`}>
                {percentage >= 80 ? '🎉 Excellent !' : 
                 percentage >= 60 ? '👍 Bien joué !' : '💪 Continuez vos efforts !'}
              </h3>
              <p className={`${
                percentage >= 80 ? 'text-green-800' : 
                percentage >= 60 ? 'text-orange-800' : 'text-red-800'
              }`}>
                {percentage >= 80 ? 'Vous maîtrisez parfaitement les concepts du calcul des coûts informatiques !' : 
                 percentage >= 60 ? 'Vous avez une bonne compréhension des bases. Révisez les points difficiles.' : 
                 'Il serait bénéfique de revoir le cours avant de passer aux cas pratiques.'}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </button>
              <div className="flex gap-4">
                <Link 
                  href="/cas-pratiques"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Cas pratiques →
                </Link>
                <Link 
                  href="/questions-dscg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Questions DSCG →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 rounded-full p-3">
              <Brain className="h-8 w-8 text-orange-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">Quiz</h1>
              <p className="text-gray-600">Testez vos connaissances</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Question</div>
              <div className="text-2xl font-bold text-orange-600">
                {currentQuestion + 1}/{questions.length}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {question.question}
              </h2>

              <div className="space-y-3 mb-8">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  const isCorrect = index === question.correct;
                  const showFeedback = showResult;
                  
                  let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ";
                  
                  if (showFeedback) {
                    if (isCorrect) {
                      buttonClass += "border-green-500 bg-green-50 text-green-900";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "border-red-500 bg-red-50 text-red-900";
                    } else {
                      buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                    }
                  } else {
                    buttonClass += "border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => !showResult && handleAnswer(index)}
                      disabled={showResult}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showFeedback && isCorrect && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        {showFeedback && isSelected && !isCorrect && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6"
                >
                  <h3 className="font-bold text-blue-900 mb-2">💡 Explication</h3>
                  <p className="text-blue-800">{question.explanation}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <div className="text-gray-500">
              Score actuel : {selectedAnswers.filter((answer, index) => 
                answer === questions[index]?.correct
              ).length}/{currentQuestion + (showResult ? 1 : 0)}
            </div>
            
            {showResult && (
              <button
                onClick={nextQuestion}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}