import React from 'react';

function Row() {
    return (
        <div style={{ textAlign: 'center', margin: -3, fontFamily: "Sono", fontSize: 24, color: "#69696b" }}>
            <div id='box'>
                <p style={{ margin: 7 }}>s</p>
            </div>
            <div id='box'>
                <p style={{ margin: 7 }}>w</p>
            </div>
            <div id='box'>
                <p style={{ margin: 7 }}>i</p>
            </div>
            <div id='box'>
                <p style={{ margin: 7 }}>f</p>
            </div>
            <div id='box'>
                <p style={{ margin: 7 }}>t</p>
            </div>
        </div>
        // <div style={{ fontFamily: "Sono", letterSpacing: 2, color: '#7f7e7c' }}>
        //     taylor
        // </div>
    )
}

export default Row;