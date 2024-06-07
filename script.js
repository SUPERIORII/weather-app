let apiKey = 'fd591d86d46bb9b5c070325974ad59eb'
//let locationURL = `http://api.openweathermap.org/geo/1.0/direct?q=Monrovia,&appid=${apiKey}`
let DataURL =  `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;


let searchBtn = document.querySelector('.search-btn');


let city = document.querySelector('.search-input');

searchBtn.addEventListener('click', displayLatLon)

function displayLatLon() {
    let cityName = city.value
    let locationURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
        
     fetch(locationURL,{})
    .then(response=>response.json())
    .then(data=>{
        longLat(data[0]);

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}`)
        .then(response=>response.json())
        .then(data=>{
            gatheredData(data)
        })
    })

    
    }
    
    
    function longLat(data) {
        console.log(data);
        }
        
        function gatheredData(data) {
            let cityName = document.querySelector('.city-name')
            if (!city.value)return
            cityName.innerHTML = `City: ${city.value}`

            console.log(cityName);
    console.log(data);
    
    
    let degreeSign = '\u00B0'
    const tempurature = document.querySelector('.tempurature');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const status = document.querySelector('.status');
    //const weatherStatus = document.querySelector('.weather-status');
    const iconCode = data.weather[0].icon;
    const iconURL = `https"//opeanweathermap.org/img/wn/${iconCode}@4x.png`

    console.log(iconURL);

    //navigator.geolocation.getCurrentPosition


    tempurature.innerHTML =``
    wind.innerHTML =``
    humidity.innerHTML =``
   // weatherStatus.innerHTML =``
    status.innerHTML =``

    console.log(wind);

    if(data.cod===200){
        tempurature.innerHTML = `Temperature: ${data.main.temp}${degreeSign}C`
        wind.innerHTML = `wind: ${data.wind.speed}`
        humidity.innerHTML = `Humidy: ${data.main.humidity}%`
        status.innerHTML = `${data.weather[0].description}`

    }
}




