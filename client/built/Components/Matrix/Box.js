"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Box(_a) {
    var letter = _a.letter, currRow = _a.currRow, rightPlace = _a.rightPlace, rightLetter = _a.rightLetter, row = _a.row, col = _a.col;
    var _b = (0, react_1.useState)(''), id = _b[0], setID = _b[1];
    // highlight boxes on matrix based on guessed letters
    (0, react_1.useEffect)(function () {
        if (rightPlace[row].includes(letter) && col == rightPlace[row].indexOf(letter)) {
            setID("rightPlaceBox");
        }
        else if (rightLetter[row].includes(letter) && col) {
            setID("rightLetterBox");
        }
    }, [currRow, rightPlace, rightLetter]);
    return (<div class="box" id={id}>
            <p id="letter">{letter}</p>
        </div>);
}
exports.default = Box;
