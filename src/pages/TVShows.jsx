import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "../components/Netflix/Row";
import "../List.scss";

const apiKey = "9d960547caf38b8b4aa5bc530b9c3a69";

const TVShows = () => {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US`
      );
      setTv(results);
    };

    fetchTvShows();
  }, []);

  return (
    <div className="tvshows">
      <Row title={"TV Shows"} arr={tv} />
    </div>
  );
};

export default TVShows;
