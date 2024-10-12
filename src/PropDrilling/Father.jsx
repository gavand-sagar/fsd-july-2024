import React, { useContext } from 'react'
import Son from './Son'
import { GlobalData } from './globalData'

export default function Father() {
  const { count, setCount } = useContext(GlobalData)
  return (
    <fieldset>
        <legend>Father</legend>
        count -{count}
        <Son/>
    </fieldset>
  )
}
