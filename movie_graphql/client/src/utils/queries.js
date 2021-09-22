import { gql } from "@apollo/client";

export const QUERY_ALL_MOVIES = gql`
  query movies {
    movies {
      popular {
        edges {
          node {
            id
            originalTitle
            images {
              posters {
                image(size: Original)
              }
            }
          }
        }
      }
    }
  }
`;

export const QUERY_SINGLE_MOVIE = gql`
  query movie($id: ID) {
    movies {
      movie(id: $id) {
        credits {
          cast {
            character
            value {
              profilePicture(size: Original)
            }
          }
        }
        id
        rating
        originalTitle
        budget
        numberOfRatings
        overview
        releaseDate
        revenue
        runtime
        title
        backdrop(size: Original)
        images {
          posters {
            image(size: Original)
          }
        }
      }
    }
  }
`;

export const QUERY_ALL_SHOWS = gql`
  query {
    tv {
      popular {
        edges {
          node {
            id
            originalName
            images {
              posters {
                image(size: Original)
              }
            }
          }
        }
      }
    }
  }
`;
