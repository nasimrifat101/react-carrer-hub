import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
        <Link to='/'>Go back to home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
