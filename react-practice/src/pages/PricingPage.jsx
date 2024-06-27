import { Helmet } from "react-helmet";
import Pricing from "../Component/Pricing";

const PricingPage = () => {
    return (
        <div>
            <Helmet>
                <title>Pricing Page</title>
            </Helmet>

            <Pricing/>
        </div>
    );
};

export default PricingPage;