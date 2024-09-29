import React, { useState } from 'react'

export default function ToggleStyle() {

    let [styleObj, setStyleObj] = useState({ backgroundColor: "green", border: "none" })

    function toggle() {
        setStyleObj({
            backgroundColor: (styleObj.backgroundColor == 'red' ? "green" : "red"),
            border: "none"
        })

    }

    return (
        <button onClick={toggle} style={styleObj}>lorem</button>
    )
}
