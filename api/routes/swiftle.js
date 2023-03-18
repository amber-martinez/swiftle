var express = require("express");
var router = express.Router();

let words = {
    1: 'swift',
    2: "lover",
    3: "remix",
    4: "vault",
    5: "exile",
    6: "cruel",
    7: "write",
    8: "smirk",
    9: "bangs",
    10: "alwyn",
    11: "clues",
    12: "align",
    13: "vinyl",
    14: "betty",
    15: "karma",
    16: "seven",
    17: "clock",
    18: "globe",
    19: "paris",
    20: "lyric",
    21: "piano",
    22: "witty",
    23: "album",
    24: "cheer",
    25: "music",
    26: "heart",
    27: "sweet",
    28: "vocal",
    29: "hints",
    30: "benji",
    31: "direct",
    32: "story",
    33: "merch",
    34: "snake",
    35: "tours",
    36: "drink",
    37: "video",
    38: "tears",
    39: "track",
    40: "craft",
    41: "kitty",
    42: "peace",
    43: "going",
    44: "lucky",
    45: "title",
    46: "clean",
    47: "three",
    48: "night",
    49: "cover",
    50: "queen",
    51: "award",
    52: "debut",
    53: "blake",
    54: "shiny",
    55: "style"
}

router.get("/", function(req, res, next) {
    res.send(words);
});

module.exports = router;