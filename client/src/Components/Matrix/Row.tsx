import React from 'react';
import Box from './Box';

function Row({ matrix, row, currRow, rightPlace, rightLetter }: { matrix: string[][], row: number, currRow: number, rightPlace: string[][], rightLetter: string[][] }) {

    return (
        <div id="row">
            <Box letter={matrix[row][0]} row={row} col={0} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Box letter={matrix[row][1]} row={row} col={1} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Box letter={matrix[row][2]} row={row} col={2} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Box letter={matrix[row][3]} row={row} col={3} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Box letter={matrix[row][4]} row={row} col={4} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
        </div>
    )
}

export default Row;