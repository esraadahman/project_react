import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Products(props) {
    const { products, setProducts } = props;

    const deleteProduct = (id) => {
        const newList = products.filter(product => product.id !== id);
        setProducts(newList);
    };

    return (
        <div  style={{ backgroundColor: 'white', minHeight: '100vh', padding: '0', border: 'none' ,width:'98%',margin:'auto'}}>
            <h1 className=' text-center mb-5 mt-2' style={{color:"#d47a87"}}>Our Products</h1>
            <div className="text-end mb-3" style={{ position: 'relative' }}>
                <Link to="/products/0/edit" className='btn btn-outline' style={{ 
                     backgroundColor: "#f8d6e0",
                     color:'white',
                     marginRight:'20px'
                }}>
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
            </div>
            <Row xs={1} md={3} className="g-4" >
                {products && products.map(product => (
                    <Col key={product.id} >
                        <Card style={{ backgroundColor: 'white', border:"1px lightgray solid" ,height:'460px'}}>
                            {product.image && <Card.Img variant="top" src={product.image} alt={product.name} />}
                            <Card.Body className="text-center">
                                <Card.Title>{product.name}</Card.Title>
                                <div style={{ display: 'flex', alignItems: 'center' ,marginLeft:'140px' ,marginBottom:'10px'}}>
        Price: 
        <section style={{ backgroundColor: 'yellow', width: '50px', marginLeft: '5px' }}>
            ${product.price}
        </section>
    </div>
    <div>
        Quantity: {product.quantity}
    </div><br></br>
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
            </Row><br></br>
        </div>
    );
}
