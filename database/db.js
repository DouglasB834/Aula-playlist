const mongodb = require("mongoose");
mongodb.set("strictQuery", true);
const connectToDatabase = async () => {
  await mongodb
    .connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo bd Conectato!"))
    .catch((error) => console.error(error));
};

module.exports = connectToDatabase;
