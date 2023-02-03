const express = require('express')
const  app = express()

app.use(express.static('public'))
app.use(express.json())

app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('index',{title: 'prognoza'})
  })
app.post('/', (req, res) => {
    console.log(req.body);
    res.end()
})

app.listen(3000,() => {
console.log('server running');
})