 const express = require("express");
 const app = express();
 const mysql = require("mysql");
 const cors = require("cors");
 
 
 app.use(cors());
 app.use(express.json());

const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "",
    database : "employes"
});

app.post("/login", (req ,res) => {
    const sql = "SELECT * FROM list WHERE `email` = ? AND `password` = ? ";
    db.query(sql,[req.body.email, req.body.password], (err, data) => {
     if(err) {
     return  res.json("error");
 
     }
 
     if(data.length > 0){
         return res.json("success");
     }else{
         return res.json("faile")
     }
    })
 })

app.post("/create", (req , res) => {
 const name = req.body.name;
 const email = req.body.email;
 const password = req.body.password;
 const phone = req.body.phone;
 const age = req.body.age;
 const country = req.body.country;
 const possition = req.body.possition;
 const wage = req.body.wage;

 db.query('INSERT INTO list (name,email, password, phone , age, country, possition, wage) VALUES (?,?,?,?,?,?,?,?)'
  ,[name,email,password, phone, age, country,possition,wage]), (err, result) => {

    if(err){
        console.log(err)
    }else{
        res.send("inserted")
    }
  }

})

app.post("/createc", (req , res) => {
    const id = req.body.countriesId;
    const name = req.body.countriesName;
    
   
    db.query('INSERT INTO countries (countriesId,countriesName) VALUES (?,?)'
     ,[id, name]), (err, result) => {
   
       if(err){
           console.log(err)
       }else{
           res.send("inserted")
       }
     }
   
   })
   app.post("/createp", (req , res) => {
    const id = req.body.possitionId;
    const name = req.body.possitionName;
    
   
    db.query('INSERT INTO possitions (possitionId,possitionName) VALUES (?,?)'
     ,[id, name]), (err, result) => {
   
       if(err){
           console.log(err)
       }else{
           res.send("inserted")
       }
     }
   
   })


  app.get("/employes", (req, res) =>{
    db.query("SELECT * FROM list ",(err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    })
  })


  app.get("/countries", (req, res) =>{
    db.query("SELECT * FROM countries "
    ,(err, result) => {
        if(err){
            console.log(err)
        }else{    
            res.send(result);
        }
    })
  })

  app.get("/possitions", (req, res) =>{
    db.query("SELECT * FROM possitions "
    ,(err, result) => {
        if(err){
            console.log(err)
        }else{    
            res.send(result);
        }
    })
  })


 app.put("/update",(req, res)=> {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query("UPDATE list SET wage = ? WHERE id = ? ",[ wage, id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }
    )
 })

 app.delete("/delete/:id",(req, res)=> {
    const id = req.params.id;
    db.query("DELETE FROM list WHERE id = ? ", id, (err, results)=> {
        if(err){
            console.log(err)
        }else{
            res.send(results)
        }
    })
 });
 app.delete("/deletec/:countriesId",(req, res)=> {
    const id = req.params.countriesId;
    db.query("DELETE FROM countries WHERE countriesId = ? ", id, (err, results)=> {
        if(err){
            console.log(err)
        }else{
            res.send(results)
        }
    })
 });
 app.delete("/deletep/:possitionId",(req, res)=> {
    const id = req.params.possitionId;
    db.query("DELETE FROM possitions WHERE possitionId = ? ", id, (err, results)=> {
        if(err){
            console.log(err)
        }else{
            res.send(results)
        }
    })
 });
 app.get("/show/:id", (req, res) =>{
    const id = req.params.id;
    db.query("SELECT * FROM list WHERE id = ? ",id ,(err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    })
  })


  app.listen(3006, ()=> {
    console.log("good");
  })
  app.get('/',(req,res)=> res.send("well"))