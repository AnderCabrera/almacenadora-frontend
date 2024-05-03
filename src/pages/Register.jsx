import { useState } from "react";
import { register } from "../services/auth.service.js";
import '../output.css';

export const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    lastname: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register({
      username: formData.username,
      password: formData.password,
      name: formData.name,
      lastname: formData.lastname
    })
  }

  return (
    <div className="main m-0 p-0 bg-[#222] flex justify-center">
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <form onSubmit={handleRegister} className="bg-[#555] shadow-lg rounded px-8 pt-6 pb-8 mb-4">
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
              <div className="mb-5">
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
              <div className="mb-2">
                <label
                  className="block text-white text-sm font-bold mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-white text-sm font-bold mb-1"
                  htmlFor="lastname"
                >
                  Lastname
                </label>
                <input
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};
