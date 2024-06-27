import { Helmet } from "react-helmet";
import OurTeam from "../Component/OurTeam";
import Pions from "../Component/Pions";

const OutTeamPage = () => {
    return (
        <div>
            <Helmet>
                <title>Our Team Page</title>
            </Helmet>

            <OurTeam />
            <Pions />
        </div>
    );
};

export default OutTeamPage;