const express= require("express")
const path = require ('path')
 const mongoose= require("mongoose")
// const { Console } = require("console");
const bodyparser = require("body-parser")
const app = express();
// const User = require("./assets/data")
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/UserData")
  .then(()=> console.log("MongoDb connected"))
  .catch((err)=> console.log("Mong Error", err));

  }


const userSchema = new mongoose.Schema({
        name: {type: String},
        age: {type: String},
        email: {type: String}
        });




  const User = mongoose.model('User', userSchema);


 




app.use(express.static('./assets'))

app.use(express.json());


app.use(express.urlencoded());
// {extended: true}







 app.post('/index', (req, res)=>{
 res.status(200).send('index.html')
 })
 app.post('/index2', (req, res)=>{
const myData = new User(req.body);
myData.save().then(()=>{
  res.send("This item has been saved to the database")
}).catch(()=>{
  res.status(400).send("item was not saved to the database")
})
    })
  

