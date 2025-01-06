const axios = require('axios');
const {userUrl} = require('../config');


const authenticateUser = async (username, password) => {
    try {
        const loginData = {
            userName: username,
            password: password,
          };     

        const response = await axios.post(`${userUrl}/api/v1/user/login`, loginData,{ headers: { 'Content-Type': 'application/json' } });

        // Return user details if authentication is successful
        return response.data.data;
    } catch (error) {
        if (error.response?.status === 401) {
            return null; // Invalid credentials
        }
        console.error(error);
        throw new Error('Error connecting to user-service');
    }
};

module.exports = { authenticateUser };
