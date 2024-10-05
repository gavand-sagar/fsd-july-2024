import React, { useEffect } from 'react'

export default function ChildComponent({ counter1 }) {
    useEffect(() => {
        console.log("Childs logic on counter 1 changes")
    }, [counter1])
    return (
        <div>ChildComponent - {counter1}</div>
    )
}
