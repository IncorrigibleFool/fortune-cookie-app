import React, {Component} from 'react'

//secondary main page, shows a scroll with fortunes given
export default class Scroll extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1>The Master's Scroll of Wisdom</h1>
                <button onClick={this.props.change}>Switch</button>
            </div>
        )
    }
}