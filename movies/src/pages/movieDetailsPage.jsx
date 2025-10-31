import React from "react";
import { useParams } from 'react-router';
import MovieDetails from "../components/movieDetails/";
import MovieRecommendations from "../components/movieRecommendations";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToWatchLaterIcon from "../components/cardIcons/addToWatchLaterIcon";
import MovieVideos from "../components/movieVideos";

const MoviePage = (props) => {
  const { id } = useParams();
    const { data: movie, error, isPending, isError  } = useQuery({
    queryKey: ['movie', {id: id}],
    queryFn: getMovie,
  })

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <AddToWatchLaterIcon movie={movie} />
            <MovieVideos movieId={movie.id} />
            <MovieRecommendations movieId={movie.id} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
