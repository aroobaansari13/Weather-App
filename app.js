const apiKey = "0e52fea0e9d09b0cc919a0e454817623";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =  document.querySelector(".weather-icon")

async function checkWeather(city){
   const response =  await fetch(`${apiUrl} ${city} &appid=${apiKey}`);

   if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   }else{
      let data = await response.json();
   
      let cityName =  document.querySelector(".city");
      cityName.innerHTML = data.name;
   
      let cityTemp =  document.querySelector(".temp");
      cityTemp.innerHTML = Math.round(data.main.temp)+"°C";
      
      let cityHumidity =  document.querySelector(".humidity");
      cityHumidity.innerHTML = data.main.humidity+"%";
       
      let cityWind =  document.querySelector(".wind");
      cityWind.innerHTML = data.wind.speed + "Km/h";
   
      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "rain.png";
      }else 
      if(data.weather[0].main == "Clear"){
         weatherIcon.src = "sun1.png";
      }else
      if(data.weather[0].main == "Rain"){
         weatherIcon.src = "rain.png";
      }else
      if(data.weather[0].main == "Drizzle"){
         weatherIcon.src = "drizzle.png";
      }else
      if(data.weather[0].main == "Mist"){
         weatherIcon.src = "mist.png";
      }
   
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
   }
   
}

searchBtn.addEventListener("click" , () =>{
   checkWeather(searchBox.value);
   searchBox.value = '';
})
