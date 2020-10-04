const fs = require("fs-extra");
// Script to create a file
try {
  fs.copySync("./config/config.env.example", "./config/config.env");
  console.log("Environment file created successfully.");
} catch (err) {
  console.error(err);
}
