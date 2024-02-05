import { Link } from "react-router-dom";
import "./ErrorPage.css"

export default function ErrorPage() {
  return (
    <div className="not-found-container">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="link--btn error--btn">
        Return to Home
      </Link>
    </div>
  );
}
