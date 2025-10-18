const axios = require("axios");

module.exports.getProfile = async (req, res, next) => {
    try {
        const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });

        const catFact = response.data.fact;

        res.status(200).json({
            status: "success",
            user: {
                email: process.env.EMAIL,
                name: process.env.NAME,
                stack: process.env.STACK,
            },
            timestamp: new Date().toISOString(),
            fact: catFact,
        })
    } catch (error) {
        console.error(`Error fetching profile: ${error.message}`);

        if (error.code === 'ECONNABORTED' || error.response || error.request) {
            return res.status(200).json({
                status: "success",
                user: {
                    email: process.env.EMAIL || 'emediongb23@gmail.com',
                    name: process.env.NAME || 'Emediong Joseph Bassey',
                    stack: process.env.STACK || 'nodeJs/Express',
                },
                timestamp: new Date().toISOString(),
                fact: "Unable to fetch cat fact at this time. Please try again later."
            });
        }

        res.status(500).json({
            status: "error",
            message: "Failed to fetch profile data"
        })
    }
};

