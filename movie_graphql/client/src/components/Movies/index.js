import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_ALL_MOVIES } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Div } from "./Movies.styles";
// import "./Movies.css";

// component to get all the movies
const AllMovies = () => {
  // call the query in the query QUERY_ALL_MOVIES to get all the popular movies based on this api
  const { loading, error, data } = useQuery(QUERY_ALL_MOVIES);

  if (loading)
    return <Spinner className="loading" animation="border" variant="danger" />;
  if (error) return `Error! ${error}`;
  //   if (data) console.log(data.movies.popular.edges);

  const movies = data.movies.popular.edges;
  //   console.log(movies.node.images.poster);
  return (
    <Div>
      Popular Movies
      <Container>
        <Row>
          {movies.map((movie) => (
            <Col xs={6} lg={3} key={movie.node.id}>
              <div className="container">
                <div className="title">{movie.node.originalTitle}</div>
                <Link to={`/movie/${movie.node.id}`}>
                  <img
                    src={movie.node.images.posters[0].image}
                    alt={movie.node.originalTitle}
                    className="img"
                    width="200"
                    height="300"
                  />
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Div> // top div
  );
};

export default AllMovies;
