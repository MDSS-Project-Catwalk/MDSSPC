import React from 'react';
import { IoIosStar } from 'react-icons/io';

const TileStar = (props) => {

    return (
        <div>
            {[... Array(5)].map((star, i) => {
                if(i < props.rating) {
                    return (
                    < IoIosStar key={i} color="grey" stroke="grey" strokeWidth="10"/>
                    )
                } else {
                    return (
                    < IoIosStar key={i} color="#d2d2d2" stroke="#d2d2d2" strokeWidth="10"/>
                    )}
            })}
        </div> 
    )
}

export default TileStar;