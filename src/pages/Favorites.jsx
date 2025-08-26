import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom"; // Added for navigation link
import { FaHeart } from "react-icons/fa"; // Added for icon in empty state

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <FaHeart className="empty-icon" />
          <h2>No Favorite Movies Yet</h2>
          <p>
            Start adding movies to your favorites and they will appear here!{" "}
            <Link to="/" className="explore-link">
              Explore Movies
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorites;