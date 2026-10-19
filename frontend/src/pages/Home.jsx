import React from 'react'
import MovieCard from '../components/MovieCard';
import './home.css'

export default function Home() {

    const movies = [
  { id: 1, title: "Inception", releaseDate: "2010-07-16" },
  { id: 2, title: "Interstellar", releaseDate: "2014-11-07" },
  { id: 3, title: "The Dark Knight", releaseDate: "2008-07-18" },
  { id: 4, title: "Avatar", releaseDate: "2009-12-18" },
  { id: 5, title: "Titanic", releaseDate: "1997-12-19" },
  { id: 6, title: "Avengers: Endgame", releaseDate: "2019-04-26" },
  { id: 7, title: "Iron Man", releaseDate: "2008-05-02" },
  { id: 8, title: "The Matrix", releaseDate: "1999-03-31" },
  { id: 9, title: "Joker", releaseDate: "2019-10-04" },
  { id: 10, title: "Oppenheimer", releaseDate: "2023-07-21" },
  { id: 11, title: "Dangal", releaseDate: "2016-12-23" },
  { id: 12, title: "3 Idiots", releaseDate: "2009-12-25" },
  { id: 13, title: "Drishyam", releaseDate: "2013-12-19" },
  { id: 14, title: "RRR", releaseDate: "2022-03-25" },
  { id: 15, title: "KGF: Chapter 2", releaseDate: "2022-04-14" },
  { id: 16, title: "The Shawshank Redemption", releaseDate: "1994-09-23" },
  { id: 17, title: "Pulp Fiction", releaseDate: "1994-10-14" },
  { id: 18, title: "Forrest Gump", releaseDate: "1994-07-06" },
  { id: 19, title: "Spider-Man: No Way Home", releaseDate: "2021-12-17" },
  { id: 20, title: "Dune: Part Two", releaseDate: "2024-03-01" }
];

  return (
    <div className='home'>
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard  movie={movie} key={movie.id}/>
            ))}
        </div>
    
    
    </div>
  )
}
