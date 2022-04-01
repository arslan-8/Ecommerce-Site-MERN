import React, { Fragment, useEffect } from 'react';
// import { CgMouse } from "react-icons/all";
import './Home.css';
import Product from './Product.js';
import MetaData from '../layout/MetaData';
import { getProduct } from '../../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';

const product = {
  name: 'Blue T-shirt',
  images: [{url: 'https://i.ibb.co/DRST11n/1.webp'}],
  price: 'Rs. 3000',
  _id: 'arslan',
};

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  

  return (
    <Fragment>

      <MetaData title='ECOMMERCE' />
        <div className='banner'>
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href='#container'>
                <button>
                    Scroll
                </button>
            </a>
        </div>
        <h2 className='homeheading'>Featured Products</h2>
        <div className='container' id='container'>
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          
        </div>
    </Fragment>
  );
}

export default Home;
