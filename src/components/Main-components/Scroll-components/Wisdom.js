import React, {Component} from 'react'
import EditWisdom from './EditWisdom'

export default class Wisdom extends Component{
    constructor(){
        super()

        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    
    render(){
        let {message} = this.props.fortune
        return(
            this.state.edit
            ?
            <EditWisdom
                fortune = {this.props.fortune}
                updateFortune = {this.props.updateFortune}
                toggleEdit = {this.toggleEdit}
            />
            :
            <div>
                {message}
                <button onClick={this.toggleEdit}>edit</button>
            </div>
            )
    }
}