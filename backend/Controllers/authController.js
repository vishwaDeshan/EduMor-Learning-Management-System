const { Password } = require("@mui/icons-material");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const tokenGenerator = require("../Config/createToken");
const { sendVerificationEmail, sendForgotPasswordEmail } = require("../Config/sentEmail")

const registerController = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    //checks the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ sucess: false, msg: "Invalid email" });
    }

    //checks if the email is already registed
    const oldUser = await User.findOne({ email });
    if (oldUser) {
        return res.status(403).json({ sucess: false, msg: "This email is alreday registerd" });
    };

    //use model and create new user
    bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            const hashedPassword = hash;

            const newUser = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword
            });
            await newUser.save();

            //generate token
            const token = tokenGenerator({ email: newUser.email });

            //send email
            const link = "http://" + req.hostname + ":3000/verifyEmail?token=" + token;

            const sendMail = await sendVerificationEmail(newUser.email, link);
            if (sendMail) {
                res.status(201).json({ sucess: true, msg: "Registered in successfully error in sending verification" });
            } else {
                res.status(201).json({ sucess: true, msg: "Registered in successfully" });
            }
        });
    });

};

const loginController = async (req, res) => {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ sucess: false, msg: "Invalid email" });
    }

    //finding old user
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
        return res.status(400).json({ sucess: false, msg: "Inavaid email or password" });
    }

    //comparing passowrds
    const comparePassword = await bcrypt.compare(password, oldUser.password);

    if (!comparePassword) {
        return res.status(400).json({ sucess: false, msg: "Inavaid email or password" });
    }

    //generate token with user info
    const token = tokenGenerator({ email: oldUser.email, _id: oldUser._id, firstName:oldUser.firstName, lastName:oldUser.lastName, verified:oldUser.verified});

    //sending response
    res.status(200).json({ sucess: true, token, msg: "You're logged in successfully" })
};

const forgotpasswordController = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({ sucess: false, msg: "Please enter a valid email" })
    }

    //checks the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ sucess: false, msg: "Please enter a valid email" });
    }

    //checks user is present or not
    const oldUser = await User.findOne({ email });

    if (!oldUser) {
        return res.status(404).json({ sucess: false, msg: "User is not found!" })
    }

    //send forgot password

    //generate token
    const token = tokenGenerator({ email: oldUser.email });

    //send email
    const link = "http://" + req.hostname + ":3000/resetPassword?token=" + token;

    const sendMail = await sendForgotPasswordEmail(oldUser.email, link);
    if (sendMail) {
        return res.status(201).json({ sucess: true, msg: "Error in sending email" });
    } else {
        return res.status(201).json({ sucess: true, msg: "Email sent" });
    }
};

//reset password
const resetPasswordController = async (req, res) => {
    const { email, newPassword, confirmNewPassword } = req.body;

    //checks the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ sucess: false, msg: "Invalid email" });
    }

    const oldUser = await User.findOne({ email });
    if (!oldUser) {
        return res.status(400).json({ sucess: false, msg: "User not found!" });
    }

    if (newPassword !== confirmNewPassword) {
        return res.status(400).json({ sucess: false, msg: "Password do not match!" });
    }

    bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(newPassword, salt, async (err, hash) => {
            const hashedPassword = hash;

            const updatedData = await User.findOneAndUpdate({ email }, {
                $set: {
                    password: hashedPassword
                }
            })
            if (updatedData) {
                res.status(200).send({ sucess: true, msg: "Password is updated successfully!" });
            } else {
                res.status(500).send({ sucess: false, msg: "Something went wrong!" });
            }
        })
    });

}

module.exports = { registerController, loginController, forgotpasswordController, resetPasswordController }