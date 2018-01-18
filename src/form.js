import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Form extends Component {
    render() {
        return (
            <div className="form">
                <div className="top">
                    <h3>Add Message</h3>
                    <Link to="/">Back</Link>
                </div>

            </div>
        );
    }
}

export default Form;