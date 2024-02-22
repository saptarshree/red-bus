const express = require("express");
const connector = require("./connector")
const cors = require('cors');

// const tripRouter = require("../red-bus/routes/trips")
const app = express();

connector();
console.log(connector)
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
   res.send("App is live now")
})
app.use("/api", require("../server/routes/trips") )
app.use ("/api",require("./routes/statedistrict"))
app.use("/api", require("../server/routes/busowner") )
app.use("/api", require("./models/stripe") )
app.listen(5000,()=>{
    console.log("listning to 5000")
})