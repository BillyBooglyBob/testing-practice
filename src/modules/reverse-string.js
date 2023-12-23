export default function reverseString(word) {
    if (!word) return null;

    const stringArray = word.split('');
    let reversedString = '';
    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversedString += stringArray[i];
    }

    return reversedString;
}
