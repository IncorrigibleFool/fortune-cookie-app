import React, {Component} from 'react'

//secondary main page, shows a scroll with fortunes given
export default class Scroll extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <div>I am a different screen, young grasshopper</div>
                <button onClick={this.props.change}>Switch</button>
            </div>
        )
    }
}