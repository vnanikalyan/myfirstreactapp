import React, { Component } from 'react';
import Youtube from 'react-youtube';
import axios from 'axios';
import Loader from 'react-loader-spinner'

class demo extends Component{
    state = {
        count:null   ,
        images: null,
        videoID: null
    }

    increaseCnt = x => {
        let cnt = this.state.count;
        cnt++;

        this.setState({
            ...this.state,
            count: cnt,           
        })
    }

    decreaseCnt = y => {
        let cnt = this.state.count;
        cnt--;

        this.setState({
            ...this.state,
            count: cnt,           
        })
    }

    componentDidMount() {
        console.log(this.props.data1);
        let x = this.props.data1;
        this.setState({
            ...this.state,
            count: x.count
        })

        axios.get('https://s3.ap-south-1.amazonaws.com/www.capstonechurch.in/announcements.json')
            .then( (response) => {
                //console.log(response.data.images);                
                let images = response.data.images;
                let liveUrl = response.data.liveurl;                

                images.map(i => {
                    console.log(i.image);
                });

                this.setState({
                    ...this.state,
                    videoID: liveUrl,
                    images: images
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        return <div>
                    <p>{this.state.count}</p>
                    <button onClick={this.increaseCnt}>Increment</button>
                    <button onClick={this.decreaseCnt}>Decrement</button>
                    
                    {this.state.videoID !== null ?
                        <Youtube
                            videoId={this.state.videoID}>
                        </Youtube>
                        :
                        <Loader 
                            type="Circles"
                            color="#00BFFF"
                            height="100"	
                            width="100"
                        />  
                    }                   

                    { this.state.images !== null ?
                        this.state.images.map(i =>{
                            return <img src={i.image} alt="" height="100" width="150"></img>
                        })
                        :
                        <Loader 
                            type="Circles"
                            color="#00BFFF"
                            height="100"	
                            width="100"
                        />                        
                    }
                </div>
    }
}

export default demo