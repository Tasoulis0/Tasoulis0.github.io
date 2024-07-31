
let data = [
    {
        name: "ΑΓΙΑ ΦΩΤΕΙΝΗ",
        num: 200,
        link: "./files/AgiaF.jpg"
    },
    {
        name: "ΑΝΩ ΜΕΡΩΣ",
        num: 100,
        link: "./files/AnoM.jpg"
    },
    {
        name: "TASOS",
        num: 500,
        link: "./files/tasos.png"
    }
];

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const LayoutWidth = 830;
const maxIndex = data.length - 1;

var score = 0;
var x = -1;
var y = -1;

//----------------------IMAGE-ELEMENTS----------------------------
const img1 = document.getElementById("image1");
const img1Comp = getComputedStyle(img1);

const img2 = document.getElementById("image2");
const img2Comp = getComputedStyle(img2);

const img1Rect = img1.getBoundingClientRect();
const img2Rect = img2.getBoundingClientRect();

const imageDiv = document.getElementById('ImagesDiv');

var AnImg1 = document.createElement('img');
imageDiv.appendChild(AnImg1);

var AnImg2 = document.createElement('img');
imageDiv.appendChild(AnImg2);
//------------------------------------------------------

const but1 = document.getElementById("button1");
const but1Comp = getComputedStyle(but1);

document.getElementById('button1').addEventListener('click', handleButtonClick);
document.getElementById('button2').addEventListener('click', handleButtonClick);

//------------------------------------------------------
const text1 = document.getElementById("text1");
const text2= document.getElementById("text2");
const scoreText = document.getElementById("score");


//------------------------------------------------------


/*ASSIGNMENT OF CSS VARIABLES*/ 
if(screenWidth > LayoutWidth){ //ORIZONTIO 
    document.documentElement.style.setProperty('--transform', `translateX(-${(screenWidth/2.0) }px)`);
}
else{
    document.documentElement.style.setProperty('--transform', `translateY(-${ img2Rect.top - img1Rect.top }px)`);

    if(screenHeight - 2 * parseFloat(img1Comp.height) - 1.4* parseFloat(but1Comp.height) < 0){
        document.documentElement.style.setProperty('--topForButtons', `${parseFloat(img1Comp.height) - parseFloat(but1Comp.height) - 5 }px`);
        document.getElementById("buttonDiv").style.position = 'relative';
        document.getElementById("buttonDiv").style.justifyContent = 'end';
        document.getElementById("buttonDiv").style.minHeight = '0';
    }

}

/*SETS THE GIVEN IMAGE ELEMENT POSITION TO THE GIVEN IMAGE ELEMENT POSITION AND CHANGES SRC 
    PARAMETERS:() */
function createImg(imgElem , path , position_element , mode){

    imgElem.src = path ;
    imgElem.classList.add('Myimg');
   
    imgElem.style.position = 'absolute';
    const computedStyle = getComputedStyle(position_element);
   
    imgElem.style.width = computedStyle.width ;
    imgElem.style.height = computedStyle.height ;

    const rect = position_element.getBoundingClientRect();
    const containerRect = imageDiv.getBoundingClientRect();
    imgElem.style.top = (rect.top - containerRect.top) + 'px';

    if(mode){ //START POSITION OF ANIMATION IMAGE1 SET TO IMAGE2
        imgElem.style.left = (rect.left - containerRect.left) + 'px';
    }
    else{   //START POSITION OF ANIMATION IMAGE2 SET TO THE EDGE OF THE SCREEN

        if(screenWidth > LayoutWidth ){
        imgElem.style.left = `${screenWidth}` + 'px';
        }
        else{
            imgElem.style.top = `${2*parseFloat(img1Comp.height)}px` ;
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up to ensure min is inclusive
    max = Math.floor(max); // Round down to ensure max is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findNext(stay,change){

    var prev = change;

    change = getRandomInt(0,maxIndex);

    while(stay === change || prev == change){

        change = getRandomInt(0,maxIndex);
    }
    return change;
}


function setStart(){


    x = getRandomInt(0,maxIndex);
    y = findNext(x,y);

    img1.src = data[x].link;
    img2.src = data[y].link;

    text1.innerText = data[x].num + " ΚΑΤΟΙΚΟΙ";
    text2.innerText = data[y].num + " ΚΑΤΟΙΚΟΙ";

}
function lose(){

    console.log("YOU LOST");

}


setStart();


var pressed = false;

function handleButtonClick(event) {

    var tmp;
    
    if(pressed){
        return;
    }
    pressed  = true;


    if (event.target.id === 'button1') {
        console.log('Button 1 was clicked');
        if(data[x].num >= data[y].num){
            score +=1;
        }
        else{
            lose();
            return;

        }
    } else if (event.target.id === 'button2') {
        console.log('Button 2 was clicked');

        if(data[y].num >= data[x].num){
            score +=1;
        }
        else{
            lose();
            return;

        }
       
    }

    scoreText.innerText = "🎯SCORE : "+ `${score}`+" 🎯"


    createImg(AnImg1 , data[y].link , document.getElementById('image2'),true);

    x = findNext(y,x);

    createImg(AnImg2 , data[x].link , document.getElementById('image2'),false);

    tmp = x;
    x = y;
    y = tmp;


    AnImg1.classList.add("move-image");
    AnImg2.classList.add("move-image");

    AnImg1.style.opacity = '1';
    AnImg2.style.opacity = '1';

    
    setTimeout(() => {
        
        img1.src = data[x].link;
        img2.src = data[y].link;

        text1.innerText = data[x].num + " ΚΑΤΟΙΚΟΙ";
        text2.innerText = data[y].num + " ΚΑΤΟΙΚΟΙ";
        


        AnImg1.style.opacity = '0';
        AnImg2.style.opacity = '0';

        AnImg1.classList.remove("move-image");
        AnImg2.classList.remove("move-image");

        pressed = false;    
    }, 1300); // Delay in milliseconds (2000 ms = 2 seconds)
    
       
}



// window.addEventListener('resize', function() {
    

//     window.location.reload(); 
    
// });

// Add event listeners to buttons
var button1 = document.getElementsByClassName('higherButton');

// Iterate over the HTMLCollection and add event listeners
Array.from(button1).forEach(button => {
    button.addEventListener('mouseover', () =>{ img2.style.filter = 'brightness(100%)'; AnImg1.style.filter = 'brightness(100%)';} );
    button.addEventListener('mouseout', () =>{ img2.style.filter = 'brightness(60%)'; AnImg1.style.filter = 'brightness(60%)';});
});


var button2  = document.getElementsByClassName('lowerButton');
Array.from(button2).forEach(button => {
    button.addEventListener('mouseover', () =>{ img1.style.filter = 'brightness(100%)'; AnImg2.style.filter = 'brightness(100%)';});
    button.addEventListener('mouseout',  () =>{ img1.style.filter = 'brightness(60%)';  AnImg2.style.filter = 'brightness(60%)';});
});

