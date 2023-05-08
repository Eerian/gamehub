import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function GameDetails() {
  // const { allGames, addToCart } = useContext(Context)
  const { gameId } = useParams()
  const [game, setGame] = useState()
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'acfe886c87msheed5cea628f045ap135c40jsnd20aecb2c777',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      },
    }
    try {
      const response = await fetch(
        `https://rawg-video-games-database.p.rapidapi.com/games/${gameId}?key=3b9dae53a7564a4b938725f718d064da`,
        options
      )
      if (!response.ok) throw await response.json()
      const selectedGame = await response.json()
      setGame(selectedGame)
      console.log(selectedGame)
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="game-details-page">
      <div>
        <img
          className="game-details-img"
          src={game.background_image}
          alt=""
        ></img>
      </div>
      <div className="game-description">
        <h3>{game.name}</h3>
        <h5 className="game-description-text">{game.description}</h5>
      </div>
      <div className="game-reviews">
        <h3>Reviews:</h3>
      </div>
    </div>
  )
}

export default GameDetails
