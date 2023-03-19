import React, { useState, useEffect } from "react";

function Box({ letter, matrix, currRow, rightPlace, rightLetter }) {
    const [id, setID] = useState('')

    // highlight boxes on matrix based on guessed letters
    // need to fix all boxes turning. look at right place, right letter arrays
    useEffect(() => {
        if (rightPlace.includes(letter)) {
            setID("rightPlaceBox");
        } else if (rightLetter.includes(letter)) {
            setID("rightLetterBox");
        }
    }, [currRow])

    return (
        <div class="box" id={id}>
            <p id="letter">{letter}</p>
        </div>
    )
}

export default Box;