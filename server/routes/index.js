const routes = require('express').Router();
const con=require('../mysql.js');

const passport = require('passport');
let knex=require('../knex.js');
let {
  Editor,
  Field,
  
} = require("datatables.net-editor-server");


routes.get('/', (req, res) => {
  console.log(req.user);
  console.log(req.isAuthenticated());
  console.log(req.body);
  res.render('adminlogin')
  });  

  routes.get('/home', authenticationMiddleware (),(req, res) => {
    res.render('home')
    });
  
   routes.get('/enquiry', authenticationMiddleware (),(req, res) => {
    res.render('enquiry')
    });
    
    routes.get('/cod', authenticationMiddleware (),(req, res) => {
      res.render('order')
      });
      

routes.post('/login',
    passport.authenticate('local', { failureRedirect: '/',successRedirect: '/home' },
  
 
  ));

    
      routes.get('/logout', (req, res) => {
        req.logout();
        req.session.destroy();
        res.redirect('/');
        });


        routes.all('/datatable', async function(req, res) {
          console.log("System call test01");
          console.log(JSON.stringify(req.body));
          
          
          let editor = new Editor( knex, 'payment' )
          .fields(
              new Field( 'name' ),
              new Field( 'email' ),
              new Field( 'amount' ),
              new Field( 'cutomerid' ),
              new Field( 'productname' ),
              new Field( 'date_t' ),
              new Field( 'address' ),
              new Field( 'phone' ),
              new Field( 'payment_id' ),
              new Field( 'payment_status' ),
          );
      
          await editor.process(req.body);
          console.log("hello");
    res.json( editor.data() );
          });


          routes.all('/enquiry', async function(req, res) {
            //console.log("System call test01");
            console.log(JSON.stringify(req.body));
            
            
            let editor = new Editor( knex, 'enquire' )
            .fields(
                new Field( 'name' ),
                new Field( 'email' ),
                new Field( 'msg' ),
                new Field( 'date_t' ),
                new Field( 'number' ),
               
            );
        
            await editor.process(req.body);
            console.log("hello");
      res.json( editor.data() );
            });

        function authenticationMiddleware () {  
          return (req, res, next) => {
            console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
        
              if (req.isAuthenticated()) return next();
              res.redirect('/')
          }
        }

  module.exports = routes;

