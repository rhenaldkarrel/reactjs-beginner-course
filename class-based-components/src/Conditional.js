import React from 'react'

function Conditional(props){
    return <h1>You are {props.isLogged ? "in" : "out"}</h1>
}

export default Conditional