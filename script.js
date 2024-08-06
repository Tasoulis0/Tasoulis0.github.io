
let data = [
    {
        name: "Αγία Παρασκευή",
        num: 78,
        link: "./files/AgiaP.jpg",
        pre: "Η"
    },
    {
        name: "Αγία Φωτεινή",
        num: 104,
        link: "./files/AgiaF.jpg",
        pre: "Η"
    },
    {
        name: "Άγιος Ιωάννης",
        num: 97,
        link: "./files/AgiosI.jpg",
        pre: "Ο"
    },
    {
        name: "Νέφς Αμάρι",
        num: 164,
        link: "./files/NefsA.jpg",
        pre: "Το"
    },
    {
        name: "Άνω Μέρος",
        num: 280,
        link: "./files/AnoM.jpg",
        pre: "Το"
    },
    {
        name: "Αποδούλου",
        num: 216,
        link: "./files/Apodoulou.jpg",
        pre: "Το"
    },
    {
        name: "Απόστολοι",
        num: 184,
        link: "./files/Apostoloi.jpg",
        pre: "Οι"
    },
    {
        name: "Άρδακτος",
        num: 27,
        link: "./files/Ardaktos.jpg",
        pre: "Η"
    },
    {
        name: "Βαθιακό",
        num: 15,
        link: "./files/Bathiako.jpg",
        pre: "Το"
    },
    {
        name: "Βιζάρι",
        num: 67,
        link: "./files/Bizari.jpg",
        pre: "Το"
    },
    {
        name: "Βισταγή",
        num: 219,
        link: "./files/Bistagi.jpg",
        pre: "Η"
    },
    {
        name: "Βολιώνες",
        num: 181,
        link: "./files/Boliones.jpg",
        pre: "Οι"
    },
    {
        name: "Βρύσες",
        num: 94,
        link: "./files/Brises.jpg",
        pre: "Οι"
    },
    {
        name: "Γέννα",
        num: 29,
        link: "./files/Genna.jpg",
        pre: "Η"
    },
    {
        name: "Γερακάρι",
        num: 355,
        link: "./files/Gerakari.jpg",
        pre: "Το"
    },
    {
        name: "Γουργούθοι",
        num: 1,
        link: "./files/Gourgouthi.jpg",
        pre: "Οι"
    },
    {
        name: "Δρυγιές",
        num: 27,
        link: "./files/Drigies.jpg",
        pre: "Οι"
    },
    {
        name: "Ελένες",
        num: 57,
        link: "./files/Elenes.jpg",
        pre: "Οι"
    },
    {
        name: "Θρόνος",
        num: 60,
        link: "./files/Thronos.jpg",
        pre: "Το"
    },
    {
        name: "Καλογέρου",
        num: 127,
        link: "./files/Kalogerou.jpg",
        pre: "Το"
    },
    {
        name: "Καρδάκι",
        num: 38,
        link: "./files/Kardaki.jpg",
        pre: "Το"
    },
    {
        name: "Κλησίδι",
        num: 26,
        link: "./files/Klisidi.jpg",
        pre: "Το"
    },
    {
        name: "Κουρούτες",
        num: 238,
        link: "./files/Kouroutes.jpg",
        pre: "Οι"
    },
    {
        name: "Λαμπιώτες",
        num: 70,
        link: "./files/Lampiotes.jpg",
        pre: "Οι"
    },
    {
        name: "Λοχριά",
        num: 214,
        link: "./files/Loxria.jpg",
        pre: "Η"
    },
    {
        name: "Μέρωνας",
        num: 340,
        link: "./files/Meronas.jpg",
        pre: "Ο"
    },
    {
        name: "Μεσονήσια",
        num: 111,
        link: "./files/Mesonisia.jpg",
        pre: "Τα"
    },
    {
        name: "Μοναστηράκι",
        num: 164,
        link: "./files/Monastiraki.jpg",
        pre: "Το"
    },
    {
        name: "Νίθαυρη",
        num: 312,
        link: "./files/Nithabri.jpg",
        pre: "Η"
    },
    {
        name: "Οψιγιάς",
        num: 25,
        link: "./files/Opsigias.jpg",
        pre: "Ο"
    },
    {
        name: "Παντάνασσα",
        num: 168,
        link: "./files/Pantanassa.jpg",
        pre: "Η"
    },
    {
        name: "Πατσός",
        num: 228,
        link: "./files/Patsos.jpg",
        pre: "Η"
    },
    {
        name: "Πετροχώρι",
        num: 92,
        link: "./files/Petroxori.jpg",
        pre: "Το"
    },
    {
        name: "Πλατάνια",
        num: 218,
        link: "./files/Platania.jpg",
        pre: "Τα"
    },
    {
        name: "Πλάτανος",
        num: 384,
        link: "./files/Platanos.jpg",
        pre: "Ο"
    },
    {
        name: "Ρίζικας",
        num: 2,
        link: "./files/Rizikas.jpg",
        pre: "Ο"
    },
    {
        name: "Σάτα",
        num: 13,
        link: "./files/Sata.jpg",
        pre: "Η"
    },
    {
        name: "Σχολή Ασωμάτων",
        num: 21,
        link: "./files/SxoliA.jpg",
        pre: "Η"
    },
    {
        name: "Φουρφουράς",
        num: 513,
        link: "./files/Fourfouras.jpg",
        pre: "Ο"
    },
    {
        name: "Χωρδάκι",
        num: 5,
        link: "./files/Xordaki.jpg",
        pre: "Το"
    }
];

