const fs = require('fs');

// Lire le fichier
const filePath = './src/app/questions-dscg/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Liste spécifique des corrections à appliquer
const specificCorrections = [
  { from: "D'INFORMATION", to: "D\\'INFORMATION" },
  { from: "d'information", to: "d\\'information" },
  { from: "l'information", to: "l\\'information" },
  { from: "s'agit", to: "s\\'agit" },
  { from: "c'est", to: "c\\'est" },
  { from: "qu'il", to: "qu\\'il" },
  { from: "qu'elle", to: "qu\\'elle" },
  { from: "qu'un", to: "qu\\'un" },
  { from: "qu'une", to: "qu\\'une" },
  { from: "n'est", to: "n\\'est" },
  { from: "n'ont", to: "n\\'ont" },
  { from: "n'a", to: "n\\'a" },
  { from: "m'a", to: "m\\'a" },
  { from: "j'ai", to: "j\\'ai" },
  { from: "t'es", to: "t\\'es" },
  { from: "s'il", to: "s\\'il" },
  { from: "aujourd'hui", to: "aujourd\\'hui" }
];

// Appliquer les corrections dans les chaînes entre guillemets simples
specificCorrections.forEach(correction => {
  // Chercher dans les chaînes entre guillemets simples
  const regex = new RegExp(`'([^']*?)${correction.from.replace(/[.*+?^${}()|[\\]\\]/g, '\\\\$&')}([^']*?)'`, 'g');
  content = content.replace(regex, (match, before, after) => {
    return `'${before}${correction.to}${after}'`;
  });
});

// Écrire le fichier corrigé
fs.writeFileSync(filePath, content, 'utf8');
console.log('Corrections finales appliquées dans', filePath);