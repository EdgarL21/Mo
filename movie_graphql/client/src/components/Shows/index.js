import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_ALL_SHOWS } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Div } from "./Shows.styles";

const AllShows = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_SHOWS);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;
  const shows = data.tv.popular.edges;

  return (
    <Div>
      {shows.map((show) => (
        <div key={show.node.id} className="container">
          <div>{show.node.originalName}</div>
          <Link to={`/${show.node.id}`}>
            <img
              src={show.node.images.posters[0].image}
              alt={show.node.originalName}
              width="200"
              height="300"
            />
          </Link>
        </div>
      ))}
    </Div>
  );
};

export default AllShows;
