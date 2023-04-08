const {resolve} = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res)=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:'+PORT+'/users');
});

//establecemos en motor de plantillas ejs
app.set('view engine', 'pug');
app.set('views', resolve(__dirname, './views'));

//app.use('/users', require('./routes/users.routes'));