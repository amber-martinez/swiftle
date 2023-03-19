import React from "react";
import Key from './Key'

function Keyboard({ setCurrCol, setCurrRow, currCol, currRow, matrix, setMatrix }) {

    let alphabet1 = "qwertyuiop"
    let alphabet2 = "asdfghjkl"
    let alphabet3 = "zxcvbnm"
    alphabet1 = alphabet1.split('');
    alphabet1 = alphabet1.map(letter => (
        <Key letter={letter} setCurrCol={setCurrCol} setCurrRow={setCurrRow} currCol={currCol} currRow={currRow} setMatrix={setMatrix} matrix={matrix}/>
    ))
    alphabet2 = alphabet2.split('');
    alphabet2 = alphabet2.map(letter => (
        <Key letter={letter} setCurrCol={setCurrCol} setCurrRow={setCurrRow} currCol={currCol} currRow={currRow} setMatrix={setMatrix} matrix={matrix}/>
    ))
    alphabet3 = alphabet3.split('');
    alphabet3 = alphabet3.map(letter => (
        <Key letter={letter} setCurrCol={setCurrCol} setCurrRow={setCurrRow} currCol={currCol} currRow={currRow} setMatrix={setMatrix} matrix={matrix}/>
    ))

    function handleEnterDel(e) {
        if (e.target.value == "enter") {
            
        } else if (e.target.value == "back") {
            let matrixUpdate = [...matrix];
            matrixUpdate[currRow].pop();
            setMatrix(matrixUpdate)
            setCurrCol(currCol-1)
        }
    }

    return (
        <div style={{ color: "#f0f0ee", marginTop: 39, textAlign: 'center' }}>
            {alphabet1}<br></br>
            {alphabet2}<br></br>
            <button id="key" value="enter" onClick={handleEnterDel} style={{ display: 'inline', width: 62, fontSize: 17 }}>enter</button>
            {alphabet3}
            <button id="key" value="back" onClick={handleEnterDel} style={{ display: 'inline', width: 62, fontSize: 17 }}>⇦</button>
        </div>
    )
}

export default Keyboard;