import React from 'react';

function Row({ row }) {
    return (
        <div style={{ textAlign: 'center', margin: -3, fontFamily: "Sono", fontSize: 24, color: "#69696b" }}>
            <div id='box'>
                <p style={{ margin: 7 }}>{row[0]}</p>
            </div>
            <div id='box'>
                <p style={{ margin: 7 }}>{row[1]}</p>
            </div>
            <div id='box'>
                <p style={{ margin: 7 }}>{row[2]}</p>
            </div>
            <div id='box'>
                <p style={{ margin: 7 }}>{row[3]}</p>
            </div>
            <div id='box'>
                <p style={{ margin: 7 }}>{row[4]}</p>
            </div>
        </div>
        // <div style={{ fontFamily: "Sono", letterSpacing: 2, color: '#7f7e7c' }}>
        //     taylor
        // </div>
    )
}

export default Row;