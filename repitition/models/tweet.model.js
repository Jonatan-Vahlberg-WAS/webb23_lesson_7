const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true, minLength: 1, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);
// Handle language filter replace "fan", "helvete" with ****
tweetSchema.pre("save", async function (next) {
  const tweet = this;
  console.log("Pre save: ", tweet)
  if (tweet.isModified("content") || tweet.isNew) {
    const swearWords = ["fan", "helvete", "helvetes", "jävla", "skit"];
    let contentWords = tweet.content.split(" ");
    contentWords = contentWords.map((word) => {
        if (swearWords.includes(word.toLowerCase())) {
          console.log("Banned Word detected", word)
        return "****";
      }
      return word;
    });
    tweet.content = contentWords.join(" ");
  }
    return next()
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
