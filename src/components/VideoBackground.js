import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(id);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen h-[50%] aspect-video overflow-hidden"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowFullScreen
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
