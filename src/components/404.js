import { Link } from "react-router-dom";

function NotExsist() {
    return(
        <div className="not-exsist">
            <h2>Sorry</h2>
            <p>The page is not exsist</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    )
}

export default NotExsist;
