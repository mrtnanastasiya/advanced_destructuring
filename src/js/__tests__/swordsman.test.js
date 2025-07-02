import Undead from '../undead.js';
import { describe, test, expect } from '@jest/globals';

describe('Проверка создания персонажа Undead', () => {
    test('Проверка создания персонажа', () => {
        const character = new Undead('Eve', 'Undead');
        expect(character).toEqual({
            name: 'Eve',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25
        });
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого имени', () => {
        expect(() => new Undead('', 'Undead')).toThrow();
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого типа символа', () => {
        expect(() => new Undead('Eve', 'InvalidType')).toThrow();
    });
});