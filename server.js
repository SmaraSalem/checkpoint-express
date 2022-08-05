const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

//  app.get('/',(req,res)=>{
//     var options = {
//         root: path.join(__dirname)
//     };
//     //console.log(options);
//      res.sendFile("./webPages/index.html",options)

//  })
const middlewareTestTime = (req, res, next) => {
    const dateNow = new Date().getDate()
    const hours = new Date().getHours()
    
    
   const arrayDate = [1,2,3,4]
   if(arrayDate.includes(dateNow)&&(hours >= 9)&&(hours<19)){
    next()
   }
   else
  res.send("service non disponible pour le moument");
};

app.use(middlewareTestTime, express.static("webPages"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log("server is connect");
});
