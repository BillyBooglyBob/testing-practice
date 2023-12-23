export default function analyseArray(arr) {
    // get the average
    // get max
    // get min
    // get length
    // save all inside an object and return it
    if (!arr || arr.length === 0) return null;

    let nonNumeric = false;

    let averageVal = 0;
    let minVal = arr[0];
    let maxVal = arr[0];
    const arrLength = arr.length;

    // check if it is not a number, if so, return -1
    arr.forEach((number) => {
        if (typeof number !== 'number' || Number.isNaN(number)) {
            nonNumeric = true;
            return;
        }
        averageVal += number;

        if (number > maxVal) maxVal = number;
        if (number < minVal) minVal = number;
    });

    if (nonNumeric) {
        return -1;
    }

    averageVal /= arrLength;

    const object = {
        average: averageVal,
        min: minVal,
        max: maxVal,
        length: arrLength
    };

    return object;
}
