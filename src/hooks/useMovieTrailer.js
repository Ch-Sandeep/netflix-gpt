import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const fetchMovieVideos = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS,
    );

    const data = await resp.json();

    dispatch(
      addTrailerVideo(
        data?.results?.filter((item) => item?.type === "Trailer")?.[0] ||
          data?.results?.[0],
      ),
    );
  };

  useEffect(() => {
    fetchMovieVideos();
  }, []);
};

export default useMovieTrailer;
