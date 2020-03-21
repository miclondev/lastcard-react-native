import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {
  const [game, setGame] = useState(undefined);
  const [hands, setHands] = useState(undefined);

  return (
    <GameContext.Provider value={{ game, setGame, hands, setHands }}>
      {props.children}
    </GameContext.Provider>
  );
};
