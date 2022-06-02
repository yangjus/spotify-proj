import React, { useEffect, useState } from "react";
import axios from "axios";

//https://developer.spotify.com/console/get-current-user-playlists/
const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me";

const GetUserName = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({}); //data from Spotify. default empty object state

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetUsername = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, { //initalize get request
        headers: { //custom object
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
   <><button onClick={handleGetUsername}>Get UserNames</button>{data['display_name']}</>
  );
};

export default GetUserName;