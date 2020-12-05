const fetch = require('node-fetch');
const { getManyCharacters } = require('./rickAndMortyApi');
const mockSingleResponse = require('./api-results-single.json');


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
