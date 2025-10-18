const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimiter = require('express-rate-limit');
const profileRoutes = require('./routes/profile');

dotenv.config();

const app = express();

const limiter = rateLimiter({
    windowMs: 1 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later."
});

app.use(limiter);
app.use(cors());
app.use(express.json());

app.use(profileRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Profile API is running' });
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})