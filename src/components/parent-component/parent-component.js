import React, { Component } from 'react';
import Timer from "../timer";
import './parent-component.css';

class ParentComponent extends Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        console.log('Error caught:', error, info);
        this.setState({ hasError: true });
    }

    causeError = () => {
        throw new Error('User generated error');
    };

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>;
        }

        return (
            <div className="parent-component">
                <h1>Parent Component</h1>
                <Timer onCauseError={this.causeError} />
            </div>
        );
    }
}

export default ParentComponent;
