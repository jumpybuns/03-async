const fsPromises = require('fs').promises;

const transformFunction = (src) => {
    return fsPromises
        .readFile(src, 'utf-8')
        .then(data => data
            .replace(/[^a-z]/g, ''))
        .then(data => data
            .toUpperCase())
        .then(data => data.split('')
            .reverse().join(''))

};

transformFunction('./README.md')

module.exports = {
    transformFunction
};