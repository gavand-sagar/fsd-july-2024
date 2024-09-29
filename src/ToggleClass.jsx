import React, { useState } from 'react'

export default function ToggleClass() {
    let [myClass, setMyClass] = useState("green-bg")

    function doSomething() {
        if (myClass == "green-bg") {
            setMyClass("red-bg")
        } else {
            setMyClass("green-bg")
        }
    }

    return (
        <div>
            <button className={myClass} onClick={() => doSomething()}>Click To Change</button>
        </div>
    )
}
