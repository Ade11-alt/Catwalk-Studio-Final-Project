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
