const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('appppp')
})

app.listen(8000,()=>{
    console.log('app started ')
})
