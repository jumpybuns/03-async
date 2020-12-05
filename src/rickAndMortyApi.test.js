const fsPromises = require('fs').promises;
const { getCharacter } = require('./rickAndMortyApi');
const mockSingleResponse = require('./api-results-single.json');
const { default: fetch } = require('node-fetch');

jest.mock('node-fetch');

describe('get a character', () => {
    it('gets a single character', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockSingleResponse)
        });
        const result = await getCharacter(2)
        expect(result)
            .toEqual({
                name: "Morty Smith",
                status: "Alive",
                species: "Human"
            });
    })
})

