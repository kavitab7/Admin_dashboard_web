import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
            <button className="not-found-button" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
};

export default PageNotFound;
