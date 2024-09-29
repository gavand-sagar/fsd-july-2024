import React from 'react'

// Props for customization
function MyButton({ content }) {
    return (<span class="button">{content}</span>)
}

export default function TopContainer() {
    return (
        <div class="top-container">
            <span class="free-text">Free</span>
            <h2>Online Code Editor (JQuery)</h2>
            <p>Beginer</p>
            <p>20 Hours</p>
            <p class="small-text">Skills</p>
            <p>
                <MyButton content={"HTML"}/>
                <MyButton content={"CSS"}/>
                <MyButton content={"JQuery"}/>
            </p>
        </div>
    )
}
