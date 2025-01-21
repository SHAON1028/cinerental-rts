import { getAllMovies, Movie } from "../data/movies";
import MovieCard from "./MovieCard";

const Movielist = () => {

    const movies = getAllMovies() 
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

        {movies.map((movie:Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

      </div>
    </div>
  );
};

export default Movielist;
