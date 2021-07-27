import React from 'react';

class Overview extends React.Component {
  render() {
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
                  <li><a href="#"><i class="fas fa-shopping-bag"></i></a></li>
                </ul>
              </div>
            </header>
            <ul className='breadcrumbs'>
              <li className='breadcrumb'>Home</li>
              <li className='breadcrumb'>Women</li>
              <li className='breadcrumb'>Women's Sale</li>
              <li className='breadcrumb breadcrumb-disabled'>The Off-The-Shoulder-Bodysuit</li>
            </ul>
            <div className='row contents-container'>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Overview;
