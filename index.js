const express=require('express')
const app=express()
const PORT=process.env.PORT || 5001

app.get('/',(req, res)=>{
    res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log(`Application in running at ${PORT}`)
})