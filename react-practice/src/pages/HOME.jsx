import { Helmet } from "react-helmet";
import Hero from "../Component/Hero"
import Ourteam from "../Component/OurTeam";
import Pricing from "../Component/Pricing";
import Testomonial from "../Component/Testomonial";

const HOME = () => {
    return (
        <div>
            <Helmet>
                <title>My React Website</title>
            </Helmet>

            <Hero />
            <Ourteam />
            <Pricing />
            <Testomonial />
        </div>
    );
};

export default HOME;