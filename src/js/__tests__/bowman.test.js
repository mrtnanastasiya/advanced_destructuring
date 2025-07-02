import Bowman from '../bowman.js';
import { describe, test, expect } from '@jest/globals';

describe('Проверка создания персонажа Bowman', () => {
    test('Проверка создания персонажа', () => {
        const character = new Bowman('Luis', 'Bowman');
        expect(character).toEqual({
            name: 'Luis',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25
        });
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого имени', () => {
        expect(() => new Bowman('', 'Bowman')).toThrow();
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого типа символа', () => {
        expect(() => new Bowman('Luis', 'InvalidType')).toThrow();
    });
});