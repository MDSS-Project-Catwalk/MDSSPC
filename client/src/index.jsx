import ProductContext from './productContext.jsx';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import QA from './components/QA/QA';
import OV from './components/OV/OV';
import RelatedItemsComponent from './components/RelatedItems/RelatedItemsComponent';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Reviews from './components/RatingsReviews/ReviewApp.jsx';

  function Global() {
    const randomID = Math.floor(Math.random() * (26178 - 25167) + 25167);
    const [productId, setProductId ] = useState(randomID);
    const [outfitItemId, setOutfitItemId] = useState();

    return (
      <ProductContext.Provider value={{productId, setProductId, outfitItemId, setOutfitItemId}}>
        <RelatedItemsComponent />
        <QA />
        <Reviews />
      </ProductContext.Provider>
    );
  }

  ReactDOM.render(<Global />, document.getElementById('go'));

// ReactDOM.render(<RelatedItemsComponent />, document.getElementById('ri'));
// ReactDOM.render(<ProductContext.Provider value={productID, setProductID}><QA /></ProductContext.Provider>, document.getElementById('qa'));
// ReactDOM.render(<ProductContext.Provider value={productID, setProductID}><Reviews /></ProductContext.Provider>, document.getElementById('re'));




// ReactDOM.render(<OV />, document.getElementById('ov'));

