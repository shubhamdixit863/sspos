const routes = require('express').Router();
const con=require('../mysql.js');
const uuidv1 = require('uuid/v1');
const dateTime = require('node-datetime');

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
            new Field( 'id' ),
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

         //apiroutes for angular front end
         
         routes.post("/api/payment",(req,res)=>{
          var productname="Products-";
          var totalprice=0;
          
          for(var i=0;i<req.body.cart.length;i++){
           productname+=","+req.body.cart[i].product.name;
           totalprice+=req.body.cart[i].product.price;
          }
          var transactionid=uuidv1();
          var dt = dateTime.create();
          var formatted = dt.format('Y-m-d H:M:S');
          var name=req.body.user.name;
          var email=req.body.user.email;
          var address=req.body.user.address;
          var phone=req.body.user.phone;
          var payment=req.body.user.payment;
          var records = [
            [name,email,totalprice,transactionid,productname,formatted,address,phone,payment],
            
          ];
          var sql = "INSERT INTO payment (name,email,amount,cutomerid,productname,date_t,address,phone,payment_id) VALUES ?";
          con.query(sql,[records], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
         
          console.log(productname);
          console.log(totalprice);
          res.json({
            message:transactionid
          });

         });

         routes.post("/api/payment/update",(req,res)=>{
           var token=req.body.token;
           console.log(req.body);
           res.json({
            message:"updated"
          });

         });
      routes.get("/api/payment/status",(req,res)=>{
        var cu=req.query.property;
        console.log(req.query.property);
        //var sql = "select * from payment where cutomerid= ?";
        con.query("select * from payment where cutomerid=?", [cu],function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.json({
            message:result
          });
        });
      });

      routes.post("/api/payment/paypal",(req,res)=>{
        let intent=req.body.intent;
        let orderID=req.body.orderID;
        let payerID=req.body.payerID;
        let paymentID=req.body.paymentID;
        let paymentToken=req.body.paymentToken;
        let billingid=req.body.billingid;
        let status=req.body.status;
        let customerid=req.body.customerid;
        var records = [
          [customerid,intent,orderID,payerID,paymentID,paymentToken,billingid,status],
          
        ];

        var sql = "INSERT INTO `paypal_payments`(	`customerid`, `intent`, `orderid`, `payerid`, `paymentid`, `paymenttoken`, `billingid`, `payment_status`) VALUES ?";
        con.query(sql,[records], function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });

        console.log(req.body);
        res.json({
          message:"Post request Paypal received"
        });
      });


        function authenticationMiddleware () {  
          return (req, res, next) => {
            console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
        
              if (req.isAuthenticated()) return next();
              res.redirect('/')
          }
        }

  module.exports = routes;

