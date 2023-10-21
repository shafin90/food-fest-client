import { Accordion, Container } from "react-bootstrap";


const Questions = () => {
    return (
        <Container>
            <h1 className="fw-bold mb-4  ">Frequently Aseked Questions </h1>
            <Accordion>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the national dish of Bangladesh?</Accordion.Header>
                    <Accordion.Body>
                        The national dish of Bangladesh is hilsa fish bhaja (fried hilsa fish).
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is the most popular Bangladeshi dessert?</Accordion.Header>
                    <Accordion.Body>
                        The most popular Bangladeshi dessert is rasmalai (sweet cheese balls in milk syrup).
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>What are some of the most common spices used in Bangladeshi cuisine?</Accordion.Header>
                    <Accordion.Body>
                        Some of the most common spices used in Bangladeshi cuisine include mustard oil, turmeric powder, cumin seeds, coriander seeds, and chili powder.
                    </Accordion.Body>
                </Accordion.Item>



                <Accordion.Item eventKey="3">
                    <Accordion.Header>What are some of the most popular Bangladeshi street foods?</Accordion.Header>
                    <Accordion.Body>
                    Some of the most popular Bangladeshi street foods include fuchka (fried dough balls filled with a mixture of spices, potatoes, and tamarind sauce), jhal muri (puffed rice mixed with spices, vegetables, and yogurt), and kebabs (grilled meat skewers).
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>
        </Container>
    );
};

export default Questions;