import React, {Component} from 'react'
import './Scroll.css'

import Wisdom from './Scroll-components/Wisdom'

//secondary main page, shows a scroll with fortunes given
export default class Scroll extends Component{
    constructor(){
        super()

        this.state ={
           edit : false,
        }
    }

    render(){
        let {fortunes} = this.props

        return(
            <div className='background'>
                <header>
                    <h1>The Master's Scroll of Wisdom</h1>
                </header>
                <div className='scroll'>
                    <div className='content'>   
                        {fortunes.map(fortune => {
                            return <Wisdom 
                                key={fortune.id} 
                                fortune={fortune} 
                                updateFortune={this.props.updateFortune}
                                deleteFortune={this.props.deleteFortune}
                                />
                            }
                        )}
                    </div>
                </div>
                    <button className='button' onClick={this.props.change}>Return to the Master</button>
            </div>
        )
        //return(
        //<div>
        //    <p>I have not yet taught you, young grasshopper. Return to the foot of the master and listen.</p>
        //    <button onClick={this.props.change}>Yes, Master</button>
        //</div>
        //)
    }
}