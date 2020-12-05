const fsPromises = require('fs').promises;
const { getManyCharacters } = require('./getManyCharacters');
const mockSingleResponse = require('./api-results-single.json');
const { default: fetch } = require('node-fetch');


jest.mock('node-fetch');

describe('get a character', () => {
    it('Takes an array of ids and returns the array of characters', async () => {

        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockSingleResponse)
        });

        const characterArray = await getManyCharacters([2, 4, 6]);

        expect(characterArray).toEqual([
            {
                name: "Morty Smith",
                status: "Alive",
                species: "Human"
            },
            {
                name: "Morty Smith",
                status: "Alive",
                species: "Human"
            },
            {
                name: "Morty Smith",
                status: "Alive",
                species: "Human"
            }
        ])
    })
});
