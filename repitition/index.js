const mongoose = require("mongoose");
const {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  updateUserEmail,
  deleteUserById,
} = require("./controllers/user.controller");
const { getRandomUser } = require("./utils/factories/userFactory");
const { createTweet, getUserTweets, getLatestTweets } = require("./controllers/tweet.controller");
const { getRandomTweet } = require("./utils/factories/tweetFactory");

const uri = "mongodb://127.0.0.1:27017/l7_rep";

// Mogoose object id

function run() {
  // Mongoose connect
  mongoose
    .connect(uri)
    .then(async () => {
      console.log("Connected to mongoDB");

      // const user1 = await createUser(getRandomUser());
      const users = await getUsers();
      // const users1 = await getUsers({ firstName: "Eve"});
      let user1 = await getUserById("65fbf3769a71ab607bc86167");
      let user2 = await getUserByEmail("name+1@example.com");
      console.log(users);
      console.log("user by id:", user1.firstName);
      console.log("user by email:", user2?.email);
      user1 = await updateUser(user1.id, {
        firstName: getRandomUser().firstName,
      });
      // user2 = await updateUserEmail(user2.id, getRandomUser().email);
      console.log("user by id after update:", user1.firstName);
      // console.log("user by email after update:", user2.email);

      let user3 = await createUser(getRandomUser())
      const deleted = await deleteUserById("65fbf3769a71ab607bc86168");
      console.log("User was deleted: ", deleted)

      let userTweets = await getUserTweets(user1?.id)
      console.log("User tweets: ", userTweets.length)

      await createTweet({
        user: user1._id,
        content: "Jävla skit hemsida"
      })

      let latestTweets = await getLatestTweets()


      mongoose
        .disconnect()
        .then(() => {
          console.log("Disconnected from mongoDB");
        })
        .catch((err) => {
          console.error("Error: disconnecting", err);
        });
    })
    .catch((err) => {
      console.error("Error: Connecting", err);
      mongoose.disconnect();
    });
}

run();
