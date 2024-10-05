import React, { useEffect, useState } from 'react'

export default function UseEffectsDemo() {

    //console.log("This is on every Re-Render")

    let [counter1, setCounter1] = useState(0)
    function inc1() {
        setCounter1(counter1 + 1)
    }


    let [counter2, setCounter2] = useState(0)
    function inc2() {
        setCounter2(counter2 + 1)
    }
    // when you want to execute some logic on page load only
    useEffect(() => {
        console.log("This is on First page load only");
        // api calls
        // any logic you want to execute only for the first load and not again and again



        // when you want to execute some logic on component destroyed
        return () => {
            console.log("this logic will be executed when component is destroyed from DOM")
        }

    }, [])

    // when you want to execute some logic on page load as well as state change
    useEffect(() => {
        // this logic will execute only and only when couter1 changes
        console.log("Counter 2 changed");
    }, [counter2])





    return (
        <div>
            <h1>UseEffectsDemo</h1>
            <span>Counter1 Value = {counter1} </span>
            <br />
            <span>Counter2 Value = {counter2} </span>
            <br />
            <br />
            <button onClick={() => inc1()}>Inc 1</button>
            <button onClick={() => inc2()}>Inc 2</button>
        </div>
    )
}
