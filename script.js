const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const imageDiv = document.getElementById('ImagesDiv');
const newImg = document.createElement('img');

function createImg(){

    newImg.src = './files/AgiaF.jpg';
    newImg.classList.add('Myimg');
    newImg.style.opacity = '1';
    newImg.style.position = 'absolute';
    const image2 = document.getElementById('image2');
    const computedStyle = getComputedStyle(image2);
   
    newImg.style.width = computedStyle.width;
    newImg.style.height = computedStyle.height;

    const rect = image2.getBoundingClientRect();
    const containerRect = imageDiv.getBoundingClientRect();
    newImg.style.top = (rect.top - containerRect.top) + 'px';
    newImg.style.left = (rect.left - containerRect.left) + 'px';

    return newImg;
}





document.getElementById("button1").addEventListener("click", function() {

    result.textContent = ` screen-width:${screenWidth} screen-height:${screenHeight}   `;
    
    if(screenWidth > 800){
        document.documentElement.style.setProperty('--transform', `translateX(-${(screenWidth/2.0)+10}px)`);
    }
    else{
        document.documentElement.style.setProperty('--transform', `translateY(-${(screenHeight/2.0)+10}px)`);
    }
    
    document.getElementById("image2").classList.add("move-left");

    var newImg = createImg();


    setTimeout(() => {
        
        document.getElementById("image1").src = "./files/AnoM.jpg";
        document.getElementById("image2").style.opacity = '0';
        imageDiv.appendChild(newImg);

    }, 1000); // Delay in milliseconds (2000 ms = 2 seconds)
    
   
    imageDiv.appendChild(newImg);
    
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
var buttons = document.getElementsByClassName('higherButton');

// Iterate over the HTMLCollection and add event listeners
Array.from(buttons).forEach(button => {
    button.addEventListener('mouseover', () =>{ image2.style.filter = 'brightness(100%)';} );
    button.addEventListener('mouseout', () =>{ image2.style.filter = 'brightness(60%)';});
});


buttons  = document.getElementsByClassName('lowerButton');
Array.from(buttons).forEach(button => {
    button.addEventListener('mouseover', brightenImages);
    button.addEventListener('mouseout', darkenImages);
});