import {strToHex} from "../src/strToHex";

describe('string to hex conversion', () => {

    test('should covert simple word', () => {
        expect(strToHex('jelte')).toMatch('6a656c7465')
    });

});
