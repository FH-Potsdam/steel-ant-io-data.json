import * as fs from 'fs';
fs.readFile('../data.json', 'utf8', (err, data) => {
  if (err !== null) {
    return;
  } else {
    console.log(JSON.parse(data));
  }
});
