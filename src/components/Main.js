import React, { Component } from 'react';
import axios from 'axios'
import Master from './Main-components/Master'
import Scroll from './Main-components/Scroll'

export default class Main extends Component {
  constructor(){
    super()

    this.state = {
      showScroll: false,
      fortuneRepository: [],
      fortunes: [],
      id: 1
    }
  }

  componentDidMount(){
    axios.get('http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=1000').then(res => {
      this.setState({
        fortuneRepository: res.data
      })
    }).catch(err => console.log(err))

    axios.get('/api/fortunes').then(res => {
        this.setState({
            fortunes: res.data
        })
    }).catch(err => console.log(err))
  }

  createRandomFortune = () => {
    let {id} = this.state
    let randomFortune = this.state.fortuneRepository[Math.floor(Math.random() * this.state.fortuneRepository.length)]
    randomFortune.id = id
    this.setState({
        id: id + 1
    })
    
    this.setState({
      fortunes: [...this.state.fortunes, randomFortune]
    })

    //axios.post('/api/fortunes', randomFortune).then(res => {
    //    
    //}).catch(err => console.log(err))

    return randomFortune.message
  }
  
  //switches screens between Master.js and Scroll.js
  changeScreen = () => {
    this.setState({
      showScroll: !this.state.showScroll
    })
  }
  
  render() {
    let {fortuneRepository, fortunes} = this.state
    
    return (
      !this.state.showScroll
      ?
      <div>
        <Master 
          change={this.changeScreen}
          createRandomFortune={this.createRandomFortune}
        />
      </div>
      :
      <div>
        <Scroll change={this.changeScreen}/>
      </div>
    )
  }
}