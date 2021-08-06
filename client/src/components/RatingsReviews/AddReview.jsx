import React, { useContext } from 'react';
import ReviewListContext from './context.jsx';
import ReactDom from 'react-dom';

const AddReview = () => {
    const modal = useContext(ReviewListContext);
    const modal_style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '0px',
        zIndex: 1000
      }
      const background = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 100
      }
      const x = {
          top: '100%',
          left: '0%',
          backgroundColor: "#f1f1f1"
      }
    return ReactDom.createPortal(
        <div style={background}>
            <div style={modal_style}>
                <button style={x} onClick={()=> {modal.setModal(!modal.showModal)}}>X</button>
                <h1 style={{paddingRight: '20px', paddingLeft: '20px'}}>Write Your Review</h1>
                <p style={{paddingRight: '20px', paddingLeft: '20px'}}>about the product </p>
            </div>
        </div>, document.getElementById('portal')
    )
}

export default AddReview;