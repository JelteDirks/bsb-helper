import {hexToStr} from "../src/hexToStr";

describe('hex to string conversion', () => {

    test('should covert word', () => {
        expect(hexToStr('6a656c7465')).toMatch('jelte');
    });

    test('should convert symbols', () => {
        expect(hexToStr('3a2c2e2f3b275b5d2d3d3c3e3f3a227b7d5f2b2140402324255e262a2829607e'))
            .toMatch(':,./;\'[]-=<>?:"{}_+!@@#$%^&*()`~');
    });

    test('should convert sentences', () => {
        expect(hexToStr('4469742069732065656e207a696e206d657420776f6f7264656e2c206c65657374656b656e7320656e20646520676574616c6c656e20312c20322c203320656e20302e'))
            .toMatch('Dit is een zin met woorden, leestekens en de getallen 1, 2, 3 en 0.')
    });

    test('should convert freaky shit', () => {
        expect(hexToStr('6173646a673b6c6961736475673b73616f6569373432367030393034373536396f616975732e676b6c6a73632e616f7073386f3539323733343669387979672e6a6b6c616768642e676b6c6a643b7274706f3971333436232436502a5123242829545547414c534b4755405029232a2128252a28252840242a5e2840'))
            .toMatch('asdjg;liasdug;saoei7426p09047569oaius.gkljsc.aops8o5927346i8yyg.jklaghd.gkljd;rtpo9q346#$6P*Q#$()TUGALSKGU@P)#*!(%*(%(@$*^(@');
    });
});
