const express = require('express');

const app = express();

app.use(express.json());

require('dotenv').config();

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome!" });
});

const routes = require('./routes/routes');

app.use(routes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running at port ${port}`);
});