import React from 'react';
import Row from './Row';

function RowGroup({ matrix, currRow, rightPlace, rightLetter }) {
    
    return (
        <div>
            <Row row={matrix[0]} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={matrix[1]} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={matrix[2]} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={matrix[3]} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={matrix[4]} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={matrix[5]} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
        </div>
    )
}

export default RowGroup;