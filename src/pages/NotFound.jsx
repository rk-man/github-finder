import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold mb-8">
                        Oops....Something went wrong
                    </h1>
                    <p className="text-4xl mb-8">404-Not found</p>
                    <Link to="/" className="btn btn-primarybtn btn-md">
                        <FaHome className="mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
