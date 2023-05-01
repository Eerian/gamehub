import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
  const [allGames, setAllGames] = useState([])

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
        'https://rawg-video-games-database.p.rapidapi.com/games?key=3b9dae53a7564a4b938725f718d064da',
        options
      )
      if (!response.ok) throw await response.json()
      const data = await response.json()
      const mappedData = data.results.map((item) => ({
        ...item,
        price: 65,
        count: 1,
      }))
      setAllGames(mappedData)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Context.Provider
      value={{
        allGames,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
