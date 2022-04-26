let wrapper = document.getElementsByClassName("wrapper")[0];
let roxo = document.getElementById("roxo");
let verde = document.getElementById("verde");
let marrom = document.getElementById("marrom");
let limpar = document.getElementsByClassName("clear")[0];
let color = "";

let rect_amount = 15;
let block_amount = rect_amount;

let paleta = document.getElementsByClassName("paleta")[0];

function setn() {
  document.documentElement.style.setProperty("--n", rect_amount)
}


for (let n = 1; n <= rect_amount; n += 1){
  let rect = document.createElement("div");
  rect.className = "rect";
  wrapper.appendChild(rect);

  for (let i = 1; i <= block_amount; i += 1){
    var block = document.createElement("div");
    block.className = "block";
    rect.appendChild(block);
  }

//   // wrapper.appendChild(block) 
// /* https://stackoverflow.com/questions/27079598/error-failed-to-execute-appendchild-on-node-parameter-1-is-not-of-type-no*/

}

function getBlocks() {
  let blocks = document.getElementsByClassName("block");
  
  for (let index = 0; index < blocks.length; index += 1) {

    blocks[index].addEventListener("click", function() {
      blocks[index].classList.toggle("activeBlock");
      blocks[index].style.backgroundColor = color;

    })
  }
}


limpar.addEventListener("click", function() {
  let blocks = document.getElementsByClassName("block");

  for (let index = 0; index < blocks.length; index += 1) {
    // blocks[index].classList.remove("activeBlock");
    // blocks[index].classList.add("activeBlock");
    blocks[index].style.backgroundColor = "white";
  }

})

marrom.addEventListener("click", function() {
  color = "brown";
  // document.documentElement.style.setProperty("--blockColor", blockColor)
})

verde.addEventListener("click", function() {
  color = "green";
})

roxo.addEventListener("click", function() {
  color = "purple";
})



setn();
getBlocks();

let counter = -1;

for (let red = 0; red <= 255; red += 85) {

  for (let green = 0; green <= 255; green += 85) {

    

    for (let blue = 0; blue <= 255; blue += 85) {

      counter += 1;

      let paletaColor = document.createElement("nav");
      paletaColor.setAttribute("angle", counter);
      paletaColor.classList.add("palete")
      document.documentElement.style.setProperty("--innerCircleCounter", counter)
      paleta.appendChild(paletaColor);
    }
  }
}