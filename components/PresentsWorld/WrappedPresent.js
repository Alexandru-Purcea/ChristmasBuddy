import React from "react";
import Matter from "matter-js";
import { StyleSheet, View } from "react-native";
import SvgGift from "./SvgGift";

function radians_to_degrees(radians) {
  var pi = Math.PI;
  return radians * (180 / pi);
}

const WrappedPresent = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;
  const rotation = props.body.angle;

  const color = props.color;
  const rotate = radians_to_degrees(rotation);

  return (
    <View
      style={[
        {
          position: "absolute",
          // borderWidth: 1,
          borderColor: "red",
          borderStyle: "solid",
          left: xBody,
          top: yBody,
          width: widthBody,
          height: heightBody,
        },
        { transform: [{ rotate: `${rotate}deg` }] },
      ]}
    >
      <SvgGift
        style={[
          {
            position: "absolute",
          },
        ]}
      />
    </View>
  );
};

export default (world, label, color, pos, size) => {
  const initialWrappedPresent = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: label, angle: 0 }
  );

  Matter.World.add(world, initialWrappedPresent);

  return {
    body: initialWrappedPresent,
    color,
    pos,
    renderer: <WrappedPresent />,
  };
};
