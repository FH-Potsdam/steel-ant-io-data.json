import * as fs from 'fs';

let users = ['nikoripka',
  'martakarta',
  'lpaubielsa',
  'dariaDunkelbier',
  'Ourelius',
  'Logetcrea',
  'Q-rec',
  'antsteelmule',
  'Josuas',
  'Ninotschka',
  'swjo',
  'vogelino',
  'wollemannone',
  'miduku'];
let res = [];
fs.readFile('./example-data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(`Error ${err}`);
  } else {
    let layout = JSON.parse(data);
    users.forEach((name, i, arr) => {
      let user = Object.assign({}, layout['0']);
      user.github = name;
      res.push(user);
    });

    console.log(res);
    fs.writeFile('out.json', JSON.stringify(res), 'utf8', () => {
      if (err) {
        console.error(`Error ${err}`);
      } else {
        console.log('Success Wrote file.');
      }
    });
  }
});

