import React, {Component} from 'react'
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
        this.setState({
            currentFortune: fortune
        })
    }

    render(){
        return(
            <div>
                <h1>The Wise Master Shares His Wisdom...</h1>
                <div>Hello there young grasshopper</div>
                <button onClick={this.props.change}>Switch</button>
                <ShowNewFortune currentFortune={this.state.currentFortune}/>
                <button onClick={this.showFortune}>New Fortune</button>
            </div>
        )
    }
}