const express  = require('express')
const {generate}  = require('./calculate')
 
const app = express()

const PORT = 8000
app.get('/',   (req, res) =>   {

   var  response = generate();
    
//    console.log(response.length)
   res.json(  response  )

    
})

app.listen(PORT,  () => console.log('Server started on port '+ PORT))

 
