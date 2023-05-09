//bring in express
const express = require('express')
// const fs = require('fs')
const port= 3000

//instantiate express
const app = express()

app.get('/', function(req,res) {
    res.send(`<h1> 99 Bottles of beer on the wall"</h1>
         <a href='/98' >"take one down, pass it around"</a>
    `)
})

app.get('/98', function(req,res) {
    res.send('<h1> "98 Bottles of beer on the wall"</h1>')
})

app.get('/:number_of_bottles', (req, res) => {
    const no_of_bottles = req.params.number_of_bottles
    if (no_of_bottles > 0) {
          res.send(`<h1> "${no_of_bottles} Bottles of beer on the wall"</h1>
          <a href='/${no_of_bottles - 1}' >"take one down, pass it around"</a>
          `);
    } else {
        res.send(`<a href='/' >Home page</a>`)
    }
});

//tell express to listen
app.listen(port,()=> {
    console.log(`listening on port, ${port}`)
})