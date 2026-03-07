const fs = require('fs');
const html = fs.readFileSync('essenz-perfumes.html', 'utf8');

// Quick check if script is well-formed
// Let's strip script tag and run syntax check
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if(scriptMatch) {
  const code = scriptMatch[1];
  try {
    const fn = new Function(code);
    console.log('Syntax is OK');
  } catch(e) {
    console.log('SCRIPT ERROR:', e.message);
  }
} else {
  console.log('no script tag');
}
