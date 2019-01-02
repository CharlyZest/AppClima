export class Almacenar {
    constructor() {
        this.ciudad
        this.pais
        this.defaultCiudad = 'Mexico City'
        this.defaultPais = 'MX'
    }

    setLocationData(ciudad, pais) {
        localStorage.setItem('ciudad', ciudad)
        localStorage.setItem('pais', pais)
    }

    getLocationData() {
        if (localStorage.getItem('ciudad') === null) {
            this.ciudad = this.defaultCiudad
        } else {
            localStorage.getItem('ciudad')
        }
        if (localStorage.getItem('ciudad') === null) {
            this.pais = this.defaultPais
        } else {
            localStorage.getItem('pais')
        }

        return {
            ciudad: this.defaultCiudad,
            pais: this.pais
        }
    }
}
