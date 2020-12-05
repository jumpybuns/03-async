const fetch = require('node-fetch');
const { getCharacter } = require('./rickAndMortyApi');

const getManyCharacters = async (ids) => {
    const object = await Promise.all(ids.map(id => getCharacter(id)));
    return object
        .then(res => res.json())
        .then(character => {
            return {
                name: character.name,
                status: character.status,
                species: character.species
            }
        }
        )

}
module.exports = {

    getManyCharacters
}