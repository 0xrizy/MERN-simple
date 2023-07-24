const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel= require('./models/Users')
const cors = require("cors")

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://rizulthakur:passwordofrizul@cluster1.t7bdju3.mongodb.net/merndb?retryWrites=true&w=majority")

app.get("/getUsers", async (req, res) => {
    await UserModel.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.send(err));
  });

  app.post('/createUser',async (req,res)=>{
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
  })


app.listen(3001, ()=>{
    console.log("Server Running at port 3001"); 
})