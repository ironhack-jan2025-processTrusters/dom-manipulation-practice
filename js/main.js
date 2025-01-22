
/****************************/
/* Find elements in the DOM */
/* **************************/

// by Id
const mainTitle = document.getElementById("main-title");
mainTitle.innerText = "Welcome to processTrusters commerce";


// by class name
const infoCollection = document.getElementsByClassName("info");

const infoElementsArr = [...infoCollection];  // convert html collection to an array

infoElementsArr.forEach(function (element) {
    element.style.color = "blue";
});


// by tag name
const allParagraphsCollection = document.getElementsByTagName("p"); // returns an html collection


// by css selectors....
const first = document.querySelector("header h2");
const all = document.querySelectorAll("header h2");

all.forEach((element) => {
    element.style.color = "green";
})


