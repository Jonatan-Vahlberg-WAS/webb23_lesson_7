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


// get 3 latest tweets 
async function getLatestTweets() {
    try {
        const latestTweets = await Tweet.find().sort({
          createdAt: "desc",
        }).limit(3)
        console.log("latest tweets", latestTweets);
        return latestTweets
    } catch (error) {
        console.error("Error getting latest tweets", error)
    }
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