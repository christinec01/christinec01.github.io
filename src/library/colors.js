const colors = {
  red: "#B80000",
  blue: "#5BA7FF",
  orange: "#E08C00",
  green: "#49D0A0",
  gray: "#eaeaea",
  lightGray: "#f5f5f5",
  black: "#000000",
  white: "#fff"
};

export type ColorType =
  | "white"
  | "black"
  | "red"
  | "blue"
  | "orange"
  | "green"
  | "gray"
  | "lightGray";

export function getPaletteColorStyle(color: ColorType) {
  return {
    backgroundColor: `${colors[color]}`
  };
}

export default colors;
