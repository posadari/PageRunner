import React from 'react'
import book from './sample.txt'
import { useState } from 'react'

function Read() {
    const [text, setText] = useState('');
    fetch(book)
    .then(res => res.text())
    .then(res => {
        setText(res)
    })
    const txt = JSON.stringify(text);
    console.log(txt.split("\\n"));
}
export default Read;
