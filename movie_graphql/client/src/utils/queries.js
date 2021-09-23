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

export const QUERY_SINGLE_SHOW = gql`
  query show($id: ID) {
    tv {
      show(id: $id) {
        backdrop(size: Original)
        credits {
          cast {
            character
          }
        }
        episodeRunTime
        episodes {
          id
          name
        }
        id
        images {
          posters {
            image(size: Original)
          }
        }
        nextEpisodeToAir {
          airDate
          name
        }
        numberOfEpisodes
        numberOfSeasons
        originalName
        overview
        popularityIndex
        recommendations {
          edges {
            node {
              id
              images {
                posters {
                  image(size: Original)
                }
              }
              originalName
            }
          }
        }
      }
    }
  }
`;
