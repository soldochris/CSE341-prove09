const express = require('express');
const path = require('path');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//middlewares
app.use(express.urlencoded({extended: false}));

//routers
app.use(require('./routes/entries.routes'));

//404 handler
app.use((req, res)=>{
  res.status(404).render('404');
});

//starting the app
app.listen(app.get('port'), ()=>{
  console.log('Server on port: ', app.get('port'));
});