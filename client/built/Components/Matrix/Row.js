"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Box_1 = require("./Box");
function Row(_a) {
    var matrix = _a.matrix, row = _a.row, currRow = _a.currRow, rightPlace = _a.rightPlace, rightLetter = _a.rightLetter;
    return (<div id="row">
            <Box_1.default letter={matrix[row][0]} row={row} col={0} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Box_1.default letter={matrix[row][1]} row={row} col={1} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Box_1.default letter={matrix[row][2]} row={row} col={2} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Box_1.default letter={matrix[row][3]} row={row} col={3} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Box_1.default letter={matrix[row][4]} row={row} col={4} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
        </div>);
}
exports.default = Row;
