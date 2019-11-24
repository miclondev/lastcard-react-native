import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {
  const [game, setGame] = useState(undefined);

  const changeGame = game => setGame(game);

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {props.children}
    </GameContext.Provider>
  );
};
