export default function caesarCipher(word, key) {
    // have a list of all the characters
    // split the word into array
    // loop over each character, first get their position
    //      in the list
    // then add additional steps based on the key, and do mod 26
    //      to wrap around
    if (!word || (!key && key !== 0)) return null;

    const uppercaseLetters = Array.from({ length: 26 }, (_, index) =>
        String.fromCharCode(65 + index)
    );

    const upperCaseWord = word.toUpperCase();

    const stringArray = upperCaseWord.split('');
    let cipher = '';

    stringArray.forEach((letter) => {
        const index = uppercaseLetters.indexOf(letter);
        if (index === -1) {
            cipher += letter;
        } else {
            const encryptedIndex = (index + key) % 26;
            cipher += uppercaseLetters[encryptedIndex];
        }
    });

    return cipher;
}
