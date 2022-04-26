let main = document.getElementById("main");
let nav = document.getElementById("side-bar");

let dialog = document.getElementsByClassName("dialog")[0];
let create = document.getElementsByClassName("create")[0];
let dialogOpened = false;


/* Função acionada no carregamento da página. Quando o botão "Criar Tópico" é
clicado, cria um novo tópico na barra lateral e cria uma página com display
padrão none, além de ativar a função criarTarefa(). */

let criarTopico = document.getElementsByClassName("criar-topico")[0];

criarTopico.addEventListener("click", function() {

  let topicPage = document.createElement("section");
  topicPage.classList.add("topicPage");
  main.appendChild(topicPage);

  let topicPageList = document.createElement("ol");
  topicPage.appendChild(topicPageList);

  let form = document.createElement("form");
  nav.appendChild(form);
  form.classList.add("topic");

  let topicTag = document.createElement("input");
  topicTag.type = "text"
  topicTag.classList.add("name");
  form.appendChild(topicTag);

  let enter = document.createElement("button");
  enter.type = "button";
  enter.classList.add("enter");
  enter.innerHTML = "Entrar";
  form.appendChild(enter);
  enter.addEventListener("click", function() {
    removeActive();
    // let topicPageTitle = document.createElement("h2");
    // function writeTitle() {
    //   topicPageTitle.remove();
    //   let topicPageTitle = document.createElement("h2");
    //   topicPageTitle.innerHTML = topicTag.value;
    //   topicPage.appendChild(topicPageTitle);
    //   topicPageTitle.innerHTML = topicTag.value;
    // }
    // writeTitle();
    topicPage.classList.add("activeTopicPage");
    form.classList.add("activeTopic"); 
  });
    
  let taskName = document.createElement("input");
  taskName.placeholder = "Digite a tarefa:";
  taskName.type = "text";
  taskName.classList.add("task");
  form.appendChild(taskName);

  let createTask = document.createElement("button");
  createTask.type = "button";
  createTask.classList.add("criar-tarefa");
  createTask.innerHTML = "Criar";
  form.appendChild(createTask);

  createTask.addEventListener("click", criarTarefa(createTask, topicPageList));

  
});


  


function criarTarefa(elementListener, topicPageListElement) {    
  
  elementListener.addEventListener("click", function() {
    
    let itemName = document.createElement("li");
    topicPageListElement.appendChild(itemName);

    let details = document.createElement("details");
    itemName.appendChild(details);

    let summary = document.createElement("summary");
    summary.innerHTML = elementListener.previousElementSibling.value;
    details.appendChild(summary);

    createInnerItem(createItem, innerOrderedList);
    
  });
};

function createInnerItem(element, innerOrderedListElement) {

  dialog.classList.add("activeDialog");

  if (dialogOpened == false) {

  
    element.addEventListener("click", function() {

      

      

      dialogFunction(innerOrderedListElement, dialogOpened);

      // console.log(dialogOpened)
    
    });
  } //não colocar ; depois do if

  else {
    console.log("opened");
  };
};


function dialogFunction(element, dialogCondition) {

  console.log(3)

  dialogCondition = true;

  
  create.addEventListener("click", function() {

    let innerOrderedList = document.createElement("ol");
    details.appendChild(innerOrderedList);

    var createItem = document.createElement("button");
    createItem.classList.add("createItem");
    createItem.setAttribute("value", "button");
    createItem.innerHTML = "Criar inner";
    summary.appendChild(createItem);

    let newTask = document.createElement("li");

    newTask.innerHTML = dialog.firstElementChild.firstElementChild.nextElementSibling.value;

    // element.firstElementChild.firstElementChild.nextElementSibling.value = "";


    element.appendChild(newTask);


    // console.log("teste");
    dialog.classList.remove("activeDialog");

    dialogCondition = false;

  });
};

function removeActive() {
  let activesTopic = document.getElementsByClassName("activeTopic");
  let activesTopicPage = document.getElementsByClassName("activeTopicPage");

  if (activesTopic.length != 0 || activesTopicPage.length != 0){
  //   // não posso usar in nao sei pq!!!
    for (let index = 0; index < activesTopic.length; index += 1) {
      activesTopic[index].classList.remove("activeTopic");
    };
    for (let index = 0; index < activesTopicPage.length; index += 1) {
      activesTopicPage[index].classList.remove("activeTopicPage");
    };
  };
};

