import { v4 as uuidv4 } from "uuid";

export const generateId = () => uuidv4();

export const getStyle = (blocksState, spritePosition, setSpritePosition) => {
  const newPosition = { ...spritePosition[spritePosition.length - 1] };
  newPosition.transform = '';
  blocksState.forEach((item) => {
    switch (item.id) {
      case "SAY_TEXT_WITH_SECS":
        setSpritePosition((prevSpritePosition) => [...prevSpritePosition, {display : item.duration}]);
        break;
      case "MOVE_STEPS":
        if (newPosition.transform && newPosition.transform.indexOf("translateX(") !== -1) {
            let translateXStart = newPosition.transform.indexOf("translateX(");
            let translateXEnd = newPosition.transform.indexOf("px)", translateXStart);
            if (translateXEnd !== -1) {
                let currentValue = parseFloat(newPosition.transform.substring(translateXStart + 11, translateXEnd));
                let newValue = currentValue + item.steps;
                newPosition.transform = newPosition.transform.substring(0, translateXStart + 11) + newValue + "px)" + newPosition.transform.substring(translateXEnd + 3);
            }
            else newPosition.transform += `translateX(${item.steps}px)`;
        }
        else newPosition.transform += `translateX(${item.steps}px)`;
        break;
      case "TURN_LEFT":
        if (newPosition.transform && newPosition.transform.indexOf("rotate(") !== -1) {
          let rotateLeft = newPosition.transform.indexOf("rotate(");
            let rotateEnd = newPosition.transform.indexOf("deg)", rotateLeft);
            if (rotateEnd !== -1) {
                let currentValue = parseFloat(newPosition.transform.substring(rotateLeft + 7, rotateEnd));
                let newValue = currentValue - item.turnLeft;
                newPosition.transform = newPosition.transform.substring(0, rotateLeft + 7) + newValue + "deg)" + newPosition.transform.substring(rotateEnd + 4);
            }
            else newPosition.transform += `rotate(${-item.turnLeft}deg)`;
        }
        else newPosition.transform += `rotate(${-item.turnLeft}deg)`;
        break;
      case "TURN_RIGHT":
        let rotateRight = newPosition.transform.indexOf("rotate(");
        if (rotateRight !== -1) {
            let rotateEnd = newPosition.transform.indexOf("deg)", rotateRight);
            if (rotateEnd !== -1) {
                let currentValue = parseFloat(newPosition.transform.substring(rotateRight + 7, rotateEnd));
                let newValue = currentValue + item.turnRight;
                newPosition.transform = newPosition.transform.substring(0, rotateRight + 7) + newValue + "deg)" + newPosition.transform.substring(rotateEnd + 4);
            }
            else newPosition.transform += `rotate(${item.turnRight}deg)`;
        }
        else newPosition.transform += `rotate(${item.turnRight}deg)`;
        break;
    }
  });
  const updatedSpritePosition = [...spritePosition];
  updatedSpritePosition[updatedSpritePosition.length - 1].transform = newPosition.transform;
  setSpritePosition((prevSpritePosition) => updatedSpritePosition);
};
