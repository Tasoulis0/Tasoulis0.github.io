
const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city");
const result = document.getElementById("result");

const apiKey = '39d38448ec4fe713ca433c96c567a64d'; 

weatherForm.addEventListener("submit",async event =>{

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const WeatherData = await getWeatherData(city);
            displayWeatherInfo(WeatherData);
        }
        catch(error){
            console.error(error);
        }
    }
    else{
        result.textContent = "NO INPUT ERROR"
    }

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error("COULD NOT FIND CITY");
    }
    return await response.json();
}   


function displayWeatherInfo(data){

    const {name: city ,
           main:{temp,humidity}} = data;

    result.textContent += temp;

    console.log(data);
    
}

const screenWidth = window.innerWidth;

const inputWidth = document.getElementById("city").offsetWidth;


document.getElementById("myButton").addEventListener("click", function() {

    var offset = (screenWidth / 2.0) - inputWidth - 5;

    if (offset < 0){

        result.textContent = "ola gooof";

        offset = (screenWidth - inputWidth ) / 2.0;
    }

    result.textContent = `offset:${offset}  screen-width:${screenWidth} inputWidth:${inputWidth}   `;
    
    
    document.documentElement.style.setProperty('--transform', `translateX(-${offset}px)`);

    
    document.getElementById("weather-form").classList.add("move-left");
});


document.addEventListener("DOMContentLoaded", function() {
    const img1 = document.getElementById("image1");
    const img2 = document.getElementById("image2");



    img1.style.width = `${screenWidth / 2 - 10}px`;
    img2.style.width = `${screenWidth / 2 - 10}px`;


    console.log(screenWidth / 2);

});


