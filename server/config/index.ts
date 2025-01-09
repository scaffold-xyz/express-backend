require("dotenv").config();

const { version } = require("../../package.json");

const Config = {
  VERSION: version,
  PORT: process.env.PORT || 3000,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

export default Config;
