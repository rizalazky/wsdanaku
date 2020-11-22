const express = require('express')
const app = express()
const port = 3000
const conn=require('./configmysql')


app.get('/',(req,res)=>{
    // conn.query('SELECT * FROM tbl_user',(err,result)=>{
    //     if(err){
    //         throw err
    //     }else{
    //         res.json(result)
    //     }
    // })

    res.send('Halloo Ari Ganteng')
})

app.listen()