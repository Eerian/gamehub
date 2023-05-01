import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
  const [allGames, setAllGames] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  //retrieve cart from localStorage
  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(
      localStorage.getItem('cart') || '[]'
    )
    setCartItems(cartFromLocalStorage)
  }, [])

  //store cart items in local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

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

  function removeFromCart(game) {
    // setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    const itemExists = cartItems.find((item) => item.id === game.id)

    if (itemExists.count === 1) {
      setCartItems(cartItems.filter((item) => item.id !== game.id))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === game.id
            ? { ...itemExists, count: itemExists.count - 1 }
            : item
        )
      )
    }
  }

  function removeAllItems() {
    setCartItems([])
  }

  console.log(cartItems)

  return (
    <Context.Provider
      value={{
        allGames,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        removeAllItems,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
