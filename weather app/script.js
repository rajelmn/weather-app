const input = document.getElementById('input');
const search = document.getElementById('search') 
const degrees = document.getElementById("degrees");
const weatherStatus = document.getElementById("status");
const main = document.querySelector('main');
const cloudImage = document.querySelector(".cloud");
const clearImage = document.querySelector(".clear")

search.addEventListener('click', async () => {
        try {
      const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=cb642d8bcb13d37ea189cb1e1b28dd61`);
      const response = await weatherData.json();
            
      console.log(response.main.temp) // debugging purpose
            
      const weatherCalc = Math.round(response.main.temp - 273.15)
      degrees.innerHTML = weatherCalc + "°C";
      
      if(weatherCalc > 18) {
          clearImage.style.display = 'inline';
          cloudImage.style.display = 'none'
      } else {
          cloudImage.style.display = 'inline';
          clearImage.style.display = 'none'
      }
      
      main.style.display = 'block';
      }
      catch {
          alert(`${input.value} is not a valid city`)
      }
  })
    

input.addEventListener('keydown', () => {
    if(!input.value) {
        main.style.display = 'none'
    }
})

