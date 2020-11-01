const express = require ('express');
const app = express();
require('dotenv/config');
const mongodb = require ('mongoose');
const pug = require('pug');
const bodyParser = require('body-parser');
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) ;// for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./views/css'));
app.use(bodyParser.json());
//Listening port
const port = 3000;


mongodb.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) {console.log(err) } else {console.log('DB CONNECTION OK')};
});

//Import Routers

const todosRoute = require('./routes/todos'); 

//Use middleware
app.use('/todo', todosRoute);

app.get('/', (req, res) => {
    res.send('Hello Phong')
});


//Setup server 
app.listen(port, () => {
    console.log('server is flying');
});