let generate = document.getElementById("generate-board");
let input = document.getElementById("board-size");
let board = document.getElementById("pixel-board");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let pixel = document.querySelectorAll(".pixel");

function select(element) {
  let selected = document.querySelector(".selected");
  selected.classList.remove("selected");
  element.classList.add("selected"); 
};

function setColor(pixelElement, color = "black") {
  console.log(5, pixelElement.length)

  
  for (let index = 0; index < pixelElement.length; index += 1) {
    console.log(pixelElement[index])

    pixelElement[index].addEventListener("click", function(event) {

      event.target.style.backgroundColor = color;
    });
  };
};

function getColor() {
  let palette = document.querySelectorAll(".color");


  for (let index = 0; index < palette.length; index += 1) {
    palette[index].addEventListener("click", function(event) {
      let pixel = document.getElementsByClassName("pixel");
      // let pixel = document.querySelectorAll(".pixel");

      select(event.target);
      let style = getComputedStyle(event.target);
      let targetBackgroundColor = style.getPropertyValue("background-color");

      setColor(pixel, targetBackgroundColor);
    });
  };
};

function clear() {
  let clear = document.getElementById("clear-board");

  clear.addEventListener("click", function() {
    let pixel = document.querySelectorAll(".pixel");

    console.log(pixel)

    
    for (index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = "white";
    };
  });
};

function generatePixel() {
  generate.addEventListener("click", function() {
    let pixel = document.querySelectorAll(".pixel");

    let size = input.value;
    let trueSize = size ** 2;
    let initialPixelsAmount = pixel.length;
    let increase = trueSize - initialPixelsAmount;

    function addBlock(increaseValue) {
      for (let count = 0; count < increaseValue; count += 1) {
        let newPixelElement = document.createElement("span");
        newPixelElement.classList.add("pixel");
        board.appendChild(newPixelElement);
      };
      document.documentElement.style.setProperty("--pixelSize", size)
    }

    function removeBlock(decreaseValue) {
      for (let count = 0; count < decreaseValue; count += 1) {
        board.removeChild(pixel[count]);
      };
      document.documentElement.style.setProperty("--pixelSize", size)
    }

    if (size.length === 0) {
      alert("Board inválido!");
    }

    else if (increase >= 0) {
      if (input.value > 50) {
        addBlock(2500 - initialPixelsAmount)
      }

      else {
        addBlock(increase)
      }
    }

    else {
      if (input.value < 5) {
      console.log(-(25 - initialPixelsAmount))

      removeBlock(-(25 - initialPixelsAmount))
      }
      else{
        removeBlock(-increase)
      }
    }
    console.log(55555)
    getColor()
  });
};

function randomColor() {
  red.style.backgroundColor = "rgb(" + 255 * Math.random() + ", " +  255 * Math.random() + ", " + 255 * Math.random() + ")";
  blue.style.backgroundColor = "rgb(" + 255 * Math.random() + ", " +  255 * Math.random() + ", " + 255 * Math.random() + ")";
  green.style.backgroundColor = "rgb(" + 255 * Math.random() + ", " +  255 * Math.random() + ", " + 255 * Math.random() + ")";
}

randomColor();
generatePixel();
clear();
getColor();
setColor(pixel);