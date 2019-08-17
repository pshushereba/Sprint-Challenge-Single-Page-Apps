import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function LocationsList() {
    const [locations, setLocations] = useState([])
    
    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get("https://rickandmortyapi.com/api/location/")
          .then((res) => {
            setLocations(res.data.results);
            console.log(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          })
      }, []);

      return(
          <>
            
          </>
      )
}
