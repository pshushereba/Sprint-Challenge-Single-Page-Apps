import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js';

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([])
    
    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get("https://rickandmortyapi.com/api/episode/")
          .then((res) => {
            setEpisodes(res.data.results);
            console.log(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          })
      }, []);

      return(
          <>
            {episodes.map((episode) => {
                return <EpisodeCard episodeAttrs={episode} />
            })}
          </>
      )
}
