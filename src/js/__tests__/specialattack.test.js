import extractSpecials from '../specialattack.js';
import { describe, test, expect } from '@jest/globals';

describe('Функция extractSpecials', () => {

    test('Проверка извлечения данных из объекта character в массив на корректность', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
                }, 
                {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
                // <- обратите внимание, описание "засекречено"
                }
            ]	
        };

        const result = extractSpecials(character);

        expect(result).toEqual([
            {id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...'},
            {id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...'} 
        ]);
    });

    test('Проверка наличия свойства special в объекте character', () => {
        const characterWithoutSpecial = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10
        };

        const result = extractSpecials(characterWithoutSpecial);

        expect(result).toEqual([]);
    });
});