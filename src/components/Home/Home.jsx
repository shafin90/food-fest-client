import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import CardContainer from "../CardContainer/CardContainer";
import BangladeshiFoodItem from "../BangladeshiFoodItem/BangladeshiFoodItem"
import BanglaFood from "../BanglaFood/BanglaFood";
import Opinion from "../Opinion/Opinion";
import FeaturedChef from "../FeaturedChef/FeaturedChef";
import ChefInterview from "../ChefInterview/ChefInterview";
import RegionalCuisineSpotlight from "../RegionalCuisineSpotlight/RegionalCuisineSpotlight";
import Ingredient from "../Ingedient/Ingredient";
import Timer from "../Timer/Timer";
import Questions from "../Questions/Questions";


const Home = () => {
    return (
        <Container fluid>
            <Banner></Banner>
            <CardContainer></CardContainer>
            <BangladeshiFoodItem></BangladeshiFoodItem>
            <FeaturedChef></FeaturedChef>
            <ChefInterview></ChefInterview>
            <BanglaFood></BanglaFood>
            <Ingredient></Ingredient>
            <RegionalCuisineSpotlight></RegionalCuisineSpotlight>
            <Timer></Timer>
            <Questions></Questions>
            <Opinion></Opinion>
        </Container>
    );
};

export default Home;