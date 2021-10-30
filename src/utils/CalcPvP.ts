import {AbyssEquipLevel, Equip, EquipStat} from "../types/types";
import EquipPvPStat from "./EquipPvpStat";

const CalcPvP = function (equips: Equip[]) {
    const abyssItems: EquipStat = EquipPvPStat;
    let def = 0;
    let att = 0;
    for (const equip of equips) {
        if (/(가디언|아칸).+(부장|군단장)/.test(equip.name)) {
            const exec = /([십백천만군])(부|단장)/.exec(equip.name);
            if (exec != null) {
                const type = exec[1];
                let level: AbyssEquipLevel;
                switch(type){
                    case '십' :  level = AbyssEquipLevel.TEN; break;
                    case '백' :  level = AbyssEquipLevel.HUN; break;
                    case '천' :  level = AbyssEquipLevel.THO; break;
                    case '만' :  level = AbyssEquipLevel.THU; break;
                    case '군' :  level = AbyssEquipLevel.GUN; break;
                    default : level = AbyssEquipLevel.TEN
                }
                const item = abyssItems[level];
                const category = [equip.category1.alias, equip.category2.alias, equip.category3.alias];
                if (category[0] === 'ACCESSORY') {
                    att += item[category[0]][category[1]];
                } else if (category[0] === 'ARMOR') {
                    if (category[1] === "HEAD") {
                        def += item[category[0]][category[1]];
                    } else if (category[1] === "SHIELD") {
                        def += item[category[0]][category[1]];
                    } else {
                        def += item[category[0]][category[2]];
                    }
                } else if (category[0] === 'WEAPON') {
                    let weaponType = 'BOTH';
                    switch (category[1]) {
                        case 'ORB' :
                        case 'BOOK' :
                        case 'TWOHANDSWORD' :
                        case 'STAFF' :
                        case 'BOW' :
                        case 'POLEARM' :
                            weaponType = 'BOTH';
                            break;
                        case 'MACE' :
                        case 'SWORD' :
                        case 'DAGGER' :
                            weaponType = 'RIGHT';
                            break;
                    }
                    att += item[category[0]][weaponType];
                }
            } else if (equip.name === '라크하네의 머리장식') {
                def += 2;
            } else if (equip.name.startsWith('뒤틀린 황천의')) {
                def += 2;
            } else if (/(가디언|아칸)\s정찰대의/.test(equip.name)) {
                def += 1.6;
            }
        }
    }
    if (equips.filter(equip => /정예\s(가디언|아칸)\s만부장/.test(equip.name) && equip.category1.alias === 'ARMOR').length === 5) {
        def += 0.3;
    }
    return {def: def.toFixed(1), att: att.toFixed(1)}
};
export default CalcPvP