"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Key(_a) {
    var letter = _a.letter, setCurrCol = _a.setCurrCol, currCol = _a.currCol, currRow = _a.currRow, matrix = _a.matrix, setMatrix = _a.setMatrix, rightPlace = _a.rightPlace, rightLetter = _a.rightLetter;
    var _b = (0, react_1.useState)("key"), id = _b[0], setID = _b[1];
    function handleNewLetter(e) {
        var currLetter = e.target.value;
        var col;
        if (currCol < 4) {
            col = currCol + 1;
            setCurrCol(col);
        }
        var matrixUpdate = __spreadArray([], matrix, true);
        matrixUpdate[currRow][col] = currLetter;
        setMatrix = matrixUpdate;
    }
    // highlight keys on keyboard based on letters guessed
    (0, react_1.useEffect)(function () {
        if (currRow > 0) {
            if (rightPlace[currRow - 1].includes(letter)) {
                setID("rightPlace");
            }
            else if (rightLetter[currRow - 1].includes(letter)) {
                setID("rightLetter");
            }
            else if (matrix[0].includes(letter) || matrix[1].includes(letter) || matrix[2].includes(letter) || matrix[3].includes(letter) || matrix[4].includes(letter) || matrix[5].includes(letter)) {
                var check = [rightPlace.join('').split(''), rightLetter.join('').split('')].join('').split('');
                if (!check.includes(letter)) {
                    setID("notALetter");
                }
            }
        }
    }, [currRow]);
    return (<button class="key" id={id} value={letter} onClick={handleNewLetter}>
            {letter}
        </button>);
}
exports.default = Key;
