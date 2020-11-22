var mysql = require('mysql')


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_danaku'
})

// connection.connect((err)=>{
//     if(err){
//         throw err;
        
//     }else{
//         console.log('Koneksi DB Berhasil')
//     }
// })


module.exports=connection