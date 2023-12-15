// components/Timer.js
import React, { Component } from 'react';

class Timer extends Component {
    state = { count: 0 };

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
        console.log('Timer mounted');
    }

    componentDidUpdate() {
        console.log('Timer updated');
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log('Timer will unmount');
    }

    tick = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <h2>Timer: {this.state.count} seconds</h2>
                {this.state.count === 5 && (
                    <button onClick={this.props.onCauseError}>Cause Error</button>
                )}
            </div>
        );
    }
}

export default Timer;
