const express = require('express') // a bare path
const mongoose = require('mongoose')

const connect = require("./db/connect")
const wilder = require("./models/Wilder")

connect()

const app = express()

app.get('', (req, res)=>{
    console.log(req)
    res.send({success: true, data: {title: 'Welcome to my website'}})
})

app.get('/createUser', async(req, res)=>{

    const Pierre = new wilder({
        name: 'Sarah',
        city: 'Toulouse',
        skills: [
            {
                title: 'HTML',
                votes: 10
            },
            {
                title: 'CSS',
                votes: 15
            }
        ]
    })
    
    try
    {
        await Pierre.save()
        res.send(Pierre)
    }
    catch(err){ console.error(err.message)}

})


const PORT = 3000
app.listen(PORT, ()=>console.log(`Listenning on port ${PORT}`))