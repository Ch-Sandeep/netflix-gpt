import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //custom hook which has business logic to fetch movies
  useNowPlayingMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //component should just have JSX logic
  return (
    <div className="overflow-hidden text-clip">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        // Wrapping inside react fragment(<></>) cause jsx expects only one element
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
