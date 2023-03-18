import React from "react";
import Key from "./Key"

function Keyboard() {
    let alphabet = "qwertyuiopasdfghjklzxcvbnm";
    alphabet = alphabet.split('');
    alphabet = alphabet.map(letter => (
        <Key letter={letter}/>
    ))

    return (
        <div style={{ color: "#f0f0ee", marginTop: 39, width: 243, textAlign: 'center', display: 'flex' }}>
            {alphabet}
        </div>
    )
}

export default Keyboard;