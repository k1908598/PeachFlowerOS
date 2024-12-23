let initialX = 0;
let initialY = 0;
let currentX = 0;
let currentY = 0;
let draggedElement;


var welcomeScreen;
var welcomeScreenClose;
var welcomeScreenOpen;//Chat says that even if i declared those globally, if I am trying to use these variables before they are assigned (outside window.onload), they will still be undefined


window.onload = () => {
    updateTime();
    setInterval(updateTime, 1000);

    dragElement(document.getElementById("window"));

    var welcomeScreen = document.querySelector("#welcome");
    var welcomeScreenClose = document.querySelector("#welcomeclose");
    var welcomeScreenOpen = document.querySelector("#welcomeopen");

    if (welcomeScreenClose && welcomeScreen) {
        welcomeScreenClose.addEventListener("click", function () {
            closeWindow(welcomeScreen);
        })
    }

    if (welcomeScreenOpen && welcomeScreen) {

        welcomeScreenOpen.addEventListener("click", function () {
            openWindow(welcomeScreen);
        })
    }

}


function dragElement(element) {


    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = function(e){
            startDragging(e, element);
        };
    }
    else {
        //attach the mousedown listener to the element itself
        element.onmousedown = function(e){
            startDragging(e, element);
        }
    }
}

function startDragging(e, element) {
    e = e || window.event;
    e.preventDefault();

    draggedElement = element;

    initialX = e.clientX;
    initialY = e.clientY;

    document.onmousedown = stopDragging;
    document.onmousedown = dragHandler;
}

function dragHandler(e) {
    e = e || window.event;
    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    draggedElement.style.top = (draggedElement.offsetTop - currentY) + "px";
    draggedElement.style.left = (draggedElement.offsetLeft - currentX) + "px";
}


function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;

    draggedElement = null;
}

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element) {
    element.style.display = "flex";
}

function updateTime() {
    let timeText = document.querySelector("#timeElement");
    timeText.innerHTML = new Date().toLocaleString();
}


