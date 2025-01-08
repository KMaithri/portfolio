// Toggle modes
function myfunction(){
    // console.log("before: "+document.getElementById("mode").src);
    if(document.querySelector(".icon").src == "images/darkmode.png"){
        document.querySelector(".icon").src = "images/lightmode.png";
        // console.log("after: "+document.getElementById("mode").src);
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        const nodeList = document.querySelectorAll(".ow");
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].style.backgroundColor = "#585858";
                nodeList[i].style.color = "white";
            }
    }else{
        document.querySelector(".icon").src = "images/darkmode.png";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        const nodeList = document.querySelectorAll(".ow");
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].style.backgroundColor = "#f1f5f9";
                nodeList[i].style.color = "black";
            }
    }
    
}
    