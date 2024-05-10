import { Link } from 'react-router-dom';
import { logout } from '../services/auth.service';

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg mb-6">
      <div className="container mx-auto px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="text-xl text-white font-bold md:text-2xl">
              <Link to="/">Almacenadora</Link>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to="/login"
                className="my-1 text-sm text-white hover:text-gray-300"
                onClick={logout}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
