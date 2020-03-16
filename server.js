const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
	res.send(`<h2>Auth 1 Project!</h2>`);
});

module.exports = server;
