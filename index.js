const express  = require('express')
const {generate}  = require('./calculate')
var bodyParser = require('body-parser');
 
const app = express()


const PORT = 8000

app.use(bodyParser());

app.get('/',   (req, res) =>   {

    
    
//    console.log(response.length)
   res.send("404")

    
})

app.post('/',   (req, res) =>   {

     

    const  name = req.body.name
    const  dob = req.body.dob
    const  timeIs = req.body.time_is
    const  timeStamp = req.body.tiime_stamp
    const  lat = req.body.latitude
    const  long = req.body.longitude
     


    var  response = generate(
           name,
           dob,
           timeIs,
           timeStamp,
           lat,
           long)
     
 //    console.log(response.length)
    res.json(  response  )
 
     
 })

app.listen(PORT,  () => console.log('Server started on port '+ PORT))

 
