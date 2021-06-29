require('dotenv').config();
const Express = require('express');
const app = Express();
app.use(Express.json());
const dbConnection = require('./db');
const controllers = require('./controllers');
const middleware = require('./middleware');

app.use(middleware.headers);

app.use('/user', controllers.userController);
// app.use('/media', controllers.mediaController);

dbConnection.authenticate()
    .then(() => dbConnection.sync(
        //{alter: true}
    ))
    .then(() =>{
        app.listen(process.env.PORT, () =>{
            console.log(`[Server]: Is listening on ${process.env.PORT}`);
        })
    })
    .catch((err) =>{
        console.log(`[Server]: server crashed`);
        console.log(err);
    })