import React, { useContext } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../Context/UserContext";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    setError,
    signInUser,
    signInUserWithGoogle,
  } = useContext(AuthContext);


  // 01 Login is user with email and password
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // form.reset();

    signInUser(email, password)
      .then((result) => {
  
        swal({
          title: "Login Successful!",
          icon: "success",
          button: "ok",
        });
        
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        swal({
          title: error,
          icon: "warning",
          button: "ok",
        });
      });

    navigate(from, { replace: true });
  };

  // 02 Login user with google
  const handleLoginWithGoogle = () => {
    signInUserWithGoogle()
      .then((result) => {
        const user = result.user;
        swal({
          title: "Login Successful!",
          icon: "success",
          button: "ok",
        });
        localStorage.setItem("user", user.email)

        setError("");
      })

      .catch((error) => {
        console.log(error);
        setError(error.message);
        swal({
          title: error,
          icon: "warning",
          button: "ok",
        });
      });

    navigate(from, { replace: true });
  };



  return (
    <>
      <section
        style={{
          backgroundImage: `url("https://www1.pictures.zimbio.com/mp/EekVzieOLpmx.jpg")`,
        }}
        className="text-gray-600 body-font relative"
      >
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 bg-slate-800 rounded-xl flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form className="shadow-2xl " onSubmit={handleLoginSubmit}>
              <h2 className="text-slate-500 text-2xl mb-2 font-bold text-center pt-3">
                Welcome Back
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600 text-center"></p>

              <div className="flex justify-center gap-3 pt-5">
                <div>
                  <button       
                    className="btn btn-circle outline-none border-none"
                  >
                    <FaGithub className="w-full h-full "></FaGithub>
                  </button>
                </div>
                <div>
                  <button
                    onClick=""
                    className="btn btn-circle border-slate-300 bg-slate-100 hover:bg-slate-200 hover:border-slate-300"
                  >
                    <FaFacebook className="w-full h-full text-blue-600"></FaFacebook>
                  </button>
                </div>

                <div>
                  <button
                    onClick={handleLoginWithGoogle}
                    className="btn btn-circle border-slate-300 bg-slate-100 hover:bg-slate-200 hover:border-slate-300"
                  >
                    <svg
                      className="w-5 h-5 shrink-0"
                      width="full"
                      height="full"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                        fill="#EA4335"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    type="text"
                    for="email"
                    className="inline-block text-gray-50 text-sm sm:text-base mb-2"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    className="w-full bg-slate-700 text-gray-50 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <div>
                  <label
                    for="password"
                    className="inline-block text-gray-50 text-sm sm:text-base mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full bg-slate-700 text-gray-50 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <button className="btn btn-info w-full">Log in</button>
              </div>

              <div className="flex justify-center items-center bg-gray-100 p-4">
                <p className="text-gray-500 text-sm text-center">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
