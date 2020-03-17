const express = require("express");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");

const server = express();

server.use("/auth", authRouter);
server.use("/users", usersRouter);

server.use(express.json());

server.get("/", (req, res) => {
	res.send(`<h2>Auth 1 Project!</h2>`);
});

module.exports = server;
