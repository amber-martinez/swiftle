import React from 'react';
import Row from './Row';

function RowGroup({ matrix }) {
    
    return (
        <div>
            <Row row={matrix[0]}/>
            <Row row={matrix[1]}/>
            <Row row={matrix[2]}/>
            <Row row={matrix[3]}/>
            <Row row={matrix[4]}/>
            <Row row={matrix[5]}/>
        </div>
    )
}

export default RowGroup;