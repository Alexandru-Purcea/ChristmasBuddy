import Matter from "matter-js";

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;

  touches
    .filter((t) => t.type === "move")
    .forEach((t) => {
      Matter.Body.setPosition(entities.Mouse.body, {
        x: t.event.locationX,
        y: t.event.locationY,
      });
    });

  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default Physics;
