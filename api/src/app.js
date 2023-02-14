//requiriendo express 
// const {resolve} = require('path');
const express = require('express');
const app = express();

//corriendo el puerto
const PORT = process.env.PORT || 5050;
app.listen(PORT, (req,res)=>{
    console.log('SERVIDOR CORRIENDO EN http://localhost:'+PORT);
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//-Rutas-//
app.use('/api/users', require('./routes/users.routes'));
// app.use('/api/clients', require('./routes/clients.routes'));
// app.use('/api/teams', require('./routes/teams.routes'));
// app.use('/api/categories', require('./routes/categories.routes'));
// app.use('/api/models', require('./routes/models.routes'));
// app.use('/api/products', require('./routes/products.routes'));
// app.use('/api/quantities', require('./routes/quantities.routes'));
// app.use('/api/items', require('./routes/items.routes'));
// app.use('/api/requests', require('./routes/requests.routes'));
// app.use('/api/users/teams', require('./routes/usersTeams.routes'));