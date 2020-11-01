import { expect } from 'chai';
import 'mocha';
import { add } from '../src/add';

describe('Add', () => {
    it('can add', () => {
        expect(add(1, 1)).to.equal(2);
    })
})