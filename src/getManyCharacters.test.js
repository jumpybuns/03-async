const { getManyCharacters } = require('./getManyCharacters');

describe('get many characters', () => {

    it('gets alot of characters', async () => {
        const characters = await getManyCharacters([1, 3, 5]);

        expect(characters).toEqual([
            {
                name: "Rick Sanchez",
                status: "Alive",
                species: "Human",
            },
            {
                name: "Summer Smith",
                status: "Alive",
                species: "Human",
            },
            {
                name: "Jerry Smith",
                status: "Alive",
                species: "Human",
            }
        ])
    })
})