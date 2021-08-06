import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Recommend = (props) => {
    if (props.recommend != false) {
        return (
            <div><FaCheck /> I recommend this product!
            </div>
        )
    } else {
        return null;
    }
}
          

export default Recommend;