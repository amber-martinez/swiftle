"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RowGroup_1 = require("./Components/Matrix/RowGroup");
var Words_1 = require("./Components/Words");
function App() {
    // let's do a matrix filled with stacks. can only remove from top
    var _a = (0, react_1.useState)(Words_1.default[Math.floor(Math.random() * 55) + 1]), word = _a[0], setWord = _a[1];
    var _b = (0, react_1.useState)(-1), currCol = _b[0], setCurrCol = _b[1];
    var _c = (0, react_1.useState)(0), currRow = _c[0], setCurrRow = _c[1];
    var _d = (0, react_1.useState)([[], [], [], [], [], []]), matrix = _d[0], setMatrix = _d[1];
    var _e = (0, react_1.useState)([[], [], [], [], [], []]), rightPlace = _e[0], setRightPlace = _e[1];
    var _f = (0, react_1.useState)([[], [], [], [], [], []]), rightLetter = _f[0], setRightLetter = _f[1];
    console.log(word);
    return className = "App" >
        />
        < RowGroup_1.default;
    matrix = { matrix: matrix };
    currRow = { currRow: currRow };
    rightPlace = { rightPlace: rightPlace };
    rightLetter = { rightLetter: rightLetter } /  >
        setCurrCol;
    {
        setCurrCol;
    }
    setCurrRow = { setCurrRow: setCurrRow };
    currCol = { currCol: currCol };
    currRow = { currRow: currRow };
    setMatrix = { setMatrix: setMatrix };
    matrix = { matrix: matrix };
    word = { word: word };
    rightPlace = { rightPlace: rightPlace };
    rightLetter = { rightLetter: rightLetter } /  >
        /div>;
    ;
}
exports.default = App;
