//Ani Naredla, Task 5

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const arr = [];
    if (numbers.length <= 1) {
        arr[0] = numbers[0];
        arr[1] - numbers[0];
    } else if (numbers.length > 1) {
        arr[0] = numbers[0];
        arr[1] = numbers[numbers.length - 1];
    }
    return arr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const strnum = numbers.map((num: string): number => Number(num));
    return strnum;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const arr = amounts.map((amount) =>
        amount[0] === "$" ? amount.replace("$", "") : amount
    );
    return arr.map((elem: string): number => Number(elem));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let arr = messages.map((msg: string): string =>
        msg[msg.length - 1] === "!" ? msg.toUpperCase() : msg
    );

    arr = arr.filter((msg: string): boolean => msg[msg.length] !== "?");
    return arr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shorts = words.filter((word: string): boolean => word.length < 4);
    return shorts.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let isrgb = true;
    const colors2 = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (colors.length > colors2.length) {
        isrgb = false;
    }
    return isrgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // find sum
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    // convert sum and num array to str
    let addstr = sum.toString() + "=";
    // make "sum=" as str start AND then append "num+"
    addends.map((num: number) => (addstr += num.toString() + "+"));
    // remove last "+" and return str
    addstr = addstr.slice(0, -1);
    return addstr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newvals = [...values];
    let num = 0;
    newvals.map((val: number) => (val < 0 ? (num += val) : (num += 0)));
    if (num < 0) {
        const firstnegativeidx = values.findIndex(
            (val: number): boolean => val < 0
        );
        const sumvals = newvals.slice(0, firstnegativeidx);
        const sum = sumvals.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newvals.splice(firstnegativeidx + 1, 0, sum);
    }
    return newvals;
}
