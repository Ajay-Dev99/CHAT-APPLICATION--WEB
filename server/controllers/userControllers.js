const userDb = require("../model/userModel");
const createToken = require("../utilities/generateToken");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        const newUser = new userDb({
            name, email, password
        })

        const saved = (await newUser.save()).toObject()
        delete saved.password

        const token = createToken(saved._id)
        res.cookie("token", token, { sameSite: "None", secure: true });

        res.status(200).json({ message: 'user created succesfully', saved })

    } catch (error) {
        console.log(error);

        if (error.name === 'ValidationError') {

            const errorMessages = Object.values(error.errors)

            return res.status(400).json({
                error: errorMessages[0].message
            });
        }

        if (error.code === 11000) {
            return res.status(400).json({
                error: `The email ${error.keyValue.email} is already registered`
            });
        }

        return res.status(error.status || 500).json({ error: error.message || "Internal server error" })

    }
}
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'All fields are required' })
        }
        // Check if user exists
        const user = await userDb.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the password
        const isPasswordCorrect = await user.isPasswordCorrect(password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid Password' });
        }

        // Create JWT token
        // const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        const token = createToken(user._id)
        res.cookie("token", token, { sameSite: "None", secure: true });
        const userObject = user.toObject();
        delete userObject.password;

        res.status(200).json({
            message: 'Login successful',
            userObject,

        });
    } catch (error) {
        console.log(error);

        return res.status(error.status || 500).json({ error: error.message || "Internal server error" })

    }
}


module.exports = {
    login,
    register
}