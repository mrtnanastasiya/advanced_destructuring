
import orderByProps from './js/orderbyprops.js';

const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
};

const orderedProps = orderByProps(obj, ["name", "level"]);
console.log(orderedProps);