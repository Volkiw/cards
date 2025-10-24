'use strict';

// CONSTANTES
const checkboxElements = document.querySelector(".js_checkbox-element");
const selectBg = document.querySelectorAll(".js_background-img");
const inputLevel = document.querySelector(".js_input-level");
let inputSelectAll = document.querySelectorAll(".js_input");
const cardElements = document.querySelector(".js_card-elements");
const cardLevel = document.querySelector(".js_card-level");
let cardVisual = document.querySelector(".js_card");
const button = document.querySelector(".js_button");
let cardArray = [];
const nameCharacter = document.querySelector(".js_card-name");
const family = document.querySelector(".js_card-family");
const description = document.querySelector(".js_card-description");
const skill = document.querySelector(".js_card-skill");
const origin = document.querySelector(".js_card-origin");
const weapon = document.querySelector(".js_card-weapon");
const level =  document.querySelector(".js_card-level");
const image =  document.querySelector(".js_profile-image");
const renderedCards =  document.querySelector(".js_rendered-cards");
const deleteCards = document.querySelector(".js_bt-delete");

//FUNCIONES
function findLocalStorage(){
    if (localStorage.getItem("cards")!== null) {
    cardArray = JSON.parse(localStorage.getItem("cards"));
    renderCards();
    //renderLocalCard();
    };
};

function handleInput(ev) {
    let item = ev.target.value;
    let input = ev.currentTarget.id;
    let cardElClass = `.js_card-${input}`;
    let cardEl = document.querySelector(cardElClass);
    cardEl.innerHTML = item;
};

function initInputs() {
    inputSelectAll.forEach((inputSelect) => {
        inputSelect.addEventListener("input", handleInput);
    });
};

function handleClickLevel(ev) {
    ev.preventDefault();
    let level = parseInt(inputLevel.value);
    if (level > 100 || level < 1) {
        inputLevel.value = "";
        inputLevel.placeholder = "Tiene que ser menos de 100";
    } else {
        cardLevel.innerHTML = level;
    }  
};
    
function handleChangeElements(ev) {
    let element = ev.target;
    let elValue = element.value;
    let elClass = `.js_element-${elValue}`;
    let elementByClass = document.querySelector(elClass);
    if (element.checked === true){
        elementByClass.classList.remove("hidden");
    } else {
    elementByClass.classList.add("hidden");
    }

};

function handleSelectBg(ev){
    let background = ev.target;
    let inputBgId = `input-${background.id}`;
    let cardBgClass = `form-background__img--${background.id}`;
    let inputBg = document.getElementById(inputBgId);
    //console.log(background); 
    if (inputBg.checked === false){
        selectBg.forEach((bg) => {
        bg.classList.remove("form-background__img--selected"); 
        });
        cardVisual.classList.remove("form-background__img--bg-1"); 
        cardVisual.classList.remove("form-background__img--bg-2"); 
        cardVisual.classList.remove("form-background__img--bg-3"); 
        cardVisual.classList.remove("form-background__img--bg-4"); 
        inputBg.checked;
        background.classList.add("form-background__img--selected"); 
        cardVisual.classList.add(cardBgClass);
    } else if (inputBg.checked === false){
        background.classList.remove("form-background__img--selected");
    
    } 
};

function initSelectBg() {
    selectBg.forEach((bg) => {
        bg.addEventListener("click", handleSelectBg);
    });
};

function createArray() {
    let card = 
     {
    "field1": parseInt(level.innerHTML),
    "field2": nameCharacter.innerHTML,
    "field3": family.innerHTML,
    "field4": description.innerHTML,
    "field5": skill.innerHTML,
    "field6": origin.innerHTML,
    "field7": weapon.innerHTML,
    "photo": image.style.backgroundImage,
    "background": cardVisual.classList.value,
    "elements": cardElements.innerHTML,

    };
    cardArray.push(card);
    console.log(card.background);
    localStorage.setItem("cards", JSON.stringify(cardArray));
    findLocalStorage();
    renderLocalCard();
};



//INIT
initInputs();
initSelectBg();
findLocalStorage();

//EVENTS
inputLevel.addEventListener("input", handleClickLevel);
button.addEventListener("click", createArray);
checkboxElements.addEventListener("change", handleChangeElements); 

