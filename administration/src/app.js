const {resolve} = require('path');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(require('cors')());
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res)=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:'+PORT+'/home');
});

//declarando la carpeta public para que pueda ser utilizada
app.use('/resources', express.static(resolve(__dirname,'../public')));

//establecemos en motor de plantillas ejs
app.set('view engine', 'pug');
app.set('views', resolve(__dirname, './views'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(require('method-override')("m"));

app.use(require('express-session')({
    secret:'secret',
    resave: true,
    saveUninitialized: true,
    cookie:{
        secure:false,
        maxAge:60*60*1000
    }
}));

app.use(require('./middlewares/user'));
app.use(require('./middlewares/listCart'));

app.use('/home', require('./routes/index.routes'));
app.use('/users', require('./routes/users.routes'));
app.use('/clients', require('./routes/clients.routes'));
app.use('/categories', require('./routes/categories.routes'));
app.use('/models', require('./routes/models.routes'));
app.use('/products', require('./routes/products.routes'));
app.use('/requests', require('./routes/requests.routes'));