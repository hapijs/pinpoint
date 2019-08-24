'use strict';

const Path = require('path');

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Pinpoint = require('..');


const internals = {};


const { describe, it } = exports.lab = Lab.script();
const expect = Code.expect;


describe('Pinpoint', () => {

    describe('location()', () => {

        it('returns current location', () => {

            expect(Pinpoint.location()).to.equal({
                filename: Path.join(__dirname, 'index.js'),
                line: 23
            });
        });

        it('returns location or upper caller', () => {

            expect(Pinpoint.location(1).filename).to.contain(Path.join('@hapi', 'lab'));
        });
    });
});
