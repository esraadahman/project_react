import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails({ products, setProducts }) {
    let { id } = useParams();
    let [product, setProduct] = useState({});

    useEffect(() => {
        const foundProduct = products.find(product => product.id == id);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id, products]);

    return (
        <div className='p-5'>
            <div className="container" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', marginTop: 0, padding: '20px', borderColor: 'lightgray' }}>
                <h1 className='text-center text-warning mb-4'>Product Details</h1>
                <h3 className='text-center'>Product Code: {id}</h3>
                <div className="text-center mb-4">
                    {product.image && (
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            style={{ width: '300px', height: 'auto', borderRadius: '8px' }} 
                        />
                    )}
                </div>
                <p className='lead text-center mt-3'>Product Name:  {product?.name}</p>
                <p className='lead text-center mt-3'>Product Price:  ${product?.price}</p>
                <p className='lead text-center mt-3'>Product Quantity:  {product?.quantity}</p>
                <div className='text-center mt-3'>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                </div>
                <Link to='/products' className='btn btn-secondary d-block mx-auto mt-4'>Back To Products</Link>
            </div>
        </div>
    );
}
