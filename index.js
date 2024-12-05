const express = require('express');
const cors = require('cors');

const app = express();
const port = 4001;
const router = require('./app/routes/router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(port, () => {
    console.log(`App is running on ${port}`);
})

app.use('/api', router);