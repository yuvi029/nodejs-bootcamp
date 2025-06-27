const fs = require("fs");

// Write files
fs.writeFileSync('./test.txt', 'hey there');
fs.writeFile('./test2.txt', 'hellooooo,=', (err) => {});

// Read sync
const result = fs.readFileSync('./test.txt', 'utf-8');
console.log(result);

// Read async
fs.readFile('./test.txt', 'utf-8', (err, result2) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(result2);
  }
});

// Append to file
fs.appendFileSync('./test.txt', new Date().toLocaleString());

// Get file metadata
console.log(fs.statSync('./test.txt'));

// Delete file
fs.unlinkSync('./test.txt');

