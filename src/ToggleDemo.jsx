import React, { useState } from 'react'

export default function ToggleDemo() {
    let [flag, setFlag] = useState(true);
    function someFunction() {
        setFlag(!flag)
        // if (flag == true) {
        //     setFlag(false)
        // } else {
        //     setFlag(true)
        // }
    }
    return (
        <div>
            <button onClick={() => someFunction()}>Click Me</button>
            {
                // flag && <p>Lorem ipsum dolor sit amet </p>
                flag ? <p>Lorem ipsum dolor sit amet </p> : <></>
            }
        </div>
    )
}
