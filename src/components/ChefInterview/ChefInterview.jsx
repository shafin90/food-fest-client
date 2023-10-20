import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import YouTube from 'react-youtube';

const ChefInterview = () => {
  // Replace the video ID with the actual YouTube video ID
  const videoId = 'Dvf8ikwY3c4';

  return (
    <Container className="my-5 py-5">
      
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className=' text-center display-2  fw-bold  my-5 ' >Exclusive Chef Interview</Card.Title>
              <Card.Text>
                In this exclusive interview, renowned Bangladeshi chef talks about their culinary journey,
                favorite dishes, cooking tips, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <YouTube
            videoId={videoId}
            className=' h-100 '
            opts={{
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ChefInterview;
