let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "../imgs/red.JPG") {
    myImage.setAttribute("src", "../imgs/green.JPG");
  } else {
    myImage.setAttribute("src", "../imgs/red.JPG");

  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字: ");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Your name is:" + myName;
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