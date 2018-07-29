const express =require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const routes = require('./routes');
let bb = require( 'express-busboy' );
//const dataroutes = require('./routes');

const path = require('path');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const con=require('./mysql.js');
const MySQLStore = require('express-mysql-session')(session);
var options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'abtus52q_beebags'
};
const sessionStore = new MySQLStore(options);

const app=express();

// Show error information
process.on( 'unhandledRejection', (reason, p) => {
	console.log( 'Unhandled promise error:  ' + p + reason );
	console.log( 'stack: ' + reason.stack );
} );

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
bb.extend( app, {
	upload: true
} );
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin,X-Requested-With,Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE,OPTIONS');

  next();//calls the next one
  console.log("hello");
});

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  store:sessionStore ,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req,res,next){
  res.locals.isAuthenticated=req.isAuthenticated();
  next();
});
app.use('/', routes);
//app.use('/datatable/', dataroutes);
passport.use(new LocalStrategy(
  function(username, password, done) {
  
      console.log(username);
      console.log(password);
     con.query('select user, password from admin where user=?',[username],function(err,results,fields){
         if(err){ 
           done(err)
        }
     else if(results.length==0){
       done(null,false);
     }
     else if(results[0].password==password){
      return done(null, {user:results[0].user});
     }
     else if(results[0].password!=password){
      return done(null, false);
     }
    
     });
     
   
  }
));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});









module.exports =app;