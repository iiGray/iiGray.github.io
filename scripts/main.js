let myImage = document.querySelector("img");
let myHeading = document.querySelector("h1");
let myhtml = document.querySelector("html");
let mybody = document.querySelector("body");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "./imgs/red.JPG") {
    myImage.setAttribute("src", "./imgs/green.JPG");
    myHeading.style.color="#2a6ea1";
    myHeading.textContent="Green Landscape";
    myhtml.style.backgroundColor="#a9f7b4";
    mybody.style.backgroundColor="#097a4b";
    mybody.style.color="#ffffff";
  } else {
    myImage.setAttribute("src", "./imgs/red.JPG");
    myHeading.style.color="#67005b";
    myHeading.textContent="Red Landscape";
    myhtml.style.backgroundColor="#e2c8c8";
    mybody.style.backgroundColor="#bd3504";
    mybody.style.color="#000000";
  }
};


let myButton = document.querySelector("button");
function setUserName() {
    let myName = prompt("请输入你的名字: ");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello, " + myName + "  !!! ";
}
  
myButton.onclick=function(){
    localStorage.setItem("name","");
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        let storedName = localStorage.getItem("name");
        myHeading.textContent = "Your Name is: " + storedName;
    }
}