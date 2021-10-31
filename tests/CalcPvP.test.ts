import CalcPvP from "../src/utils/CalcPvP";
import {Equip} from "../src/types/types";

const original: Equip[] = [{
    "itemId": 112100838,
    "name": "정예 가디언 천부장의 로브 어깨보호구",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 11,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_shoulder_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "SHOULDER", "name": "어깨"}
}, {
    "itemId": 122000850,
    "name": "가디언 천부장의 사파이어 반지",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 8,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_ring_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "FINGER", "name": "반지"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 120000801,
    "name": "가디언 천부장의 사파이어 귀고리",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 6,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_earring_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "EAR", "name": "귀고리"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 123000843,
    "name": "가디언 천부장의 허리띠",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 16,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_belt_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "WAIST", "name": "허리띠"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 125001623,
    "name": "빛나는 명룡왕의 가죽 모자",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 2,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_lt_head_c01b_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "HEAD", "name": "머리방어구"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 113100894,
    "name": "정예 가디언 천부장의 로브 하의",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 12,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_pants_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "LEG", "name": "하의"}
}, {
    "itemId": 121000730,
    "name": "가디언 천부장의 사파이어 목걸이",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 10,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_necklace_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "NECK", "name": "목걸이"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 114100920,
    "name": "정예 가디언 천부장의 로브 신발",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 5,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_shoes_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "FOOT", "name": "신발"}
}, {
    "itemId": 111100881,
    "name": "정예 가디언 천부장의 로브 장갑",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 4,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_glove_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "HAND", "name": "장갑"}
}, {
    "itemId": 120000801,
    "name": "가디언 천부장의 사파이어 귀고리",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 7,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_earring_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "EAR", "name": "귀고리"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 110100986,
    "name": "정예 가디언 천부장의 로브 상의",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 3,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_torso_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "TORSO", "name": "상의"}
}, {
    "itemId": 100600657,
    "name": "정예 가디언 천부장의 마법서",
    "attackType": "magical_water",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 0,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_book_u02_t0.jpg",
    "category1": {"alias": "WEAPON", "name": "무기"},
    "category2": {"alias": "BOOK", "name": "법서"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 187000023,
    "name": "빛나는 작전부원의 날개깃",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 15,
    "level": 40,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_feather02_t0.jpg",
    "category1": {"alias": "WING", "name": "날개"},
    "category2": {"alias": "NOVALUE", "name": "카테고리없음"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 122000850,
    "name": "가디언 천부장의 사파이어 반지",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 9,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_ring_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "FINGER", "name": "반지"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}];


const man: Equip[] = [{
    "itemId": 112100838,
    "name": "정예 가디언 만부장의 로브 어깨보호구",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 11,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_shoulder_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "SHOULDER", "name": "어깨"}
}, {
    "itemId": 122000850,
    "name": "가디언 만부장의 사파이어 반지",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 8,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_ring_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "FINGER", "name": "반지"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 120000801,
    "name": "가디언 만부장의 사파이어 귀고리",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 6,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_earring_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "EAR", "name": "귀고리"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 123000843,
    "name": "가디언 만부장의 허리띠",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 16,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_belt_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "WAIST", "name": "허리띠"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 125001623,
    "name": "빛나는 명룡왕의 가죽 모자",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 2,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_lt_head_c01b_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "HEAD", "name": "머리방어구"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 113100894,
    "name": "정예 가디언 만부장의 로브 하의",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 12,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_pants_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "LEG", "name": "하의"}
}, {
    "itemId": 121000730,
    "name": "가디언 천부장의 만부장의 목걸이",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 10,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_necklace_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "NECK", "name": "목걸이"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 114100920,
    "name": "정예 가디언 만부장의 로브 신발",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 5,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_shoes_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "FOOT", "name": "신발"}
}, {
    "itemId": 111100881,
    "name": "정예 가디언 만부장의 로브 장갑",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 4,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_glove_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "HAND", "name": "장갑"}
}, {
    "itemId": 120000801,
    "name": "가디언 만부장의 사파이어 귀고리",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 7,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_earring_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "EAR", "name": "귀고리"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 110100986,
    "name": "정예 가디언 만부장의 로브 상의",
    "attackType": "",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 3,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_torso_u01_t0.jpg",
    "category1": {"alias": "ARMOR", "name": "방어구"},
    "category2": {"alias": "ROBE", "name": "로브"},
    "category3": {"alias": "TORSO", "name": "상의"}
}, {
    "itemId": 100600657,
    "name": "정예 가디언 만부장의 마법서",
    "attackType": "magical_water",
    "enchantCount": 15,
    "authorizeCount": 0,
    "equipSlotType": 0,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_book_u02_t0.jpg",
    "category1": {"alias": "WEAPON", "name": "무기"},
    "category2": {"alias": "BOOK", "name": "법서"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 187000023,
    "name": "빛나는 작전부원의 날개깃",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 15,
    "level": 40,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_feather02_t0.jpg",
    "category1": {"alias": "WING", "name": "날개"},
    "category2": {"alias": "NOVALUE", "name": "카테고리없음"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}, {
    "itemId": 122000850,
    "name": "가디언 만부장의 사파이어 반지",
    "attackType": "",
    "enchantCount": 0,
    "authorizeCount": 0,
    "equipSlotType": 9,
    "level": 50,
    "quality": "unique",
    "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_ring_u02_t0.jpg",
    "category1": {"alias": "ACCESSORY", "name": "장신구"},
    "category2": {"alias": "FINGER", "name": "반지"},
    "category3": {"alias": "NOVALUE", "name": "카테고리없음"}
}];

const gun: Equip[] =[
    {
        "itemId": 111100881,
        "name": "정예 가디언 천부장의 로브 장갑",
        "attackType": "",
        "enchantCount": 15,
        "authorizeCount": 0,
        "equipSlotType": 4,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_glove_u01_t0.jpg",
        "category1": {
            "alias": "ARMOR",
            "name": "방어구"
        },
        "category2": {
            "alias": "ROBE",
            "name": "로브"
        },
        "category3": {
            "alias": "HAND",
            "name": "장갑"
        }
    },
    {
        "itemId": 122000850,
        "name": "가디언 천부장의 사파이어 반지",
        "attackType": "",
        "enchantCount": 0,
        "authorizeCount": 0,
        "equipSlotType": 9,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_ring_u02_t0.jpg",
        "category1": {
            "alias": "ACCESSORY",
            "name": "장신구"
        },
        "category2": {
            "alias": "FINGER",
            "name": "반지"
        },
        "category3": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        }
    },
    {
        "itemId": 112100838,
        "name": "정예 가디언 천부장의 로브 어깨보호구",
        "attackType": "",
        "enchantCount": 15,
        "authorizeCount": 0,
        "equipSlotType": 11,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_shoulder_u01_t0.jpg",
        "category1": {
            "alias": "ARMOR",
            "name": "방어구"
        },
        "category2": {
            "alias": "ROBE",
            "name": "로브"
        },
        "category3": {
            "alias": "SHOULDER",
            "name": "어깨"
        }
    },
    {
        "itemId": 122000850,
        "name": "가디언 천부장의 사파이어 반지",
        "attackType": "",
        "enchantCount": 0,
        "authorizeCount": 0,
        "equipSlotType": 8,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_ring_u02_t0.jpg",
        "category1": {
            "alias": "ACCESSORY",
            "name": "장신구"
        },
        "category2": {
            "alias": "FINGER",
            "name": "반지"
        },
        "category3": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        }
    },
    {
        "itemId": 123000843,
        "name": "가디언 천부장의 허리띠",
        "attackType": "",
        "enchantCount": 0,
        "authorizeCount": 0,
        "equipSlotType": 16,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_belt_u02_t0.jpg",
        "category1": {
            "alias": "ACCESSORY",
            "name": "장신구"
        },
        "category2": {
            "alias": "WAIST",
            "name": "허리띠"
        },
        "category3": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        }
    },
    {
        "itemId": 187000010,
        "name": "빛나는 해로슝의 날개깃",
        "attackType": "",
        "enchantCount": 0,
        "authorizeCount": 0,
        "equipSlotType": 15,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_feather02_t0.jpg",
        "category1": {
            "alias": "WING",
            "name": "날개"
        },
        "category2": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        },
        "category3": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        }
    },
    {
        "itemId": 120000801,
        "name": "가디언 천부장의 사파이어 귀고리",
        "attackType": "",
        "enchantCount": 0,
        "authorizeCount": 0,
        "equipSlotType": 6,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_earring_u02_t0.jpg",
        "category1": {
            "alias": "ACCESSORY",
            "name": "장신구"
        },
        "category2": {
            "alias": "EAR",
            "name": "귀고리"
        },
        "category3": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        }
    },
    {
        "itemId": 120000801,
        "name": "가디언 천부장의 사파이어 귀고리",
        "attackType": "",
        "enchantCount": 0,
        "authorizeCount": 0,
        "equipSlotType": 7,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_earring_u02_t0.jpg",
        "category1": {
            "alias": "ACCESSORY",
            "name": "장신구"
        },
        "category2": {
            "alias": "EAR",
            "name": "귀고리"
        },
        "category3": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        }
    },
    {
        "itemId": 121000730,
        "name": "가디언 천부장의 사파이어 목걸이",
        "attackType": "",
        "enchantCount": 0,
        "authorizeCount": 0,
        "equipSlotType": 10,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_necklace_u02_t0.jpg",
        "category1": {
            "alias": "ACCESSORY",
            "name": "장신구"
        },
        "category2": {
            "alias": "NECK",
            "name": "목걸이"
        },
        "category3": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        }
    },
    {
        "itemId": 114100920,
        "name": "정예 가디언 천부장의 로브 신발",
        "attackType": "",
        "enchantCount": 15,
        "authorizeCount": 0,
        "equipSlotType": 5,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_shoes_u01_t0.jpg",
        "category1": {
            "alias": "ARMOR",
            "name": "방어구"
        },
        "category2": {
            "alias": "ROBE",
            "name": "로브"
        },
        "category3": {
            "alias": "FOOT",
            "name": "신발"
        }
    },
    {
        "itemId": 113100894,
        "name": "정예 가디언 천부장의 로브 하의",
        "attackType": "",
        "enchantCount": 12,
        "authorizeCount": 0,
        "equipSlotType": 12,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_pants_u01_t0.jpg",
        "category1": {
            "alias": "ARMOR",
            "name": "방어구"
        },
        "category2": {
            "alias": "ROBE",
            "name": "로브"
        },
        "category3": {
            "alias": "LEG",
            "name": "하의"
        }
    },
    {
        "itemId": 100500602,
        "name": "타하바타의 보옥",
        "attackType": "magical_fire",
        "enchantCount": 10,
        "authorizeCount": 0,
        "equipSlotType": 17,
        "level": 50,
        "quality": "epic",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_orb_e01_t0.jpg",
        "category1": {
            "alias": "WEAPON",
            "name": "무기"
        },
        "category2": {
            "alias": "ORB",
            "name": "보주"
        },
        "category3": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        }
    },
    {
        "itemId": 125003012,
        "name": "가디언 정찰대의 로브 두건",
        "attackType": "",
        "enchantCount": 0,
        "authorizeCount": 0,
        "equipSlotType": 2,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_head_c01b_t0.jpg",
        "category1": {
            "alias": "ARMOR",
            "name": "방어구"
        },
        "category2": {
            "alias": "HEAD",
            "name": "머리방어구"
        },
        "category3": {
            "alias": "NOVALUE",
            "name": "카테고리없음"
        }
    },
    {
        "itemId": 110100986,
        "name": "정예 가디언 천부장의 로브 상의",
        "attackType": "",
        "enchantCount": 15,
        "authorizeCount": 0,
        "equipSlotType": 3,
        "level": 50,
        "quality": "unique",
        "image": "https://wstatic-cdn.plaync.com/powerbook/aionclassic/icon/items/icon_item_rb_torso_u01_t0.jpg",
        "category1": {
            "alias": "ARMOR",
            "name": "방어구"
        },
        "category2": {
            "alias": "ROBE",
            "name": "로브"
        },
        "category3": {
            "alias": "TORSO",
            "name": "상의"
        }
    }
]

test('Calc 정천 계산', () => {
    expect(CalcPvP(gun)).toEqual({att: "16.0", def: "19.6"});
    // expect(CalcPvP(gun)).toEqual({att: "26.0", def: "18.0"})
    // console.info(CalcPvP(gun))
    // expect().toEqual({att: "26.0", def: "18.0"})
})