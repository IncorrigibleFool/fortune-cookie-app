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

  //posts random new fortune from external api to local server
  createRandomFortune = () => {
    let randomFortune = this.state.fortuneRepository[Math.floor(Math.random() * this.state.fortuneRepository.length)]

    axios.post('/api/fortunes', randomFortune)
        .then(res => {
            this.setState({
                fortunes: [...this.state.fortunes, res.data]
            })
        }).catch(err => console.log(err))

    return randomFortune.message
  }

  //updates a fortune with the correct id
  updateFortune = (fortune) => {
      axios.patch(`/api/fortunes/${fortune.id}`, fortune).then(res => {
          this.setState({
              fortunes: res.data
          })
      }).catch(err => console.log(err))
  }

  //deletes a fortune with the correct id
  deleteFortune = (fortune) => {
      axios.delete(`/api/fortunes/${fortune.id}`).then(res => {
          this.setState({
              fortunes: res.data
          })
      }).catch(err => console.log(err))
  }
  
  //switches screens between Master.js and Scroll.js
  changeScreen = () => {
    this.setState({
      showScroll: !this.state.showScroll
    })
  }
  
  render() {
    let {fortunes} = this.state
    
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
        <Scroll 
            change={this.changeScreen}
            fortunes={fortunes}
            updateFortune={this.updateFortune}
            deleteFortune={this.deleteFortune}
        />
      </div>
    )
  }
}