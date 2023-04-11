const {resolve} = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res)=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:'+PORT+'/users/home');
});

//declarando la carpeta public para que pueda ser utilizada
app.use('/resources', express.static(resolve(__dirname,'./public')));

//establecemos en motor de plantillas ejs
app.set('view engine', 'pug');
app.set('views', resolve(__dirname, './views'));

app.use('/users', require('./routes/users.routes'));
app.use('/clients', require('./routes/clients.routes'));
app.use('/categories', require('./routes/categories.routes'));
app.use('/models', require('./routes/models.routes'));
app.use('/products', require('./routes/products.routes'));
app.use('/requests', require('./routes/requests.routes'));