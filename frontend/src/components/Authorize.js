import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Authorize(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:3001/refresh', refreshToken,
            ).then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                window.history.pushState({},null,'/') //remove excessive part of URL
            }).catch(() => {
                //catches error -> sends back to login page
                window.location="/"
            })
    }, [code])

    //whenever expiresIn happnes, use refreshToken (for AccessToken which expires every hour or so)
    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
          axios
            .post("http://localhost:3001/refresh", {
              refreshToken,
            })
            .then(res => {
              setAccessToken(res.data.accessToken)
              setExpiresIn(res.data.expiresIn)
            })
            .catch(() => {
              window.location = "/"
            })
        }, (expiresIn - 60) * 1000)
    
        return () => clearInterval(interval)
      }, [refreshToken, expiresIn])

    return accessToken //this token is needed to call all spotify api's that allow us to search for and play songs, etc
}
