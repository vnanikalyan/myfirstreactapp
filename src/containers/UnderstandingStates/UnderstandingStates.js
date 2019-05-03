import React, { Component } from 'react';

class cal extends Component {
    state = {
        count: 1
    }
     
 increaseCount = x => {
    let t = this.state.count;
    t++;
    this.setState({
        ...this.state,
        count: t
    })
 }

    render() {
        return <div>
                <p>{this.state.count}</p>
                <button onClick={this.increaseCount}>Increment</button>
                </div>
    }
}

export default cal