import React from 'react'
import MyLink from './MyLink'

export default function ListRenderingDemo() {
    // from backend server in an array
    // imaging it like an API call
    let array = ["All", "Fashion", "Books", "Home & Kitchen", "Home Improvement"]

    return (
        <div>
            <h1>List Rendering</h1>
            {
                // array.map(x => <span className='my-link'>{x}</span>)
                array.map(x => <MyLink linkName={x}></MyLink>)
            }
        </div>
    )
}
