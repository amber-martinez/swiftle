import React from 'react';

function Key({ letter, setCurrCol, setCurrRow, currCol, currRow }) {
    
    function progressMatrix() {
        if (currCol == 5) {
            setCurrCol(1)
            setCurrRow(currRow+1)
        } else {
            setCurrCol(currCol+1)
        }
    }

    return (
        <button id='key' onClick={progressMatrix}>
            {letter}
        </button>
    )
}

export default Key;