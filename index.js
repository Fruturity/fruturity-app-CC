const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv')
const bodyParser = require('body-parser');


const historyRoute = require('./routes/History')
const fruitRoute = require('./routes/Fruit')

dotenv.config();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/history', historyRoute);
app.use('/fruit', fruitRoute);


app.get('/', (req, res) => {
    console.log("APIs ready!")
    res.send('APIs ready!');
})

app.get('/bookmarks', (req,res) => {
    res.send('Get bookmark data');
})

app.listen(process.env.PORT || port, () => {
    console.log(`app listening on port ${port}`);
})
