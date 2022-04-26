let sideBar = document.getElementsByClassName("side-bar")[0]; //barra lateral

let main = document.getElementById("main"); //página à direita (principal))
let criarTopico = document.getElementsByClassName("criar-topico")[0];
let header = document.getElementsByTagName("header")[0];

let sidebarButton = document.querySelector(".sideBarButton");

let saveButton = document.getElementById("salvar-tarefas");

// function buildTopic(createdElementName, tagElement, className, elementParent, elementType = "", eventListener = null, elementContent = "", elementPlaceholder = null) {
//   createdElementName = document.createElement(tagElement);
//   createdElementName.classList.add(className);
//   createdElementName.type = elementType;
//   createdElementName.placeholder = elementPlaceholder;
//   createdElementName.innerHTML = elementContent;

//   elementParent.appendChild(createdElementName);

//   createdElementName.addEventListener("click", eventListener);

//   console.log(elementParent)
// };



//criar topico na barra lateral
function createTopic () {
  /* ************************ Barra Lateral ********************** */

  let topicSquare = document.createElement("form"); //cria o form
  topicSquare.classList.add("topic"); // adciona a classe topic
  sideBar.appendChild(topicSquare); // coloca o form na barra lateral

  // buildTopic("topicSquare", "form", "topic", sideBar);
  // buildTopic("topicSquareName", "input", "name", topicSquare, "text");
  // buildTopic();
  // buildTopic();
  // buildTopic();
  // buildTopic();
  // buildTopic();
  // buildTopic();





  let topicSquareName = document.createElement("input"); //input nome do topic
  topicSquareName.classList.add("name"); //adciona a classe name
  topicSquareName.type = "text"; // input nome tipo texto
  topicSquare.appendChild(topicSquareName); //coloca o input nome no form

  let topicSquareEnter = document.createElement("button");
  topicSquareEnter.classList.add("enter"); //adciona a classe enter
  topicSquareEnter.type = "button"; // botão tipo botão
  topicSquareEnter.innerHTML = "Entrar"; // título do botão
  topicSquare.appendChild(topicSquareEnter); //coloca o botão no form

  let topicSquareTaskName = document.createElement("input"); //input taskName
  //do topic
  topicSquareTaskName.classList.add("task"); //adciona a classe name
  topicSquareTaskName.type = "text"; // input nome tipo texto
  topicSquareTaskName.placeholder = "Digite a tarefa";
  topicSquare.appendChild(topicSquareTaskName); //coloca o input task no form

  let topicSquareTaskCreate = document.createElement("button");
  topicSquareTaskCreate.classList.add("criar-tarefa"); //adciona a classe enter
  topicSquareTaskCreate.type = "button"; // botão tipo botão
  topicSquareTaskCreate.innerHTML = "Criar";
  topicSquare.appendChild(topicSquareTaskCreate); //coloca o botão no form

  let topicSquareTaskRemove = document.createElement("button");
  topicSquareTaskRemove.classList.add("remover-finalizados"); //adciona a classe enter
  topicSquareTaskRemove.type = "button"; // botão tipo botão
  topicSquareTaskRemove.innerHTML = "Limpar";
  topicSquare.appendChild(topicSquareTaskRemove); //coloca o botão no form
  topicSquareTaskRemove.addEventListener("click", clear);

  let topicSquareTaskRemoveSelected = document.createElement("button");
  topicSquareTaskRemoveSelected.classList.add("remover-selecionado"); //adciona a classe enter
  topicSquareTaskRemoveSelected.type = "button"; // botão tipo botão
  topicSquareTaskRemoveSelected.innerHTML = "Remover Selecionado";
  topicSquare.appendChild(topicSquareTaskRemoveSelected); //coloca o botão no form
  topicSquareTaskRemoveSelected.addEventListener("click", clearSelected);

  /* ************************ Página de Tarefas ********************** */

  let topicPage = document.createElement("section"); //cria página do topico
  topicPage.classList.add("topicPage"); //adciona classe topicPage  à página
  main.appendChild(topicPage); //coloca página na main

  let topicPageOrderedList = document.createElement("ol"); 
  topicPageOrderedList.classList.add("lista-tarefas");
  topicPage.appendChild(topicPageOrderedList);

  /* ******************** Ativação dos Tópicos ******************* */

  topicSquareEnter.addEventListener("click", function() {
    removeActive();
    topicSquare.classList.add("activeTopic");
    topicPage.classList.add("activeTopicPage");
  });

  topicSquareTaskCreate.addEventListener("click", function() {
    let topicPageItem = document.createElement("li");
    topicPageItem.innerHTML = topicSquareTaskName.value;
    topicPage.appendChild(topicPageItem);
    topicSquareTaskName.value = "";
    changeListColor(topicPageItem);
    lineThrough(topicPageItem);
  });
};

  /* ***************** Clicando no item *********************** */

