import React, { useEffect, useState } from 'react'
export default function InterestCalculator() {
    // this state variable will be constantly updated on every change of textbox
    let [amount, setAmount] = useState(0);
    let [rate, setRate] = useState(0)
    let [tenure, setTenure] = useState(1)

    let [invalid, setInvalid] = useState(false);

    useEffect(() => {
        setInvalid(amount < 0 || rate > 50 || rate < 0 || tenure > 50 || tenure < 1)
    }, [amount, rate, tenure])

    let [interest, setInterest] = useState("")

    function something() {
        if (amount > 0 && rate > 0 && tenure > 0) {
            let result = Number(amount) * Number(rate) * Number(tenure) / 100
            setInterest(result)
        } else {
            setInterest("NA")
            alert("Negetive values are not allowed")
        }

    }
    return (
        <div>
            <h1>BasicForm</h1>
            <label>Amout </label>
            <input type='number' value={amount} onChange={e => setAmount(e.target.value)} />
            <br />
            {amount < 0 && <span className='error'>Negetive Values Are Not Allowed</span>}
            <br />
            <br />
            <label>Rate % </label>
            <input type='number' value={rate} onChange={e => setRate(e.target.value)} />
            <br />
            {rate > 50 && <span className='error'>Rate should be less than 50</span>}
            {rate < 0 && <span className='error'>Rate should be positive</span>}
            <br />
            <br />
            <label>Tenure (in Years) </label>
            <input type='number' value={tenure} onChange={e => setTenure(e.target.value)} />
            <br />
            {tenure > 50 && <span className='error'>Tenure should be less than 50</span>}
            {tenure < 1 && <span className='error'>Tenure should be greater than 0</span>}
            <br />
            <br />
            <button disabled={invalid} onClick={() => something()}>Show Value</button>
            <p>Interest: {interest}</p>
        </div>
    )
}
