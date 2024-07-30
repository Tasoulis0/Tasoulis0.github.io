const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

//------------------------------------------------------
const img1 = document.getElementById("image1");
const img1Comp = getComputedStyle(img1);

const img2 = document.getElementById("image2");
const img2Comp = getComputedStyle(img2);

const img1Rect = img1.getBoundingClientRect();
const img2Rect = img2.getBoundingClientRect();

//------------------------------------------------------


const but1 = document.getElementById("button1");
const but1Comp = getComputedStyle(but1);

const imageDiv = document.getElementById('ImagesDiv');
var AnImg1 = document.createElement('img');
imageDiv.appendChild(AnImg1);


var AnImg2 = document.createElement('img');
imageDiv.appendChild(AnImg2);

const LayoutWidth = 830;

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
console.log(parseFloat(img2Rect.top) - parseFloat(img1Rect.top))
console.log(screenHeight - 2 * parseFloat(img1Comp.height) - 1.5*parseFloat(but1Comp.height));
console.log(screenHeight );



function createImg(imgElem , path , element,mode){

    imgElem.src = path ;
    imgElem.classList.add('Myimg');
   
    imgElem.style.position = 'absolute';
    const computedStyle = getComputedStyle(element);
   
    imgElem.style.width = computedStyle.width ;
    imgElem.style.height = computedStyle.height ;

    const rect = element.getBoundingClientRect();
    const containerRect = imageDiv.getBoundingClientRect();
    imgElem.style.top = (rect.top - containerRect.top) + 'px';

    if(mode){ //8A TOPO*ETISEI TIN ANIMATION IMAGE STIN THESI TIN IMAGE2 
        imgElem.style.left = (rect.left - containerRect.left) + 'px';
    }
    else{
        if(screenWidth > LayoutWidth ){
        imgElem.style.left = `${screenWidth}` + 'px';

        }
        else{
            imgElem.style.top = `${2*parseFloat(img1Comp.height)}px` ;
        }
    }
}

document.getElementById("button1").addEventListener("click", function() {

    result.textContent = ` screen-width:${screenWidth} screen-height:${screenHeight}   `;
    
    
    createImg(AnImg1,document.getElementById('image2').src , document.getElementById('image2'),true);

    createImg(AnImg2,document.getElementById('image1').src , document.getElementById('image2'),false);

    console.log(AnImg1);
    console.log(AnImg2);


    document.getElementById("image2").style.opacity = '0';

    AnImg1.classList.add("move-image");
    AnImg2.classList.add("move-image");



    setTimeout(() => {
        
        document.getElementById("image1").src = "./files/AnoM.jpg";
        AnImg1.style.opacity = '0';
        AnImg2.style.opacity = '0';

        document.getElementById("image2").src = "./files/AgiaF.jpg";
        document.getElementById("image2").style.opacity = '1';
        

    }, 1000); // Delay in milliseconds (2000 ms = 2 seconds)
    
       
});

window.addEventListener('resize', function() {
    

    window.location.reload(); 
    
});


function brightenImages() {
    image2.style.filter = 'brightness(100%)';
    newImg.style.filter = 'brightness(100%)';
}

// Function to restore image brightness
function darkenImages() {
    image2.style.filter = 'brightness(50%)';
    newImg.style.filter = 'brightness(50%)';
}

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