function changeListColor(elementItem) {
  elementItem.addEventListener("click", function() {
    removeActiveItem();
    elementItem.classList.add("activeItem");
  });
};

function lineThrough(elementItem) {
  elementItem.addEventListener("dblclick", function() {
    elementItem.classList.toggle("completed");
  });
};

function removeActive() {
  let activesTopic = document.getElementsByClassName("activeTopic");
  let activesTopicPage = document.getElementsByClassName("activeTopicPage");

  if (activesTopic.length != 0 || activesTopicPage.length != 0 ){
  //   // não posso usar in nao sei pq!!!
    for (let index = 0; index < activesTopic.length; index += 1) {
      activesTopic[index].classList.remove("activeTopic");
    };
    for (let index = 0; index < activesTopicPage.length; index += 1) {
      activesTopicPage[index].classList.remove("activeTopicPage");
    };
  };
};

function removeActiveItem() {
  let activesItems = document.getElementsByClassName("activeItem");

  if(activesItems.length != 0) {
    for (let index = 0; index < activesItems.length; index += 1) {
      activesItems[index].classList.remove("activeItem");
    };
  };
};


let firstEnter = document.getElementById("enter");
let topic = document.getElementById("topic");
let firstTopicPage = document.getElementById("topicPage");
let firstCriar = document.getElementById("criar-tarefa");
let firstName = document.getElementById("texto-tarefa");
let firstClear = document.getElementById("remover-finalizados");
let firstClearSelected = document.getElementById("remover-selecionado");
let firstMoveUp = document.getElementById("mover-cima");
let firstMoveDown = document.getElementById("mover-baixo");

firstEnter.addEventListener("click", function() {
  removeActive();
  topic.classList.add("activeTopic");
  firstTopicPage.classList.add("activeTopicPage");
});

firstCriar.addEventListener("click", function() {
  let firstTopicPageItem = document.createElement("li");
  firstTopicPageItem.innerHTML = firstName.value;
  topicPage.appendChild(firstTopicPageItem);
  firstName.value = "";
  changeListColor(firstTopicPageItem);
  lineThrough(firstTopicPageItem);

});

firstMoveDown.addEventListener("click", moveDown);
firstMoveUp.addEventListener("click", moveUp);
firstClearSelected.addEventListener("click", clearSelected);
firstClear.addEventListener("click", clear);
criarTopico.addEventListener("click", createTopic);

  /* *********** Limpar itens feitos / selecionados *********** */

function clear() {
  let finished = document.querySelectorAll(".completed");
  // let finished2 = document.getElementsByClassName("completed");
  // não funciona pq nao é uma lista (n sei oq é entao)
  
  finished.forEach(function(element) {
    element.remove();
  });
};
  
function clearSelected() {
  let selected = document.querySelector(".activeItem");
  
  selected.remove();
};

function moveUp() {
  let selected = document.querySelector(".activeItem");
  let selectedUp = selected.previousElementSibling;

  if ( selectedUp != null) {
    selectedUp.before(selected);
  }
};

function moveDown() {
  let selected = document.querySelector(".activeItem");
  let selectedDown = selected.nextElementSibling;

  if ( selectedDown != null) {
    selectedDown.after(selected);
  }
};

sidebarButton.addEventListener("click", function () {
  sideBar.classList.toggle("sideBarActive");
  header.classList.toggle("headerActive");
  sidebarButton.classList.toggle("sideBarButtonActive");

  if ( document.getElementsByClassName("sideBarButtonActive")) {
    sidebarButton.innerHTML = "&#8628;";
  }

});

// function saveList() {
  
// };

// function initialRenderization() {

// }