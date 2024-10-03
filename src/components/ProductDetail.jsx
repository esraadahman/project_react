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
            <div className="container" style={{ backgroundColor: "#f8d6e0", minHeight: '100vh', marginTop: 0, padding: '20px', borderColor: 'lightgray' ,width:'50%'}}>
                <h1 className='text-center  mb-4' style={{color:"#d47a87"}}>Product Details</h1>
                <h3 className='text-center' style={{color:"#d47a87",fontSize:18}}>Product Code: {id}</h3><br></br>
                <div className="text-center mb-4">
                    {product.image && (
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            style={{ width: '300px', height: 'auto', borderRadius: '8px' }} 
                        />
                    )}
                </div>
                <div className='lead text-center mt-3' style={{ display: 'flex', alignItems: 'center' ,marginLeft:'200px' ,marginBottom:'10px'}}>
        Proudct Name: 
        <section className='fw-bold' style={{marginLeft:'10px'}}>
              { product.name}
        </section>
    </div>
                 <div className='lead text-center mt-3' style={{ display: 'flex', alignItems: 'center' ,marginLeft:'230px' ,marginBottom:'10px'}}>
        Price: 
        <section style={{ backgroundColor: 'yellow', width: '50px', marginLeft: '5px' }}>
            ${product.price}
        </section>
    </div>
                <p className='lead text-center mt-3'>Product Quantity:  {product?.quantity}</p>
                <div className='text-center mt-3'>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                </div>
                <Link to='/Home'  variant="secondary" className='btn btn-secondary d-block mx-auto mt-4'>Back To Products</Link>
            <br></br>
            <Link   variant="secondary" className='btn btn-secondary d-block mx-auto mt-4'>Order Now</Link>
            </div>
        </div>
    );
}
