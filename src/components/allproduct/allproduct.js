import React, { useEffect, useState } from 'react';
import SingelProduct from '../SingelProduct/SingelProduct';
import './allproduct.css'
const Allproduct = (props) => {
    // console.log(props.cartAdd)
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='all-product'>
            <h1>All Products</h1>
            <div className="row">
                {
                    products.map(product => <SingelProduct cartAdd={props.cartAdd} product={product}></SingelProduct>)
                }
            </div>

        </div>
    );
};

export default Allproduct;