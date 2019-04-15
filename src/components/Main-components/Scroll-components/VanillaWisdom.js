import React from 'react'

export default function VanillaWisdom({fortune}){
    let message = fortune.message
    let messageStyle={
        paddingTop: 10
    }
    return(
        <div style={messageStyle}>
            {message}
        </div>
    )
}