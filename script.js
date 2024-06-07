let apiKey = 'fd591d86d46bb9b5c070325974ad59eb'
//let locationURL = `http://api.openweathermap.org/geo/1.0/direct?q=Monrovia,&appid=${apiKey}`
let DataURL =  `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;


let searchBtn = document.querySelector('.search-btn');



searchBtn.addEventListener('click', displayLatLon)

function displayLatLon() {
    let cityName = document.querySelector('.search-input').value;
    let locationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
    
    if (!cityName) {
        return
    } else if(cityName)
        
    
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
    console.log(data);
    
    let degreeSign = '\u00B0'
    const tempurature = document.querySelector('.tempurature');
    const wind = document.querySelectorAll('.wind');
    const humidity = document.querySelector('.humidity');
    const status = document.querySelector('.status');
    //const weatherStatus = document.querySelector('.weather-status');
    const iconCode = data.weather[0].icon;
    const iconURL = `https"//opeanweathermap.org/img/wn/${iconCode}@4x.pmg`

    console.log(iconURL.src);

    console.log();


    tempurature.innerHTML =``
    wind.innerHTML =``
    humidity.innerHTML =``
   // weatherStatus.innerHTML =``
    status.innerHTML =``

    if(data.cod===200){
        tempurature.innerHTML = `Temperature: ${data.main.temp}${degreeSign}C`
        wind.innerHTML = `wind: ${data.wind.speed}`
        humidity.innerHTML = `Humidy: ${data.main.humidity}%`
        status.innerHTML = `${data.weather[0].description}`

    }
}




