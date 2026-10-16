import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex">
          {movies?.map((mov) => (
            <MovieCard key={mov?.id} posterPath={mov?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
