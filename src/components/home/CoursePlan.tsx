'use client';

import { Target, Rocket, BarChart3, Calculator, TrendingUp, Brain, Award, PieChart, CreditCard, FileText } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Découvrez les concepts fondamentaux du calcul des coûts informatiques et leur importance stratégique.',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I : Les bases du calcul des coûts',
    description: 'Maîtrisez les éléments comptables et la démarche méthodologique de calcul des coûts.',
    href: '/section-1',
    icon: BarChart3,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II : Méthodes de répartition',
    description: 'Apprenez les techniques de répartition des charges directes et indirectes.',
    href: '/section-2',
    icon: Calculator,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Section III : Applications pratiques',
    description: 'Explorez les cas concrets et les outils de pilotage des coûts informatiques.',
    href: '/section-3',
    icon: TrendingUp,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'TCO (Total Cost of Ownership)',
    description: 'Comprendre et maîtriser le coût total de possession',
    href: '/tco',
    icon: Calculator,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
     title: 'Budgets informatiques',
     description: 'Approche budgétaire et centres de responsabilité',
     href: '/budgets',
     icon: PieChart,
     color: 'text-cyan-600',
     bgColor: 'bg-cyan-100'
   },
   {
     title: 'Modes de facturation',
     description: 'Solutions innovantes de tarification IT',
     href: '/facturation',
     icon: CreditCard,
     color: 'text-rose-600',
     bgColor: 'bg-rose-100'
   },
  {
    title: 'Quiz',
    description: 'Testez vos connaissances avec des questions interactives et obtenez un feedback immédiat.',
    href: '/quiz',
    icon: Brain,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Cas pratiques',
    description: 'Préparez-vous aux examens avec des exercices pratiques et des corrections détaillées.',
    href: '/cas-pratiques',
    icon: FileText,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Questions DSCG',
    description: 'Collection exhaustive des questions d\'examens DSCG avec corrections',
    href: '/questions-dscg',
    icon: Award,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            Plan du cours
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          Suivez un parcours structuré pour maîtriser le calcul des coûts informatiques
        </p>
      </div>

      {/* Sections Grid */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}