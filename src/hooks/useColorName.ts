export default function useColorName(color: number): string {
  var colorName = "";
  switch (color) {
    case 0:
      colorName = "Red";
      break;
    case 1:
      colorName = "Orange";
      break;
    case 2:
      colorName = "Yellow";
      break;
    case 3:
      colorName = "Chartreuse";
      break;
    case 4:
      colorName = "Green";
      break;
    case 5:
      colorName = "Spring Green";
      break;
    case 6:
      colorName = "Cyan";
      break;
    case 7:
      colorName = "Dodger Blue";
      break;
    case 8:
      colorName = "Blue";
      break;
    case 9:
      colorName = "Purple";
      break;
    case 10:
      colorName = "Violet";
      break;
    case 11:
      colorName = "Magenta";
      break;
  }
  return colorName;
}
