/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {
    case "Square":{
      //loop through to print height lines
      for(let i = 0; i < height; i++){
        let newLine = ""
        //loop through to put height characters in each line
        for(let j = 0; j < height; j++){
          newLine = newLine.concat(character)
        }
        console.log(newLine)
      }
      break;
    }
    case "Triangle":{
      //loop through to print height lines
      for(let i = 0; i < height; i++){
        let newLine = ""
        //loop through to put height - current line characters in each line
        for(let j = 0; j < 1 + i; j++){
          newLine = newLine.concat(character)
        }
        console.log(newLine)
      }
      break;
    }
    case "Diamond":{
      //loop through to print height lines
      for(let i = 0; i < height; i++){
        let newLine = ""
        //loop through making each line
          if(i < height/2){
            //make spaces equal to the number of steps away from the middle you are
            for(let j = 0; j < height/2 - 1 - i; j++){
              newLine = newLine.concat(" ")
            }
            //make characters equal to 1 plus 2 times the number of lines you've moved
            for(let j = 0; j < 2 * i + 1 ; j++){
              newLine = newLine.concat(character)
            }
          }else if(i > height/2){
            //make spaces equal to the number of steps away from the middle you are
            for(let j = 0; j < i - height / 2; j++){
              newLine = newLine.concat(" ")
            }
            //make characters equal to height - 2 times the number of lines you've moved from the middle
            for(let j = 0; j < height - 1 - 2 * (i - height / 2); j++){
              newLine = newLine.concat(character)
            }
          }
        console.log(newLine);
      }
      break;
    }
    default:{
      console.log("Invalid shape");
      break;
    }
  }
}

printShape("Diamond", 5, "*");
