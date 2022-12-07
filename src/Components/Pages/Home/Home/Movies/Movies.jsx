import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  const {  show } = movie;

  return (
    <div className="card bg-slate-800 shadow-sm drop-shadow-md border border-slate-600 h-auto">
      <figure>
        <img src={show.image.original} className="h-72 w-full" alt="tv maze" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start gap-2 px-2">
          <div className="flex flex-col">
            <p className="text-xl text-gray-200"> {show.name}</p>

            <small>
              <span className="text-gray-500 capitalize">
                language: {show.language}
              </span>
            </small>
            <span className="text-gray-500 mt-5">Type: {show.type}</span>
            <span className="text-gray-500 mt-2">
              Country:{" "}
              {show?.webChannel?.country?.name
                ? show?.webChannel?.country?.name
                : "N/A"}
            </span>
          </div>
        </div>
        {/* <p className="text-gray-500 my-2">{show.summary.slice(20, 100)}</p> */}

        <div className=" flex justify-between items-center">
          <Link to={`/show-details/${show.id}`}>
            <button className="btn btn-sm btn-dark mt-3"> See details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movies;
