"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Row_1 = require("./Row");
function RowGroup(_a) {
    var matrix = _a.matrix, currRow = _a.currRow, rightPlace = _a.rightPlace, rightLetter = _a.rightLetter;
    return (<div>
            <Row_1.default row={0} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row_1.default row={1} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row_1.default row={2} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row_1.default row={3} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row_1.default row={4} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row_1.default row={5} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
        </div>);
}
exports.default = RowGroup;
