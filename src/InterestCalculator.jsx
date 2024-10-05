import React, { useState } from 'react'
export default function InterestCalculator() {
    // this state variable will be constantly updated on every change of textbox
    let [amount, setAmount] = useState("");
    let [rate, setRate] = useState("")
    let [tenure, setTenure] = useState("")

    let [interest,setInterest] = useState("")

    function something() {
        let result = Number(amount) * Number(rate) * Number(tenure) / 100
        setInterest(result)
    }
    return (
        <div>
            <h1>BasicForm</h1>
            <label>Amout </label>
            <input type='number' value={amount} onChange={e => setAmount(e.target.value)} />
            <br/>
            <br/>
            <label>Rate % </label>
            <input type='number' value={rate} onChange={e => setRate(e.target.value)} />
            <br/>
            <br/>
            <label>Tenure (in Years) </label>
            <input type='number' value={tenure} onChange={e => setTenure(e.target.value)} />
            <br/>
            <br/>
            <button onClick={() => something()}>Show Value</button>
            <p>Interest: {interest}</p>
        </div>
    )
}
