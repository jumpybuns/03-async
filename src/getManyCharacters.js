const fetch = require('node-fetch');

const getManyCharacters = (src) => {
    Promise.all([
        fetch('https://rickandmortyapi.com/api/character/')
    ])
        .then((data => fsPromisies.readFile(src, data)[resRickAndMorty]));
};

module.exports = {
    getManyCharacters
}