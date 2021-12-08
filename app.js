const APY_KEY = ''

let weather = {
  fetchWeather : function (city) {
    fetch (
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APY_KEY}`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
  },
  displayWeather: function(data) {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind
    document.querySelector(".city").textContent = `Wheather in ${name}`
    // document.querySelector(".icon").src = `http://openweathermap.org/img/wn/ ${icon} .png`
    document.querySelector(".description").textContent = description
    document.querySelector(".temp").textContent = `${temp} °C`
    document.querySelector(".humidity").textContent = `Humidity: ${humidity} %`
    document.querySelector(".wind").textContent = `Wind Speed: ${speed} Km/h`
    document.querySelector(".weather").classList.remove(".loading")
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value)
  }
}

document
  .querySelector(".search button")
  .addEventListener("click", function() {
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search()
  }
})

weather.fetchWeather("New York")