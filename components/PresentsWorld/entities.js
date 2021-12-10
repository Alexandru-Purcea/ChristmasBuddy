import Matter from "matter-js";
import { getScreenDetails } from "./screenUtils";
import WrappedPresent from "./WrappedPresent";
import Floor from "./Floor";
import InvisibleHand from "./InvisibleHand";

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default () => {
  const { screenWidth, screenHeight } = getScreenDetails();
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  engine.gravity.y = 0.4;

  const obstacles = {};
  const colors = ["red", "yellow", "pink"];

  for (let index = 0; index < 10; index++) {
    const width = getRandom(40, 121);
    const ratio = 121 / 80;
    obstacles[`WrappedPresent${index}`] = WrappedPresent(
      world,
      `WrappedPresent${index}`,
      "transparent",
      {
        x: getRandom((screenWidth - 400) * 0.1, (screenWidth - 400) * 0.9),
        y: getRandom(-screenHeight * 2, -screenHeight / 2),
      },
      {
        width: width,
        height: width * ratio,
        friction: 0.7,
        restitution: 0.3,
      }
    );
  }
  const gameEntities = {
    physics: { engine, world },
    ...obstacles,
    Floor: Floor(
      world,
      "transparent",
      { x: screenWidth / 2 - 200, y: screenHeight },
      { height: 100, width: screenWidth * 2, friction: 0.8, restitution: 0.1 }
    ),
    Mouse: InvisibleHand(world, "transparent", { x: 0, y: 0 }, 20),
  };
  return gameEntities;
};
