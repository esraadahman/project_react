import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

export default function Products(props) {
    const { products, setProducts } = props;

    const deleteProduct = (id) => {
        const newList = products.filter(product => product.id !== id);
        setProducts(newList);
    };

    return (
        <div className='mt-5'>
            <div className="container" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', marginTop: 0, padding: '20px', borderColor: 'lightgray' }}>
                <h1 className='text-muted text-center mb-5'>Our Products</h1>
                <div className="text-center mb-3">
                    <Link to="/products/0/edit" className='btn btn-outline-primary'>Add New Product</Link>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {products && products.map(product => (
                        <Col key={product.id}>
                            <Card>
                                {product.image && <Card.Img variant="top" src={product.image} alt={product.name} />} {/* Image */}
                                <Card.Body className="text-center">
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        Price: ${product.price}<br />
                                        Quantity: {product.quantity}
                                    </Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <Link to={`/products/${product.id}`}>
                                            <i className="mx-2 fs-3 text-warning bi bi-eye-fill"></i>
                                        </Link>
                                        <Link to={`/products/${product.id}/edit`}>
                                            <i className="mx-2 fs-3 text-info bi bi-pencil-square"></i>
                                        </Link>
                                        <i onClick={() => deleteProduct(product.id)} className="mx-2 fs-3 text-danger bi bi-trash-fill"></i>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
