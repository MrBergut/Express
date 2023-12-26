const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/aboutus', (req, res) => {
    res.render('aboutus')
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})