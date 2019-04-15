import React, {Component} from 'react'
import './Scroll.css'

import VanillaWisdom from './Scroll-components/VanillaWisdom'
import SearchedWisdom from './Scroll-components/SearchedWisdom'
import Wisdom from './Scroll-components/Wisdom'
import axios from 'axios';

//secondary main page, shows a scroll with fortunes given
export default class Scroll extends Component{
    constructor(){
        super()

        this.state ={
           edit : false,
           search: false,
           searchTerm: '',
           searchArray: []
        }
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    toggleSearch = () => {
        this.setState({
            search: !this.state.search,
            searchTerm: '',
            searchArray: []
        })
    }

    handleSearch =(event) => {
        let {value} = event.target

        this.setState({
            searchTerm: value
        })

        axios.get(`/api/fortunes?search=${this.state.searchTerm}`).then(res => {
            this.setState({
                searchArray: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        let {fortunes} = this.props
        let {searchArray} = this.state
        if(this.state.edit === true){
            //render state of scroll while being edited
            return(
                <div className='background'>
                    <header>
                        <h1>The Master's Scroll of Wisdom</h1>
                    </header>
                    <div className='scroll'>
                        <div className='content'>   
                            {fortunes.map(fortune => {
                                return <Wisdom 
                                    key={fortune.id} 
                                    fortune={fortune} 
                                    updateFortune={this.props.updateFortune}
                                    deleteFortune={this.props.deleteFortune}
                                    />
                                }
                            )}
                        </div>
                    </div>
                    <div>
                        <button className='button' onClick={this.toggleEdit}>Finish Edits</button>
                    </div>
                </div>
            )
        //render state if searching with no input
        }else if(this.state.search === true && this.state.searchTerm === ''){
            return(
                <div className='background'>
                    <header>
                        <h1>The Master's Scroll of Wisdom</h1>
                    </header>
                    <div className='scroll'>
                        <div className='content'>   
                            {fortunes.map(fortune => {
                                return <VanillaWisdom 
                                    key={fortune.id} 
                                    fortune={fortune} 
                                    />
                                }
                            )}
                        </div>
                    </div>
                    <footer>
                        <input id='search-bar' onChange ={this.handleSearch} placeholder='Search words or terms here'/>
                        <button id='search-button' className='button' onClick={this.toggleSearch}>Finish Searching</button>
                    </footer>
                </div>
            )
        }else if(this.state.search === true && this.state.searchTerm !== ''){
            return(
                <div className='background'>
                    <header>
                        <h1>The Master's Scroll of Wisdom</h1>
                    </header>
                    <div className='scroll'>
                        <div className='content'>   
                            {searchArray.map(fortune => {
                                return <SearchedWisdom 
                                key={fortune.id} 
                                fortune={fortune} 
                                />
                                }
                            )}
                        </div>
                    </div>
                    <footer>
                        <input id='search-bar' onChange ={this.handleSearch} placeholder='Search words or terms here'/>
                        <button id='search-button' className='button' onClick={this.toggleSearch}>Finish Searching</button>
                    </footer>
                </div>
            )
        
        }else{
            //default state of scroll
            return(
                <div className='background'>
                    <header>
                        <h1>The Master's Scroll of Wisdom</h1>
                    </header>
                    <div className='scroll'>
                        <div className='content'>   
                            {fortunes.map(fortune => {
                                return <VanillaWisdom 
                                    key={fortune.id} 
                                    fortune={fortune} 
                                    />
                                }
                            )}
                        </div>
                    </div>
                    <div>
                        <button className='button' onClick={this.toggleSearch}>Search Scroll</button>
                        <button className='button' onClick={this.props.change}>Return to the Master</button>
                        <button className='button' onClick={this.toggleEdit}>Amend Scroll</button>
                    </div>
                </div>
            )
        }
    }
}