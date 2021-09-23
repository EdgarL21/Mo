import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { QUERY_SINGLE_MOVIE } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Div } from "./OneMovie.styles";

const OneMovie = () => {
  // grabs the parameter that comes with this route
  // How did we get a parameter
  // we set the
  const { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_SINGLE_MOVIE, {
    variables: { id: id },
  });
  console.log("here");

  console.log(data);
  console.log("id");
  console.log(id);
  // console.log(movieId);
  console.log("id");
  // const movie = data?.movie || {};
  // const OneMovie = data.movies;

  if (loading) return <Spinner animation="border" variant="danger" />;

  if (error) return `Error! ${error.message}`;
  const movie = data.movies.movie;

  // console.log("here1");
  // if (movie) console.log(movie);
  // console.log("here");
  return (
    <Div>
      <img
        className="backdrop"
        src={movie.backdrop}
        alt={movie.originalTitle}
      />
      <div className="container">
        <Row>
          <Col xs={12} lg={4}>
            <img
              src={movie.images.posters[0].image}
              alt={movie.originalTitle}
              width="300"
              height="400"
            />
          </Col>
          <Col xs={12} lg={4}>
            <div>Title: {movie.originalTitle}</div>
            <div>Runtime: {movie.runtime} min.</div>
            <div>Rating: {movie.rating}/10.0</div>
            <div>Number of Ratings: {movie.numberOfRatings}</div>
            <div>Budget: ${movie.budget}</div>
            <div>Revenue: ${movie.revenue}</div>
            <div>Release Date: {movie.releaseDate}</div>
            {/* <div>{movie.title}</div> */}
          </Col>

          {/* <Col xs={12} lg={3}>
          </Col> */}
          <Col xs={12} lg={4}>
            <div>{movie.overview}</div>
          </Col>
        </Row>
      </div>
      <div className="container">
        <div>
          {movie.recommendations.edges.map((recommendation) => (
            <div key={recommendation.node.id}>
              <div>{recommendation.node.originalTitle}</div>
              <Link to={`/movie/${recommendation.node.id}`}>
                <img
                  src={recommendation.node.poster}
                  alt={recommendation.node.originalTitle}
                  width="200"
                  height="300"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Div>
  );
};

export default OneMovie;
