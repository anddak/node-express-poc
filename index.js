import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

const app = express();
const PORT = 3000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/footballDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

//bodyParser setup
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send(`Application is running on port ${PORT}.`)
});

app.listen(PORT, () =>
    console.log(`Application running on port ${PORT}.`)
);