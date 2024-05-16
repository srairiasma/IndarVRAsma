const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const standRoutes = require('./routes/standRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/stands', standRoutes);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
