import React, { useState } from 'react';
import styled from 'styled-components';

    const Form = styled.form`
    border-radius: 10px;
    padding-bottom: 30px;
    `;
    const FormTwo = styled.form`
    vertical-align: text-top;
    `;
    const Box = styled.div`
    flex: 1;
    `;
    const BoxTwo = styled.div`
    flex: 3;
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
    const Container = styled.div`
    display: flex;
    `;
    
const AddReviewContent = () => {
    const [ summary, setSummary ] = useState('');
    const [ body, setBody ] = useState('');

return (
    <Container>
        <Box> Title </Box> &nbsp;&nbsp;
        <BoxTwo>
            <Form onSubmit={()=> {alert('summary submitted')}}>
                <SummaryStyle type="text" value={summary} onChange={(event)=> {setSummary(event.target.value)}}/>
            </Form >
        </BoxTwo>&nbsp;&nbsp;
        <Box> Review 
        </Box>  &nbsp;&nbsp;
        <BoxTwo>
            <FormTwo >
                <BodyStyle type="text" value={body} onChange={(event)=>{setBody(event.target.value)}}/>
            </FormTwo>
            <button className="rr-submit btn"> Submit Review</button>
        </BoxTwo>
    </Container>
)
}

export default AddReviewContent;