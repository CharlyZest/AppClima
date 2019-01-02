export class Traducir {
    constructor() {
        this.apikey = 'trnsl.1.1.20190102T020618Z.3108b722d7923cf5.ab85d38df2bb87bef32987f716888e585c3bbb2a'
        this.text
    }

    async getTranslate(texto) {
        this.text = texto
        let URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${ this.apikey }&text=${ this.text }&lang=en-es`
        const translated = await fetch(URL)
        return translated
    }
}