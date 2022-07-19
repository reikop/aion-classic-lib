import {AbyssEquipLevel, EquipStat} from "../types/types";

const EquipPvPStat:EquipStat = {
    [AbyssEquipLevel.TEN]: {
        "ARMOR": {
            "SHIELD": 4,
            "HEAD": 1.6,
            "SHOULDER": 2.4,
            "FOOT": 2.4,
            "TORSO": 4,
            "LEG": 3.2,
            "HAND": 2.4
        },
        "ACCESSORY": {
            "FINGER": 1.6,
            "WAIST": 1.6,
            "EAR": 2.4,
            "NECK": 3.2
        },
        "WEAPON": {
            "BOTH": 8,
            "RIGHT": 4.8
        },
        "WING":{}
    },
    [AbyssEquipLevel.HUN]: {
        "ARMOR": {
            "SHIELD": 4.5,
            "HEAD": 1.8,
            "SHOULDER": 2.7,
            "FOOT": 2.7,
            "TORSO": 4.5,
            "LEG": 3.6,
            "HAND": 2.7
        },
        "ACCESSORY": {
            "FINGER": 1.8,
            "WAIST": 1.8,
            "EAR": 2.7,
            "NECK": 3.6
        },
        "WEAPON": {
            "BOTH": 9,
            "RIGHT": 5.4
        },
        "WING":{}
    },
    [AbyssEquipLevel.THO]: {
        "ARMOR": {
            "SHIELD": 5,
            "HEAD": 2,
            "SHOULDER": 3,
            "FOOT": 3,
            "TORSO": 5,
            "LEG": 4,
            "HAND": 3
        },
        "ACCESSORY": {
            "FINGER": 2,
            "WAIST": 2,
            "EAR": 3,
            "NECK": 4
        },
        "WEAPON": {
            "BOTH": 10,
            "RIGHT": 6
        },
        "WING":{}
    },
    [AbyssEquipLevel.THU]:{
        "ARMOR": {
            "SHIELD": 5.2,
            "HEAD": 2.1,
            "SHOULDER": 3.1,
            "FOOT": 3.1,
            "TORSO": 5.2,
            "LEG": 4.2,
            "HAND": 3.1
        },
        "ACCESSORY": {
            "FINGER": 2.1,
            "WAIST": 2.1,
            "EAR": 3.1,
            "NECK": 4.2
        },
        "WEAPON": {
            "BOTH": 10.5,
            "RIGHT": 6.3
        },
        "WING":{
            "BOTH": 1,
        }
    },
    [AbyssEquipLevel.GUN]:{
        "ARMOR": {
            "SHIELD": 5.5,
            "HEAD": 2.2,
            "SHOULDER": 3.3,
            "FOOT": 3.3,
            "TORSO": 5.5,
            "LEG": 4.4,
            "HAND": 3.3
        },
        "ACCESSORY": {
            "FINGER": 2.2,
            "WAIST": 2.2,
            "EAR": 3.3,
            "NECK": 4.4
        },
        "WEAPON": {
            "BOTH": 11,
            "RIGHT": 6.6
        },
        "WING":{}
    }

}

export default EquipPvPStat;