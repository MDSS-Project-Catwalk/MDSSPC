import React, { useState, useEffect } from 'react';
import OutfitList from './OutfitList.jsx';
import RelatedItemsList from './RelatedItemsList.jsx';

function App() {
  const [relatedProducts, setRelatedProducts] = useState([]);

  function compareProducts(a, b) {

    let comparison = 0;
    if (a.id > b.id) {
      comparison = 1;
    } else if (a.id < b.id) {
      comparison = -1;
    }
    return comparison;
  }

  let relatedProductsArr = [];
  let randomID = Math.floor(Math.random() * 10000);

  useEffect(() => {

    //Retrieve information based on one product:
    fetch(`http://localhost:3000/products/25167/related`)
      .then(response => response.json())
      .then(data => { return data })
      //Retrieve related product information of product:
      .then((data) => {
        data.forEach((id) => {
          Promise.all([
            fetch(`http://localhost:3000/products/${id}`),
            fetch(`http://localhost:3000/products/${id}/styles`),
            fetch(`http://localhost:3000/reviews/meta?product_id=${id}`)
          ]).then((responses) => {
            return Promise.all(responses.map((response) => {
              return response.json();
            }));
          }).then((data) => {
            let ratings = data[2].ratings;
            let ratingsAverage;
            let ratingsTotal = 0;
            let numberOfReviews = 0;
            let ratingsAverageArr = [];

            for (const [key, value] of Object.entries(ratings)) {
              numberOfReviews += Number(value);
              ratingsTotal += (Number(key) * Number(value));
            }

            ratingsAverage = ((ratingsTotal / numberOfReviews) / 5) * 100;
            ratingsAverage = `${ratingsAverage.toFixed()}%`;

            relatedProductsArr.push({...data[0], ... data[1], ratingsAverage});
            relatedProductsArr.push({...data[0], ... data[1], ratingsAverage});
            relatedProductsArr.sort(compareProducts);
          }).then(() => {
            setRelatedProducts([...relatedProductsArr]);
          })
        })
      })
  }, [])
  return (
    <div>
      <RelatedItemsList
        relatedProducts={relatedProducts}
      />
      <OutfitList />
    </div>
  )
}

export default App;