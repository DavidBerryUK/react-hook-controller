export default function useColourName(colour: number): string {
  var colourName = "";
  switch (colour) {
    case 0:
      colourName = "Red";
      break;
    case 1:
      colourName = "Orange";
      break;
    case 2:
      colourName = "Yellow";
      break;
    case 3:
      colourName = "Chartreuse";
      break;
    case 4:
      colourName = "Green";
      break;
    case 5:
      colourName = "Spring Green";
      break;
    case 6:
      colourName = "Cyan";
      break;
    case 7:
      colourName = "Dodger Blue";
      break;
    case 8:
      colourName = "Blue";
      break;
    case 9:
      colourName = "Purple";
      break;
    case 10:
      colourName = "Violet";
      break;
    case 11:
      colourName = "Magenta";
      break;
  }
  return colourName;
}
