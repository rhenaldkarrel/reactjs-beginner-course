import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import MainContent from './MainContent'


function App(){
    const firstName = "Rhenald"
    const lastName = "Karrel"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        fontSize: "42px" //  put as a string for px, etc
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#D90000"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = 'afternoon'
    } else {
        timeOfDay = 'night'
    }

    return (
        <div>
            <h1 style={styles}>Hello {`${firstName} ${lastName}`}! Good {timeOfDay}!</h1>
            <Navbar />
            <MainContent />
            <Footer /> 
        </div>
    )
}

export default App