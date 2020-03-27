const express = require ('express')
const app = express()


let time = new Date().getHours();
console.log(time)

app.get("*",(req,res)=>{
if(time<8 || time >17)
res.sendFile(__dirname+ "/public/ourServices.html")
else 
    res.sendFile(__dirname+ "/public/home.html")
    })

app.use(express.static(__dirname+ "/public"))




app.listen(5000, (err)=> {
    if (err)
    console.log("Server is not Connected")
    else console.log("Server is Connected")

})