import React, { useContext } from 'react';
import ReviewListContext from './context.jsx';
import { FaStar } from 'react-icons/fa'

const TileStar = (props) => {
    const reviewList = useContext(ReviewListContext);

    return (
        <div>
            {[... Array(5)].map((star, i) => {
                
                if(i < props.rating) {
                    return (
                    < FaStar key={i} color="black" stroke="black" strokeWidth="10"/>
                    )
                } else {
                    return (
                    < FaStar key={i} color="white" stroke="black" strokeWidth="10"/>
                    )}
            })}
        </div> 
    )
}

export default TileStar;