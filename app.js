const express = require('express');
const app = express()


app.get('/',(req,res)=> {
    res.send('Hello! Mohaymen ID42 has deployed on the azure')
})




app.listen(8080, ()=> {
    console.log('Server is listening on port 8080....')
})