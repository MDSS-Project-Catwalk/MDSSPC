import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Recommend = (props) => {
    if (props.recommend != false) {
        return (
            <div style={{color: "#4c4c4b"}}><FaCheck /> &nbsp; I recommend this product!
            </div>
        )
    } else {
        return null;
    }
}
          

export default Recommend;