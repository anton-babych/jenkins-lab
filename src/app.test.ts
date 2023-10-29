import {describe, expect, test} from '@jest/globals';
import {INVALID_STRING_VALUE_ERROR} from "./Stack";
import {Stack} from "./Stack";

describe("notepad", () => {
    test("push should add a valid value to the top", () => {
        const notePad = new Stack<string>();

        let value1 = 'test1';
        let value2 = 'test2';

        notePad.push(value1);
        notePad.push(value2);

        expect(notePad.size).toBe(2);
        expect(notePad.top?.value).toBe(value2);
    });

    test("push shouldn't add a invalid value", () => {
        const notePad = new Stack<string>();

        let value1 = 'validvalue';
        let value2 = 'test2test2test2test2test2test2test2test2test2test2';

        notePad.push(value1);

        try {
            notePad.push(value2);
        } catch (e) {
            console.log(e.message);
            expect(e.message).toBe(INVALID_STRING_VALUE_ERROR);
        }

        expect(notePad.size).toBe(1);
        expect(notePad.top?.value).toBe(value1);
    });

    test("push should not add undefined value", () => {
        const notePad = new Stack<string>();

        notePad.push(undefined);

        expect(notePad.size).toBe(0);
    });

    test("push should throw error to invalid string", () => {
        const notePad = new Stack<string>();

        expect(() => notePad.push('1'))
            .toThrow(INVALID_STRING_VALUE_ERROR);
        expect(() => notePad.push('123456789123456789'))
            .toThrow(INVALID_STRING_VALUE_ERROR);

        expect(notePad.size).toBe(0);
    });

    test("pop should remove and return the value from the top", () => {
        const notePad = new Stack();

        notePad.push('12345');
        notePad.push('123456');

        const poppedValue = notePad.pop();

        expect(poppedValue).toBe('123456');
        expect(notePad.size).toBe(1);
        expect(notePad.top?.value).toBe('12345');
    });

    test("pop should return null if is empty", () => {
        const notePad = new Stack();

        const poppedValue = notePad.pop();

        expect(poppedValue).toBe(null);
        expect(notePad.size).toBe(0);
    });

    test("peek should return the value from the top without removing it", () => {
        const notePad = new Stack();

        notePad.push('12345');
        notePad.push('123456');

        const peekedValue = notePad.peek();

        expect(peekedValue).toBe('123456');
        expect(notePad.size).toBe(2);
        expect(notePad.top?.value).toBe('123456');
    });

    test("peek if is empty", () => {
        const notePad = new Stack();
        const peekedValue = notePad.peek();

        expect(peekedValue).toBe(null);
        expect(notePad.size).toBe(0);
        expect(notePad.top?.value).toBe(undefined);
    });
});
