import React from 'react'
import { FaHeart } from "react-icons/fa";
import './card.css'



export default function MovieCard({movie}) {

    function onfavoriteClickaa(){
        alert("Clicked")
    }
  return (
    <div className='movieCard'>
        <div className="moviePoster">
            <img  src={movie.url} alt={movie.title} set="" />
            <div className="movieOverlay">
                <button className='favBtn' onClick={onfavoriteClickaa} style={{padding:'10px', borderRadius: '10px', backgroundColor:"red", color: 'white'}}>
                    <FaHeart/>
                </button>
            </div>
        </div>
        <div className="movieInfo">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}
