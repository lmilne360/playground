const express = require('express')
const books = require('./books-test-collection.json')

const port = 4000;

const app = express();

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
app.get('/', (req, res) =>{
    res.send('API works')
    
})

app.get('/books', (req, res)=> {
    res.json(books)
})



app.listen(port, () => console.log(`Api listening at port ${port}`))