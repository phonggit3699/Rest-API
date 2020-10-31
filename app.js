const express = require ('express');

const app = express();

//Listening port
const port = 3000;

app.get('/', (req, res) => {
    res.send ('hello world')
});


//Setup server 
app.listen(port, () => {
    console.log('server is flying')
});