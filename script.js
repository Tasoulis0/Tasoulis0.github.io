const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const imageDiv = document.getElementById('ImagesDiv');
var AnImg1 = document.createElement('img');
imageDiv.appendChild(AnImg1);


var AnImg2 = document.createElement('img');
imageDiv.appendChild(AnImg2);


function createImg(path , element){

    AnImg1.src = path ;
    AnImg1.classList.add('Myimg');
   
    AnImg1.style.position = 'absolute';
    const computedStyle = getComputedStyle(element);
   
    AnImg1.style.width = computedStyle.width ;
    AnImg1.style.height = computedStyle.height ;

    const rect = element.getBoundingClientRect();
    const containerRect = imageDiv.getBoundingClientRect();
    AnImg1.style.top = (rect.top - containerRect.top) + 'px';
    AnImg1.style.left = (rect.left - containerRect.left) + 'px';

}

function createImg2(path , element){

    AnImg2.src = path ;
    AnImg2.classList.add('Myimg');
    
    AnImg2.style.position = 'absolute';
    const computedStyle = getComputedStyle(element);
   
    AnImg2.style.width = computedStyle.width ;
    AnImg2.style.height = computedStyle.height ;

    const rect = element.getBoundingClientRect();
    const containerRect = imageDiv.getBoundingClientRect();
    AnImg2.style.top = (rect.top - containerRect.top) + 'px';
    AnImg2.style.left = `${screenWidth}` + 'px';

}



document.getElementById("button1").addEventListener("click", function() {

    result.textContent = ` screen-width:${screenWidth} screen-height:${screenHeight}   `;
    
    if(screenWidth > 800){
        document.documentElement.style.setProperty('--transform', `translateX(-${(screenWidth/2.0) }px)`);
    }
    else{
        document.documentElement.style.setProperty('--transform', `translateY(-${(screenHeight/2.0)}px)`);
    }
    
    createImg(document.getElementById('image2').src , document.getElementById('image2'));


    createImg2(document.getElementById('image1').src , document.getElementById('image2'));


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