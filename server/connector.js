const mongoose = require("mongoose")



function connector() {
  mongoose.connect("mongodb+srv://saptarshree96:rAI6kycEH5A9uLH8@cluster0.0ucfnc5.mongodb.net/your-database?retryWrites=true&w=majority"
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
   console.log("mongoose is live now")
}).catch((err)=>{
console.log({err})
})}

module.exports = connector



// mongodb+srv:saptarshree96:rAI6kycEH5A9uLH8@cluster0.0ucfnc5.mongodb.net/your-database?retryWrites=true&w=majority