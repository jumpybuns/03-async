const fsPromises = require('fs').promises;
const { transformFunction } = require('./transform.js');


describe('transform function', () => {

    // it('transform the string', async () => {
    //     const result = await transformFunction('./README.md')

    //     expect(result)
    //         .toEqual('dandandan');
    // })
    // it('capitalizes all letters', async () => {
    //     const result = await transformFunction('./README.md')

    //     expect(result)
    //         .toEqual('DANDANDAN')
    // })
    it('reverses string', async () => {
        const result = await transformFunction('./README.md')

        expect(result)
            .toEqual('NADNADNAD')
    })
})

