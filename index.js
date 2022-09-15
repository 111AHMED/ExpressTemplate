require("dotenv").config();
let { PORT } = require("./const");
// chalk used for color message version support  require chalk@4.1.2
const chalk = require("chalk");
// import app module from app js
const app = require("./app");

PORT = PORT || 5000;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(chalk.blue(`app listening on port ${chalk.blue(PORT)}!`))
);
