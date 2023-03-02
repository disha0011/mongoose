const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const data = require("./data");
const User = require("./userModel");

mongoose.set("strictQuery", true);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.nhpwzlo.mongodb.net/node_5?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });
  
// app.get("/insert", (req, res) => {
//     console.log();
//   });

app.post("/insert", (req, res) => {
  console.log(data.users);
  const result = User.insertMany(data.users);
   res.send(result);
});

app.put("/update",(req,res)=>{
  User.updateOne({ name: "disha" }, { $set: { email: "disha11@gmail.com" } }, (err, result) => {
    if (err)
        throw err;
    else {
        res.send(result);
    }
})
});

app.delete("/delete", (req, res) => {
  User.deleteOne({ name: "ritu" }, (err, result) => {
    if (err)
        throw err;
    else {
        res.send(result);
    }
})
});

app.listen(3300, () => {
  console.log(`server listen successfully`);
});


