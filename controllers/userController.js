const User = require("../models/User");

const createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        const user = await User.create({
            username,
            email,
            password,
            role
        });

        res.status(201).json({
            message: "User created successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching users",
            error: error.message
        });
    }
};

module.exports = {
    createUser,
    getUsers
};