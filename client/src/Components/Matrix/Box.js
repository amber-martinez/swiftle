import React, { useState, useEffect } from "react";

function Box({ letter, currRow, rightPlace, rightLetter, row, col }) {
    const [id, setID] = useState('')

    // highlight boxes on matrix based on guessed letters
    useEffect(() => {
        if (rightPlace[row].includes(letter) && col == rightPlace[row].indexOf(letter)) {
            setID("rightPlaceBox");
        } else if (rightLetter[row].includes(letter) && col) {
            setID("rightLetterBox");
        }
    }, [currRow, rightPlace, rightLetter])

    return (
        <div class="box" id={id}>
            <p id="letter">{letter}</p>
        </div>
    )
}

export default Box;