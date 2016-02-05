'use strict';

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var users = ['nikoripka', 'martakarta', 'lpaubielsa', 'dariaDunkelbier', 'Ourelius', 'Logetcrea', 'Q-rec', 'antsteelmule', 'Josuas', 'Ninotschka', 'swjo', 'vogelino', 'wollemannone', 'miduku'];
var res = [];
fs.readFile('./example-data.json', 'utf8', function (err, data) {
  if (err) {
    console.error('Error ' + err);
  } else {
    (function () {
      var layout = JSON.parse(data);
      users.forEach(function (name, i, arr) {
        var user = Object.assign({}, layout['0']);
        user.github = name;
        res.push(user);
      });

      console.log(res);
      fs.writeFile('out.json', JSON.stringify(res), 'utf8', function () {
        if (err) {
          console.error('Error ' + err);
        } else {
          console.log('Success Wrote file.');
        }
      });
    })();
  }
});
