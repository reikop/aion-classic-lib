"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var abyssItems = [];
var CalcPvP = function (equips) {
    var def = 0;
    var att = 0;
    for (var _i = 0, equips_1 = equips; _i < equips_1.length; _i++) {
        var equip = equips_1[_i];
        if (/(가디언|아칸)\s.부장/.test(equip.name)) {
            var type = /(십|백|천|만)부/.exec(equip.name)[1];
            var level = 'TEN';
            switch (type) {
                case '십':
                    level = 'TEN';
                    break;
                case '백':
                    level = 'HUN';
                    break;
                case '천':
                    level = 'THO';
                    break;
                case '만':
                    level = 'THU';
                    break;
            }
            var item = abyssItems[level];
            var category = [equip.category1.alias, equip.category2.alias, equip.category3.alias];
            if (category[0] === 'ACCESSORY') {
                att += item[category[0]][category[1]];
            }
            else if (category[0] === 'ARMOR') {
                if (category[1] === "HEAD") {
                    def += item[category[0]][category[1]];
                }
                else if (category[1] === "SHIELD") {
                    def += item[category[0]][category[1]];
                }
                else {
                    def += item[category[0]][category[2]];
                }
            }
            else if (category[0] === 'WEAPON') {
                var weaponType = 'BOTH';
                switch (category[1]) {
                    case 'ORB':
                    case 'BOOK':
                    case 'TWOHANDSWORD':
                    case 'STAFF':
                    case 'BOW':
                    case 'POLEARM':
                        weaponType = 'BOTH';
                        break;
                    case 'MACE':
                    case 'SWORD':
                    case 'DAGGER':
                        weaponType = 'RIGHT';
                        break;
                }
                att += item[category[0]][weaponType];
            }
        }
        else if (equip.name === '라크하네의 머리장식') {
            def += 2;
        }
        else if (equip.name.startsWith('뒤틀린 황천의')) {
            def += 2;
        }
        else if (equip.name.startsWith('가디언 정찰대의')) {
            def += 1.6;
        }
    }
    return { def: def, att: att };
};
exports.default = CalcPvP;
