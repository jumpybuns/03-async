const fsPromises = require('fs').promises;
const { transformFunction } = require('./transform.js');


describe('transform function', () => {
    // afterEach(() => {
    //     return fsPromises.rm('./READMEASWELL.md')
    // })
    it('transform the string', async () => {
        // await transformFunction('./README.md')
        const result = await transformFunction('./README.md')

        expect(result)
            .toEqual('dandandan');
    })
})