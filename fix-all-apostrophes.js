const fs = require('fs');

// Lire le fichier
const filePath = './src/app/questions-dscg/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fonction pour échapper toutes les apostrophes dans les chaînes de caractères
function escapeAllApostrophes(text) {
  // Diviser le texte en lignes pour traiter ligne par ligne
  const lines = text.split('\n');
  
  return lines.map(line => {
    // Chercher les chaînes entre guillemets simples
    return line.replace(/'([^']*)'/g, (match, innerContent) => {
      // Échapper toutes les apostrophes non échappées dans le contenu
      const escapedContent = innerContent.replace(/(?<!\\)'/g, "\\'");
      return `'${escapedContent}'`;
    });
  }).join('\n');
}

// Appliquer la correction
content = escapeAllApostrophes(content);

// Écrire le fichier corrigé
fs.writeFileSync(filePath, content, 'utf8');
console.log('Toutes les apostrophes ont été corrigées dans', filePath);