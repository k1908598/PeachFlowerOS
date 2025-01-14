// Variables for dragging functionality
let initialX = 0;
let initialY = 0;
let currentX = 0;
let currentY = 0;
let draggedElement = null;
var selectedIcon = undefined;
var content = [
    {
        title:"Allergy",
        date:"12/20/2024",
        content:`
        <p> Allergy</p>
        <img src="musicReview/allergy.jpeg" style="width: 500px; height: auto;">
                    <p> she loves it </p>
                    <blockquote style="background-color: brown; 
                margin-top: 16px; 
                margin-left:0px; 
                margin-right: 0px; 
                padding:16px;
                border-radius:16px;">
                        <i> I Love It
                            </br>
                            ~ Leona
                        </i>
                    </blockquote>
                    <span>
                        You could add more.
                    </span>
        `
    },
    {
        title:"Drama",
        date:"12/20/2024",
        content:`
        <p>Drama</p>
        <img src="musicReview/drama.jpeg" style="width: 500px; height: auto;">
                    <p> she loves it </p>
                    <blockquote style="background-color: brown; 
                margin-top: 16px; 
                margin-left:0px; 
                margin-right: 0px; 
                padding:16px;
                border-radius:16px;">
                        <i> I Love It
                            </br>
                            ~ Leona
                        </i>
                    </blockquote>
                    <span>
                        You could add more.
                    </span>
        `
    },
    {
        title:"Drip",
        date:"12/20/2024",
        content:`
        <p>Drip</p>
        <img src="musicReview/drip.jpeg" style="width: 500px; height: auto;">
                    <p> she loves it </p>
                    <blockquote style="background-color: brown; 
                margin-top: 16px; 
                margin-left:0px; 
                margin-right: 0px; 
                padding:16px;
                border-radius:16px;">
                        <i> I Love It
                            </br>
                            ~ Leona
                        </i>
                    </blockquote>
                    <span>
                        You could add more.
                    </span>
        `
    },
    {
        title:"Nxde",
        date:"12/20/2024",
        content:`
        <p>Nxde</p>
        <img src="musicReview/nxde.jpeg" style="width: 500px; height: auto;">
                    <p> she loves it </p>
                    <blockquote style="background-color: brown; 
                margin-top: 16px; 
                margin-left:0px; 
                margin-right: 0px; 
                padding:16px;
                border-radius:16px;">
                        <i> I Love It
                            </br>
                            ~ Leona
                        </i>
                    </blockquote>
                    <span>
                        You could add more.
                    </span>
        `
    },
    {
        title:"Revenge",
        date:"12/20/2024",
        content:`
        <p>Revenge</p>
        <img src="musicReview/revenge.webp" style="width: 500px; height: auto;">
                    <p> she loves it </p>
                    <blockquote style="background-color: brown; 
                margin-top: 16px; 
                margin-left:0px; 
                margin-right: 0px; 
                padding:16px;
                border-radius:16px;">
                        <i> I Love It
                            </br>
                            ~ Leona
                        </i>
                    </blockquote>
                    <span>
                        You could add more.
                    </span>
        `
    },
    {
        title:"Savage",
        date:"12/20/2024",
        content:`
        <p>Savage</p>
        <img src="musicReview/savage.jpeg" style="width: 500px; height: auto;">
                    <p> she loves it </p>
                    <blockquote style="background-color: brown; 
                margin-top: 16px; 
                margin-left:0px; 
                margin-right: 0px; 
                padding:16px;
                border-radius:16px;">
                        <i> I Love It
                            </br>
                            ~ Leona
                        </i>
                    </blockquote>
                    <span>
                        You could add more.
                    </span>
        `
    },
    {
        title:"Spot",
        date:"12/20/2024",
        content:`
        <p>Spot</p>
        <img src="musicReview/spot.jpeg" style="width: 500px; height: auto;">
                    <p> she loves it </p>
                    <blockquote style="background-color: brown; 
                margin-top: 16px; 
                margin-left:0px; 
                margin-right: 0px; 
                padding:16px;
                border-radius:16px;">
                        <i> I Love It
                            </br>
                            ~ Leona
                        </i>
                    </blockquote>
                    <span>
                        You could add more.
                    </span>
        `
    },
    {
        title:"Supernova",
        date:"12/20/2024",
        content:`
        <p>Supoernova</p>
        <img src="musicReview/supernova.jpeg" style="width: 500px; height: auto;">
                    <p> she loves it </p>
                    <blockquote style="background-color: brown; 
                margin-top: 16px; 
                margin-left:0px; 
                margin-right: 0px; 
                padding:16px;
                border-radius:16px;">
                        <i> I Love It
                            </br>
                            ~ Leona
                        </i>
                    </blockquote>
                    <span>
                        You could add more.
                    </span>
        `
    },
    {
        title:"Toxic Til The End",
        date:"12/20/2024",
        content:`
        <p>Toxic Til The End</p>
        <img src="musicReview/toxic til the end.jpeg" style="width: 500px; height: auto;">
                    <p> she loves it </p>
                    <blockquote style="background-color: brown; 
                margin-top: 16px; 
                margin-left:0px; 
                margin-right: 0px; 
                padding:16px;
                border-radius:16px;">
                        <i> I Love It
                            </br>
                            ~ Leona
                        </i>
                    </blockquote>
                    <span>
                        You could add more.
                    </span>
        `
    }
]
const ArtGalleryContent = [ 
    {
        title:"Art 2",
        date:"12/20/2024",
        content:`
        <p>Art 1</p>
        <img src="WebOSReference.png" style="width: 130px; height: auto; padding: 10px;">
        `
    },
    {
        title:"Art 2",
        date:"12/20/2024",
        content:`
        <p>Art 2</p>
        <img src="WebOSReference.png" style="width: 130px; height: auto; padding: 10px;">
        `
    },
    {
        title:"Art 3",
        date:"12/20/2024",
        content:`
        <p>Art 1</p>
        <img src="WebOSReference.png" style="width: 130px; height: auto;padding: 10px;">
        `
    },
    {
        title:"Art 1",
        date:"12/20/2024",
        content:`
        <p>Art 1</p>
        <img src="WebOSReference.png" style="width: 130px; height: auto;padding: 10px;">
        `
    },
    {
        title:"Art 1",
        date:"12/20/2024",
        content:`
        <p>Art 1</p>
        <img src="WebOSReference.png" style="width: 130px; height: auto;padding: 10px;">
        `
    },
    {
        title:"Art 44",
        date:"12/20/2024",
        content:`
        <p>Art 1</p>
        <img src="WebOSReference.png" style="width: 130px; height: auto;padding: 10px;">
        `
    }
]

