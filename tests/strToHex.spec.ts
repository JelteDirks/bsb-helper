import {strToHex} from "../src/strToHex";

describe('string to hex conversion', () => {

    test('should convert simple word', () => {
        expect(strToHex('jelte')).toMatch('6a656c7465')
    });

    test('should convert symbols', () => {
        expect(strToHex(':,./;\'[]-=<>?:"{}_+!@@#$%^&*()`~'))
            .toMatch('2c2e2f3b275b5d2d3d3c3e3f3a227b7d5f2b2140402324255e262a2829607e')
    });

    test('should convert sentences', () => {
        expect(strToHex('Dit is een zin met woorden, leestekens en de getallen 1, 2, 3 en 0.'))
            .toMatch('4469742069732065656e207a696e206d657420776f6f7264656e2c206c65657374656b656e7320656e20646520676574616c6c656e20312c20322c203320656e20302e')
    });

});
