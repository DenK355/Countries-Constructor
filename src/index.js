'use strict'

function Country(title, capital, population, area) {

        this.title = title;
        this.capital = capital;
        this.population = population;
        this.area = area;
        
        this.showCountry = function() {
        return `Страна ${this.title}, столица ${this.capital}, популяция ${this.population}, площадь ${this.area}`
    }
}

const ukraine = new Country('Ukraine', 'Kyiv', 31_000_000, 603_628);

const poland = new Country('Poland', 'Warsaw', 37_800_000, 312_685);

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


keyInfoObject(ukraine);
console.log('---------------')
keyInfoObject(poland);