window.onload = () => {
    // Update time and start interval
    updateTime();
    setInterval(updateTime, 1000);



    // Welcome Screen
    const welcomeScreen = document.querySelector("#welcome");
    const welcomeScreenClose = document.querySelector("#welcomeclose");

    // Music Review App
    const musicReviewIcon = document.querySelector("#musicReviewIcon");
    const musicReviewApp = document.querySelector("#musicReview");
    const musicReviewClose = document.querySelector("#musicReviewClose");

    // Example App
    const exampleApp = document.querySelector("#exampleApp");

    // Wish List App
    const wishListIcon = document.querySelector("#wishListIcon");
    const wishListApp = document.querySelector("#wishList");
    const wishListClose = document.querySelector("#wishListClose");

    // Art Gallery App
    const artGalleryIcon = document.querySelector("#artGalleryIcon");
    const artGalleryApp = document.querySelector("#artGallery");
    const artGalleryClose = document.querySelector("#artGalleryClose");



    
    const appIcons = document.querySelectorAll(".app-icon");
    appIcons.forEach((icon) => {
        const appId= icon.getAttribute("data-app-id");
        const appElement = document.querySelector(`#${appId}`);

        if (appElement) {
            icon.addEventListener("click", (e) => {
                e.stopPropagation();
                handleIconTap(icon, appElement, e);
            });
        }
        else{
            console.error(`App element not found with data-app-id: ${appId}`);
        }

    });

    // Add functionality for apps
    addAppFunctionality(welcomeScreen, welcomeScreenClose);
    addAppFunctionality(musicReviewApp, musicReviewClose);
    addAppFunctionality(wishListApp, wishListClose);
    addAppFunctionality(artGalleryApp, artGalleryClose);

    // Make draggable windows
    dragElement(welcomeScreen);
    dragElement(musicReviewApp);
    dragElement(exampleApp);
    dragElement(wishListApp);
    dragElement(artGalleryApp);

    console.log("musicReviewApp:", musicReviewApp);//check if element exists

    //set music review content
    setMusicReviewContent(0);
    //ensure sidebar is fully loaded
    for (let i = 0; i < content.length; i++) {
        addToSideBar(i)
      }

    //set art gallery content
    for (let i = 0; i < ArtGalleryContent.length; i++) {
        setArtGalleryContent(i);
      }
    

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

function selectIcon(element){
    element.classList.add("selected");
    selectedIcon = element;
}

function deselectIcon(element){
    element.classList.remove("selected");
    selectedIcon = undefined;
}

function handleIconTap(iconElement, appElement,e){
    e.stopPropagation();
    if (iconElement.classList.contains("selected")){
        //icon opens
        if (appElement.style.display == "none" || appElement.style.display==""){
            openWindow(appElement);
        }
        else{
            closeWindow(appElement);
        }
        deselectIcon(iconElement);
    }
    else{
        selectIcon(iconElement);
    }
}
// Function to add open/close functionality
function addAppFunctionality(appElement, closeButtonElement, openButtonElement = null) {
    // Close button functionality
    if (closeButtonElement) {
        closeButtonElement.addEventListener("click", () => closeWindow(appElement));
    }else{
        console.error("addAppFuncionality: Close button not found");
    }

    // Open button functionality (optional)
    if (openButtonElement) {
        openButtonElement.addEventListener("click", () => openWindow(appElement));
    }
}

// Function to close a window
function closeWindow(element) {
    if (! element){
        console.error("Element not found");
        return;
    }
    element.style.display = "none";
    console.log(`Window closed: ${element.id}`);
}

// Function to open a window
function openWindow(element) {
    element.style.display = "flex";
    element.style.zIndex = getNextZIndex();

    //clear content if is a music review app
    if (element.id == "musicReview"){
        var musicReviewContent = document.querySelector("#musicReviewContent");
        if (!musicReviewContent){
            console.error("Music Review Content element not found");
            return;
        }
        musicReviewContent.innerHTML = "";
    }
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


function addToSideBar(index){
    var sidebar = document.querySelector("#sidebar");

    var note = content[index];
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <p style = "margin: 0px; ">${note.title}</p>
    <p style = "font-size: 12px; margin: 0px;">${note.date}</p>
    <br>
    `;

    newDiv.addEventListener("click", function(){
        setMusicReviewContent(index);
    });
    sidebar.appendChild(newDiv);
}


function setMusicReviewContent(index){
    var musicReviewContent = document.querySelector("#musicReviewContent");
    if (!musicReviewContent){
        console.error("Music Review Content element not found");
        return;
    }
    musicReviewContent.innerHTML = content[index].content;
}

function setArtGalleryContent(index){
    var artGalleryContent = document.querySelector("#artGalleryContent");
    if (!artGalleryContent){
        console.error("Art Gallery Content element not found");
        return;
    }

    artGalleryContent.innerHTML = "";
    //loop through all art items and append them
    ArtGalleryContent.forEach((artItem, index) => {
        const newDiv = document.createElement("div");


        newDiv.classList.add("art-item");
        newDiv.setAttribute("data-index", index);
        
        newDiv.innerHTML = ArtGalleryContent[index].content;
        //newDiv.innerHTML = artItem.content;
        artGalleryContent.appendChild(newDiv);
    });

    // const newDiv = document.createElement("div");
    // newDiv.innerHTML = ArtGalleryContent[index].content;

    // artGalleryContent.appendChild(newDiv);
}
