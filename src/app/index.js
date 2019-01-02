import Style from './main.css'
import { Clima } from './weather'
import { UI } from './ui'
import { Almacenar } from './store'
import { Traducir } from './translate'

const traducir = new Traducir()

const almacenar = new Almacenar()

const { ciudad, pais } = almacenar.getLocationData()

const ui = new UI()

const clima = new Clima(ciudad, pais)

async function fetchClima() {
    
    const respuesta = await clima.getClima()

    const datos = await respuesta.json()

    const translatedName = await traducir.getTranslate([datos.name])

    const translatedNameJSON = await translatedName.json()

    const translatedDesc = await traducir.getTranslate(datos.weather[0]['description'])

    const translatedDescJSON = await translatedDesc.json()

    datos.name = translatedNameJSON.text[0]
    datos.weather[0]['description'] = translatedDescJSON.text[0]
    
    ui.render(datos)

}

document.getElementById('w-change-btn').addEventListener('click', e => {
    e.preventDefault()
    const ciudad = document.getElementById('city').value
    const pais = document.getElementById('countryCode').value
    clima.changeLocation(ciudad, pais)
    almacenar.setLocationData(ciudad, pais)
    fetchClima()
})

document.addEventListener('DOMContentLoaded', fetchClima)
