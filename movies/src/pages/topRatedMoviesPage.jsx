import React from "react";
import { useQuery } from '@tanstack/react-query';
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import { getTopRatedMovies } from "../api/tmdb-api";

const TopRatedMoviesPage = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['topRated'],
    queryFn: getTopRatedMovies,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={movies}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
    />
  );
};

export default TopRatedMoviesPage;