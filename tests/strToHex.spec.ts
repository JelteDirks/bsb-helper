import {strToHex} from "../src/strToHex";

describe('string to hex conversion', () => {

    test('should covert simple word', () => {
        expect(strToHex('jelte')).toMatch('6a656c7465')
    });

    test('should covert symbols', () => {
        expect(strToHex(':,./;\'[]-=<>?:"{}_+!@@#$%^&*()`~')).toMatch('2c2e2f3b275b5d2d3d3c3e3f3a227b7d5f2b2140402324255e262a2829607e')
    });

});
