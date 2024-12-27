// Variables for dragging functionality
let initialX = 0;
let initialY = 0;
let currentX = 0;
let currentY = 0;
let draggedElement = null;

window.onload = () => {
    // Update time and start interval
    updateTime();
    setInterval(updateTime, 1000);

    // Welcome Screen
    const welcomeScreen = document.querySelector("#welcome");
    const welcomeScreenClose = document.querySelector("#welcomeclose");

    // Music Review App
    const musicReviewApp = document.querySelector("#musicReview");
    const musicReviewClose = document.querySelector("#musicReviewClose");

    // Example App
    const exampleApp = document.querySelector("#exampleApp");

    // Add functionality for apps
    addAppFunctionality(welcomeScreen, welcomeScreenClose);
    addAppFunctionality(musicReviewApp, musicReviewClose);

    // Make draggable windows
    dragElement(welcomeScreen);
    dragElement(musicReviewApp);
    dragElement(exampleApp);
};

// Function to make elements draggable
function dragElement(element) {
    const header = element.querySelector(".windowheader") || element; // Use header if available

    header.onmousedown = (e) => {
        startDragging(e, element);
    };
}

function startDragging(e, element) {
    e.preventDefault();

    draggedElement = element;
    initialX = e.clientX;
    initialY = e.clientY;

    document.onmousemove = dragHandler;
    document.onmouseup = stopDragging;
}

function dragHandler(e) {
    if (!draggedElement) return;

    e.preventDefault();

    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    initialX = e.clientX;
    initialY = e.clientY;

    // Update position of the dragged element
    draggedElement.style.top = (draggedElement.offsetTop + currentY) + "px";
    draggedElement.style.left = (draggedElement.offsetLeft + currentX) + "px";
}

function stopDragging() {
    document.onmousemove = null;
    document.onmouseup = null;
    draggedElement = null;
}

// Function to add open/close functionality
function addAppFunctionality(appElement, closeButtonElement, openButtonElement = null) {
    // Close button functionality
    if (closeButtonElement) {
        closeButtonElement.addEventListener("click", () => closeWindow(appElement));
    }

    // Open button functionality (optional)
    if (openButtonElement) {
        openButtonElement.addEventListener("click", () => openWindow(appElement));
    }
}

// Function to close a window
function closeWindow(element) {
    element.style.display = "none";
    console.log(`Window closed: ${element.id}`);
}

// Function to open a window
function openWindow(element) {
    element.style.display = "flex";
    element.style.zIndex = getNextZIndex();
    console.log(`Window opened: ${element.id}`);
}

// Function to update time
function updateTime() {
    const timeElement = document.querySelector("#timeElement");
    timeElement.textContent = new Date().toLocaleTimeString();
}

// Get the next highest z-index for active windows
function getNextZIndex() {
    let maxZIndex = 10; // Default starting z-index
    document.querySelectorAll(".window").forEach((window) => {
        const zIndex = parseInt(window.style.zIndex) || 0;
        if (zIndex > maxZIndex) maxZIndex = zIndex;
    });
    return maxZIndex + 1;
}
