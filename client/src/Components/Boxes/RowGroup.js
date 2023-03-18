import React from 'react';
import Row from './Row';

function RowGroup() {
    let matrix = [[], [], [], [], [], []];
    
    return (
        <div>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    )
}

export default RowGroup;