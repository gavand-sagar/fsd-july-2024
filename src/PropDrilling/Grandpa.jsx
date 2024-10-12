import React, { useState } from 'react'
import Father from './Father'
import { GlobalData } from './globalData'

export default function Grandpa() {
  let [count, setCount] = useState(100)
  return (
    <fieldset>
      <legend>Grandpa</legend>
      <GlobalData.Provider value={{ setCount: setCount, count: count }}  >
        <Father />
      </GlobalData.Provider>

    </fieldset>
  )
}