// mandres 8 

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

const buttonDiv = document.getElementById('buttonDiv');
//------------------------------------------------------

const result = document.getElementById('lose');

document.getElementById('button1').addEventListener('click', handleButtonClick);
document.getElementById('button2').addEventListener('click', handleButtonClick);


//------------------------------------------------------
const text1 = document.getElementById("text1");
const text2= document.getElementById("text2");
const scoreText = document.getElementById("score");

//------------------------------------------------------

function toggleLead(){

    document.getElementById("leaderboard").style.display = "block";
    leadState = 1;
    const actionButton = document.getElementById('leaderboardButton');
    actionButton.disabled = true;

    actionButton.style.transform = 'none';
    actionButton.style.cursor = 'default';
    
    
}



/*ASSIGNMENT OF CSS VARIABLES*/ 
if(screenWidth > LayoutWidth){ //ORIZONTIO 
    document.documentElement.style.setProperty('--transform', `translateX(-${(screenWidth/2.0) }px)`);
}
else{
    document.documentElement.style.setProperty('--transform', `translateY(-${ img2Rect.top - img1Rect.top }px)`);

    if(screenHeight - (parseFloat(img1Comp.height) + parseFloat(img2Comp.height)) - 1.4* parseFloat(but1Comp.height) < 0){ // IF BUTTONS DIV DOESN'T HAVE ENOUGH SPACE MOVE IT INBETWEEN IMGS

        document.documentElement.style.setProperty('--topForButtons', `${parseFloat(img1Comp.height) - parseFloat(but1Comp.height) - 10 }px`);
        document.getElementById("buttonDiv").style.position = 'relative';
        document.getElementById("buttonDiv").style.justifyContent = 'center';
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
            imgElem.style.top = `${parseFloat(img1Comp.height) + parseFloat(img2Comp.height) }px` ;
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

    while(stay === change || prev === change){

        change = getRandomInt(0,maxIndex);
    }
    return change;
}


function setStart(){

    x = getRandomInt(0,maxIndex);
    y = findNext(x,y);

    img1.src = data[x].link;
    img2.src = data[y].link;

    text1.innerText = data[x].name +" \n" + data[x].num + " ΚΑΤΟΙΚΟΙ ";
    text2.innerText = data[y].pre +" "+  data[y].name +" \n EINAI 🔼 ή 🔽 ?" ;
}


setStart();


var pressed = false;
var lost = false;
function handleButtonClick(event) {

    var tmp;
    
    if(pressed){
        return;
    }
    pressed  = true;

    if (event.target.id === 'button1') {

        if(data[x].num <= data[y].num){
            score +=1;
        }
        else{
            lost = true;
        }
    } else if (event.target.id === 'button2') {

        if(data[y].num <= data[x].num){
            score +=1;
        }
        else{
            lost = true;
        }
    }

    scoreText.innerText = "🎯SCORE : "+ `${score}`+" 🎯"
    text2.innerText = data[y].name +"\n" + data[y].num + " ΚΑΤΟΙΚΟΙ ";
           
    setTimeout(() => {

        if(lost){
            lose();
            return;
        }

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

            text1.innerText = data[x].name +"\n" + data[x].num + " ΚΑΤΟΙΚΟΙ";
            text2.innerText = data[y].pre +" "+  data[y].name +" \n EINAI 🔼 ή 🔽 ?" ;
            
            AnImg1.style.opacity = '0';
            AnImg2.style.opacity = '0';

            AnImg1.classList.remove("move-image");
            AnImg2.classList.remove("move-image");

            pressed = false;    
        }, 1300); // Delay in milliseconds (2000 ms = 2 seconds)
        
    },800); 
}



