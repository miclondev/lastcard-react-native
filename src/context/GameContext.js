 import React, { createContext, useState } from "react"

export const GameContext = createContext()

export const GameProvider = props => {

    const [game, setGame] = useState("b0386190-1874-40e9-8c11-545b592d507c")

    const changeGame = game => setGame(game)

    return (
        <GameContext.Provider value={{ game, changeGame }}>
            {props.children}
        </GameContext.Provider>
    )
}
