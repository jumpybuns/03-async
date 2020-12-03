const fsPromises = require('fs').promises;

const transformFunction = (src) => {
    return fsPromises.readFile(src, 'utf-8')
        .then(data => data.replace(/[^a-z]/g, ''));
};

transformFunction('./README.md')

module.exports = {
    transformFunction
};