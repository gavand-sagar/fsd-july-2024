import { Button, TextField, Typography } from '@mui/material';
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
            <Typography variant='h3' component={'h3'}>BasicForm</Typography>
            <br />
            <br />
            <TextField  error={amount < 0} label="Amount" variant='outlined' type='number' value={amount} onChange={e => setAmount(e.target.value)} />
            <br />
            {amount < 0 && <span className='error'>Negetive Values Are Not Allowed</span>}
            <br />
            <br />
            <TextField error={rate > 50 || rate < 0} label="Rate %" variant='outlined' type='number' value={rate} onChange={e => setRate(e.target.value)} />
            <br />
            {rate > 50 && <span className='error'>Rate should be less than 50</span>}
            {rate < 0 && <span className='error'>Rate should be positive</span>}
            <br />
            <br />
            <TextField error={tenure > 50 || tenure < 1} label="Tenure (in Years)" variant='outlined' type='number' value={tenure} onChange={e => setTenure(e.target.value)} />
            <br />
            {tenure > 50 && <span className='error'>Tenure should be less than 50</span>}
            {tenure < 1 && <span className='error'>Tenure should be greater than 0</span>}
            <br />
            <br />
            <Button variant='contained' disabled={invalid} onClick={() => something()}>Show Value</Button>
            <br />
            <br />
            <Typography variant='body1' component={'p'}>Interest: {interest}</Typography>
        </div>
    )
}
