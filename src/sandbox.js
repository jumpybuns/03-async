const fsPromises = require('fs').promises;

fsPromises.readFile('./README.md', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });


fsPromises.writeFile('./READMEASWELL.md', 'yopyoyo!');


fsPromises.readFile('./README.md', 'utf-8')
    .then(fsPromises.writeFile('./READMEASWELL.md', 'all the way done'));

module.exports = {
    copyReadme
}