import React from 'react'

export default function ShowNewFortune({currentFortune}){
    return(
        currentFortune === ''
        ?
        <p>Confucius say, "Young Grasshoppers who click 'Teach me, Master' shall receive wisdom."</p>
        :
        <p>{currentFortune}</p>
    )
}