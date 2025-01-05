var inputText = document.querySelector('input');
var title = document.querySelector(".text");

function sendText(){
    var text = inputText.value;
    console.log(text);
    title.innerHTML = text; /* innerHTML is a property that allows to change content of the element */
}

var columns = document.querySelectorAll(".col");

function changeSize(event){
    console.log("Column clicked!!!", event.target);

       columns.forEach( (col)=>{
        col.style.width = "25%";
       })
    var column = event.target;
    col.style.width = "50%";
}

window.addEventListener('resize', resizeFooter);
resizeFooter();

function reorganizeLayout() {
    var Footer = document.querySelector('Footer');
    var columns = document.querySelectorAll('.col');
    var screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        Footer.style.flexDirection = 'column';
        columns.forEach((col) => {
            col.style.width = '100%';
        });
    } else {
        Footer.style.flexDirection = 'row';
        columns.forEach((col) => {
            col.style.width = '25%';
        });
    }
}

window.addEventListener('resize', reorganizeLayout);
reorganizeLayout();

function reorganizeItems() {
    var sections = document.querySelectorAll('section');
    var screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        sections.forEach((section) => {
            section.style.width = '100%';
            section.style.display = 'block';
        });
    } else {
        sections.forEach((section) => {
            section.style.width = '25%';
            section.style.display = 'inline-block';
        });
    }
}

window.addEventListener('resize', reorganizeItems);
reorganizeItems();

function resizeImages() {
    var images = document.querySelectorAll('img');
    var screenWidth = window.innerWidth;

    images.forEach((img) => {
        if (screenWidth < 600) {
            img.style.width = '50%';
        } else if (screenWidth < 900) {
            img.style.width = '75%';
        } else {
            img.style.width = '100%';
        }
    });
}

window.addEventListener('resize', resizeImages);
resizeImages();
