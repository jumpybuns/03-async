const fetch = require('node-fetch');

function getCharacter() {
    Promise.each([
        fetch('https://rickandmortyapi.com/api/character/1')
    ])
        .then(([resRickAndMorty]) => {
            console.log(resRickAndMorty)
        });
};

module.exports = {
    getCharacter
}