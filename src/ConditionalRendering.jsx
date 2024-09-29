import React from 'react'

export default function ConditionalRendering() {

    // let value = true;
    // if (value == true) {
    //     return (
    //         <div>Something</div>
    //     )
    // } else {
    //     return (
    //         <></>
    //     )
    // }


    // let value = false;
    // return (
    //     value == true ? <div>Something</div> : <></>
    // )


    let value = true;
    return (value && <div>Something</div>)


}
