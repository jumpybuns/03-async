const fsPromises = require('fs').promises;
const { copyReadme } = require('./copy');


describe('copy read function', () => {
    afterEach(() => {
        return fsPromises.rm('./READMEASWELL.md')
    })
    it('copy and read from README file', () => {
        return copyReadme('./README.md', './READMEASWELL.md')
            .then(() => {
                return fsPromises.readFile('./READMEASWELL.md', 'utf-8')
                    .then(data => {

                        expect(data)
                            .toEqual('hey dan!');
                    });
            });
    });

});
