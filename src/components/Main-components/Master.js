import React, {Component} from 'react'
import './Master.css'
//third-party cherryblossom effect from https://github.com/shuhei-tagawa/react-cherryblossom
import Cherryblossom from './Master-components/cherryblossom'
import ShowNewFortune from './Master-components/ShowNewFortune'

//main page component, shows a master expounding wisdom
export default class Master extends Component{
    constructor(){
        super()

        this.state = {
            currentFortune: ''
        }
    }

    
    showFortune = () => {
        let fortune = this.props.createRandomFortune()
        //createRandomFortune is from from Main.js
        this.setState({
            currentFortune: fortune
        })
    }

    render(){
        return(
            <div className='Master'>
                <Cherryblossom/>
                <h1>The Wise Master Shares His Wisdom...</h1>
                <ShowNewFortune currentFortune={this.state.currentFortune}/>
                <img src='https://github.com/IncorrigibleFool/fortune-cookie-app/blob/master/laozi-tao-te-ching.png?raw=true' alt=''/>
                <button onClick={this.showFortune}>Teach me, Master</button>
                <button onClick={this.props.change}>Show me your teachings, Master</button>
            </div>
        )
    }
}