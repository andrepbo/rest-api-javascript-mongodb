const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(
    () => console.log("Database connected."),
    (err) =>
      console.log(`Could not connect to the database. Error message: ${err}`)
  );
}

module.exports = main;
