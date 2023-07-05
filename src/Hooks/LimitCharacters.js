const limitCharacters = (content, limit) => {
    if (content.length <= limit) {
        return content;
    } else {
        return content.substring(0, limit) + "...";
        // Or using slice: return content.slice(0, limit) + "...";
    }
};
export default limitCharacters;