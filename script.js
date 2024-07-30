const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const img1 = document.getElementById("image1");
const img1Comp = getComputedStyle(img1);

const but1 = document.getElementById("button1");
const but1Comp = getComputedStyle(but1);

const imageDiv = document.getElementById('ImagesDiv');
var AnImg1 = document.createElement('img');
imageDiv.appendChild(AnImg1);


var AnImg2 = document.createElement('img');
imageDiv.appendChild(AnImg2);



if(screenWidth > 1040){
    document.documentElement.style.setProperty('--transform', `translateX(-${(screenWidth/2.0) }px)`);
}
else{
    document.documentElement.style.setProperty('--transform', `translateY(-${(screenHeight/2.0)}px)`);

    if(screenHeight - 2 * parseFloat(img1Comp.height) - 1.2* parseFloat(but1Comp.height) < 0){
        document.documentElement.style.setProperty('--topForButtons', `${parseFloat(img1Comp.height) - parseFloat(but1Comp.height) - 5 }px`);
        document.getElementById("buttonDiv").style.position = 'relative';
        document.getElementById("buttonDiv").style.justifyContent = 'end';
        document.getElementById("buttonDiv").style.minHeight = '0';
    }

}

console.log(screenHeight - 2 * parseFloat(img1Comp.height) - 1.2*parseFloat(but1Comp.height));
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

    if(mode){
        imgElem.style.left = (rect.left - containerRect.left) + 'px';
    }
    else{
        imgElem.style.left = `${screenWidth}` + 'px';
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



// function brightenImages() {
//     image2.style.filter = 'brightness(100%)';
//     newImg.style.filter = 'brightness(100%)';
// }

// // Function to restore image brightness
// function darkenImages() {
//     image2.style.filter = 'brightness(50%)';
//     newImg.style.filter = 'brightness(50%)';
// }

// // Add event listeners to buttons
// var buttons = document.getElementsByClassName('higherButton');

// // Iterate over the HTMLCollection and add event listeners
// Array.from(buttons).forEach(button => {
//     button.addEventListener('mouseover', () =>{ image2.style.filter = 'brightness(100%)';} );
//     button.addEventListener('mouseout', () =>{ image2.style.filter = 'brightness(60%)';});
// });


// buttons  = document.getElementsByClassName('lowerButton');
// Array.from(buttons).forEach(button => {
//     button.addEventListener('mouseover', brightenImages);
//     button.addEventListener('mouseout', darkenImages);
// });