import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #2a073b;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 6rem;
    border: none;
    color: #2a073b;
    font-size: 1.3rem;
    cursor: pointer;
  }
  button:hover {
    padding: 0.9rem 4.9rem;
  }
`

const handleClick = () => {
  alert('Success!')
}

const Login = () => {
  return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify-logo" />
        <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  )
}

export default Login