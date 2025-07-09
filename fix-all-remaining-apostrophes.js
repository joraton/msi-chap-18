const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/questions-dscg/page.tsx');

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all unescaped apostrophes within single-quoted strings
  // This regex finds single-quoted strings and replaces unescaped apostrophes within them
  content = content.replace(/'([^'\\]*(\\.[^'\\]*)*)'/g, (match, innerContent) => {
    // Replace all unescaped apostrophes in the inner content
    const escapedContent = innerContent.replace(/(?<!\\)'/g, "\\'")
    return `'${escapedContent}'`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('All apostrophes have been escaped successfully!');
} catch (error) {
  console.error('Error:', error.message);
}