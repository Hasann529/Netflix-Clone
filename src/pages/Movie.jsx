import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import {IoCheckmarkSharp} from 'react-icons/io5'
import { useDispatch, useSelector } from "react-redux";
import { addMovies, removeMovies } from "../redux/Action";
import '../List.scss'

const imgUrl = "https://image.tmdb.org/t/p/original";

const Movie = () => {
  const navigate = useNavigate()
  const mov = useLocation();
  const data = mov.state;

  const dispatch = useDispatch()
  const {list} = useSelector(state=> state.lists)

  return (
    <div className="movie">
    <div
      className="page"
      style={{
        backgroundImage: data
          ? `url(${`${imgUrl}/${data.poster_path}`})`
          : "rgb(0,0,0)",
      }}
    >
        {data && <h1> {data.original_title ? data.original_title : data.original_name}</h1>}
        <p>{data && data.overview}</p>
        <div>
            <button onClick={()=> navigate('/player')} ><BiPlay /> Play</button>
            {
               list.find(item => item.id===data.id) ? <button onClick={()=>dispatch(removeMovies(data))} >Added <IoCheckmarkSharp /></button>  : <button onClick={()=>dispatch(addMovies(data))} >My List <AiOutlinePlus /></button>
            }
            {/* <button onClick={()=>dispatch(addMovies(data))} >My List <AiOutlinePlus /></button> */}
        </div>
    </div>
    </div>
  );
};

export default Movie;
