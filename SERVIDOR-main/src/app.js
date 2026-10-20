import express from 'express';
const app = express();

app.get('/busca',(req,res)=>{
    console.log("Enviado!")
    res.send("Resposta Retornada!");
})
app.listen(3000, ()=> {console.log("Servidor Rodando!")})