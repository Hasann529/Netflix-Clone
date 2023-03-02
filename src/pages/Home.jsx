import React, { useEffect, useState } from "react";
import { Row } from "../components/Netflix/Row";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiPlay } from "react-icons/bi"
import {IoAlertCircleOutline} from 'react-icons/io5'


const apiKey = "9d960547caf38b8b4aa5bc530b9c3a69";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
 
    const navigate = useNavigate()

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowplayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [genre, setGenre] = useState([]);


  useEffect(() => {

    const fetch = async (fetchType) => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${fetchType}?api_key=${apiKey}`);

      switch (fetchType) {
        case upcoming:
          setUpcomingMovies(results);
          break;
        case nowPlaying:
          setNowplayingMovies(results);
          break;
        case popular:
          setPopularMovies(results);
          break;
        case topRated:
          setTopRatedMovies(results);
          break;

        default:
          break;
      }
    };
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
    };

    getAllGenre();
    fetch(upcoming);
    fetch(topRated);
    fetch(popular);
    fetch(nowPlaying);
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[5]
            ? `url(${`${imgUrl}/${popularMovies[5].poster_path}`})`
            : "rgb(0,0,0)",
        }}
      >
        {popularMovies[5] && <h1>{popularMovies[5].original_title}</h1>}
        {popularMovies[5] && <p>{popularMovies[5].overview}</p>}

        <div>
          <button onClick={()=> navigate('/player')}> <BiPlay /> Play</button>
          <button ><IoAlertCircleOutline />  More Info</button>
        </div>
      </div>
      <div className="Row">
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
     </div>
      

      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
