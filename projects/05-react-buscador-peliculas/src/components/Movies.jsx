function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {
        movies.map(movies => (
          <li className="movie" key={movies.id}>
            <h3>{movies.title}</h3>
            <p>{movies.year}</p>
            <img src={movies.poster} alt={movies.Title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResult() {
  return (
    <p>No se hayaron resultados.</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />
  )
}