import React, { useState, useEffect } from 'react';
import OutfitList from './OutfitList.jsx';
import RelatedItemsList from './RelatedItemsList.jsx';

function App() {
  const [relatedProductsID, setRelatedProductsID] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([])
  const [relatedProductsStyles, setRelatedProductsStyles] = useState([])

  function compareProducts(a, b) {
    let productA;
    let productB;
    a.id ? productA = Number(a.id) : productA = Number(a.product_id);
    b.id ? productB = Number(b.id) : productB = Number(b.product_id);

    let comparison = 0;
    if (productA > productB) {
      comparison = 1;
    } else if (productA < productB) {
      comparison = -1;
    }
    return comparison;
  }

  let relatedProductsStylesArr = [];
  let relatedProductsArr = [];

  useEffect(() => {
    fetch('http://localhost:3000/products/25167/related')
      .then(response => response.json())
      .then(data => {
        setRelatedProductsID(data)
        return data
      })
      .then((data) => {
        data.forEach((id) => {
          fetch(`http://localhost:3000/products/${id}`)
            .then(response => response.json())
            .then((data) => {
              relatedProductsArr.push(data);
            })
            .then(() => {
              relatedProductsArr.sort(compareProducts);
              setRelatedProducts(relatedProductsArr);
            })
        })
        return data
      })
      .then((data) => {
        data.forEach((id) => {
          fetch(`http://localhost:3000/products/${id}/styles`)
            .then(response => response.json())
            .then((data) => {
              relatedProductsStylesArr.push(data);
            })
            .then(() => {
              relatedProductsStylesArr.sort(compareProducts);
              setRelatedProductsStyles(relatedProductsStylesArr);
            })
        })
      })
  }, [])
  return (
    <div>
      <RelatedItemsList
        relatedProductsID={relatedProductsID}
        relatedProducts={relatedProducts}
        relatedProductsStyles={relatedProductsStyles}
      />
    </div>
  )
}

export default App;