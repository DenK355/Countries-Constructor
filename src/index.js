'use strict'

class country {

    constructor(title, capital, population, area) {
        this.title = title;
        this.capital = capital;
        this.population = population;
        this.area = area;
    }
    
    showCountry() {
        return `Страна ${this.title}, столица ${this.capital}, популяция ${this.population}, площадь ${this.area}`
    }
}

const Ukraine = new country('Ukraine', 'Kyiv', 31_000_000, 603_628);

const Poland = new country('Poland', 'Warsaw', 37_800_000, 312_685);

function keyInfoObject(obj){

    if(typeof obj === 'object') {

        for (let key in obj) {

            if (typeof obj[key] !== 'function') {
                console.log(`${key}: ${obj[key]}`);
            }
    
        }

    }else {
        console.log('Передайте объект!')
    }

}


keyInfoObject(Ukraine);
console.log('---------------')
keyInfoObject(Poland);
