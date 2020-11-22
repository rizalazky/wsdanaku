const express = require('express')
const app = express()
const port = 3000
const conn=require('./configmysql')
const cors=require('cors')
const bodyParser=require('body-parser')
// corrs
app.use(cors())

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
        let response={}
        if(err){
            switch(err.code){
                case "ER_DUP_ENTRY":
                    response={
                        status:false,
                        code:err.code,
                        message:'Registrasi Gagal ,Nomer Sudah Terdaftar!!!'
                    }
                    break;
                default:
                    response={
                        status:false,
                        code:err.code,
                        message:'Gagal Registrasi'
                    }
            }
            res.json(err)
        }else{
            response={
                status:true,
                code:res.code,
                message:'Berhasil Registrasi'
            }
        }

        res.json(response)
    })
})

// app.listen(port,()=>{
//     console.log('Runn on'+port)
// })

app.listen()//for server