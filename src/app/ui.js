export class UI {
    constructor() {
        this.location = document.getElementById('weather-location')
        this.desc = document.getElementById('weather-description')
        this.string = document.getElementById('weather-string')
        this.humidity = document.getElementById('weather-humidity')
        this.wind = document.getElementById('weather-wind')
    }

    render(clima) {
        this.location.textContent = `${ clima.name } / ${ clima.sys.country }`
        this.desc.textContent = clima.weather[0]['description']
        this.string.textContent = `${ clima.main.temp.toFixed() } °C`
        this.humidity.textContent = `Humedad: ${ clima.main.humidity } %`
        this.wind.textContent = `Viento: ${ clima.wind.speed } m/s`
    }
}