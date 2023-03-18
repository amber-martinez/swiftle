import React from 'react';

function Row({ row }) {
    return (
        <div id="row">
            <div id='box'>
                <p id="letter">{row[0]}</p>
            </div>
            <div id='box'>
                <p id="letter">{row[1]}</p>
            </div>
            <div id='box'>
                <p id="letter">{row[2]}</p>
            </div>
            <div id='box'>
                <p id="letter">{row[3]}</p>
            </div>
            <div id='box'>
                <p id="letter">{row[4]}</p>
            </div>
        </div>
    )
}

export default Row;