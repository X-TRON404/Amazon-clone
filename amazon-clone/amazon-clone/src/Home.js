import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/ServiceMktg/1500x600_Hero-Tall_np._CB403152874_.jpg" alt=""/>
        

            
            <div className="home_row">
                <Product
                    id="12345"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    price={1111.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY436_FMwebp_QL65_.jpg"
                />
                <Product
                    id="12323423445"
                    title="Titan Watch"
                    price={5000.6}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51vWX+bWnKL.__AC_SY400_.jpg"
                />
            </div>
                        
            <div className="home_row">
                <Product
                    id="12345"
                    title="Noise Earphones"
                    price={1799.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/31+8UNLZr9L.__AC_SY400_.jpg"
                />
                <Product
                    id="12345"
                    title="Alpino Natural Peanut Butter Crunch 1 KG (Unsweetened / Gluten Free / Non-GMO / Vegan)"
                    price={390.00 }
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71n6gXQn79L._AC_SY400_.jpg"
                />
                <Product
                    id="12345"
                    title="Prestige 1.5 Litre Kettle 1500-watts, Red"
                    price={775.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51zGuMpVccL._SX679_.jpg"
                />
            </div>
                        
            <div className="home_row">
                <Product
                    id="12345"
                    title="Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={19990.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71NMCqCxj-L._SY879_.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home
