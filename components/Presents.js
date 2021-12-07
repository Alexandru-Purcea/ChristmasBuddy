import React, { useState } from "react";

import { GameEngine } from "react-native-game-engine";
import entities from "./PresentsWorld/entities";
import Physics from "./PresentsWorld/physics";

export default function Presents({ isRunning = false }) {
  const [gameEngine, setGameEngine] = useState();
  return (
    <GameEngine
      ref={(ref) => {
        setGameEngine(ref);
      }}
      systems={[Physics]}
      running={isRunning}
      entities={entities()}
      // onEvent={handleEvents}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    ></GameEngine>
  );
}
