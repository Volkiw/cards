'use strict';

console.log("accordion funciona");

const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");


accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector(".accordion-content");

    accordionContents.forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("active");
        content.style.maxHeight = "0";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
      }
    });

    accordionContent.classList.toggle("active");

    if (accordionContent.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.style.paddingTop = "10px";
      accordionContent.style.paddingBottom = "10px";
    } else {
      accordionContent.style.maxHeight = "0";
      accordionContent.style.paddingTop = "0";
      accordionContent.style.paddingBottom = "0";
    }
  });
});