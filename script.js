const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;



document.getElementById("button1").addEventListener("click", function() {

    var offset = (screenWidth / 2.0) - 5;

    if (offset < 0){

        result.textContent = "ola gooof";

        offset = screenWidth  / 2.0;
    }

    result.textContent = `offset:${offset}  screen-width:${screenWidth}   `;
    
    if(screenWidth > 800){
        document.documentElement.style.setProperty('--transform', `translateX(-${(screenWidth/2.0)+10}px)`);
    }
    else{
        document.documentElement.style.setProperty('--transform', `translateY(-${(screenHeight/2.0)+10}px)`);
        
    }
    
    document.getElementById("image2").classList.add("move-left");

    setTimeout(() => {
        
        document.getElementById("image1").src = "./files/AnoM.jpg";

    }, 1000); // Delay in milliseconds (2000 ms = 2 seconds)
    
    

});


