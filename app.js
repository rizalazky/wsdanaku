const express = require('express')
const app = express()
const port = 3000
const conn=require('./configmysql')
const cors=require('cors')
const bodyParser=require('body-parser')
// corrs
app.use(cors({
    allowedHeaders:'*'
}))

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get('/',(req,res)=>{
    conn.query('SELECT * FROM tbl_user',(err,result)=>{
        if(err){
            throw err
        }else{
            res.json(result)
        }
    })
})

app.post('/register',(req,res)=>{
    console.log(req.body)

    
    let no_telp=req.body.no_telp
    conn.query(`INSERT INTO tbl_user (no_telp) VALUES ('${no_telp}')`,(err,result)=>{
        if(err) throw err

        res.json({
            'status':'200',
            'message':'Berhasil Update Data'
        })
    })
})

// app.listen(port,()=>{
//     console.log('Runn on'+port)
// })

app.listen()//for server