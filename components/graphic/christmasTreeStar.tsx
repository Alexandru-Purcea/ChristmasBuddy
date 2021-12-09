import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface ChristmasTreeStarProps extends SvgProps {
  isActive?: boolean;
}

const ChristmasTreeStar: React.FC<ChristmasTreeStarProps> = ({
  isActive,
  ...props
}) => (
  <Svg
    width={59}
    height={55}
    fill="none"
    {...props}
  >
    <Path
      d="M29.7752 45.5233L11.9348 54.902L15.3419 35.0385L0.910156 20.9713L20.855 18.0732L29.7752 5.28068e-05L38.6938 18.0732L58.6386 20.9713L44.2069 35.0385L47.614 54.902L29.7752 45.5233"
      fill={isActive ? "#F5CA4F" : "#cccccc"}
    />
    <Path
      d="M47.614 54.902L29.7752 32.5606L11.9348 54.902L24.9641 29.0651L0.910156 20.9713L26.8012 23.4105L29.7752 5.34058e-05L32.7475 23.4105L58.6386 20.9713L34.5847 29.0651L47.614 54.902Z"
      fill={isActive ? "#F3B737" : "#b3b3b3"}
    />
  </Svg>
);

export default ChristmasTreeStar;
