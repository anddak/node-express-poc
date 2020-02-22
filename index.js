import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './src/route/footballRoute';
import cors from 'cors';

const app = express();
const PORT = 4000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/footballDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

//bodyParser setup
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());

//cors setup
app.use(cors());

routes(app);

app.get('/', (req, res) => {
    res.send(`Application is running on port ${PORT}.`)
});

app.listen(PORT, () =>
    console.log(`Application running on port ${PORT}.`)
);