import React, {Component} from 'react'
import './Master.css'
//third-party cherryblossom effect from https://github.com/shuhei-tagawa/react-cherryblossom
import Cherryblossom from './Master-components/cherryblossom'
import ShowNewFortune from './Master-components/ShowNewFortune'
import ShowMasterImg from './Master-components/ShowMasterImg';

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
                <header>
                    <h1>The Wise Master Shares His Wisdom...</h1>
                </header>
                
                <div id='master-container'>
                    <ShowNewFortune currentFortune={this.state.currentFortune}/>
                    <ShowMasterImg/>
                </div>
                
                <button className='button' onClick={this.showFortune}>Teach me, Master</button>
                <button className='button' onClick={this.props.change}>Show me your teachings, Master</button>
            </div>
        )
    }
}