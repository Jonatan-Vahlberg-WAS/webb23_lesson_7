const Tweet = require("../models/tweet.model");


// Create tweet
async function createTweet(data) {
  try {
    const tweet = await Tweet.create(data);
    return tweet;
  } catch (error) {
    console.log("error: creating tweet", error);
  }
}


// get 10 latest tweets 
async function getLatestTweets() {
    //TODO
}

async function getUserTweets(userId) {
    try {
        const tweets = await Tweet.find({
            user: userId
        })
        return tweets
    } catch (error) {
        console.error("Error getting user tweets", error)
        return []
    }
}

module.exports = {
    createTweet,
    getLatestTweets,
    getUserTweets
}