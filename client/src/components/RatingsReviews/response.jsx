
import React from 'react';

const Response = (props) => {
    if(props.response != null) {
        return (
            <div style={{backgroundColor: "#dbdbdb", height:"auto", width: "1100", paddingLeft: "10px", paddingBottom: "20px", paddingTop: "2px"  }}>
            <p style={{fontWeight: "bold"}}>Response</p>
            {props.response}
            </div>
        )
    } else {
        return null;
    }
}

export default Response;