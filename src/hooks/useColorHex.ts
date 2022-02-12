export default function useColorHex(color: number): string {
  var colorHex = "";
  switch (color) {
    case 0:
      colorHex = "#ff0000";
      break;
    case 1:
      colorHex = "#ff8000";
      break;
    case 2:
      colorHex = "#ffff00";
      break;
    case 3:
      colorHex = "#80ff00";
      break;
    case 4:
      colorHex = "#00ff00";
      break;
    case 5:
      colorHex = "#00ff80";
      break;
    case 6:
      colorHex = "#00ffff";
      break;
    case 7:
      colorHex = "#0080ff";
      break;
    case 8:
      colorHex = "#0000ff";
      break;
    case 9:
      colorHex = "#8000ff";
      break;
    case 10:
      colorHex = "#ff00ff";
      break;
    case 11:
      colorHex = "#ff0080";
      break;
  }
  return colorHex;
}
