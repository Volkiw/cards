'use strict';

import html2canvas from 'html2canvas';



function renderLocalCard() {
    for (let card of cardArray){ 
        level.innerHTML = card.field1;
        nameCharacter.innerHTML = card.field2;
        family.innerHTML = card.field3;
        description.innerHTML = card.field4;
        skill.innerHTML = card.field5;
        origin.innerHTML = card.field6;
        weapon.innerHTML =  card.field7;
        image.style.backgroundImage =  card.photo;
        cardVisual.classList.value =  card.background;
        cardElements.innerHTML = card.elements;
    };
    renderCards();
};

function slugify(text) {
  return text
    .toString()
    .trim()
    .normalize('NFD')                 // separa acentos
    .replace(/[\u0300-\u036f]/g, '')  // quita diacríticos
    .toLowerCase()                    // minúsculas
    .replace(/[^a-z0-9]+/g, '-')      // todo lo que no sea letra/número => guion
    .replace(/^-+|-+$/g, '');         // quita guiones al inicio y al final
}

function renderCards(){
    console.log("render cards funciona");
    renderedCards.innerHTML = " ";
    let listaCards = " ";

    for (let [index, card] of cardArray.entries()){
        listaCards += `
        <li class="section-cards__li">
        <div class="render-card ${card.background}" id="card-${index+1}-${slugify(card.field2)}">
        <div class="card__top">
        <div class="card-title">
            <p class="card-title__name">${card.field2}</p>
            <div class="elements">
            ${card.elements}
            </div>
        </div>
        <div class="card-image" style='background-image: ${card.photo}'></div>
        <div class="card-type">
            <p class="card-type__family">Criatura: ${card.field3}</p>
            <p class="card-type__level">Nivel ${card.field1}</p>
        </div>
        </div>
        <div class="card__bottom">
        <div class="card-desc">
            <p class="card-desc__text">${card.field4}</p>
            <div class="card-desc__info">
            <div class="info">
                <img class="info__img" src="./images/skill.png"/>
                <p class="info__text">${card.field5}</p>
            </div>
            <div class="info">
                <img class="info__img" src="./images/origin.png"/>
                <p class="info__text">${card.field6}</p>
            </div>
            <div class="info">
                <img class="info__img" src="./images/weapon.png"/>
                <p class="info__text">${card.field7}</p>
            </div>
            </div>
        </div> 
        </div>
        </li>
        `;
    }
    renderedCards.innerHTML = listaCards;
    renderedCards.addEventListener('contextmenu', handleDownloadCard);
};


function handleDownloadCard(ev) {
    ev.preventDefault();
    const card = ev.target.closest('.render-card');
    if (!card) return;

    html2canvas(card, { backgroundColor: null }).then(canvas => {
        const link = document.createElement('a');
        link.download = `card-${card.id}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
};


function handleDeleteCards(ev){
    ev.preventDefault();
    localStorage.removeItem("cards");
    // renderedCards.innerHTML = ""; // puedo o borrar el contenido en el HTML y después borrar lo del array, o borrar lo del array y después volver a pintar el array (que está vacío)
    cardArray = [];
    renderCards();
    deleteCards.classList.add("hidden");
};


deleteCards.addEventListener("click", handleDeleteCards);