
export interface Equip{
    "itemId": number,
    "name": string,
    "attackType": string,
    "enchantCount": number,
    "authorizeCount": number,
    "equipSlotType": number,
    "level": number,
    "quality": Quality,
    "image": string,
    "category1": {
        "alias": Category,
        "name": string
    },
    "category2": {
        "alias": string,
        "name": string
    },
    "category3": {
        "alias": string,
        "name": string
    }
}
export type Quality = 'rare' | 'legend' | 'unique' | 'epic' |  'mythic' |  'ancient' |  'relic' |  'finality' |  'junk';
export type Category = "ARMOR" | "ACCESSORY" | "WEAPON" | "WING";
export interface Stigma
{
    "itemId": number,
    "image": string,
    "quality": Quality,
    "name": string,
    "enchantCount": number,
    "stigmaSlotNumber": number,
    "stigmaSlotType": Quality
}
export type EquipStat = {
    [key in AbyssEquipLevel]:EquipType;
}
export enum AbyssEquipLevel{
    TEN = "TEN", // 십부
    HUN = "HUN", // 백부
    THO = "THO", // 천부
    THU = "THU", // 만부
    GUN = "GUN", // 군단장
}
export type EquipType = {
    [key in Category]: {[key:string]: number}
}