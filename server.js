const express = require('express')
require('dotenv').config()


const twilio = require('twilio')(process.env.SID,process.env.TOKEN)
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/lol',(req,res)=>{
    try {
         const k = req.body
        twilio.messages
        .create({ body: k.message, from:"+18705125933", to:k.to })
        .then(message => console.log(message));
        console.log(req.body)
        res.send({
            'message':'sent successfully'
        })
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }

})


app.listen(4000,()=>{
    console.log('running at 4000 port')
})

