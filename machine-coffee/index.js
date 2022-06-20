import _ from 'lodash';
import coffeeStock from './state.js';

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

makeCoffee("robusta", 80);


const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);

console.log(sum);