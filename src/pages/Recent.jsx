import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "../components/Netflix/Row";
import '../List.scss'

const apiKey = "9d960547caf38b8b4aa5bc530b9c3a69";

const Recent = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`
      );
      setTrending(results);
    };

    fetchTrending();
  }, []);

  return <div className="recent">
          <Row title={"Recently Added"} arr={trending} />
         </div>;
};

export default Recent;
