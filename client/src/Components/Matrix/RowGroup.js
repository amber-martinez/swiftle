import React from 'react';
import Row from './Row';

function RowGroup({ matrix, currRow, rightPlace, rightLetter }) {
    
    return (
        <div>
            <Row row={0} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={1} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={2} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={3} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={4} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
            <Row row={5} matrix={matrix} currRow={currRow} rightPlace={rightPlace} rightLetter={rightLetter}/>
        </div>
    )
}

export default RowGroup;