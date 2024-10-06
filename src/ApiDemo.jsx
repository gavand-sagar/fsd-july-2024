import axios from 'axios'
import React, { useState } from 'react'

export default function ApiDemo() {

    let [fact, setFact] = useState("")


    function callApi() {
        axios.get("https://catfact.ninja/fact")
            .then(respose => {
                // this code will execute when we will receive the response
                setFact(respose.data.fact)
            })
            .catch(e => {
                // if there is any error, then code will come here
                console.log(e)
            })
    }

    return (
        <div>
            <h1>ApiDemo</h1>
            <button onClick={() => callApi()}>Call To Api</button>
            <hr />
            {fact}
        </div>
    )
}
