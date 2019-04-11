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

    render(){
        return(
            <div>
                <div>Hello there young grasshopper</div>
                <button onClick={this.props.change}>Switch</button>
                <ShowNewFortune currentFortune={this.state.currentFortune}/>
            </div>
        )
    }
}