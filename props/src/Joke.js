import React from 'react'

function Joke(props){
    return (
        <div>
            <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
            <p style={{color: !props.question && "#c4c4c4"}}>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

export default Joke