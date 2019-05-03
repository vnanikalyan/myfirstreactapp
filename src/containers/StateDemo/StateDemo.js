import React, { Component } from 'react';

class demo extends Component{
    state = {
        count:null   ,
        img: []
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
    }
    
    render() {
        return <div>
                    <p>{this.state.count}</p>
                    <button onClick={this.increaseCnt}>Increment</button>
                    <button onClick={this.decreaseCnt}>Decrement</button>
                </div>
    }
}

export default demo