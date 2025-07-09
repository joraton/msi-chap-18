const fs = require('fs');

// Lire le fichier
const filePath = './src/app/questions-dscg/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Remplacer toutes les apostrophes simples par des apostrophes échappées
// dans les chaînes de caractères (entre guillemets simples)
content = content.replace(/'([^']*)'/g, (match, innerContent) => {
  // Échapper toutes les apostrophes dans le contenu de la chaîne
  const escapedContent = innerContent.replace(/'/g, "\\'");
  return `'${escapedContent}'`;
});

// Écrire le fichier corrigé
fs.writeFileSync(filePath, content, 'utf8');
console.log('Toutes les apostrophes ont été échappées dans', filePath);