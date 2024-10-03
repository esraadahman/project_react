import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductForm({ products, setProducts }) {
    let navigate = useNavigate();
    let { id } = useParams();

    let [productForm, setProductForm] = useState({
        name: '',
        price: '',
        quantity: '',
        image: null 
    });

    let getInputValue = (e) => {
        setProductForm({
            ...productForm,
            [e.target.name]: e.target.value
        });
    };

    let handleImageChange = (e) => {
        setProductForm({
            ...productForm,
            image: e.target.files[0] 
        });
    };

    useEffect(() => {
        if (id !== '0') {
            const existingProduct = products.find(product => product.id == id);
            if (existingProduct) {
                setProductForm(existingProduct);
            }
        }
    }, [id, products]);

    let productHandler = (e) => {
        e.preventDefault();
        const { name, price, quantity, image } = productForm;

        if (id === '0') {
            let productId = products.length + 1;
            const newProduct = {
                id: productId,
                name,
                price,
                quantity,
                image: URL.createObjectURL(image)
            };
            setProducts([...products, newProduct]);
        } else {
            let productIndex = products.findIndex(product => product.id == id);
            const updatedProduct = {
                ...productForm,
                image: URL.createObjectURL(image) 
            };
            products[productIndex] = updatedProduct;
            setProducts(products);
        }
        navigate('/products');
    };

    return (
        <div className='mt-5' style={{width: '500px', marginLeft:'450px',}}>
            <div className="container" style={{ backgroundColor: "#f8d6e0",}}>
                <h1 className='text-center ' style={{color:"#d47a87"}}>{id === '0' ? 'Add New Product' : 'Edit Product'}</h1>
                <Form onSubmit={productHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label className=" w-100 fw-bold" style={{color:"#d47a87"}}>Product Name</Form.Label>
                        <Form.Control
                            onChange={getInputValue}
                            value={productForm.name}
                            type="text"
                            placeholder="Enter Product Name"
                            name='name'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className=" w-100 fw-bold" style={{color:"#d47a87"}}>Product Price</Form.Label>
                        <Form.Control
                            value={productForm.price}
                            onChange={getInputValue}
                            type="number"
                            placeholder="Enter Product Price"
                            name='price'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className=" w-100 fw-bold" style={{color:"#d47a87"}}>Product Quantity</Form.Label>
                        <Form.Control
                            value={productForm.quantity}
                            onChange={getInputValue}
                            type="number"
                            placeholder="Enter Product Quantity"
                            name='quantity'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="w-100 fw-bold" style={{color:"#d47a87"}}>Product Image</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            name='image'
                           
                        />
                           
                     
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="secondary" type="submit" >
                            {id === '0' ? 'Add New Product' : 'Edit Product'}
                        </Button>
                    </div>
                </Form>
               
            </div><br></br><br></br><br></br>
        </div>
    );
}
