import React from "react";
import Matter from "matter-js";
import { View } from "react-native";

const InvisibleHand = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;
  const radius = props.body.circleRadius;

  const color = props.color;
  return (
    <View
      style={{
        backgroundColor: color,
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        // borderWidth: 1,
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        borderRadius: radius,
      }}
    />
  );
};
export default (world, color, pos, radius) => {
  const initialInvisibleHand = Matter.Bodies.circle(pos.x, pos.y, radius, {
    label: "InvisibleHand",
    isStatic: true,
  });

  Matter.World.add(world, initialInvisibleHand);

  return {
    body: initialInvisibleHand,
    color,
    pos,
    renderer: <InvisibleHand />,
  };
};
