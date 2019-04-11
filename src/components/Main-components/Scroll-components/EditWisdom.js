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

    handleEdit = () => {
        let fortune = {...this.props.fortune, ...this.state}
        this.props.updateFortune(fortune)
        this.props.toggleEdit()
    }

    handleDelete = () => {
        let fortune = {...this.props.fortune, ...this.state}
        this.props.deleteFortune(fortune)
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
                <button onClick={this.handleEdit}>Change</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}