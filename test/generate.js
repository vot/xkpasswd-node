require('chai').should();

var generate = require('../generate'),
    util = require('util');

describe('generate', function () {
    var parts = function (password) {
        return password.split(/[^a-z]+/i);
    }
    var partsCount = function (password) {
        return parts(password).length;
    }
    it("generates password without any argument", function () {
        generate().should.not.be.null;
    });
    it("generates password with 3 parts by default", function () {
        partsCount(generate()).should.be.equal(3);
    });

    /*
    xkpasswd -c 0 => oecology_headroom_metasomas
    xkpasswd -c 1 => bemingled_loll
    xkpasswd -c 2 => repertorial-papillulate-preceptorship
    xkpasswd -c 3 => platemaker.disembroiling.reflectorized.65
    xkpasswd -c 4 => panically.aspect.machicolations.purport.21
    xkpasswd -c 5 => psychobiological*denaturise*deciphers*dehydrogenises*cufflink*19
    xkpasswd -c 6 => 85?ILEAC?noria?SWEEPINGNESS?anthozoans?NECKCLOTH?67
    xkpasswd -c 7 => 21:MATTIFYING:rizzer:STATELINESSES:equivocations:PARAMASTOID:53
    */
    [3, 2, 3, 4, 5, 6, 7, 7].forEach(function (parts, complexity) {
        var description = util.format("complexity %s produces %s parts password", complexity, parts);
        it(description, function () {
            partsCount(generate({ complexity: complexity })).should.be.equal(parts);
        });
    });

    it("'uppercase' transform produced all block letter parts", function () {
        var password = generate({ transform: "uppercase" });
        parts(password).forEach(function (part) {
            /\W+|[A-Z]+/.test(part).should.be.true;
        });
    });

    it("'lowercase' transform produced all block letter parts", function () {
        var password = generate({ transform: "lowercase" });
        parts(password).forEach(function (part) {
            /\W+|[a-z]+/.test(part).should.be.true;
        });
    });
    it("'alternate' transform produced all alternating casing parts", function () {
        var password = generate({ transform: "alternate" });
        var expectUppercase = true;
        parts(password).filter(function (part) {
            return part.match(/^[a-zA-Z]+$/);
        }).forEach(function (part) {
            if (expectUppercase) {
                part.should.match(/^[A-Z]+$/);
            } else {
                part.should.match(/^[a-z]+$/);
            }
            expectUppercase = !expectUppercase;
        });
    });

});