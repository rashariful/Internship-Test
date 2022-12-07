import React from "react";
import Movies from "./Movies/Movies";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
  const { data: movies = [] } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=all/`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {movies?.map((movie, i) => (
          <Movies key={i} movie={movie}></Movies>
        ))}
      </section>
    </div>
  );
};

export default Home;
