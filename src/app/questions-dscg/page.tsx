'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, FileText, ChevronRight, Award, Target } from 'lucide-react';
import Link from 'next/link';

const sessions = [
  {
    year: '2016',
    context: 'Le cas "SOVANI" concerne une PME spécialisée dans la commercialisation de fournitures de bureau qui se lance dans les objets connectés. Le SI de l\'entreprise est un vecteur majeur de performance dans un secteur concurrentiel. L\'entreprise est confrontée à la nécessité de moderniser son SI, notamment son ERP vieillissant.',
    questions: [
      {
        title: 'DOSSIER 2 – PROJET de MODERNISATION DU SI - Question 4',
        question: '**Présenter sous forme de tableau, 3 facteurs de réussite d\'une telle conduite de projet en intégrant par exemple les référentiels et autres bonnes pratiques.**',
        correction: [
          'Les facteurs de réussite sont répertoriés ci-dessous:',
          '• **Maîtrise du budget** : Permet de ne pas impacter d\'éventuels autres projets ou la performance globale de l\'entreprise par des dépassements de budgets importants.',
          '• **Prévoir un tableau de bord** : Des indicateurs clés : temps passé sur chaque étape du déroulement ou ordonnancement prévu, **coûts et modes de règlement tout au long du projet**, nombre d\'heures de formation, délivrance de certificat de formation, nb de personnes formées, gains de temps attendus post projet, mesure de la qualité post projet (erreurs, redondances, retard dans les traitements, ressaisies inutiles…et comparaisons avec la situation ante projet).',
          '• Participation des RH.',
          '• Formation des RH.',
          '• Implication de la DG.',
          '• Identification des risques projet.',
          '• Mesure de la conformité.',
          '• Exploitation d\'outils de gestion de projet.',
          '• Choix du ou des maitres d\'œuvres, prestataires.'
        ]
      },
      {
        title: 'DOSSIER 2 – PROJET de MODERNISATION DU SI - Question 5',
        question: '**Dans le contexte du projet de modernisation de l\'ERP de SOVANI, proposer des éléments de comparaison entre les 3 alternatives cloud existantes.**',
        correction: [
          'La société SOVANI envisage une solution cloud pour faire face à ses besoins en termes de sauvegarde, d\'accès à des ressources logicielles et à des échanges. Trois solutions en cloud sont actuellement disponibles sur le marché, dont les caractéristiques sont présentées ci-dessous :',
          '• **Cloud privé** : Accès sur serveur distant dédié à une seule entreprise, garantissant étanchéité et sécurité. Permet une consommation du SI via le SaaS. Les ressources peuvent être chez SOVANI ou une ESN. Les **coûts sont plus élevés**.',
          '• **Cloud public** : Matériel et services à distance fournis par un prestataire pour plusieurs entreprises. Le **coût est alors moindre**.',
          '• **Cloud hybride** : Concilie le meilleur du cloud privé et public. Des ressources publiques et des ressources plus sensibles restreintes. Le **coût est alors intermédiaire**.'
        ]
      },
      {
        title: 'DOSSIER 2. PROJET DE DÉPLOIEMENT DE L\'APPLICATION MÉTIER - Question 6',
        question: '**En quoi la virtualisation et la haute disponibilité des serveurs AidSys peuvent-ils avoir un impact sur le coût total de possession ?**',
        correction: [
          '**Impact de la virtualisation** :',
          'La virtualisation permet de faire fonctionner plusieurs serveurs virtuels sur un serveur physique. Elle permet de **réaliser des économies et réduire les investissements en infrastructures physiques**. Réduction des coûts : consommation électrique, nombre de serveurs physiques, matériels associés (onduleurs, commutateurs réseau, etc.), espace de stockage, climatisation.',
          '',
          '**Impact de la haute disponibilité** :',
          'La haute disponibilité permet une diminution voire disparition des temps d\'interruption de service, ce qui entraîne une **réduction des coûts induits par ces interruptions** (perte de chiffre d\'affaires, perte de productivité, etc.). **Impact positif sur le TCO qui s\'en trouvera réduit**.'
        ]
      }
    ]
  },
  {
    year: '2017',
    context: 'Le cas "AIDADOM" présente un réseau français d\'associations de services à domicile qui cherche à moderniser et professionnaliser ses services pour répondre aux objectifs de qualité et de GPEC (Gestion Prévisionnelle des Emplois et des Compétences). Le SI est un vecteur de performance clé.',
    questions: [
      {
        title: 'DOSSIER 2. PROJET DE DÉPLOIEMENT DE L\'APPLICATION MÉTIER - Question 4',
        question: '**Apprécier le choix d\'AIDADOM de recourir à un site central d\'hébergement.**',
        correction: [
          'Ce choix présente des avantages et des limites.',
          '**Avantages** : Mutualisation et rationalisation des ressources matérielles, niveau de sécurité élevé, sécurisation des échanges, **réduction des coûts liés à l\'exploitation et à l\'administration des matériels** grâce à la mutualisation des ressources et l\'utilisation d\'un navigateur client, renforcement de la professionnalisation par des prestataires spécialisés, scalabilité facilitée, disponibilité accrue.',
          '**Limites** : Temps d\'accès aux données plus important, vieillissement des Datacenters traditionnels, coût du Giga élevé, manque de gains potentiels, multiples risques (dépendance prestataire, sécurité/confidentialité des données, perte de productivité liée à une panne réseau, interception de données, perte de données, réversibilité), questions juridiques liées à la localisation des centres de données.'
        ]
      },
      {
        title: 'DOSSIER 3. CALCUL DU TCO - Question 5',
        question: '**Calculer le TCO de la solution proposée par AIDADOM.**',
        correction: [
          'Le TCO (Total Cost of Ownership) comprend l\'ensemble des coûts directs et indirects liés à l\'acquisition, au déploiement et à l\'utilisation d\'une solution informatique sur sa durée de vie.',
          '',
          '**Éléments à prendre en compte pour le calcul du TCO** :',
          '• **Coûts d\'acquisition** : Licences logicielles, matériel informatique',
          '• **Coûts de déploiement** : Installation, paramétrage, migration des données',
          '• **Coûts d\'exploitation** : Maintenance, support, hébergement',
          '• **Coûts de formation** : Formation des utilisateurs et des administrateurs',
          '• **Coûts cachés** : Temps d\'arrêt, perte de productivité, évolutions',
          '',
          'Le TCO permet de comparer objectivement différentes solutions et d\'anticiper l\'ensemble des investissements nécessaires.'
        ]
      }
    ]
  },
  {
    year: '2018',
    context: 'Le cas "Mirlac" décrit un groupe spécialisé dans la transformation du bois, leader sur le marché hexagonal, qui envisage de renforcer sa dimension internationale via une acquisition en Suède. Le groupe doit moderniser son système d\'information pour accompagner cette croissance.',
    questions: [
      {
        title: 'DOSSIER 1 : REMPLACEMENT DU PGI - Question 3',
        question: '**Lors du choix d\'un PGI, quels sont les points auxquels l\'entreprise doit être attentive ? Citer et expliciter quatre points clés.**',
        correction: [
          'Lors du choix d\'un PGI, l\'entreprise doit être attentive à plusieurs points clés :',
          '',
          '• **PGI multilingue, multidevises et multi-référentiel comptable** : Essentiel pour une entreprise internationale comme Mirlac qui envisage une acquisition en Suède',
          '• **Coût global du PGI (ou coût total de possession TCO)** : Sommes dues à l\'éditeur + **coûts d\'installation** + **coûts d\'adaptation** + **coûts cachés** (formation, maintenance, évolutions)',
          '• **Adaptabilité du PGI** : Possibilités de paramétrage pour s\'adapter aux spécificités métier de l\'entreprise',
          '• **Complexité du PGI** : Évaluer la facilité d\'utilisation et d\'appropriation par les utilisateurs',
          '• **Expérience et pérennité de l\'éditeur** : Garantir la continuité du support et des évolutions',
          '• **Conditions de mise en œuvre** : Délais, ressources nécessaires, accompagnement proposé'
        ]
      },
      {
        title: 'DOSSIER 1 : REMPLACEMENT DU PGI - Question 4',
        question: '**Quelles sont les principales difficultés rencontrées lors de la mise en place d\'un PGI ? (Quatre difficultés sont attendues.)**',
        correction: [
          'Les principales difficultés rencontrées lors de la mise en place d\'un PGI sont :',
          '',
          '• **Nécessité d\'adapter certains processus aux contraintes du progiciel** : L\'entreprise doit souvent revoir ses méthodes de travail',
          '• **Le projet impacte l\'organisation dans son ensemble** : Changement organisationnel majeur affectant tous les services',
          '• **Coûts induits très importants, et souvent sous-estimés** : Dépassements budgétaires fréquents (formation, personnalisation, maintenance)',
          '• **Dépendance vis-à-vis d\'un éditeur** : Risque de dépendance technologique et commerciale',
          '• **Dépendance par rapport aux intégrateurs et aux consultants** : Besoin d\'expertise externe coûteuse',
          '• **Complexité du paramétrage** : Difficulté à configurer le système selon les besoins spécifiques',
          '• **Résistance au changement** : Difficultés d\'adoption par les utilisateurs finaux'
        ]
      }
    ]
  },
  {
    year: '2019',
    context: 'Le cas "SOLIDOR" présente une entreprise française de lingerie féminine confrontée à une concurrence agressive. Elle vise à ajuster son offre et réduire ses prix tout en maintenant sa qualité et en optimisant ses processus.',
    questions: [
      {
        title: 'DOSSIER 2 : ALIGNEMENT STRATÉGIQUE DU SI - Question 3',
        question: '**Après avoir expliqué ce qu\'est le mode SaaS, sur lequel est basé la solution Planning & Tracking développée par Aleth, vous en expliquerez simplement les forces et faiblesses.**',
        correction: [
          '**Définition SaaS (Software as a Service)** : Mode de distribution en cloud computing d\'une solution logicielle, où l\'accès est fourni et maintenu par l\'éditeur via une application web. L\'utilisateur accède au logiciel via internet sans avoir à l\'installer sur ses propres serveurs.',
          '',
          '**Forces (Avantages) du SaaS** :',
          '• **Flexibilité et facilité d\'usage** : Accès depuis n\'importe où avec une connexion internet',
          '• **Investissement faible** : Pas d\'achat de licences, se transforme en frais d\'exploitation',
          '• **Mises à jour facilitées** : Automatiques et transparentes pour l\'utilisateur',
          '• **Sécurité assurée par le prestataire** : Expertise et moyens dédiés',
          '• **Lisibilité des tarifs** : Modèle pay per use, facturation à l\'usage',
          '• **Scalabilité** : Adaptation rapide aux besoins de l\'entreprise',
          '',
          '**Faiblesses (Inconvénients) du SaaS** :',
          '• **Forte dépendance au prestataire** : Risque de dépendance technologique',
          '• **Vulnérabilité des données** : Données hébergées chez un tiers',
          '• **Complexité de la contractualisation/tarification** : Négociation des SLA',
          '• **Perte de compétence interne** : Externalisation des compétences techniques',
          '• **Coût de réversibilité élevé** : Difficulté à changer de solution',
          '• **Dépendance à la connexion internet** : Nécessité d\'une connexion stable'
        ]
      }
    ]
  },
  {
    year: '2020',
    context: 'Le sujet se compose d\'une étude de cas unique centrée sur le cabinet "CECL20", un cabinet d\'expertise comptable qui doit faire face au déploiement du RGPD et aux enjeux de protection des données personnelles.',
    questions: [
      {
        title: 'Semaine 9 - Question 13',
        question: '**Quelles sont les solutions informatiques possibles ? Vous mettrez en évidence les avantages et les contraintes de chacune des solutions.**',
        correction: [
          'Dans le contexte du RGPD, deux principales solutions informatiques s\'offrent au cabinet CECL20 :',
          '',
          '**Solutions en local (On-Premise)** :',
          '**Avantages** : Maîtrise totale des données, contrôle de la sécurité, conformité facilitée au RGPD',
          '**Contraintes** : Le responsable du traitement doit assurer la sécurité physique des serveurs, vérifier que toutes les infrastructures et applicatifs sont équipés d\'outils de sécurité, sensibiliser les collaborateurs aux bonnes pratiques de sécurité du SI, coûts d\'infrastructure et de maintenance élevés',
          '',
          '**Solutions en mode SaaS** :',
          '**Avantages** : La sécurité des serveurs et applicatifs hébergés doit être assurée par le prestataire, de nombreux prestataires nationaux ont mis en place des infrastructures techniques fiables avec une sécurité 24h/24 et 7j/7, réduction des coûts d\'infrastructure',
          '**Contraintes** : Dépendance au prestataire, nécessité de vérifier la conformité RGPD du prestataire, clauses contractuelles spécifiques, localisation des données'
        ]
      }
    ]
  },
  {
    year: '2021',
    context: 'Le sujet concerne la fusion de trois organismes de logement social pour former "Haute-Loire Habitat" suite à la loi ÉLAN. Cette fusion nécessite une refonte complète du système d\'information pour harmoniser les processus.',
    questions: [
      {
        title: 'DOSSIER 1 – SCHÉMA DIRECTEUR DU SYSTÈME D\'INFORMATION - Q1',
        question: '**Vous décrirez simplement 2 types d\'organisations SI possibles pour supporter la future Direction des Systèmes d\'information en cohérence avec le contexte.**',
        correction: [
          'Dans le contexte de la fusion des trois organismes de logement social, plusieurs types d\'organisations SI sont envisageables :',
          '',
          '• **Un système d\'Information fusionné entre les 3 organismes** : Centralisation des éléments du SI sur 1 site unique, harmonisation complète des processus et des données',
          '• **Un Système d\'Information divisé entre les 3 organismes** : DSI répartie géographiquement mais un SI unique logiquement, maintien d\'une certaine autonomie locale',
          '• **Un Système d\'Information indépendant entre les 3 organismes** : Chaque DSI reste indépendante avec ses propres systèmes, interconnexions pour les échanges nécessaires',
          '• **Un système d\'information externalisé** : Externalisation totale ou partielle auprès d\'un prestataire spécialisé, permet de se libérer de certaines **contraintes d\'investissement** et de bénéficier d\'une expertise externe'
        ]
      },
      {
        title: 'DOSSIER 1 – SCHÉMA DIRECTEUR DU SYSTÈME D\'INFORMATION - Q3',
        question: '**Vous proposerez deux indicateurs de coût du Système d\'Information que vous définirez et caractériserez simplement.**',
        correction: [
          'Dans le contexte de la fusion, il est essentiel de définir des indicateurs de coût du SI pour piloter et optimiser les investissements. Voici plusieurs indicateurs possibles :',
          '',
          '• **Coût des infrastructures SI** : Coût de la fourniture d\'infrastructure (serveurs, postes de travail, équipements réseau, stockage, etc.). Cet indicateur permet de mesurer l\'investissement matériel nécessaire.',
          '',
          '• **Coût de la maintenance du SI** : Montants de maintenance interne et externe (contrats de support, interventions, mises à jour). Indicateur récurrent permettant d\'anticiper les coûts d\'exploitation.',
          '',
          '• **Coûts de disponibilité** : Coût de perte de service ou de garantie de disponibilité (SLA). Mesure l\'impact financier des interruptions de service.',
          '',
          '• **Ressources humaines liées à la DSI** : Coût de l\'ensemble des collaborateurs internes ou externes dédiés au SI (salaires, formations, prestations). Représente souvent le poste le plus important.',
          '',
          '• **Valorisation du SI** : Estimation de la valeur du SI (coût de remplacement total). Permet d\'évaluer le patrimoine informationnel.',
          '',
          '• **Valeur d\'amortissement du SI** : Valeur amortissable du SI déduite dans le bilan comptable. Indicateur comptable de la dépréciation des actifs.',
          '',
          '• **Coût d\'opportunité du SI** : Coût approximé par la substitution d\'un produit ou service par un autre. Mesure les bénéfices perdus en choisissant une solution plutôt qu\'une autre.'
        ]
      }
    ]
  },
  {
    year: '2022',
    context: 'Le cas porte sur la cession d\'une Entreprise de Services du Numérique (DIGITAL INTEGRATION) d\'un groupe, nécessitant de repenser la gouvernance et l\'architecture du SI pour maintenir la continuité des services.',
    questions: [
      {
        title: 'DOSSIER 2 – MISE EN ŒUVRE D\'UN WORKFLOW FACTURE - Question 4',
        question: '**Donner la définition de la Factur-X et exposer un avantage de sa mise en œuvre pour les organisations.**',
        correction: [
          '**Définition de Factur-X** : La Factur-X est le nouveau standard européen de facture électronique, un modèle "mixte" ou "hybride" combinant un format PDF (lisible par l\'humain) et un fichier de données XML (exploitable par les systèmes informatiques). Ce format permet une dématérialisation complète tout en conservant la lisibilité.',
          '',
          '**Avantages de la mise en œuvre de Factur-X** :',
          '• **Éviter de saisir manuellement les données de la facture et donc éviter les erreurs** de saisie et les coûts associés',
          '• **Automatiser son intégration dans les flux de factures entrantes** et sortantes',
          '• **Limiter le risque de falsification des données comptables et fiscales** grâce à la signature électronique',
          '• **Réduire les délais de transmission et de traitement** entre les organisations',
          '• **Améliorer les échanges entre entreprises européennes** grâce à un standard commun',
          '• **Réduction des coûts** : impression, envoi postal, archivage physique',
          '• **Traçabilité améliorée** : suivi en temps réel du statut des factures'
        ]
      },
      {
        title: 'DOSSIER 3 – ÉQUIPEMENT DE NOUVEAUX SYSTÈMES D\'INFORMATION - Question 1',
        question: '**Définir les deux modes de distribution (SaaS et On Premise) et proposer des arguments permettant de choisir un type de distribution pour chaque application.**',
        correction: [
          '**Définitions des modes de distribution** :',
          '',
          '**On-Premise** : Mode de distribution "sur site", où les infrastructures informatiques et logicielles sont hébergées et maintenues par le service informatique interne de l\'entreprise. L\'entreprise possède et contrôle entièrement ses systèmes.',
          '',
          '**SaaS (Software as a Service)** : Mode de distribution où la solution logicielle applicative est hébergée dans le cloud et exploitée par un tiers (prestataire). L\'accès se fait via internet, généralement par abonnement.',
          '',
          '**Arguments de choix par type d\'application** :',
          '',
          '• **CRM (Customer Relationship Management)** : Généralement proposé en **SaaS** pour sa souplesse, son adaptation au nombre d\'utilisateurs variables, sa facilité de déploiement et ses mises à jour automatiques. Convient aux équipes commerciales mobiles.',
          '',
          '• **ERP (Enterprise Resource Planning)** : Souvent choisi en **On-Premise** pour les grandes organisations qui privilégient la maîtrise de la sécurité, la personnalisation poussée et l\'intégration avec les systèmes existants. Le SaaS peut convenir aux PME.',
          '',
          '• **GED (Gestion Électronique de Documents)** : Généralement en **On-Premise** pour des arguments de sécurité d\'accès aux documents sensibles, de maîtrise du stockage et de conformité réglementaire (RGPD, archivage légal).'
        ]
      },
      {
        title: 'DOSSIER 3 – ÉQUIPEMENT DE NOUVEAUX SYSTÈMES D\'INFORMATION - Question 2',
        question: '**Citer un avantage et un inconvénient distinct d\'une solution « tout en un ».**',
        correction: [
          'Une solution "tout en un" intègre plusieurs applications (CRM, ERP, GED) au sein d\'une même suite logicielle. Cette approche présente des avantages et des inconvénients :',
          '',
          '**Avantages d\'une solution « tout en un »** :',
          '• **Assurer la relation avec un prestataire unique**, simplifiant la relation client-fournisseur et la gestion contractuelle',
          '• **Interopérabilité native des applications**, permettant un **gain de valeur pour l\'organisation** grâce à la fluidité des échanges de données',
          '• **Avantage au niveau des coûts et de la simplification du Système d\'information** : réduction des coûts d\'intégration, formation unique, maintenance simplifiée',
          '• **Cohérence de l\'interface utilisateur** : ergonomie unifiée, réduction des temps d\'apprentissage',
          '',
          '**Inconvénients d\'une solution « tout en un »** :',
          '• **Dépendance de 3 solutions envers un fournisseur unique** : augmentation du risque de dépendance technologique et commerciale',
          '• **Ne pas pouvoir choisir "la meilleure" solution** de chaque domaine d\'application : compromis sur les fonctionnalités spécialisées',
          '• **Devoir choisir le mode de distribution (SaaS ou On Premise) pour l\'ensemble** : moins de flexibilité dans l\'architecture',
          '• **Rigidité** : difficulté à faire évoluer une partie sans impacter l\'ensemble'
        ]
      }
    ]
  },
  {
    year: '2023',
    context: 'Vous êtes directeur de projet au sein d\'une ESN (Entreprise de services du numérique) et devez organiser la migration de 100 clients vers une nouvelle version d\'une solution de Gestion Électronique Documentaire (GED). Cette migration s\'inscrit dans un contexte de modernisation technologique et d\'optimisation des coûts.',
    questions: [
      {
        title: 'DOSSIER 3 – IMPACT DE LA NOUVELLE LOI DE FINANCE 2024-2026 - Question 11',
        question: '**Question en cours de finalisation dans les annales DSCG 2023...**',
        correction: [
          'Cette question sera complétée avec les corrections officielles une fois disponibles dans les annales DSCG 2023.',
          '',
          'En attendant, les thématiques probables pour cette session incluent :',
          '• Impact des nouvelles réglementations sur les coûts SI',
          '• Optimisation des coûts dans le contexte de migration GED',
          '• Calcul du ROI d\'une migration technologique',
          '• Gestion des coûts de projet dans une ESN'
        ]
      }
    ]
  }
];

