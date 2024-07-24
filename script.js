
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

    result.textContent = temp;

    console.log(data);
    
}


document.getElementById("myButton").addEventListener("click", function() {

    const screenWidth = window.innerWidth;

    const inputWidth = document.getElementById("city").offsetWidth;

    const offset = (screenWidth / 2.0) - inputWidth - 5;

    result.textContent = `offset:${offset}  sreenwidth:${screenWidth} inputWidth:${inputWidth}`;
    
    
    document.documentElement.style.setProperty('--transform', `translateX(-${offset}px)`);

    
    document.getElementById("weather-form").classList.add("move-left");
});

