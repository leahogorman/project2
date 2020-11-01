var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var user=req.body.user;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM users WHERE user = ?',[user], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
            decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
              res.send( __dirname + "../" + "public/html/home.html" );  
            }else{
                res.json({
                  status:false,
                  message:"User and Password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"User does not exits"
          });
        }
      }
    });
}
