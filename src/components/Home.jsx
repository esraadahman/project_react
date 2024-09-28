import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productsList } from '../ProductsModel/ProductsModel';

export default function Home() {
    return (
        <div className='alert alert-info' style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px', borderColor: 'lightgray', marginLeft: 40, marginRight: 40 }}>
            <div className="text-center mb-4">
                <h1 className="font-weight-bold">OUR PRODUCTS</h1>
            </div>
            <div className="row d-flex justify-content-center" style={{ margin: 10 }}>
                {productsList.map((product) => (
                    <div className="col-md-4 mb-3" key={product.id}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={product.image} alt={product.name} /> 
                            <Card.Body className="text-center">
                                <Card.Title className="font-weight-bold">{product.name}</Card.Title>
                                <Card.Text>
                                    Price: ${product.price}<br />
                                    Quantity: {product.quantity}
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
