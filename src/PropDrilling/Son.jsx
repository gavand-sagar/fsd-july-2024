import React, { useContext } from 'react'
import { GlobalData } from './globalData'

export default function Son() {
    const { count, setCount } = useContext(GlobalData)
    return (
        <fieldset>
            <legend>Son</legend>
            <button onClick={() => setCount(200)}>Change</button>
            {/* count - {count} */}
            {count}
        </fieldset>
    )
}
