import React, { useState } from 'react'
import MovieCard from '../components/MovieCard';
import './home.css'

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("")

const movies = [
  {
    id: 1,
    title: "Inception",
    releaseDate: "2010-07-16",
    posterUrl: "https://image.tmdb.org/t/p/w500/example1.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    releaseDate: "2014-11-07",
    posterUrl: "https://image.tmdb.org/t/p/w500/example2.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    posterUrl: "https://image.tmdb.org/t/p/w500/example3.jpg"
  },
  {
    id: 4,
    title: "Avatar",
    releaseDate: "2009-12-18",
    posterUrl: "https://image.tmdb.org/t/p/w500/example4.jpg"
  },
  {
    id: 5,
    title: "Titanic",
    releaseDate: "1997-12-19",
    posterUrl: "https://image.tmdb.org/t/p/w500/example5.jpg"
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    releaseDate: "2019-04-26",
    posterUrl: "https://image.tmdb.org/t/p/w500/example6.jpg"
  },
  {
    id: 7,
    title: "Iron Man",
    releaseDate: "2008-05-02",
    posterUrl: "https://image.tmdb.org/t/p/w500/example7.jpg"
  },
  {
    id: 8,
    title: "The Matrix",
    releaseDate: "1999-03-31",
    posterUrl: "https://image.tmdb.org/t/p/w500/example8.jpg"
  },
  {
    id: 9,
    title: "Joker",
    releaseDate: "2019-10-04",
    posterUrl: "https://image.tmdb.org/t/p/w500/example9.jpg"
  },
  {
    id: 10,
    title: "Oppenheimer",
    releaseDate: "2023-07-21",
    posterUrl: "https://image.tmdb.org/t/p/w500/example10.jpg"
  },
  {
    id: 11,
    title: "Dangal",
    releaseDate: "2016-12-23",
    posterUrl: "https://image.tmdb.org/t/p/w500/example11.jpg"
  },
  {
    id: 12,
    title: "3 Idiots",
    releaseDate: "2009-12-25",
    posterUrl: "https://image.tmdb.org/t/p/w500/example12.jpg"
  },
  {
    id: 13,
    title: "Drishyam",
    releaseDate: "2013-12-19",
    posterUrl: "https://image.tmdb.org/t/p/w500/example13.jpg"
  },
  {
    id: 14,
    title: "RRR",
    releaseDate: "2022-03-25",
    posterUrl: "https://image.tmdb.org/t/p/w500/example14.jpg"
  },
  {
    id: 15,
    title: "KGF: Chapter 2",
    releaseDate: "2022-04-14",
    posterUrl: "https://image.tmdb.org/t/p/w500/example15.jpg"
  },
  {
    id: 16,
    title: "The Shawshank Redemption",
    releaseDate: "1994-09-23",
    posterUrl: "https://image.tmdb.org/t/p/w500/example16.jpg"
  },
  {
    id: 17,
    title: "Pulp Fiction",
    releaseDate: "1994-10-14",
    posterUrl: "https://image.tmdb.org/t/p/w500/example17.jpg"
  },
  {
    id: 18,
    title: "Forrest Gump",
    releaseDate: "1994-07-06",
    posterUrl: "https://image.tmdb.org/t/p/w500/example18.jpg"
  },
  {
    id: 19,
    title: "Spider-Man: No Way Home",
    releaseDate: "2021-12-17",
    posterUrl: "https://image.tmdb.org/t/p/w500/example19.jpg"
  },
  {
    id: 20,
    title: "Dune: Part Two",
    releaseDate: "2024-03-01",
    posterUrl: "https://image.tmdb.org/t/p/w500/example20.jpg"
  }
];

const handleSearch = (e) => {
    e.preventDefault();
    

    alert(searchQuery)
    setSearchQuery("")

}
  return (
    <div className='home'>

        <form onSubmit={handleSearch} className='search'>
            <input 
                type="text" 
                className='searchInput'
                placeholder='Search for movies....'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                 />
            <button className='searchBtn' type='submit'>Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard  movie={movie} key={movie.id}/>
            ))}
        </div>
    
    
    </div>
  )
}
