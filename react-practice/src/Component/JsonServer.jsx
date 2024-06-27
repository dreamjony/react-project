import { Link } from "react-router-dom";


const JsonServer = ({name, price, id}) => {
    return (
        <div className="p-4 bg-grey-100 rounded-lg shadow-md">            
            <Link to={`/jsonserver/${id}`} className="font-semibold text-lg">{name}</Link>
            <p className="text-sm">Price: {price}</p>
        </div>
    );
};

export default JsonServer;