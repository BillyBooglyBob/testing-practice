export default function capitalise(word) {
    if (!word) return null;

    return word.charAt(0).toUpperCase() + word.slice(1);
}
