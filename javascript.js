
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'aec21468b6msh72abfae61e6910ep1ddbe5jsn5cf6a7094288',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};



getweather= (city) =>{
  cityname.innerHTML=city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response => response.json())
.then(response => {console.log(response)


  cloud_pct.innerHTML = response.cloud_pct
  feels_like.innerHTML = response.feels_like
  humidity.innerHTML = response.humidity
  humidity1.innerHTML = response.humidity
  max_temp.innerHTML = response.max_temp
  min_temp.innerHTML = response.min_temp
  sunrise.innerHTML = response.sunrise
  sunset.innerHTML =response.sunset
  temp.innerHTML = response.temp
  temp1.innerHTML = response.temp
  // wind_degrees.innerHTML = response.wind_degrees
  wind_speed.innerHTML = response.wind_speed
  wind_speed1.innerHTML = response.wind_speed

})


.catch(err => console.error(err))

}

submit.addEventListener("click", (e)=>
{
  e.preventDefault()
  getweather(city.value)
})

getweather('Delhi')






// async function fetchData() {
//   try {
//     const response = await fetch(url, options);
//     let result = await response.json(); // Parse response body as JSON
    
      // {cloud_pct.innerHTML = result.cloud_pct
      // feels_like.innerHTML = result.feels_like
      // humidity.innerHTML = result.humidity
      // max_temp.innerHTML = result.max_temp
      // min_temp.innerHTML = result.min_temp
      // sunrise.innerHTML = result.sunrise
      // sunset.innerHTML =result.sunset
      // temp.innerHTML = result.temp
      // wind_degrees.innerHTML = result.wind_degrees
      // wind_speed.innerHTML = result.wind_speed

//       console.log(result);}
  
    
    
   
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();
