const fsPromises = require('fs').promises;

const copyReadme = (src, dst) => {
    fsPromises.readFile(src, 'utf-8')
        .then(data => fsPromises.writeFile(dst, data))
        .then(console.log('you did it!'))

};
copyReadme('./README.md', './READMEASWELL.md');

module.exports = {
    copyReadme
}
