
import React from 'react';

const Response = (props) => {
    if(props.response != null) {
        return (
            <div style={{backgroundColor: "#b3b3b3", height:"auto"}}>
            <p style={{fontWeight: "bold"}}>Response</p>
            {props.response}
            </div>
        )
    } else {
        return null;
    }
}

export default Response;