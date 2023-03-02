import React from "react";
import { Link } from "react-router-dom";



const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img, name ,item}) => {
    
  return(
  <Link to={`/${name}`} state={item} ><img className="card" src={`${imgUrl}${img}`} alt="cardImage" /></Link>
);}


const Row = ({ title, arr = [] }) => {
 
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
       title==='TV Shows'||title==='Recently Added' ? 
       <Card key={index} img={item.poster_path} name={item.original_name} item={item} /> :
       <Card key={index} img={item.poster_path} name={item.original_title} item={item}/>
        ))}
      </div>
    </div>
  );
};

export { Row };

