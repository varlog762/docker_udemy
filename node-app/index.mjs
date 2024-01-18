import fs from 'fs';

fs.appendFile('my-file.txt', 'File was created by Node.js', err => {
  if (err) throw err;
  console.log('File is saved!');
  while (true) {
    continue;
  }
});
