import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} className="pr-3" />
    </div>
  );
};

export default MovieCard;
