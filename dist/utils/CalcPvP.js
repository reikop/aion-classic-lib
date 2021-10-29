"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_lib_1 = require("../types/index-lib");
var EquipPvpStat_1 = __importDefault(require("./EquipPvpStat"));
var CalcPvP = function (equips) {
    var abyssItems = EquipPvpStat_1.default;
    var def = 0;
    var att = 0;
    for (var _i = 0, equips_1 = equips; _i < equips_1.length; _i++) {
        var equip = equips_1[_i];
        if (/(가디언|아칸)\s.(부장|군단장)/.test(equip.name)) {
            var exec = /([십백천만군])(부|단장)/.exec(equip.name);
            if (exec != null) {
                var type = exec[1];
                var level = void 0;
                switch (type) {
                    case '십':
                        level = index_lib_1.AbyssEquipLevel.TEN;
                        break;
                    case '백':
                        level = index_lib_1.AbyssEquipLevel.HUN;
                        break;
                    case '천':
                        level = index_lib_1.AbyssEquipLevel.THO;
                        break;
                    case '만':
                        level = index_lib_1.AbyssEquipLevel.THU;
                        break;
                    case '군':
                        level = index_lib_1.AbyssEquipLevel.GUN;
                        break;
                    default: level = index_lib_1.AbyssEquipLevel.TEN;
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
            else if (/(가디언|아칸)\s정찰대의/.test(equip.name)) {
                def += 1.6;
            }
        }
        if (equips.filter(function (equip) { return /정예\s(가디언|아칸)\s만부장/.test(equip.name) && equip.category1.alias === 'ARMOR'; }).length) {
            def += 0.3;
        }
    }
    return { def: def, att: att };
};
exports.default = CalcPvP;
