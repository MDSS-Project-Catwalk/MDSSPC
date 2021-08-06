import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Overview = () => {
  const [productData, setProductData] = useState(null);
  const [productDataStyle, setProductDataStyle] = useState({ product_id: null, results: [] });
  const [selectedStyle, setSelectedStyle] = useState({});
  const { results } = productDataStyle;

  useEffect(() => {
    axios.get('/products/25167')
      .then((response) => {
        setProductData(() => (response.data));
      });

    axios.get(`/products/25167/styles`)
      .then((response) => {
        setSelectedStyle(() => (response.data.results[0]));
        setProductDataStyle(() => (response.data));
      });
  }, []);

  if (productData && productDataStyle && selectedStyle) {
    return (
      <div>
        <section>
          <div className='builder-banner-container'><span className='banner-headline'>Introducing our cleanest denim collection yet.&nbsp; <u>Shop Now</u></span></div>
          <div className='site-header-container'>
            <header className='app-header'>
              <div className='.app-header__far-left'>
                <ul className='menu-left'>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Denim</a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </div>
              <div className='.app-header__middle'>
                {/* <img src='client/dist/Logo.png'/> */}
                <h1 className='logo-text'>FHTZ</h1>
              </div>
              <div className='.app-header__far-right'>
                <ul className='menu-right'>
                  <li><a href="#">Search</a></li>
                  <li><a href="#">Log In</a></li>
                  <li><a href="#">Sign Up</a></li>
                  <li><a href="#"><i className="fas fa-shopping-bag"></i></a></li>
                </ul>
              </div>
            </header>
            <div className='row contents-container'>
            <ul className='breadcrumbs'>
              <li className='breadcrumb'>Home</li>
              <li className='breadcrumb'>Women</li>
              <li className='breadcrumb'>Women's Sale</li>
              <li className='breadcrumb breadcrumb-disabled'>The Off-The-Shoulder-Bodysuit</li>
            </ul>
              <div className='col-xs-12'></div>
                <div className='three-col-container'></div>
                  <div className='row'></div>
                    <div className='col-xs-8 product-gallery'>
                      <div className='product-gallery__thumbs-container'>
                        <div className='product-gallery__thumbs'>
                          <div className='product-gallery__thumb'>
                            <div className='product-gallery__thumb-placeholder'>
                              <img></img>
                            </div>
                          </div>
                          <div className='product-gallery__thumb'>
                            <div className='product-gallery__thumb-placeholder'>
                              <img></img>
                            </div>
                          </div>
                          <div className='product-gallery__thumb'>
                            <div className='product-gallery__thumb-placeholder'>
                              <img></img>
                            </div>
                          </div>
                          <div className='product-gallery__thumb'>
                            <div className='product-gallery__thumb-placeholder'>
                              <img></img>
                            </div>
                          </div>
                          <div className='product-gallery__thumb'>
                            <div className='product-gallery__thumb-placeholder'>
                              <img></img>
                            </div>
                          </div>
                          <div className='product-gallery__thumb'>
                            <div className='product-gallery__thumb-placeholder'>
                              <img></img>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='product-gallery__main-imgs-container'></div>
                        <div>
                          <div className='product-gallery__main-imgs'></div>
                        </div>
                    </div>
                    <div className='col-xs-4 sidebar-container'>
                      <div className="product-details">
                        <div className="product-ratings">
                          <span> 4 Stars</span>
                        </div>
                        <div className="product-category">
                          <span>
                            {productData.category}
                          </span>
                        </div>
                        <div className="product-name">
                          <span>
                            {productData.name}
                          </span>
                        </div>
                        <div className="product-price">
                          <span>
                            $
                            {productData.default_price}
                          </span>
                        </div>
                      </div>
                      <div className="product-styles">
                        <span>
                          <span className="selected-style">Style:</span>
                          {selectedStyle.name}
                        </span>
                        <div className="style-selector">
                          {results.map((style, index) => {
                            const btnImg = style.photos[0].thumbnail_url;
                            return (
                              <button className="styles-btn" type="button" key={index} style={{background: `url(${btnImg}) no-repeat`, backgroundSize: '100%'}}/>
                            );
                          })}
                        </div>
                      </div>
                      <div className="product-choices">
                        <span>test</span>
                      </div>
                      <div className="product-desc">
                        <span>test</span>
                      </div>
                    </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return null;
};


export default Overview;