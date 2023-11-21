import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  const genericPoster = `${process.env.PUBLIC_URL}/assets/noImage.jpg`;

  function RenderPoster() {
    if (movie.poster_path === null) {
      return (
        <img
          src={genericPoster}
          className="card-img-top my-5 py-2 mh-100"
          alt={movie.original_title}
        />
      );
    } else {
      return (
        <img
          src={posterUrl}
          className="card-img-top mh-100"
          alt={movie.original_title}
        />
      );
    }
  }

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card" style={{}}>
        {/* <img src={posterUrl} className="card-img-top" alt={movie.original_title} /> */}
        <RenderPoster />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  const RenderSearchResults = () => {
    let noResults = `${process.env.PUBLIC_URL}/assets/NoResults.png`;
    if (searchResults.length > 0) {
      return (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h3 className="text-center mt-5">Opps, looks like nothings there</h3>
          <img
            src={noResults}
            className="w-50 img-fluid rounded mx-auto d-block mt-5"
            alt="..."
          />
        </div>
      );
    }
  };

  return (
    <div>
      <Hero text={title} />

      {/* <MovieCard /> */}
      <RenderSearchResults />
    </div>
  );
};

export default Search;
