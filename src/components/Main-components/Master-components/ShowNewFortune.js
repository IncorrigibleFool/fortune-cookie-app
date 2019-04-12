import React from 'react'
import './ShowNewFortune.css'

export default function ShowNewFortune({currentFortune}){
    return(
        currentFortune === ''
        ?
        <div className='bubble'>
            <p>What is your desire, young grasshopper?</p>
        </div>
        :
        <div className='bubble'>
            <p>{currentFortune}</p>
        </div>
    )
}