/**
 * @jest-environment jsdom
 */
import { pushToHistory } from '../scripts/router.js';

describe('the stack is', () => {
    test('empty at the very start', () => {
        expect(history.state).toBe(null);
        expect(history.length).toBe(1);
    });

    test('length 2, top settings after pushToHistory(settings,3)', () => {
        pushToHistory('settings', 1);
        expect(history.state.page).toBe('settings');
        expect(history.length).toBe(2);
        expect(window.location.href).toBe('http://localhost/#settings');
    });

    test('length 3, top entry4 after pushToHistory(settings,4)', () => {
        pushToHistory('entry',4);
        expect(history.state.page).toBe('entry4');
        expect(history.length).toBe(3);
        expect(window.location.href).toBe('http://localhost/#entry4');
    });

    test('length 4, top undefined after pushToHistory(banana, 2)', () => {
        pushToHistory('banana', 4);
        expect(history.state.page).toBe(undefined);
        expect(history.length).toBe(4);
        expect(window.location.href).toBe('http://localhost/');
    })
});
