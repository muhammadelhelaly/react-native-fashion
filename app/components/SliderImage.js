import React from "react";
import { Image, Dimensions } from "react-native";

import deviceType from "../utils/deviceType";
import theme from "../config/theme";

const { width } = Dimensions.get("window");

function SliderImage({ image }) {
  const { isPhone } = deviceType;
  return (
    <Image
      source={image.src}
      style={{
        width: isPhone
          ? width - theme.borderRadius
          : width / 2 + theme.borderRadius,
        height:
          ((width - theme.borderRadius) * image.height) /
          (isPhone ? image.width : image.width * 1.5)
      }}
    />
  );
}

export default SliderImage;
