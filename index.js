const express = require('express');
const path =require('path');
const app = express()
const PORT = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/ab*cd', (req, res) => res.send('Helloboy!'))
app.get('/user/42', (req, res) => res.send('Hello'))
app.get('/flights/:from-:to', (req, res) => res.send('Flight service from:'+req.params.from +' to: '+req.params.to ))
app.post('/',(req,res)=>res.send('Got a post'))
app.put('/user',(req,res)=>res.send('Got a put request'))
const a ='delete me'
app.delete('/user',(req,res)=>res.send(a))
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
// app.use('/component',express.static('public'))
app.use('/static', express.static( 'component/public'))