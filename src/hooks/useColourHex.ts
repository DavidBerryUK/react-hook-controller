export default function useColourHex(colour: number): string {
  var colourHex = "";
  switch (colour) {
    case 0:
      colourHex = "#ff0000";
      break;
    case 1:
      colourHex = "#ff8000";
      break;
    case 2:
      colourHex = "#ffff00";
      break;
    case 3:
      colourHex = "#80ff00";
      break;
    case 4:
      colourHex = "#00ff00";
      break;
    case 5:
      colourHex = "#00ff80";
      break;
    case 6:
      colourHex = "#00ffff";
      break;
    case 7:
      colourHex = "#0080ff";
      break;
    case 8:
      colourHex = "#0000ff";
      break;
    case 9:
      colourHex = "#8000ff";
      break;
    case 10:
      colourHex = "#ff00ff";
      break;
    case 11:
      colourHex = "#ff0080";
      break;
  }
  return colourHex;
}
