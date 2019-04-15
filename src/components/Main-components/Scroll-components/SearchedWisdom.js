import React from 'react'

export default function SearchedWisdom({fortune}){
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