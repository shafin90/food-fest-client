import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const RegionalCuisineSpotlight = () => {
  const regions = [
    {
      name: 'Dhaka',
      description: 'Explore the flavors of Dhaka, the capital city of Bangladesh.',
      dish: 'Dhaka Biryani',
      image: 'http://img.tasteofcity.com/tasteimages/201707/image_original/0A9403642B03B81D_Ashma-Fast-Food-ki-Egg-Biryani.jpg', // Replace with the actual image URL
    },
    {
      name: 'Chittagong',
      description: 'Discover the seafood delicacies of Chittagong.',
      dish: 'Chittagong Fish Curry',
      image: 'https://i.pinimg.com/originals/26/67/88/26678874d93acdd28f3383ccbed2dba9.jpg', // Replace with the actual image URL
    },
    {
      name: 'Sylhet',
      description: 'Savor the unique spices of Sylhet cuisine.',
      dish: 'Sylheti Beef Curry',
      image: 'https://k4r2a7m8.rocketcdn.me/wp-content/uploads/2020/04/sylheti-beef.jpg', // Replace with the actual image URL
    },
  ];

  return (
    <Container className="my-5 py-5">
      <h2 className="py-5 fw-bold text-center display-3">Regional Cuisine Spotlight</h2>
      <Row>
        {regions.map((region, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={region.image} className=' img-fluid ' style={{height:'20vw'}} />
              <Card.Body>
                <Card.Title>{region.name}</Card.Title>
                <Card.Text>{region.description}</Card.Text>
                <Card.Text>
                  <strong>Signature Dish:</strong> {region.dish}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RegionalCuisineSpotlight;
