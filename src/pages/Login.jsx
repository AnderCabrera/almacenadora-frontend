import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/auth.service.js';
import '../output.css';

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/tasks');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    login({
      username: formData.username,
      password: formData.password,
    }).then((data) => {
      localStorage.setItem('token', data.token);
    })
  }

  return (
    <div className="main m-0 p-0 bg-[#111] flex justify-center">
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <form onSubmit={handleLogin} className="bg-[#222] shadow-lg rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="********"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In
                </button>
                <Link to="/register" className="text-white hover:text-gray-300"><span>Don&apos;t have any account yet?</span></Link>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
