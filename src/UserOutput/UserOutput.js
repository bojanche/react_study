import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is just a test! User: {props.user_name}</p>
            <p>Diese is eine test!</p>
        </div>
    )
};

export default userOutput;