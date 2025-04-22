import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  console.log("Unmatched path:", location.pathname); // Debugging

  return (
    <div className="text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
}
