const fetch = require('node-fetch');
const { getCharacter } = require('./rickAndMortyApi');

const getManyCharacters = async (ids) => {
    const object = await Promise.all(ids.map(id => getCharacter(id)));
    return object;
}

module.exports = {

    getManyCharacters
}