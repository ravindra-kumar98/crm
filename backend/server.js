const express = require('express');
const cors = require('cors');
require('./db/config')
const User = require('./db/users')
const app = express();
app.use(express.json());
app.use(cors());
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

app.post("/signup", async (req, resp) => {
    const { email, password } = req.body;
    try {
        userExist = await User.findOne({ email: email });
        if (userExist) {
            return resp.json({ error: console.error("User already exist") });
        }
        else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            let user = new User(req.body);
            user.password = hashedPassword; // Set the hashed password in the user object
            let result = await user.save();
            resp.send(result)
        }
    } catch (error) {
        resp.status(500).send("Internal Server Error");
    }
});

app.post("/login", async (req, resp) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return resp.status(404).json({ message: "user not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return resp.status(401).json({ message: "password mismatch" });
        }

        const token = jwt.sign({ userId: user._id }, 'secret');

        resp.status(200).json({ token: token });
    } catch (error) {
        console.error(error);
        resp.status(500).send("Internal Server Error");
    }
});


app.listen(5000);