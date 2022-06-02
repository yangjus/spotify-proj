import React, { useEffect, useState } from "react";
import axios from "axios";

//https://developer.spotify.com/console/get-current-user-playlists/
const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const DisplayPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({}); //data from Spotify. default empty object state

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetPlaylists = () => {
    console.log("TEST")
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
      console.log("END")
  };

  return (
    <><button onClick={handleGetPlaylists}>Get Playlist Names</button>{data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}</>
  );
};

export default DisplayPlaylists;