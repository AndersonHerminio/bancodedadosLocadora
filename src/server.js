const express = require('express');
const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');

require('./database')

const app = express();
app.use(express.json());

app.use(carRoutes);
app.use(userRoutes);

app.listen(3333);