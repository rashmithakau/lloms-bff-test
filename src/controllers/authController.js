const { authenticateUser } = require('../services/authService');
const { generateToken } = require('../utils/jwtHelper');

const login = async (req, res, next) => {
    
    const { username, password } = req.body;


    try {
        const user = await authenticateUser(username, password);


        console.log(user);

        if (user) {
            const token = generateToken({ userId: user.userId, username: user.userName , role: user.roleId ,outeltid: user.outletID });

            console.log(token);

            res.status(200).json({ token, message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { login };
