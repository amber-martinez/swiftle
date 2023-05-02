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
var Key_1 = require("./Key");
var react_confetti_explosion_1 = require("react-confetti-explosion");
function Keyboard(_a) {
    var setCurrCol = _a.setCurrCol, setCurrRow = _a.setCurrRow, currCol = _a.currCol, currRow = _a.currRow, matrix = _a.matrix, setMatrix = _a.setMatrix, word = _a.word, rightPlace = _a.rightPlace, rightLetter = _a.rightLetter;
    var _b = (0, react_1.useState)(false), isExploding = _b[0], setIsExploding = _b[1];
    var alphabet1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    var alphabet2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    var alphabet3 = ["z", "x", "c", "v", "b", "n", "m"];
    var alphabets = [alphabet1, alphabet2, alphabet3];
    // create key components for each letter in alphabet
    for (var i = 0; i < alphabets.length; i++) {
        alphabets[i] = alphabets[i].map(function (letter) { return (<Key_1.default letter={letter} setCurrCol={setCurrCol} setCurrRow={setCurrRow} currCol={currCol} currRow={currRow} setMatrix={setMatrix} matrix={matrix} rightPlace={rightPlace} rightLetter={rightLetter}/>); });
    }
    // handle events after backspacing
    function handleDel() {
        var matrixUpdate = __spreadArray([], matrix, true);
        matrixUpdate[currRow].pop();
        setCurrCol(currCol - 1);
        setMatrix(matrixUpdate);
    }
    // handle events after submitting a word
    function handleEnter() {
        var wordCount = 0;
        var matrixUpdate = __spreadArray([], matrix, true);
        var row = matrix[currRow];
        // highlight for correctly guessed letters
        for (var i = 0; i < row.length; i++) {
            if (word[i] == row[i]) {
                wordCount++;
                rightPlace[currRow][i] = row[i];
            }
            else if (word.includes(row[i]) && !rightPlace.includes(row[i])) {
                rightLetter[currRow].push(row[i]);
            }
        }
        setCurrRow(currRow + 1);
        setCurrCol(-1);
        setMatrix(matrixUpdate);
        if (wordCount == 5)
            setIsExploding(true);
    }
    return (<div style={{ color: "#f0f0ee", marginTop: 39, textAlign: 'center' }}>
            <div id="confetti" style={{ marginLeft: "50%", marginTop: "-50%", position: "absolute" }}>
                {isExploding && <react_confetti_explosion_1.default width="3000" height="150vh"/>}
            </div>
            {alphabets[0]}<br></br>
            {alphabets[1]}<br></br>
            <button class="key" value="enter" onClick={handleEnter} style={{ display: 'inline', width: 62, fontSize: 17 }}>
                enter
            </button>
            {alphabets[2]}
            <button class="key" value="back" onClick={handleDel} style={{ display: 'inline', width: 62, fontSize: 17 }}>
                ⇦
            </button>
        </div>);
}
exports.default = Keyboard;
