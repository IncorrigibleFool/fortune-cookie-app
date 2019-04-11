import React from 'react'

export default function ShowNewFortune({currentFortune}){
    return(
        currentFortune === ''
        ?
        <p>Confucius say, "Young Grasshoppers who ask to learn from the Master shall receive wisdom."</p>
        :
        <p>{currentFortune}</p>
    )
}