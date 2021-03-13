import React, {Component} from 'react';
import ReactPlayer from 'react-player/youtube'

export default class Youtube extends Component{
    render(){
        const { url=null } = this.props
        return(
            <ReactPlayer 
                url={url}
                controls={true}
                loop={true}
            />
        )
    }
}