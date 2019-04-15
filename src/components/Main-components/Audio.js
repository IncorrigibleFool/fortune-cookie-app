import React, {Component} from 'react'

export default class Audio extends Component{
    render(){
        return (
          <div>
            <audio ref="audio_tag" src="http://66.90.93.122/ost/eternal-arcadia-original-soundtrack/tofkmubf/2-10%20-%20yafutoma%20dawn.mp3" loop autoPlay/>
          </div>
        )
    }
}
      
