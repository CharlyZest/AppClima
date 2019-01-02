export class Clima {
    constructor (ciudad, pais) {
        this.apiKey = '22020b4daf8ffa8aa6bda26b41604ae6'
        this.ciudad = ciudad
        if (!pais) {
            this.pais = undefined
        } else {
            this.pais = pais
        }
    }

    async getClima() {
        let URI = '';
        if (!this.pais == undefined) {
            URI = `https://api.openweathermap.org/data/2.5/weather?q=${ this.ciudad },${ this.pais }&appid=${ this.apiKey }&units=metric`
        } else {
            URI = `https://api.openweathermap.org/data/2.5/weather?q=${ this.ciudad }&appid=${ this.apiKey }&units=metric`
        }
        const data = await fetch(URI)
        return data
    }

    changeLocation(ciudad, pais) {
        this.ciudad = ciudad
        if (!pais) {
            this.pais = undefined
        } else {
            this.pais = pais
        }
    }
}