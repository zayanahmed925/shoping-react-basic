import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingelProduct.css'
const SingelProduct = (props) => {
    // console.log(props.product)
    const { title, image } = props.product;
    return (
        <div className="col-md-4">
            <div className="card p-3 border">
                <img className='w-50 mx-auto' src={image} alt="" />
                <h1>{title.slice(0, 10)}</h1>
                <div className="d-flex justify-content-center">
                    <button onClick={props.cartAdd} className=' btn btn-primary me-2'>Add to chart</button>
                    <button className=' btn btn-danger me-2'>Delete</button>
                    {/* <button className=' btn btn-info me-2'>Details</button> */}
                    <ReactModal productDitails={props.product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingelProduct;