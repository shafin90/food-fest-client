import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Card, ListGroup } from 'react-bootstrap';

const Ingredient = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [selectedFood, setSelectedFood] = useState('');
    const [selectedFoodIngredients, setSelectedFoodIngredients] = useState([]);

    useEffect(() => {
        fetch('../../../public/foodItem.json')
            .then((res) => res.json())
            .then((data) => setFoodItems(data.BangladeshiFoods))
            .catch((error) => {
                console.error('Error fetching data:', error);
            });



    }, []);
    console.log(foodItems)
    const handleFoodChange = (event) => {
        setSelectedFood(event.target.value);
        const selectedItem = foodItems.find((item) => item.FoodItem === event.target.value);
        setSelectedFoodIngredients(selectedItem ? selectedItem.Ingredients : []);
    };

    return (

        <Container className=' my-5 ' style={{height:"40vw"}}>
            <h1 className='text-center  fw-bold  display-4 pb-5 '> Necessary Ingredients for particular dish </h1>
            <Row>
                <Col md={6}>
                    <h2 >Select a Food Item</h2>
                    <Form.Group>
                        <Form.Control as="select" onChange={handleFoodChange}>
                            <option value="">Select Food Item</option>
                            {foodItems.map((food, index) => (
                                <option key={index} value={food.FoodItem}>
                                    {food.FoodItem}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    {selectedFood && foodItems.length > 0 && (
                        <Card>
                            <Card.Header>Ingredients for {selectedFood}</Card.Header>
                            <Card.Body>
                                <ListGroup>
                                    {selectedFoodIngredients.map((ingredient, index) => (
                                        <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Ingredient;
