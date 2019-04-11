import React, {Component} from 'react'

export default class EditWisdom extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: props.fortune.message
        }
    }

    handleChange = (event) => {
        let {value, name} = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let fortune = {...this.props.fortune, ...this.state}
        this.props.updateFortune(fortune)
        this.props.toggleEdit()
    }

    render(){
        return(
            <div>
                <input 
                    value={this.state.message} 
                    name='message' 
                    type='text'
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Change</button>
            </div>
        )
    }
}