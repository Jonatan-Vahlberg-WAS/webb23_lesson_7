const contents = [
    "I'm a tweet",
    "I'm a tweet too",
    "The quick brown fox jumps over the lazy dog",
    "I'm a tweet 3",
    "I'm a tweet 4",
    "I'm a tweet 5",
]

function getRandomTweet(user) {
    const randomIndex = Math.floor(Math.random() * contents.length);
    return {
        user: user._id,
        content: contents[randomIndex]
    }
}

module.exports = {
    getRandomTweet
}