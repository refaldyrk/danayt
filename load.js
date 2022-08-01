//Get Env Variable, From .env file
const { config } = require("dotenv");

config();

var data = process.env;

function env() {
	return data;
}

module.exports = { env };
