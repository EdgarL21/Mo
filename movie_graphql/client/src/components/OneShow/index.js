import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { QUERY_SINGLE_SHOW } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Div } from "./OneShow.styles";

const OneShow = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_SINGLE_SHOW, {
    variables: { id: id },
  });
  console.log("here");

  // console.log(data.tv.show);
  // console.log("id1");
  // console.log(id);
  // // console.log(movieId);
  // console.log("id1");

  // console.log("here1");

  if (loading) return <Spinner animation="border" variant="danger" />;
  if (error) return `Error! ${error.message}`;

  const show = data.tv.show;
  console.log(show);
  return (
    <Div>
      {" "}
      <img className="backdrop" src={show.backdrop} alt={show.originalName} />
      <div className="grid-container">
        <img
          className="poster"
          src={show.images.posters[0].image}
          alt={show.originalTitle}
          width="300"
          height="400"
        />
        <div className="sec1">
          <span>Title: {show.originalName}</span>
        </div>
        <div className="sec2">
          Recommended Shows:
          <span>
            {show.recommendations.edges.map((recommendation) => (
              <div key={recommendation.node.id}>
                <div>
                  <div>{recommendation.node.originalName}</div>
                  <Link to={`/show/${recommendation.node.id}`}>
                    <img
                      src={recommendation.node.images.posters[0].image}
                      alt={recommendation.node.originalName}
                      width="200"
                      height="300"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </span>
        </div>
        <div className="sec3">
          <span> Episode Run Time: {show.episodeRunTime}</span> <br />
          <span>Number of Episodes: {show.numberOfEpisodes}</span>
          {show.episodes.map((episode) => (
            <div key={episode.id}>{episode.name}</div>
          ))}
        </div>
        <div className="overview">{show.overview}</div>
      </div>
    </Div>
  );
};

export default OneShow;
