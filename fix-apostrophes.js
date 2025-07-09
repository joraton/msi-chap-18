const fs = require('fs');

// Lire le fichier
const filePath = './src/app/questions-dscg/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Liste des mots avec apostrophes à corriger
const corrections = [
  { from: "d'un", to: "d\\'un" },
  { from: "d'une", to: "d\\'une" },
  { from: "d'acquisition", to: "d\\'acquisition" },
  { from: "d'exploitation", to: "d\\'exploitation" },
  { from: "d'arrêt", to: "d\\'arrêt" },
  { from: "d'information", to: "d\\'information" },
  { from: "d'adapter", to: "d\\'adapter" },
  { from: "l'organisation", to: "l\\'organisation" },
  { from: "d'un éditeur", to: "d\\'un éditeur" },
  { from: "d'expertise", to: "d\\'expertise" },
  { from: "d'adoption", to: "d\\'adoption" },
  { from: "d'usage", to: "d\\'usage" },
  { from: "d'achat", to: "d\\'achat" },
  { from: "l'utilisateur", to: "l\\'utilisateur" },
  { from: "l'installer", to: "l\\'installer" },
  { from: "d'apprentissage", to: "d\\'apprentissage" },
  { from: "l'entreprise", to: "l\\'entreprise" },
  { from: "d'infrastructure", to: "d\\'infrastructure" },
  { from: "d'expertise comptable", to: "d\\'expertise comptable" },
  { from: "s'offrent", to: "s\\'offrent" },
  { from: "d'outils", to: "d\\'outils" },
  { from: "d'information", to: "d\\'information" },
  { from: "d'organisations", to: "d\\'organisations" },
  { from: "d'Information", to: "d\\'Information" },
  { from: "d'investissement", to: "d\\'investissement" },
  { from: "d'une expertise", to: "d\\'une expertise" },
  { from: "d'opportunité", to: "d\\'opportunité" },
  { from: "d'un produit", to: "d\\'un produit" },
  { from: "d'une solution", to: "d\\'une solution" },
  { from: "l'humain", to: "l\\'humain" },
  { from: "l'organisation", to: "l\\'organisation" },
  { from: "d'intégration", to: "d\\'intégration" },
  { from: "l'interface", to: "l\\'interface" },
  { from: "d'application", to: "d\\'application" },
  { from: "l'ensemble", to: "l\\'ensemble" },
  { from: "d'optimisation", to: "d\\'optimisation" }
];

// Appliquer les corrections dans les chaînes de caractères
corrections.forEach(correction => {
  // Chercher dans les chaînes entre guillemets simples
  const regex = new RegExp(`'([^']*?)${correction.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^']*?)'`, 'g');
  content = content.replace(regex, (match, before, after) => {
    return `'${before}${correction.to}${after}'`;
  });
});

// Écrire le fichier corrigé
fs.writeFileSync(filePath, content, 'utf8');
console.log('Apostrophes corrigées dans', filePath);