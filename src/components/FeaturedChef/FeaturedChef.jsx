import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos';

const FeaturedChef = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        AOS.init(); // Initialize AOS

        fetch('https://food-fest-server-shafin90.vercel.app/all_info')
            .then(res => res.json())
            .then(data => {
                setData(data);
                AOS.refresh(); // Refresh AOS after data is loaded
            });
    }, []);

    const featuredChef = {
        name: data[0] ? data[0].Chef_Name : 'Chef Name',
        achievements: 'Winner of MasterChef Bangladesh 2022',
        signatureDishes: 'Biryani, Hilsa Fish Curry',
        biography: data[0] ? data[0].Biography : 'Chef biography goes here',
        imageUrl: data[0] ? data[0].Chef_Picture : '', // Replace with the actual image URL
    };

    return (
        <Container className='my-5 py-5'>
            <h2
                className="py-5 fw-bold text-center display-3"
                data-aos="fade-up" // Add the AOS animation attribute here
            >
                Featured Chef of the Month
            </h2>
            <Row>
                <Col md={4}>
                    <Image
                        src={featuredChef.imageUrl}
                        roundedCircle
                        fluid
                        data-aos="fade-right" // Add the AOS animation attribute here
                        data-aos-duration='2500'
                    />
                </Col>
                <Col md={8}>
                    <Card
                        data-aos="fade-left" // Add the AOS animation attribute here
                        data-aos-duration='2500'
                    >
                        <Card.Body>
                            <Card.Title>{featuredChef.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{featuredChef.achievements}</Card.Subtitle>
                            <Card.Text>
                                <strong>Signature Dishes:</strong> {featuredChef.signatureDishes}
                            </Card.Text>
                            <Card.Text>
                                <strong>Biography:</strong> {featuredChef.biography}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FeaturedChef;
