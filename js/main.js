
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


//
// context: document vs. element
//

const productsElm = document.getElementById("products");
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p"); // all p in productsElm


const allParagraphsInProductsElm_alternative = document.querySelectorAll("#products p");




/**************/
/* Properties */
/**************/

// Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu");
pikachuElm.innerHTML = `
    <div>
        <p>one</p>
        <p>
            two
            <a href="#">click here for more info</a>
        </p>
        <p>three</p>
    </div>
`;



// Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us --we are amazing";


// Read/Modify CSS --> elm.style
mainTitle.style.color = "blue";
mainTitle.style.margin = "20px";
mainTitle.style.backgroundColor = "yellow";
mainTitle.style.border = "2px solid green";


// Read/Modify the id --> elm.id
mainTitle.id = "this-is-the-new-id";


// Read/Modify class --> elm.className
mainTitle.className = "title rounded"


//
// elm.classList (provides methods to access class names)
//

// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.add("with-shadow");
mainTitle.classList.toggle("active");




/**************/
/* Attributes */
/**************/


// get: elm.getAttribute(attributeName);
const result = linkElm.getAttribute("href");
// console.log(result)


// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com");
linkElm.setAttribute("target", "_blank");


// remove: elm.removeAttribute(attrName);



/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element:
const newImg = document.createElement("img");


// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beautiful pikachu image");

//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg);




/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

examples of events
  - mouse events (ex. click, mouseover...)
  - keyboard events (ex. keydown, keypress, keyup)
  - Document (DOMContentLoaded, ...)
  - Full list: https://www.w3schools.com/jsref/dom_obj_event.asp


elm.addEventListener(typeOfEvent, code)

*/

// 
// Example 1: detect when user clicks anywhere in the document
// 

document.addEventListener("click", () => {
    console.log("user clicked.......")
});



//
// Example 2: append a paragraph every time the user clicks on button-2
//

const btn2 = document.getElementById("button-2");

btn2.addEventListener("click", () => {
    // step1: create the element:
    const newP = document.createElement("p");

    // step2: add content or modify (ex. innerHTML...)
    newP.innerText = "hello world";

    //step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("box-2");
    parentElm.appendChild(newP);
})



//
// Example 3: detect keyboard events
//

document.addEventListener("keydown", (event) => {
    if (event.code === 'Space') {
        console.log('user pressed SPACEBAR');
    } else if (event.code === 'ArrowLeft') {
        console.log('user pressed arrow LEFT....');
    } else if (event.code === 'ArrowRight') {
        console.log('user pressed arrow RIGHT....');
    } else if (event.code === 'ArrowUp') {
        console.log('user pressed arrow UP....');
    } else if (event.code === 'ArrowDown') {
        console.log('user pressed arrow DOWN....');
    } else {
        console.log('user pressed other key....');
    }
});



//
// Attach an event listener to multiple elements
//

const allBtn = document.querySelectorAll(".btn");

allBtn.forEach((btnElm) => {
    btnElm.addEventListener("click", () => {
        console.log("user click on one of our COOL BUTTONS...")
    });
});


