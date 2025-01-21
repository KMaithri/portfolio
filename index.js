// Toggle modes
function myfunction(){
    // console.log("before: "+document.getElementById("mode").src);
    if(document.querySelector(".icon").src == "https://maithrikarasodi.netlify.app/images/darkmode.png"){
        document.querySelector(".icon").src = "https://maithrikarasodi.netlify.app/images/lightmode.png";
        // console.log("after: "+document.getElementById("mode").src);
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        const nodeList = document.querySelectorAll(".ow");
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].style.backgroundColor = "#585858";
                nodeList[i].style.color = "white";
            }
    }else{
        document.querySelector(".icon").src = "https://maithrikarasodi.netlify.app/images/darkmode.png";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        const nodeList = document.querySelectorAll(".ow");
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].style.backgroundColor = "#f1f5f9";
                nodeList[i].style.color = "black";
            }
    }
    
}

// typewriter effect for title
// var textElement = document.querySelector(".hero-heading");
// console.log( document.querySelector(".hero-heading"));
// const text = "Hi, I'm Maithri Karasodi!";

// let index = 0;

// function typeEffect(){
//     if(index < text.length){
//         textElement.innerHTML = textElement.innerHTML + text.charAt(index);
//         index++;
//         setTimeout(typeEffect,100);
//     }
// }
// if(textElement){
//     typeEffect();
// }else{
//     console.log("it is empty")
// }


    