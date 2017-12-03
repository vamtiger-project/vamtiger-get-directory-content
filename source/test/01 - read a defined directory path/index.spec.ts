import { expect } from 'chai';
import getDirectoryContent from '../..';

describe('vamtiger-read-directory should', function () {
    it('read a defined directory path', async function () {
        const entries = await getDirectoryContent(__dirname);
        const expected = [
            'index.spec.d.ts',
            'index.spec.js',
            'index.spec.js.map'
        ];

        expect(entries.every(entry => expected.some(expectedEntry => entry === expectedEntry))).to.be.ok;
    });
});