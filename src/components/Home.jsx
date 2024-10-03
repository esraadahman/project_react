import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productsList } from '../ProductsModel/ProductsModel';
import Slider_Home from './Slider_Home';
import { useNavigate } from 'react-router-dom';
export default function Home(props) {
    const navigate = useNavigate(); // Initialize navigate
    const { products, setProducts } = props;

    const handleViewDetails = (productId) => {
        navigate(`/products/${productId}`); // Navigate to the product details page
    };


    return (
        <div className='alert alert-info' style={{ backgroundColor: 'white', minHeight: '100vh', padding: '20px', borderColor: 'lightgray' }}>
            <div className="text-center mb-4">
                <Slider_Home /><br />
                <div style={{ backgroundColor: 'lightpink', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
                    <h1 className="font-weight-bold" style={{color:"#d47a87"}}>OUR PRODUCTS</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center" style={{ margin: 10 }}>
                {products && products.map(product =>(
                    <div className="col-md-4 mb-3" key={product.id}>
                        <Card style={{ width: '100%',height:'460px' }}>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body className="text-center">
                            <Card.Title className="font-weight-bold">{product.name}</Card.Title>
              <Card.Text style={{ padding: '5px', borderRadius: '5px' }}>
             <div style={{ display: 'flex', alignItems: 'center' ,marginLeft:'140px' ,marginBottom:'10px'}}>
        Price: 
        <section style={{ backgroundColor: 'yellow', width: '50px', marginLeft: '5px' }}>
            ${product.price}
        </section>
    </div>
    <div>
        Quantity: {product.quantity}
    </div>
</Card.Text>
                        

                                <Button 
                                    variant="pink" 
                                    onClick={() => handleViewDetails(product.id)}
                                    style={{ 
                                        width: '50%', 
                                        backgroundColor: 'pink', 
                                        border: 'none', 
                                        margin: '0 auto', 
                                        display: 'block', 
                                        color:'white'
                                    }}
                                >
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