document.getElementById('form').addEventListener('submit',async function(event) {
    event.preventDefault(); // Prevent the default form submission
    var username = document.getElementById('nickname').value;
    
    await fetch(`https://wh.al3xandros.eu/hooks/brd-update?username=${username}&score=${score}`)
    
    location.reload();
    
});


async function fetchData() {
    try {
        const response = await fetch("https://wh.al3xandros.eu/hooks/brd");
        const data = await response.text();
        return data;

    } catch (error) {
        console.error(error);
    }
}

const dataList = document.getElementById('leaderboard');

// Function to create list items from the array and append them to the list
function populateList(array) {

    var count = 0;

    const pos = ['🥇','🥈','🥉','🏅','🏅','🏅','🏅','🏅','🏅','🏅'];

    array.forEach(item => {
        // Create a new <li> element
        const listItem = document.createElement('li');
        
        if (count >= 10){
            return;
        }
        
        // Set the text of the <li> element to the item

        var tmp = item.split(",");

        listItem.textContent = `${pos[count]} `+" " +tmp[1] + " Score :  "  + tmp[0] + `${pos[count]} ` ;
        count+=1;

        
        // Append the <li> element to the <ul> element
        dataList.appendChild(listItem);
    });
}


async function lose(){

    var data = await fetchData();

    data = data.trim();
    data = data.split("\n");

    populateList(data);


    imageDiv.style.display = 'none';
    buttonDiv.style.display = 'none';
    document.body.style.background = 'red';

    result.style.display = 'flex';
    result.style.flexDirection = "column";
 
    document.getElementById("resultID").textContent = "🎯SCORE : " + `${score}`+" 🎯"; 

  

    var dataLen = data.length;

    if(score === 0){
        return;
    }

    if(dataLen > 10){
        
        if(score > parseInt( data[9].split(',')[0]) ){

            document.getElementById("form").style.display = 'block';

            document.getElementById("resultID").innerText = "!! HIGH SCORE !! \n " + "🎯SCORE : " + `${score}`+" 🎯";
            document.body.style.background = 'green';
            document.getElementById("playAgain").style.display = 'none';
        }
    }
    else{
        document.getElementById("form").style.display = 'block';

            document.body.style.background = 'green';
            document.getElementById("playAgain").style.display = 'none';

            document.getElementById("resultID").innerText = "!! HIGH SCORE !! \n " + "🎯SCORE : " + `${score}`+" 🎯";
    }

}



document.getElementById('playAgain').addEventListener('click', function() {
    location.reload(); // Refreshes the page
});



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