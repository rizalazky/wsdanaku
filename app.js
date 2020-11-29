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
    let nama_user=req.body.nama_user
    let jenis_kelamin=req.body.jenis_kelamin
    let alamat=req.body.alamat
    let saldo=req.body.saldo
    conn.query(`INSERT INTO tbl_user (no_telp,nama_user,jenis_kelamin,alamat,saldo) 
    VALUES ('${no_telp}','${nama_user}','${jenis_kelamin}','${alamat}','${saldo}')`,(err,result)=>{
        
        if(err){
            res.json({
                status:false,
                code:err.code,
                message:'registrasi gagal,terjadi kesalahan'
            })
        }else{
            res.json({
                status:true,
                code:res.code,
                message:'Berhasil Registrasi'
            })
        }
        
    })
})

app.post('/transfer',(req,res)=>{
    let ke=req.body.to
    let dari=req.body.from
    let nominal=req.body.nominal

    let query=`CALL SP_TRANSFER ('${ke}','${dari}',${nominal})`

    conn.query(query,(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

// app.listen(port,()=>{
//     console.log('Runn on'+port)
// })

app.listen()//for server