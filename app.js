const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks')
const routes = require('./routes');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const socketio = require('socket.io');
const server = app.listen(3000);
const io = socketio.listen(server);

app.use(urlencodedParser);

app.use(express.static('./public/'))

app.use('/', routes(io));

app.set('view engine', 'html'); 
// hace que res.render funcione con archivos html
app.engine('html', nunjucks.render);
 // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', { noCache: true })
 // apunta a nunjucks al directorio correcto para los templates


//app.listen(3000);