export default function QuestionsDSCG() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Questions DSCG
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collection exhaustive des questions d'examens DSCG liées au calcul des coûts informatiques, 
            avec leurs corrections détaillées et contextes d'entreprise.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Contexte du chapitre</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Le &quot;CHAPITRE-18-LES-COUTS-OK&quot; aborde en profondeur le calcul des coûts des systèmes d\'information (SI), 
            les éléments comptables et la démarche de calcul (coûts directs/indirects), la méthode Cigref pour les 
            activités RUN et BUILD, le benchmarking des coûts, le Total Cost of Ownership (TCO) avec ses composants 
            (coûts directs, indirects, cachés) et les stratégies pour le réduire (maîtrise du système, standardisation, 
            infogérance, cloud computing, BYOD), ainsi que les budgets (fonctionnement/développement) et les modes de 
            facturation des prestataires (à l\'utilisateur, au service, à l'usage, freemium, fixe).
          </p>
        </motion.div>

        {/* Sessions */}
        <div className="space-y-8">
          {sessions.map((session, sessionIndex) => (
            <motion.div
              key={session.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + sessionIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Session Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Session {session.year}</h2>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  {session.context}
                </p>
              </div>

              {/* Questions */}
              <div className="p-6">
                <div className="space-y-8">
                  {session.questions.map((q, qIndex) => (
                    <div key={qIndex} className="border-l-4 border-blue-200 pl-6">
                      {/* Question Title */}
                      <div className="flex items-start gap-3 mb-4">
                        <FileText className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {q.title}
                          </h3>
                          <div className="bg-blue-50 rounded-lg p-4 mb-4">
                            <p className="text-gray-800 font-medium">
                              {q.question}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Correction */}
                      <div className="bg-green-50 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="h-5 w-5 text-green-600" />
                          <h4 className="text-lg font-semibold text-green-800">
                            Correction
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {q.correction.map((line, lineIndex) => (
                            <div key={lineIndex} className="text-gray-700">
                              {line === '' ? (
                                <div className="h-2" />
                              ) : (
                                <p className="leading-relaxed">
                                  {line.replace(/\*\*(.*?)\*\*/g, '$1')}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link 
            href="/cas-pratiques"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            ← Cas pratiques
          </Link>
          <div className="text-gray-500">
            Questions DSCG
          </div>
          <Link 
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Accueil <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}