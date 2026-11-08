import type { Dictionary } from "./en";

/** French dictionary. Organisation and credential names are intentionally kept in their official English form. */
export const fr: Dictionary = {
  meta: {
    title: "AI Innovation Leaders Program — Prolync en partenariat académique avec Altis",
    description:
      "Un programme professionnel payant de diplôme et de certification de 8 semaines en IA appliquée, compétences comportementales et entrepreneuriat pour l'Éducation, la Médecine et l'Agriculture.",
  },

  brand: {
    programName: "AI Innovation Leaders Program",
    prolync: "PROLYNC",
    partnership: "En partenariat académique avec Altis",
    prolyncLogoAlt: "Logo Prolync",
    altisLogoAlt: "Logo Altis Training Center",
  },

  common: {
    skipToContent: "Aller au contenu principal",
    applyNow: "Postuler",
    startApplication: "Commencer ma candidature",
    learnMore: "En savoir plus",
    viewCurriculum: "Voir le programme complet",
    viewAdmissions: "Admissions et frais",
    menu: "Menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    week: "Semaine",
    weeks: "Semaines",
    deliverable: "Livrable",
    youWillStudy: "Ce que vous étudierez",
    backToHome: "Retour à l'accueil",
  },

  nav: {
    home: "Accueil",
    program: "Programme",
    admissions: "Admissions et frais",
    apply: "Postuler",
  },

  hero: {
    eyebrow: "Programme professionnel payant de diplôme et de certification",
    title: "AI Innovation Leaders Program",
    subtitle:
      "Huit semaines pour transformer l'IA appliquée, le leadership et l'entrepreneuriat en un projet réel, testé dans votre propre classe, clinique ou exploitation agricole.",
    sectorsLine: "Pour l'Éducation • la Médecine • l'Agriculture",
    primaryCta: "Postuler",
    secondaryCta: "Découvrir le programme",
    facts: [
      { value: "8", label: "semaines, formation mixte" },
      { value: "3", label: "secteurs prioritaires" },
      { value: "10", label: "participants maximum par parcours sectoriel" },
      { value: "3", label: "langues de travail" },
    ],
    visualLabel: "L'IA appliquée au centre de trois secteurs : Éducation, Médecine et Agriculture",
    core: "IA appliquée",
    cohortNote: "Cohorte pilote de 20 à 30 participants",
  },

  snapshot: {
    eyebrow: "Le programme en bref",
    title: "Un parcours diplômant construit autour d'un projet réellement utilisé",
    items: [
      { label: "Type de programme", value: "Programme professionnel payant de diplôme et de certification" },
      { label: "Secteurs ciblés", value: "Éducation • Médecine (Santé) • Agriculture" },
      {
        label: "Matières principales",
        value: "IA appliquée • Compétences comportementales • Entrepreneuriat, enseignés dans chaque parcours sectoriel",
      },
      { label: "Durée", value: "8 semaines (formation mixte)" },
      { label: "Taille de la cohorte", value: "20 à 30 participants (pilote), 10 maximum par parcours sectoriel" },
      { label: "Diplôme", value: "AI Innovation Leader Diploma + certification à 4 niveaux" },
      { label: "Langue", value: "Arabe / français / anglais (mixte)" },
    ],
  },

  why: {
    eyebrow: "Pourquoi ce programme",
    title:
      "L'IA transforme les classes, les cliniques et les exploitations agricoles. La plupart des professionnels n'ont pas de voie pratique pour s'y engager.",
    intro:
      "Les formations génériques en IA sont soit trop techniques pour les non-développeurs, soit trop superficielles pour produire quoi que ce soit d'utilisable. Ce programme comble cet écart en réunissant trois éléments rarement offerts ensemble.",
    items: [
      {
        title: "Une expertise sectorielle",
        text: "Des contenus et des études de cas conçus spécifiquement pour les classes, les cliniques et les exploitations agricoles, et non un enseignement générique « IA 101 ».",
      },
      {
        title: "Un résultat concret",
        text: "Chaque participant construit un véritable projet, et non une simple attestation de présence.",
      },
      {
        title: "Une certification professionnelle",
        text: "Un parcours structuré de diplôme et de certification à plusieurs niveaux, qui apporte une valeur tangible à un CV ou à un profil professionnel.",
      },
    ],
    footnote:
      "Le programme étant payant, les effectifs restent volontairement réduits et l'attention des formateurs reste élevée.",
  },

  sectors: {
    eyebrow: "Qui peut postuler",
    title: "Trois secteurs prioritaires où l'adoption de l'IA est à la fois urgente et concrète",
    intro:
      "L'entrepreneuriat n'est pas un secteur à part : chaque participant l'étudie, avec l'IA et les compétences comportementales, au sein de son propre parcours sectoriel.",
    items: [
      {
        id: "education",
        name: "Éducation",
        audience: [
          "Enseignants et maîtres de conférences",
          "Responsables d'établissements scolaires et universitaires",
          "Coordinateurs EdTech",
          "Étudiants en éducation et EdTech (dernière année / master ou doctorat)",
        ],
      },
      {
        id: "medicine",
        name: "Médecine (Santé)",
        audience: [
          "Médecins et infirmiers",
          "Agents de santé publique",
          "Formateurs en médecine",
          "Personnel des données de santé",
          "Étudiants en médecine, soins infirmiers et santé publique (dernière année / master ou doctorat)",
        ],
      },
      {
        id: "agriculture",
        name: "Agriculture",
        audience: [
          "Agriculteurs et gestionnaires d'exploitation",
          "Agronomes et ingénieurs agricoles",
          "Agents de vulgarisation agricole et formateurs",
          "Personnel d'entreprises agroalimentaires et de coopératives",
          "Professionnels de l'agritech et de la transformation alimentaire",
          "Étudiants en agriculture et agronomie (dernière année / master ou doctorat)",
        ],
      },
    ],
  },

  pillars: {
    eyebrow: "Conception du programme",
    title: "Trois piliers intégrés, abordés ensemble chaque semaine",
    intro:
      "Les compétences comportementales, l'entrepreneuriat, la méthode de projet et la maîtrise de l'IA s'acquièrent ensemble plutôt que séparément.",
    items: [
      {
        number: "Pilier 1",
        title: "Intelligence artificielle appliquée",
        points: [
          "Fondamentaux et éthique de l'IA",
          "Ingénierie des prompts",
          "Outils d'IA propres à chaque secteur",
          "Prototypage d'IA sans code",
        ],
      },
      {
        number: "Pilier 2",
        title: "Méthode de projet et d'innovation",
        points: [
          "Design thinking",
          "Formulation de problèmes",
          "Planification de projet agile",
          "Bases du suivi et de l'évaluation",
        ],
      },
      {
        number: "Pilier 3",
        title: "Leadership, compétences comportementales et entrepreneuriat",
        points: [
          "Communication et animation",
          "Bases de la conception de formations",
          "Principes de l'apprentissage des adultes",
          "Conduire le changement dans son équipe",
          "Repérage d'opportunités, modèle économique et pitch",
          "Travail d'équipe, esprit critique, gestion du temps",
        ],
      },
    ],
  },

  curriculum: {
    eyebrow: "Programme de 8 semaines",
    title: "Des fondamentaux à un pilote en conditions réelles",
    intro:
      "Chaque semaine combine une session en direct en ligne, un atelier pratique ou un laboratoire, des lectures propres à votre secteur et l'avancement de votre projet d'IA individuel (ou d'équipe).",
    foundation: {
      title: "Un socle obligatoire, et non une option",
      text: "Avant de commencer à construire, le programme consacre un temps d'étude structuré à la manière dont l'IA rejoint concrètement l'éducation, la médecine ou l'agriculture : les cas d'usage, les outils, les limites et les risques propres à ce domaine.",
    },
    tracks: {
      core: { name: "Core Diploma Track", range: "Semaines 1 à 6", text: "Salle de classe + prototype" },
      applied: {
        name: "Applied Practice Track",
        range: "Semaines 7 à 8",
        text: "Le projet est testé en environnement réel",
      },
    },
    distinction:
      "Les semaines 7 et 8 distinguent les projets du programme d'un enseignement purement théorique.",
    weeks: [
      {
        theme: "Fondements de l'IA et du leadership",
        topics: [
          "Les bases de l'IA : ce qu'elle est, ce qu'elle n'est pas",
          "IA responsable et éthique dans votre secteur",
          "Styles de leadership, compétences comportementales et communication professionnelle",
          "Autoévaluation diagnostique et définition d'objectifs",
        ],
        deliverable: "Plan d'apprentissage personnel",
      },
      {
        theme: "Comment l'IA rejoint votre domaine (socle obligatoire)",
        topics: [
          "Étude approfondie de l'IA appliquée à votre parcours : enseignement et apprentissage (éducation) / soins cliniques et prise en charge des patients (médecine) / agriculture et systèmes agroalimentaires (agriculture)",
          "Études de cas réelles d'IA déjà utilisée dans ce domaine, avec ce qui a fonctionné et ce qui a échoué",
          "Limites, risques et règles de protection des données propres au domaine (données de classe, de patients ou d'exploitation)",
          "Compétences d'animation et de conception de formations",
          "Identifier un problème réel de votre milieu de travail pour lequel l'IA peut raisonnablement aider",
        ],
        deliverable: "Note d'étude « L'IA dans mon domaine » + énoncé du problème",
      },
      {
        theme: "Design thinking et analyse des besoins",
        topics: [
          "Conception centrée sur l'humain et formulation de problèmes",
          "Analyse des parties prenantes et des besoins",
          "Fondamentaux de l'ingénierie des prompts",
          "Outils d'IA de productivité pour le quotidien",
          "Bases de l'entrepreneuriat : repérer des opportunités et définir une proposition de valeur",
        ],
        deliverable: "Cartographie des parties prenantes + bibliothèque de prompts",
      },
      {
        theme: "Outils d'IA appliqués et prototypage",
        topics: [
          "Applications d'IA propres à chaque secteur (p. ex. conception de cours, aide à la documentation clinique, planification des cultures et des ressources de l'exploitation)",
          "Outils de prototypage d'IA sans code / à faible code",
          "Assistants d'IA et bases de l'automatisation",
          "Planification de projet agile",
        ],
        deliverable: "Prototype fonctionnel v1",
      },
      {
        theme: "Mentorat et perfectionnement",
        topics: [
          "Mentorat individuel avec un expert en IA et un expert du secteur",
          "Tests utilisateurs et recueil de retours",
          "Itération sur le prototype",
          "Cadre de base de suivi et d'évaluation de votre projet",
          "Modèle économique et plan de durabilité de votre projet",
        ],
        deliverable: "Prototype amélioré v2",
      },
      {
        theme: "Vitrine, diplôme et certification",
        topics: [
          "Coaching de pitch et prise de parole en public",
          "Présentation finale du projet devant un jury d'évaluation",
          "AI Innovation Showcase (événement public)",
          "Cérémonie de remise des diplômes et certificats",
        ],
        deliverable: "Présentation finale + diplôme",
      },
      {
        theme: "Pilotage en conditions réelles",
        topics: [
          "Pilotage de la solution d'IA dans une vraie classe, clinique ou exploitation agricole",
          "Coaching entre pairs au sein de votre groupe sectoriel",
          "Résolution des difficultés réelles de déploiement",
        ],
        deliverable: "Journal de mise en œuvre du pilote",
      },
      {
        theme: "Rapport d'impact et lancement du réseau des anciens",
        topics: [
          "Documenter les résultats et les enseignements tirés",
          "Préparer un court rapport d'impact",
          "Rejoindre le réseau des anciens et le vivier de mentors de la prochaine cohorte",
        ],
        deliverable: "Rapport d'impact + adhésion au réseau des anciens",
      },
    ],
  },

  projects: {
    eyebrow: "Projets en conditions réelles",
    title: "Pas un simple exercice : un projet testé et un résultat documenté",
    intro:
      "Ce qui justifie l'investissement, c'est que chaque participant repart avec plus que des connaissances. Le parcours est conçu pour rester réaliste et objectif à chaque étape.",
    cycleTitle: "Cycle de développement du projet",
    cycle: [
      {
        when: "Semaine 2",
        title: "Identification du problème",
        text: "Choisissez un véritable défi de votre propre classe, clinique ou exploitation, et non un cas hypothétique.",
      },
      {
        when: "Semaines 3 à 4",
        title: "Conception et prototypage",
        text: "Construisez avec des outils d'IA accessibles, sans code ou à faible code, afin que le résultat reste utilisable par des non-développeurs.",
      },
      {
        when: "Semaine 5",
        title: "Mentorat et perfectionnement",
        text: "Des experts du secteur et des mentors en IA examinent chaque projet sous l'angle de la faisabilité, pas seulement de la créativité.",
      },
      {
        when: "Semaines 7 à 8",
        title: "Pilotage en conditions réelles",
        text: "Testez dans votre milieu de travail réel (une vraie classe, un vrai parcours patient ou une vraie exploitation) et documentez les résultats.",
      },
    ],
    examplesTitle: "Exemples de projets par secteur",
    examplesIntro:
      "Les projets sont choisis par les participants à partir d'un problème réel de leur milieu de travail. Chacun comporte aussi une dimension entrepreneuriale : proposition de valeur, modèle économique et pitch.",
    examples: [
      {
        id: "education",
        name: "Éducation",
        items: [
          "Outil de préparation de cours assisté par l'IA pour une matière donnée",
          "Générateur automatique de quiz formatifs à partir du support de cours",
          "Chatbot répondant aux questions courantes des élèves et des parents",
          "Retours assistés par l'IA sur les productions écrites des élèves",
        ],
      },
      {
        id: "medicine",
        name: "Médecine",
        items: [
          "Liste de contrôle d'accueil et de triage des patients assistée par l'IA",
          "Assistant de documentation clinique et de synthèse de notes",
          "Automatisation des rappels de rendez-vous et du suivi",
          "Générateur de supports d'éducation du patient en langage simple",
        ],
      },
      {
        id: "agriculture",
        name: "Agriculture",
        items: [
          "Outil d'identification des maladies des cultures et de conseil assisté par l'IA",
          "Assistant de calendrier d'irrigation et de plantation fondé sur la météo",
          "Chatbot répondant aux questions courantes des agriculteurs",
          "Synthèse des registres de l'exploitation et des rapports de rendement",
        ],
      },
    ],
    opportunitiesTitle: "Les opportunités qui en découlent",
    opportunities: [
      "Un prototype abouti et testable que vous pouvez continuer à utiliser ou déployer dans votre organisation.",
      "De la visibilité lors de l'AI Innovation Showcase auprès d'employeurs, d'investisseurs et de partenaires institutionnels potentiels.",
      "L'éligibilité à l'Outstanding Innovation Award et un accès prioritaire aux futures cohortes avancées.",
      "Une étude de cas documentée qui renforce votre portfolio professionnel et votre CV.",
    ],
    note: "Chaque exemple est volontairement dimensionné pour pouvoir être réalisé avec des outils d'IA sans code ou à faible code dans la durée du programme, et testé dans une vraie classe, clinique ou exploitation durant les semaines 7 et 8.",
  },

  outcomes: {
    eyebrow: "Acquis d'apprentissage",
    title: "À l'issue des 8 semaines, vous serez capable de",
    items: [
      "Expliquer les concepts fondamentaux de l'IA, ses capacités et ses limites, dans un langage simple et adapté à votre secteur.",
      "Décrire, avec des exemples réels, comment l'IA est déjà appliquée en éducation, en médecine ou en agriculture, et juger où elle trouve réellement sa place dans votre domaine.",
      "Choisir et utiliser, de façon responsable et éthique, les outils d'IA adaptés à votre profession.",
      "Mobiliser vos compétences comportementales (travail d'équipe, communication, esprit critique) pour conduire un projet d'IA.",
      "Appliquer le design thinking et les méthodes agiles pour formuler des problèmes et concevoir des solutions.",
      "Appliquer une démarche entrepreneuriale (proposition de valeur, modèle économique, pitch) pour transformer une idée de projet en initiative viable.",
      "Construire et piloter un prototype fonctionnel fondé sur l'IA qui répond à un défi réel de votre milieu de travail.",
      "Présenter et défendre un projet devant un jury d'évaluation professionnel.",
      "Former ou accompagner vos collègues à une adoption responsable de l'IA.",
    ],
  },

  credentials: {
    eyebrow: "Diplôme et certification",
    title: "Quatre niveaux, pour reconnaître la réussite à chaque étape",
    intro:
      "Les participants investissent pour obtenir de vraies certifications utiles à leur carrière ; le dispositif reconnaît donc clairement chaque progression.",
    requirementLabel: "Condition",
    signalLabel: "Ce que cela atteste",
    tiers: [
      {
        name: "Certificate of Participation",
        requirement: "Présence à au moins 75 % des sessions (semaines 1 à 6)",
        signal: "Engagement dans le programme",
      },
      {
        name: "Certificate of Completion",
        requirement: "Présence + réussite à toutes les évaluations de module",
        signal: "Maîtrise du programme de base",
      },
      {
        name: "AI Innovation Leader Diploma",
        requirement:
          "Programme de 8 semaines suivi en entier + prototype + pilote en conditions réelles (semaines 7 et 8) + présentation lors du Showcase",
        signal: "La certification phare du programme : un leadership en IA pratique et propre au secteur",
        flagship: true,
      },
      {
        name: "Outstanding Innovation Award",
        requirement: "Projets les mieux notés, évalués par un jury externe",
        signal: "Distinction pour les projets les plus solides de chaque secteur",
      },
    ],
    verifiable: "Le diplôme et les certificats sont vérifiables numériquement et partageables.",
  },

  eligibility: {
    eyebrow: "Conditions d'admission",
    title: "Deux profils de candidats, un seul programme",
    intro:
      "Le programme accueille des professionnels déjà actifs dans l'un des trois secteurs, ainsi que des étudiants qui souhaitent entrer sur le marché du travail avec des compétences en IA. Les deux parcours suivent le même programme, les mêmes projets et les mêmes exigences de certification.",
    tracks: [
      {
        title: "Parcours professionnel",
        text: "Au moins 2 ans d'expérience professionnelle et un emploi ou une pratique active actuelle en éducation, en médecine ou en agriculture.",
      },
      {
        title: "Parcours étudiant",
        text: "Être actuellement inscrit (licence ou master/doctorat, de préférence en dernière année) dans une formation en éducation, en sciences médicales/de la santé ou en agriculture/agronomie, avec une attestation ou une preuve d'inscription.",
      },
    ],
    commonTitle: "Pour les deux parcours",
    common: [
      "Maîtrise de base des outils numériques (à l'aise avec la messagerie, les navigateurs et les outils de productivité courants).",
      "Maîtrise de l'arabe, du français ou de l'anglais (le programme est dispensé dans un mélange des trois langues).",
      "Capacité de payer les frais de formation ou d'obtenir une réduction. Les étudiants peuvent bénéficier du tarif étudiant.",
    ],
  },

  tuition: {
    eyebrow: "Frais de formation et investissement",
    title: "Les frais financent de petites cohortes, un mentorat d'experts et une certification qui compte",
    intro:
      "Les frais de formation financent l'enseignement par des experts, le mentorat, l'accès aux outils d'IA et la certification, et maintiennent des cohortes assez petites pour accorder une réelle attention au projet de chaque participant.",
    headers: { option: "Option tarifaire", fee: "Tarif indicatif", notes: "Remarques" },
    rows: [
      {
        option: "Inscription standard",
        fee: "35 000 à 40 000",
        notes: "Programme complet de 8 semaines, toutes les sessions et tous les supports",
        amount: true,
      },
      {
        option: "Inscription anticipée (6 semaines ou plus avant le début)",
        fee: "~15 % de réduction",
        notes: "S'applique au tarif standard",
      },
      {
        option: "Groupe / institution (3 personnes ou plus d'une même organisation)",
        fee: "~20 % de réduction par place",
        notes: "L'employeur paie ou cofinance",
      },
      {
        option: "Places parrainées / bourses",
        fee: "Jusqu'à 20 % de la cohorte",
        notes: "Selon le mérite ou les besoins, financées par un partenaire ou un budget de parrainage",
      },
      {
        option: "Tarif étudiant (étudiants inscrits, avec preuve d'inscription)",
        fee: "~30 à 40 % de réduction",
        notes: "S'applique au tarif standard ; nombre de places limité par cohorte",
      },
      { option: "Paiement échelonné", fee: "2 à 3 versements", notes: "Sur demande, sans intérêt" },
    ],
    indicative:
      "Ces montants sont indicatifs pour la cohorte pilote et seront confirmés avant l'ouverture des inscriptions.",
    includesTitle: "Ce que comprennent les frais",
    includes: [
      "Toutes les sessions en direct, les ateliers et les supports enregistrés pendant 8 semaines.",
      "Un mentorat individuel et en petit groupe avec des experts en IA et des experts du secteur.",
      "L'accès aux outils et plateformes d'IA utilisés pendant le programme.",
      "La participation à l'AI Innovation Showcase et un coaching de pitch.",
      "Le diplôme et la certification officiels, vérifiables numériquement.",
      "Un accès à vie au réseau des anciens et aux événements à venir.",
    ],
  },

  admissions: {
    eyebrow: "Processus d'admission",
    title: "De la candidature à l'intégration en cinq étapes",
    steps: [
      {
        title: "Candidature en ligne",
        text: "Une courte lettre de motivation et une question sur la pertinence pour votre secteur.",
      },
      {
        title: "Examen des candidatures",
        text: "Examinées par le comité de sélection (Prolync + Altis).",
      },
      { title: "Entretien virtuel", text: "Un court entretien virtuel pour les candidats présélectionnés." },
      {
        title: "Proposition de place",
        text: "Accompagnée de la facture des frais de formation et des options de paiement échelonné.",
      },
      {
        title: "Paiement et intégration",
        text: "Confirmation du paiement et intégration : accès à la plateforme, kit de bienvenue et orientation avant le programme.",
      },
    ],
  },

  team: {
    eyebrow: "Partenariat",
    title: "Deux organisations, un seul programme",
    intro:
      "Les responsabilités de mise en œuvre sont réparties afin que l'expertise technique en IA et l'animation sectorielle et de leadership soient toutes deux pleinement représentées.",
    prolync: {
      name: "Prolync",
      roles: [
        "Concevoir et mettre à jour le programme d'IA",
        "Dispenser toutes les sessions techniques d'IA appliquée",
        "Affecter et coordonner les mentors en IA",
        "Fournir les outils, plateformes et licences d'IA",
        "Élaborer les grilles d'évaluation et évaluer les projets",
        "Délivrer les diplômes et certificats",
      ],
    },
    altis: {
      name: "Altis",
      roles: [
        "Piloter le recrutement, la présélection et les admissions",
        "Animer les modules de leadership, de compétences comportementales et d'entrepreneuriat",
        "Coordonner la logistique, les lieux et le calendrier",
        "Gérer la communication avec les participants et leur accompagnement",
        "Piloter le suivi, l'évaluation et le reporting",
        "Gérer le réseau des anciens et la pérennité du programme",
      ],
    },
    facultyTitle: "Équipe pédagogique et mentors",
    faculty: [
      {
        title: "Formateurs techniques en IA (Prolync)",
        text: "Animent toutes les sessions d'IA appliquée : ingénierie des prompts, choix des outils et prototypage.",
      },
      {
        title: "Animateurs en leadership (Altis)",
        text: "Animent les sessions de compétences comportementales, d'entrepreneuriat, de communication, d'animation et de conception de formations.",
      },
      {
        title: "Mentors sectoriels",
        text: "Des professionnels expérimentés de l'éducation, de la médecine et de l'agriculture, ainsi que des entrepreneurs chevronnés, qui évaluent la faisabilité des projets et offrent un accompagnement individuel.",
      },
      {
        title: "Mentors en IA",
        text: "Assurent au moins trois sessions dédiées par cycle de projet sur le choix des outils et le prototypage.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "Questions fréquentes",
    items: [
      {
        q: "Ai-je besoin d'une formation technique ou en programmation ?",
        a: "Non. Les projets sont construits avec des outils d'IA accessibles, sans code ou à faible code, afin que des non-développeurs puissent les réaliser et continuer à les utiliser. Une maîtrise de base des outils numériques suffit.",
      },
      {
        q: "Dans quelle langue le programme est-il dispensé ?",
        a: "En arabe, en français et en anglais, dans un mélange des trois. Les candidats doivent maîtriser au moins l'une de ces langues.",
      },
      {
        q: "Les étudiants peuvent-ils postuler ?",
        a: "Oui. Les étudiants actuellement inscrits dans une formation en éducation, en sciences médicales/de la santé ou en agriculture/agronomie (de préférence en dernière année) peuvent postuler avec une preuve d'inscription et bénéficient du tarif étudiant.",
      },
      {
        q: "Quel est le montant des frais et puis-je payer en plusieurs fois ?",
        a: "Le tarif standard indicatif est de 35 000 à 40 000, avec des options d'inscription anticipée, de groupe, étudiante et de bourse. Un paiement en 2 à 3 versements sans intérêt est possible sur demande. Consultez la page Admissions et frais pour le tableau complet.",
      },
      {
        q: "Que se passe-t-il si je ne peux pas organiser de pilote réel durant les semaines 7 et 8 ?",
        a: "Les mentors vous aident à définir un périmètre de pilote réalisable durant la semaine 5. Si un pilote réel est impossible, des tests utilisateurs simulés constituent la solution de repli.",
      },
      {
        q: "Et si ma connexion internet est instable ?",
        a: "Les supports sont conçus pour être utilisables hors ligne, et les outils recommandés fonctionnent avec une faible bande passante.",
      },
      {
        q: "Que se passe-t-il si je dois abandonner ?",
        a: "Un calendrier flexible et des points d'étape réguliers sont prévus pour vous aider à rester dans le programme. Une politique de remboursement partiel, liée au moment du retrait, s'applique.",
      },
    ],
  },

  cta: {
    title: "Prêt à mener l'innovation en IA dans votre secteur ?",
    text: "Les places sont limitées à 10 par parcours sectoriel. Parlez-nous de votre travail et du problème pour lequel vous souhaitez l'aide de l'IA.",
    button: "Commencer ma candidature",
  },

  pages: {
    program: {
      title: "Le programme",
      intro:
        "Trois piliers, huit semaines, un projet réel. Voici précisément ce que vous étudierez, construirez et obtiendrez.",
    },
    admissions: {
      title: "Admissions et frais",
      intro: "Qui peut postuler, comment se déroule la sélection et ce que couvre l'investissement.",
    },
    apply: {
      title: "Postuler au programme",
      intro:
        "C'est la première étape du processus d'admission. Comptez environ 10 minutes. Vos réponses sont transmises au comité de sélection Prolync + Altis.",
      sidebarTitle: "Et ensuite ?",
      sidebar: [
        "Le comité de sélection examine votre candidature.",
        "Les candidats présélectionnés sont invités à un court entretien virtuel.",
        "Les candidats retenus reçoivent une proposition de place avec la facture et les options de paiement échelonné.",
      ],
      studentNote:
        "Les candidats étudiants devront fournir une attestation ou une preuve d'inscription au moment de l'entretien.",
    },
    privacy: {
      title: "Avis de confidentialité",
      intro: "Comment nous traitons les informations transmises via le formulaire de candidature.",
      sections: [
        {
          title: "Ce que nous collectons",
          text: "Les informations saisies dans le formulaire de candidature : identité et coordonnées, parcours professionnel ou universitaire, lettre de motivation et préférences tarifaires. Nous conservons également une empreinte irréversible de votre adresse réseau et le texte d'identification de votre navigateur, utilisés uniquement pour détecter les abus.",
        },
        {
          title: "Pourquoi nous les collectons",
          text: "Pour examiner votre candidature, vous contacter au sujet du processus d'admission et organiser le programme. Le comité de sélection est composé de Prolync et d'Altis.",
        },
        {
          title: "Comment elles sont protégées",
          text: "Les envois transitent par une connexion chiffrée, sont validés sur nos serveurs et stockés dans une base de données privée. La base de données n'est jamais accessible depuis votre navigateur.",
        },
        {
          title: "Vos choix",
          text: "Vous pouvez demander à tout moment à consulter, corriger ou supprimer votre candidature en contactant les organisateurs.",
        },
      ],
      contactLead: "Contactez les organisateurs à l'adresse",
      draftNote:
        "Faites relire cet avis au regard de vos obligations locales en matière de protection des données avant le lancement.",
    },
  },

  form: {
    sections: {
      about: "À propos de vous",
      eligibility: "Admissibilité et parcours",
      motivation: "Motivation",
      tuition: "Frais et consentement",
    },
    labels: {
      fullName: "Nom complet",
      email: "Adresse e-mail",
      phone: "Numéro de téléphone",
      country: "Pays",
      city: "Ville",
      communicationLanguage: "Langue de communication préférée",
      workingLanguages: "Langues que vous maîtrisez",
      track: "Parcours du candidat",
      sector: "Votre secteur",
      organization: "Employeur / organisation / exploitation",
      jobTitle: "Intitulé du poste ou fonction",
      yearsExperience: "Années d'expérience professionnelle",
      institution: "Université / établissement",
      studyProgram: "Filière d'études",
      studyLevel: "Niveau d'études",
      digitalLiteracy:
        "Je suis à l'aise avec la messagerie électronique, les navigateurs web et les outils de productivité courants (maîtrise de base du numérique).",
      motivation: "Pourquoi souhaitez-vous rejoindre ce programme ?",
      sectorProblem: "Quel problème réel de votre milieu de travail ou de votre domaine l'IA pourrait-elle aider à résoudre ?",
      feeCategory: "Catégorie tarifaire de votre candidature",
      paymentPlan: "Je souhaite payer en 2 à 3 versements (sans intérêt).",
      heardFrom: "Comment avez-vous entendu parler du programme ? (facultatif)",
      consent:
        "Je certifie que ces informations sont exactes et j'accepte qu'elles soient traitées dans le cadre du processus d'admission, comme décrit dans l'avis de confidentialité.",
    },
    hints: {
      motivation: "Quelques phrases : vos objectifs et ce que vous espérez accomplir. Minimum 80 caractères.",
      sectorProblem: "Décrivez un défi réel que vous rencontrez au quotidien. Minimum 40 caractères.",
      phone: "Par exemple 05 55 00 00 00",
      yearsExperience: "Au moins 2 ans pour le parcours professionnel",
      workingLanguages: "Sélectionnez au moins une langue",
      feeCategory: "Le tarif définitif est confirmé dans la proposition de place.",
    },
    placeholders: { select: "Sélectionner…" },
    options: {
      languages: { ar: "Arabe", fr: "Français", en: "Anglais" },
      tracks: { professional: "Professionnel en activité", student: "Étudiant" },
      sectors: { education: "Éducation", medicine: "Médecine (Santé)", agriculture: "Agriculture" },
      studyLevels: { undergraduate: "Licence", graduate: "Master / doctorat" },
      feeCategories: {
        standard: "Inscription standard",
        student: "Tarif étudiant (preuve d'inscription requise)",
        group: "Groupe / institution (3 personnes ou plus d'une même organisation)",
        scholarship: "Je souhaite être considéré pour une place avec bourse",
      },
      heardFrom: {
        social: "Réseaux sociaux",
        colleague: "Collègue ou ami",
        institution: "Mon établissement",
        event: "Événement",
        search: "Recherche web",
        other: "Autre",
      },
    },
    submit: "Envoyer ma candidature",
    submitting: "Envoi en cours…",
    draftSaved: "Vos saisies sont conservées lorsque vous changez de langue.",
    required: "obligatoire",
    success: {
      title: "Candidature reçue",
      text: "Merci. Votre candidature a bien été enregistrée et sera examinée par le comité de sélection.",
      referenceLabel: "Votre référence",
      keepReference: "Conservez cette référence pour tout échange.",
      another: "Retour à l'accueil",
    },
    errors: {
      generic: "Une erreur s'est produite. Veuillez réessayer dans un instant.",
      duplicate: "Une candidature a déjà été envoyée avec cette adresse e-mail.",
      rateLimited: "Trop de tentatives. Veuillez patienter avant de réessayer.",
      unavailable: "Le service de candidature est momentanément indisponible. Veuillez réessayer plus tard.",
      fixFields: "Veuillez corriger les champs signalés.",
    },
  },

  validation: {
    required: "Ce champ est obligatoire.",
    tooShort: "Ce texte est trop court.",
    tooLong: "Ce texte est trop long.",
    nameShort: "Veuillez saisir votre nom complet.",
    email: "Veuillez saisir une adresse e-mail valide.",
    phone: "Veuillez saisir un numéro de téléphone valide.",
    languagesRequired: "Sélectionnez au moins une langue.",
    invalidNumber: "Veuillez saisir un nombre valide.",
    minExperience: "Le parcours professionnel exige au moins 2 ans d'expérience.",
    digitalRequired: "Une maîtrise de base du numérique est requise pour participer.",
    motivationShort: "Veuillez écrire au moins 80 caractères.",
    problemShort: "Veuillez écrire au moins 40 caractères.",
    studentRateOnly: "Le tarif étudiant est réservé au parcours étudiant.",
    groupNeedsOrganization: "Veuillez indiquer votre organisation pour une candidature de groupe.",
    groupProfessionalOnly: "Le tarif de groupe s'adresse aux professionnels candidatant via une organisation.",
    consentRequired: "Vous devez accepter pour continuer.",
    invalid: "Cette valeur n'est pas valide.",
  },

  footer: {
    tagline:
      "Un programme professionnel payant de diplôme et de certification en IA appliquée, compétences comportementales et entrepreneuriat.",
    explore: "Explorer",
    program: "Programme",
    legal: "Informations légales",
    privacy: "Avis de confidentialité",
    contact: "Contact",
    rights: "Tous droits réservés.",
    partnerLine: "PROLYNC — En partenariat académique avec Altis",
    sectors: "Éducation • Médecine • Agriculture",
  },

  notFound: {
    title: "Page introuvable",
    text: "La page que vous recherchez n'existe pas ou a été déplacée.",
  },
};
