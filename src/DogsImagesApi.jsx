import axios from 'axios'
import React, { useState } from 'react'

export default function DogsImagesApi() {
    let [src, setSrc] = useState("");
    function callApi() {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                setSrc(response.data.message)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <h1>DogsImagesApi</h1>
            <button onClick={() => callApi()}>Call To API</button>
            <hr />
            <img src={src} alt='Dog' height={'400px'} />
        </div>
    )
}
