import React, { Component } from 'react';
import './parent-component.css';
import withTutorProfile from '../hoc-tutor-profile';

class ParentComponent extends Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        console.log('Error caught:', error, info);
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        const { tutors } = this.props;

        if (hasError) {
            return <h1 style={{ marginBottom: '100px', color: 'red' }}>Something went wrong!</h1>;
        }

        if (!tutors || tutors.length === 0) {
            return <p>No tutors available.</p>;
        }

        return (
            <div style={{ marginBottom: '100px' }} className="parent-component container mt-5">
                {tutors.map(tutor => (
                    <withTutorProfile key={tutor.id} tutor={tutor} />
                ))}
            </div>
        );
    }
}


export default ParentComponent;

