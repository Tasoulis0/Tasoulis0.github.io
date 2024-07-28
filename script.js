const screenWidth = window.innerWidth;




document.getElementById("button1").addEventListener("click", function() {

    var offset = (screenWidth / 2.0) - 5;

    if (offset < 0){

        result.textContent = "ola gooof";

        offset = screenWidth  / 2.0;
    }

    result.textContent = `offset:${offset}  screen-width:${screenWidth}   `;
    
    
    document.documentElement.style.setProperty('--transform', `translateX(-${offset+10}px)`);
    
    
    document.getElementById("image2").classList.add("move-left");

    setTimeout(() => {
        
        document.getElementById("image1").src = "./files/AnoM.jpg";

    }, 1000); // Delay in milliseconds (2000 ms = 2 seconds)
    
    

});


