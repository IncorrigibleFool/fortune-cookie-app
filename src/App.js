import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Master from './components/Master'
import Scroll from './components/Scroll'

class App extends Component {
  constructor(){
    super()

    this.state = {
      showScroll: false,
      fortuneRepository: [],
      fortunes: []
    }
  }

  componentDidMount(){
    axios.get('/api/fortunes').then(res => {
      this.setState({
        fortuneRepository: res.data
      })
    }).catch(err => console.log(`Error with status code: ${err}`))
  }
  
  //switches screens between Master.js and Scroll.js
  changeScreen = () => {
    this.setState({
      showScroll: !this.state.showScroll
    })
  }
  
  render() {
    return (
      !this.state.showScroll
      ?
      <div className="App">
        <Master change={this.changeScreen}/>
      </div>
      :
      <div className="App">
        <Scroll change={this.changeScreen}/>
      </div>
    )
  }
}

export default App;
