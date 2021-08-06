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
  let randomID = Math.floor(Math.random() * (26178 - 25167) + 25167);

  useEffect(() => {

    //Retrieve information based on one product:
    fetch(`/products/${randomID}/related`)
      .then(response => response.json())
      .then(data => { return data })
      //Retrieve related product information of product:
      .then((data) => {
        data.forEach((id) => {
          Promise.all([
            fetch(`/products/${id}`),
            fetch(`/products/${id}/styles`),
            fetch(`/reviews/meta?product_id=${id}`)
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
            // relatedProductsArr.push({...data[0], ... data[1], ratingsAverage});
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
      <OutfitList
        possibleOutfitOptions={relatedProducts}
      />
    </div>
  )
}

export default App;