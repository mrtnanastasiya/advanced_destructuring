import orderByProps from '../orderbyprops.js';
import { describe, test, expect } from '@jest/globals';

describe('Функция orderByProps', () => {
    const obj = {
            name: 'мечник',
            health: 10,
            level: 2,
            attack: 80,
            defence: 40
        };
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);


    test('Проверка сортировки данных в массиве на корректность', () => {
        
        const orderedProps = result;
    
        expect(orderedProps).toEqual([
            {key: "name", value: "мечник"}, 
            {key: "level", value: 2}, 
            {key: "attack", value: 80}, 
            {key: "defence", value: 40}, 
            {key: "health", value: 10}
        ]);
    });

    test('Проверка корректности заполнения массивов: sortedProps и unsortedProps', () => {

        const sortedProps = result.filter(item => order.includes(item.key));
        const unsortedProps = result.filter(item => !order.includes(item.key));

        expect(sortedProps).toEqual([
            { key: 'name', value: 'мечник' },
            { key: 'level', value: 2 },
        ]);

        expect(unsortedProps).toEqual([
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 }
        ]);
    });

    test('Использование hasOwnProperty для проверки существования свойства', () => {
        
        const key = 'name';

        const result = Object.prototype.hasOwnProperty.call(obj, key);

        expect(result).toBeTruthy();
    });
});