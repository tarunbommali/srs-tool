import { CircularProgressBar } from "react-percentage-bar";

import React from "react";

const PercentageBar = ({percentage}) => {
  return (
    <CircularProgressBar
      size={"2rem"}
      radius={"10rem"}
      roundLineCap={false}
      styles="separators"
      text={"Python"}
    />
  );
};

export default PercentageBar;
