const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");

const server = express();

server.use(cors());
server.use(helmet());

server.use(express.json());
server.use(
	session({
		name: "token",
		resave: false,
		saveUninitialized: false,
		secret: "keep it secret, keep it safe"
	})
);

server.use("/auth", authRouter);
server.use("/users", usersRouter);

server.get("/", (req, res) => {
	res.send(`<h2>Auth 1 Project!</h2>`);
});

module.exports = server;
