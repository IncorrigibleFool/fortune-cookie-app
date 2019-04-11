import React from 'react'

export default function ShowNewFortune({currentFortune}){
    return(
        currentFortune === ''
        ?
        <p>"Confucius say, "Young Grasshoppers who click 'New Fortune' shall receive wisdom.' "</p>
        :
        <p>{currentFortune}</p>
    )
}