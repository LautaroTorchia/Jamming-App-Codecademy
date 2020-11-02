// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

expect('we can use + operator', () =>{
    it('2+2 equals 4', () =>{
        expect(2+2).toBe(4);
    })
})