var mysql = require('mysql')


var connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'svnvbkdl_pemalicomal2019',
  password: 'pemalicomal',
  database: 'svnvbkdl_dbapemasi'
})

// $server   = "localhost:3306";
// $username = "svnvbkdl_pemalicomal2019";
// $password = "pemalicomal";
// $database = "svnvbkdl_dbapemasi";

// connection.connect((err)=>{
//     if(err){
//         throw err;
        
//     }else{
//         console.log('Koneksi DB Berhasil')
//     }
// })


module.exports=connection