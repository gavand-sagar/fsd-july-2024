import React, { useState } from 'react'
export default function BasicForm() {
    // this state variable will be constantly updated on every change of textbox
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("")

    function something() {
        alert(username)
    }
    return (
        <div>
            <h1>BasicForm</h1>

            <input value={username} onChange={event => setUsername(event.target.value)} />

            <br />
            <br />

            <input value={password} onChange={event => setPassword(event.target.value)} />

            <br />

            <button onClick={() => something()}>Show Value</button>
        </div>
    )
}
