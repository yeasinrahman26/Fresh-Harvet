import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/Logo.jpg";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import ScrollLink from "../Hook/ScrollLink";
import GoogleLogin from "./GoogleLogin";
import AuthContext from "../auth/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleAuthMode = () => setIsRegister(!isRegister);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const { loginUser, createUser, user, logout } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Welcome ${user.displayName || "User"}`,
          showConfirmButton: false,
          timer: 1000,
        });
        toggleModal();
        navigate(from);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: `check Email & password`,
        });
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        user.displayName = name;
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Account created for ${name}`,
          showConfirmButton: false,
          timer: 1000,
        });
        toggleAuthMode(); // Go back to login
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: "one Uppercase, one lowercase, one letter [A,a,1] ",
        });
      });
  };
n
  const links = (
    <>
      <li className="md:mx-4 hover:border-b-3 font-semibold hover:border-[#749b3f]">
        <ScrollLink to={"home"}>Home</ScrollLink>
      </li>
      <li className="md:mx-4 hover:border-b-3 font-semibold hover:border-[#749b3f]">
        <ScrollLink to={"shop"}>Shop</ScrollLink>
      </li>
      <li className="md:mx-4 hover:border-b-3 font-semibold hover:border-[#749b3f]">
        <ScrollLink to={"about"}>About</ScrollLink>
      </li>
      <li className="md:mx-4 hover:border-b-3 font-semibold hover:border-[#749b3f]">
        <ScrollLink to={"blog"}>Blog</ScrollLink>
      </li>
    </>
  );

// modal open
  const signBtn = (
    <>
      {user ? (
        <button
          onClick={logout}
          className="btn bg-[#749b3f] lg:p-5 text-white shadow-none"
        >
          Sing Out
        </button>
      ) : (
        <button
          onClick={toggleModal}
          className="btn bg-[#749b3f] lg:p-5 text-white shadow-none"
        >
          Sign in
        </button>
      )}
    </>
  );

  return (
    <div className="navbar flex-row-reverse md:flex-row bg-transparent">
      <div className="navbar md:navbar-start justify-between">
        <img className="max-w-52" src={logo} alt="Logo" />
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn p-0 btn-ghost md:hidden"
          >
            <button className="flex mr-1 items-center text-white gap-1 justify-center">
              <IoCart className="text-2xl" /> Cart
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu right-1 items-center menu-sm dropdown-content border-1 bg-transparent rounded-box z-1 mt-2 p-2 shadow-xl"
          >
            {links}
            <li>{signBtn}</li>
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="hidden md:navbar-end gap-5">
        <button className="hidden md:flex items-center gap-1 justify-center text-gray-300">
          <FaHeart className="text-xl" /> Favorites
        </button>
        <button className="flex items-center text-gray-300 gap-1 justify-center">
          <IoCart className="text-xl" /> Cart
        </button>
        {signBtn}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 top-100 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white max-w-96 p-8 rounded-lg w-11/12 md:w-1/2 shadow-lg relative">
            <div className="flex flex-row-reverse">
              <button onClick={toggleModal} className="btn border-0">
                X
              </button>
            </div>
            <h2 className="text-4xl font-bold text-center mb-4">
              {isRegister ? "Register" : "Login"}
            </h2>

            <form onSubmit={isRegister ? handleRegister : handleLogin}>
              {isRegister && (
                <>
                  <label className="label font-bold pb-1 text-black">
                    Username
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    className="input input-bordered w-full mb-4"
                    required
                  />
                </>
              )}

              <label className="label font-bold pb-1 text-black">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full mb-4"
                required
              />

              <label className="label font-bold pb-1 text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full mb-4"
                required
              />

              <button
                type="submit"
                className="btn font-bold text-lg py-5 rounded-lg btn-block bg-[#FF6A1A] text-white"
              >
                {isRegister ? "Register" : "Login"}
              </button>
            </form>

            <div className="divider">Or Sign in with</div>
            <div className="flex justify-center gap-5 items-center">
              <GoogleLogin />
              <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                <svg
                  aria-label="Facebook logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                  ></path>
                </svg>
                Facebook
              </button>
            </div>

            <div>
              <h1 className="text-center text-lg mt-5">
                {isRegister
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <span
                  onClick={toggleAuthMode}
                  className="font-extrabold text-xs text-[#FF6A1A] cursor-pointer"
                >
                  {isRegister ? "Login" : "Sign Up"}
                </span>
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
