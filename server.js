const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

//handling local requests
app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Savage Boy',
        'birthLocation': 'London, England'
    },

    'chance the rapper': {
        'age': 28,
        'birthName': 'Chanceeee',
        'birthLocation': 'Chicago, Illinoi'
    },

    'unknown': {
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    }

}



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
        console.log(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
        console.log(rappers['unknown'])
    }
    // console.log(rappers[rapperName])
    // res.json(rappers)

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch it!`)
})