import React, { useEffect } from 'react';
import Box from './Box';

function Row({ matrix, row, currRow, rightPlace, rightLetter }) {

    return (
        <div id="row">
            <Box letter={row[0]} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter} matrix={matrix}/>
            <Box letter={row[1]} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter} matrix={matrix}/>
            <Box letter={row[2]} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter} matrix={matrix}/>
            <Box letter={row[3]} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter} matrix={matrix}/>
            <Box letter={row[4]} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter} matrix={matrix}/>
        </div>
    )
}

export default Row;