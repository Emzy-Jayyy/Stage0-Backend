const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const profileRoutes = require('./routes/profile');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(profileRoutes);

app.use((req, res, next) => {
    res.status(404).json({message: 'Route not found'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})