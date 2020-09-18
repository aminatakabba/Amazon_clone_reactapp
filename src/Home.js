import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            {/* Banner section in the landing page */}
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner section"/>
                
                {/* Row section with products */}
                <div className="home__row">
                    <Product 
                        title="The Lean Startup" 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                        rating={5}/>
                    <Product 
                        title="Vacum Cleaner" 
                        price={29.99} 
                        image="https://img.gkbcdn.com/s3/p/2019-12-02/Philips-Bagless-Vacuum-Cleaner-Red-890358-.jpg" 
                        rating={4}/>                    
                </div>

                <div className="home__row">
                    <Product 
                        title="Godmans Wireless Headphones" 
                        price={9.99} 
                        image="https://cdn.bmstores.co.uk/images/hpcProductImage/imgSource/330054-goodmans-headphones-rose-gold.jpg" 
                        rating={3}
                        />
                    <Product 
                        title="Apple Watch Series 5" 
                        price={199.99} 
                        image="https://www.stuff.tv/sites/stuff.tv/files/brands/applewatch-apps.png" 
                        rating={5}
                    />
                    <Product 
                        title="Samsung TV Plus" 
                        price={399.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SX355_.jpg" 
                        rating={5}
                    />
                </div>

                <div className="home__row">
                <Product 
                    title="Why I no longer talk to white people about race" 
                    price={9.99} 
                    image="https://4c448342d6996fb20913-fd1f9dc15ff616aa7fa94219cb721c9c.ssl.cf3.rackcdn.com/17/3d/416522_5f5eb7de6fdd4931ab82c97f41fcd84e.jpg" 
                    rating={5}
                    />               
                </div>
            </div>
        </div>
    )
}

export default Home
