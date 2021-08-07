import React, { useState } from 'react';
import styled from 'styled-components';

    const Form = styled.form`
    border-radius: 10px;
    padding-bottom: 30px;
    `;
    const FormTwo = styled.form`
    vertical-align: text-top;
    `;

    const SummaryStyle = styled.textarea`
    width: 250px;
    height: 30px;
    font-size: 15px;
    padding-left: 10px;
    `; 
    const BodyStyle = styled.textarea`
    width: 600px;
    height: 400px;
    font-size: 15px;
    padding-left: 10px;
    padding-top: 5px;
    `; 
const AddReviewContent = () => {
    const [ summary, setSummary ] = useState('');
    const [ body, setBody ] = useState('');

return (
    <div>
        <Form onSubmit={()=> {alert('summary submitted')}}>
            <SummaryStyle type="text" value={summary} onChange={(event)=> {setSummary(event.target.value)}}/>
        </Form >
        <FormTwo >
            <BodyStyle type="text" value={body} onChange={(event)=>{setBody(event.target.value)}}/>
        </FormTwo>
        <button className="rr-submit btn"> Submit Review</button>
    </div>
)
}

export default AddReviewContent;