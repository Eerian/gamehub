import React, { useContext } from 'react'
import Game from './Game'
import { Context } from '../Context'

function Games() {
  const { allGames } = useContext(Context)
  console.log(allGames)

  const gameElements = allGames.map((game) => (
    <Game key={game.id} game={game} />
  ))

  return (
    <main className="all-games-container">
      <h1 className="games-title">All Games</h1>
      <div className="all-games">{gameElements}</div>
    </main>
  )
}

export default Games
