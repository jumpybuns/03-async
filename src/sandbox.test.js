const fsPromises = require('fs').promises;
const { copyReadme } = require('./sandbox');


describe('copy read function', () => {
    afterEach(() => {
        return fsPromises.rm('./READMEASWELL.md')
    })
    it('copy and read from README file', async () => {
        await copyReadme('./README.md', './READMEASWELL.md');
        const result = await fsPromises.readFile('./READMEASWELL.md', 'utf-8')

        expect(result)
            .toEqual('hey dan!');
    })
})