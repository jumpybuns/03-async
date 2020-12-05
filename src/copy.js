const fsPromises = require('fs').promises;

const copyReadme = (src, dst) => {
    return fsPromises.readFile(src, 'utf-8')
        .then(data => {
            fsPromises.writeFile(dst, data, 'utf-8')
                .then(console.log('hey dan!'))
        }
        )
};
copyReadme('./README.md', './READMEASWELL.md');

module.exports = {
    copyReadme
}
