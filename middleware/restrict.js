const bcrypt = require("bcryptjs");
const Users = require("../users/users-model.js");

const sessions = {};

function restrict() {
	const authError = {
		message: "Invalid credentials"
	};
	return async (req, res, next) => {
		try {
			// const { username, password } = req.headers;
			// if (!username || !password) {
			// }
			// const user = await Users.findBy({ username }).first();

			// if (!user) {
			// 	return res.status(401).json(authError);
			// }

			// const passwordValid = await bcrypt.compare(password, user.password);

			// if (!passwordValid) {
			// 	return res.status(401).json(authError);
			// }

			// const { cookie } = req.headers;
			// if (!cookie) {
			// 	return res.status(401).json(authError);
			// }
			// const authToken = cookie.replace("token=", "");
			// if (!sessions[authToken]) {
			// 	return res.status(401).json(authError);
			// }

			if (!req.session || !req.session.user) {
				return res.status(401).json(authError);
			}

			next();
		} catch (error) {
			next(error);
		}
	};
}

module.exports = {
	sessions,
	restrict
};
