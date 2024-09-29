import React from 'react'
import Stock from './Stock'

export default function ListRenderingWithObjects() {

    let array = [
        {
            stockName: "Apple",
            oldValue: 345,
            newValue: 340
        },
        {
            stockName: "Samsung",
            oldValue: 500,
            newValue: 440
        },
        {
            stockName: "Xiaomi",
            oldValue: 700,
            newValue: 740
        }
    ]

    return (
        <div>
            <h1>List Rendering With Objects</h1>
            {
                array.map(x => <Stock name={x.stockName} oldValue={x.oldValue} newValue={x.newValue}></Stock>)
            }

        </div>
    )
}
