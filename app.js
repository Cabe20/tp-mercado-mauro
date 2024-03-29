const express = require("express")
const path = require("path")
const app = express()
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath))

app.set('puerto',process.env.PORT || 3000) //agregado para el deploy
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`)); 
//agregado para el deploy


app.listen(3000,()=>{
    console.log("servidor escuchando puerto 3001 de Mercado Liebre funcionando ")
})

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})









