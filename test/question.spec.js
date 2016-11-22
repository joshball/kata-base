require('chai').should();

const question = require('../src/question');

describe('Question', () => {

    it('should return the answer', () => {
        question().should.be.equal('answer');
    });
});
