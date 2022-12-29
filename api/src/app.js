//requiriendo express 
// const {resolve} = require('path');
const express = require('express');
const app = express();

//corriendo el puerto
const PORT = process.env.PORT || 5050;
app.listen(PORT, (req,res)=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:'+PORT);
});

app.get('/', (req,res) => {
    res.send('Conectado');
})