let initialX = 0;
let initialY = 0;
let currentX = 0;
let currentY = 0;


dragElement(document.getElementById("window"));


function dragElement(element){


    if (document.getElementById(element.id + "header")){
        document.getElementById(element.id + "header").onmousedown = startDragging;
    }
    else{
        element.onmousedown = startDragging;
    }
}

function startDragging(e){
    e = e || window.event;
    e.preventDefault();

    initialX = e.clientX;
    initialY = e.clientY;

    document.onmousedown = stopDragging;
    document.onmousedown = dragHandler;
}

function dragHandler(e){
    e = e || window.event;
    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = (element.offsetTop - currentY)+"px";
    element.style.left = (element.offsetLeft - currentX)+"px";
}


function stopDragging(){
    document.onmouseup = null;
    document.onmousemove = null;
}
function updateTime() {
    let timeText = document.querySelector("#timeElement");
    timeText.innerHTML = new Date().toLocaleString();
}

window.onload=()=>{
    updateTime();
    setInterval(updateTime, 1000);
}

