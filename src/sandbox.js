const fsPromises = require('fs').promises;

// fsPromises.readFile('./README.md', 'utf-8')
//     .then(data => {
//         console.log(data);
//     })



// fsPromises.writeFile('./READMEASWELL.md', 'yopyoyo!');

const copyReadme = (src, dst) => {
    fsPromises.readFile(src, 'utf-8')
        .then(data => fsPromises.writeFile(dst, data))
        .then(console.log('you did it!'))

};
copyReadme('./README.md', './READMEASWELL.md');

module.exports = {
    copyReadme
}