import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../../../Context/UserContext";

const DetailsPage = () => {
  const shows = useLoaderData();
  const {user} = useContext(AuthContext)
  console.log(shows);

   const handleSubmit = (e) => {
     e.preventDefault();
     swal({
       title: `${shows?.name} Booking Successful!`,
       icon: "success",
       button: "ok",
     });
   };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-full overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={shows?.image?.original}
            />
          </div>

          <div className="bg-slate-800 py-6 rounded-b-md sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
              <div className=" py-6 sm:py-8 lg:py-12">
                <div className="flex flex-col justify-center w-full px-4 md:px-8 mx-auto">
                  <div className="mb-2 md:mb-3">
                    <h2 className="text-gray-100 text-2xl lg:text-3xl">
                      <span> Movie Name:</span> <span>{shows?.name}</span>
                    </h2>
                    <span className="inline-block text-gray-500 mt-0.5">
                      {shows?.language}
                    </span>
                  </div>
                  <div className="flex items-center mb-6 md:mb-10">
                    <div className="flex gap-0.5 -ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <span className="text-gray-500 text-sm ml-2">4.2</span>

                    <a
                      href="#"
                      className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold transition duration-100 ml-4"
                    >
                      view all 47 reviews
                    </a>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-end gap-2">
                      <span className="text-gray-100 text-xl md:text-2xl font-bold">
                        Price: ${shows?.averageRuntime}
                      </span>
                      <span className="text-red-500 line-through mb-0.5">
                        $90.00
                      </span>
                    </div>

                    <span className="text-gray-500 text-sm">
                      incl. VAT plus shipping
                    </span>
                  </div>
                  <div className="flex gap-2.5">
                    <label htmlFor="my-modal-3" className="btn btn-info w-96">
                      Book Now
                    </label>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-2xl text-gray-300 my-3">
                Description
              </p>

              <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                {shows.summary}
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is or otherwise generated. It may be used to
                display a sample of fonts or generate text for testing. Filler
                text is dummy text which has no meaning however looks very
                similar to real text.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className=" text-gray-200 my-2 text-center">
              Movie name: {shows?.name}
            </h3>
            <p className="text-lg text-gray-200 mb-10 text-center">
              Price: ${shows?.averageRuntime}
            </p>

            <form onSubmit={handleSubmit} className="grid gap-3">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                disabled
                placeholder="Name"
                className="input input-bordered w-full "
              />
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                placeholder="Email"
                className="input input-bordered w-full "
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="input input-bordered w-full "
              />

              <input
                className="btn btn-info my-3 w-full"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
