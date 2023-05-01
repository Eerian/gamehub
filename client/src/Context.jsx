import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
  const [allGames, setAllGames] = useState([])
  const [cartItems, setCartItems] = useState([])

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

  function addToCart(game) {
    // setCartItems(prevItems => [...prevItems, game])
    const itemExists = cartItems.find((item) => item.id === game.id)

    if (itemExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === game.id
            ? { ...itemExists, count: itemExists.count + 1 }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, game])
    }
  }

  return (
    <Context.Provider
      value={{
        allGames,
        cartItems,
        addToCart,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
