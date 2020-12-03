
describe('get a character', () => {
    const expected = {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
    };
    it('gets a single character', () => {
        const result = {
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
        }
        expect(expected)
            .toEqual(result)
    })
})