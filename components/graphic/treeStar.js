import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const TreeStar = (props) => (
  <Svg
    width={38}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m14.69 40.036-.244-3.742 7.661-7.591.66.125a40.495 40.495 0 0 0 3.861 3.098l-3.733-.521-8.204 8.631"
      fill="#0E322D"
    />
    <Path
      d="m37.043 33.38-10.415-1.454a40.509 40.509 0 0 1-3.86-3.098l11.414 2.161-5.531-10.973 4.732-8.633 2.977-.529-5.062 9.492 5.745 13.034"
      fill="#0F352F"
    />
    <Path
      d="m22.107 28.703-8.729 8.65-1.555-12.189L.898 19.535l11.112-5.247 1.745-10.702a.713.713 0 0 1 1.222-.373l7.434 7.895 12.146-1.867-5.906 10.776 5.53 10.973-12.074-2.287"
      fill="#F5CA4F"
    />
    <Path
      d="m15.169 2.55-.852.23-.026.006-.853.232-.005-.013c-.167-.617-.552-2.28.282-2.431.832-.15 1.283 1.346 1.45 1.962l.004.013Zm1.87 2.88-.806-2.768a.393.393 0 0 0-.48-.27l-.079.02-.001-.013c-.243-.896-.757-2.573-2.095-2.331-1.338.24-.894 2.177-.652 3.074l.005.013-.076.02a.393.393 0 0 0-.28.476l.697 2.795L17.04 5.43"
      fill="#E28045"
    />
    <Path
      d="M16.359 4.57c-.021 0-.055-.029-.11-.108-.325-.462-.975-1.032-1.97-1.312-.147-.042.02-.097.02-.097l.85-.135a.884.884 0 0 1 .99.634l.238.849s.032.169-.018.169Z"
      fill="#F0B996"
    />
    <Path
      d="M21.623 14.622a1.53 1.53 0 0 1-1.338-.787l-2.523-5.45 3.836 3.822a1.53 1.53 0 0 0 1.202.356l6.252-.838-6.855 2.784a1.543 1.543 0 0 1-.574.113"
      fill="#FAE49E"
    />
    <Path
      d="m14.147 33.587-.603-9.048a1.635 1.635 0 0 0-.845-1.33l-6.078-3.338 8.28 1.235a1.641 1.641 0 0 1 1.368 1.947l-2.122 10.534Z"
      fill="#F7D87C"
    />
  </Svg>
);

export default TreeStar;
