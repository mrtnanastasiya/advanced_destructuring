import Swordsman from '../swordsman.js';
import { describe, test, expect } from '@jest/globals';

describe('Проверка создания персонажа Swordsman', () => {
    test('Проверка создания персонажа', () => {
        const character = new Swordsman('Kael', 'Swordsman');
        expect(character).toEqual({
            name: 'Kael',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10
        });
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого имени', () => {
        expect(() => new Swordsman('', 'Swordsman')).toThrow();
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого типа символа', () => {
        expect(() => new Swordsman('Kael', 'InvalidType')).toThrow();
    });
});