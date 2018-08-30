const routes = require('express').Router();
const con=require('../mysql.js');
//const uuidv1 = require('uuid/v1');
const orderid = require('order-id')('SSPOS')
const dateTime = require('node-datetime');
const  nodemailer = require('nodemailer');//to send mail through node
const passport = require('passport');
let knex=require('../knex.js');
let {
  Editor,
  Field,
  
} = require("datatables.net-editor-server");

// transporter for nodemailer 
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ssposcom@gmail.com',
    pass: 'am@HAPPY123'
  }
});//transporter for mail 

var othermail="shubhamdixit865@gmail.com";
//for admin login on server
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

      routes.get('/payments', authenticationMiddleware (),(req, res) => {
        res.render('payments')
        });
      

routes.post('/login',
    passport.authenticate('local', { failureRedirect: '/',successRedirect: '/home' },
  
 
  ));

  //logout route
    
      routes.get('/logout', (req, res) => {
        req.logout();
        req.session.destroy();
        res.redirect('/');
        });

//datatable route
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

//payments table
           
          routes.all('/payments', async function(req, res) {
            //console.log("System call test01");
            console.log(JSON.stringify(req.body));
            
            
            let editor = new Editor( knex, 'paypal_payments' )
            .fields(
                new Field( 'id' ),
                new Field( 'intent' ),
                new Field( 'orderid' ),
                new Field( 'payerid' ),
                new Field( 'paymentid' ),
                new Field( 'paymenttoken' ),
                new Field( 'billingid' ),
                new Field( 'payment_status' )
               
            );
        
            await editor.process(req.body);
            console.log("payments");
      res.json( editor.data() );
            });

         //apiroutes for angular front end------------------------------------------------
         //************two mails will be sent here only */
         routes.post("/api/payment",(req,res)=>{
          var productname="Products-";
          var totalprice=0;
          
          for(var i=0;i<req.body.cart.length;i++){
           productname+=","+req.body.cart[i].product.name;
           totalprice+=req.body.cart[i].product.price;
          }
          //const id = 
          var transactionid=orderid.generate()
          var dt = dateTime.create();
          var formatted = dt.format('Y-m-d H:M:S');
          var name=req.body.user.name;
          var email=req.body.user.email;
          var address=req.body.user.address;
          var phone=req.body.user.phone;
          var payment=req.body.user.payment;
          var maillist = 'krishtyagi277@gmail.com,'+email+'';
          var messageContent;
          var messageSubject;
          console.log("payment method:"+payment);
         
          var records = [
            [name,email,totalprice,transactionid,productname,formatted,address,phone,payment],
            
          ];
          var sql = "INSERT INTO payment (name,email,amount,cutomerid,productname,date_t,address,phone,payment_id) VALUES ?";
          con.query(sql,[records], function (err, result) {
            if (err) {
              //error in insertion or failed
              console.log(err);
             

            }
            else{
            console.log("1 record inserted");
            //mail send when insertion is succesfull without error
            //Cash on delivery mail
            if(payment=="COD"){
              console.log("COD selected");
              messageContent='Order Successfull. Name:'+name+", Customerid:"+transactionid+",Productname:"+productname+",date:"+formatted+",Paymentid:"+payment+",totalprice:$"+totalprice+".";
             messageSubject ='Your Cash On Delivery Order is SuccessFull';
          }
          else{
            console.log("Paypal selected");
            messageContent = 'Please Complete the payment For following Order. Name:'+name+", Customerid:"+transactionid+",Productname:"+productname+",date:"+formatted+",Paymentid:"+payment+",totalprice:$"+totalprice+".";
           messageSubject ='Your Order';
         
          }

          var mailOptions = {
            from: 'ssposcom@gmail.com',
            to:maillist,
            subject: messageSubject,
            text: messageContent
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              res.json({
                message:"cod mail SuccesFully",
              })
                //if successfully sendede data insertion in enquire table
     
          console.log("cod mail succesfull"); 
         
            }
          });//mailer succesfull



            }//else end
          });
         
         
          console.log(productname);
          console.log(totalprice);
          res.json({
            message:transactionid
          });

         });


         ///////////////////////////////////////
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
        var mailid;

        var sql = "INSERT INTO `paypal_payments`(	`customerid`, `intent`, `orderid`, `payerid`, `paymentid`, `paymenttoken`, `billingid`, `payment_status`) VALUES ?";
        con.query(sql,[records], function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
        //first we select the email from paypal table on using customerid
        var sql2 ="select email from payment where cutomerid=?";
        con.query(sql2,[customerid],function (err, result2, fields) { 
          
            if (err) {
              console.log(err);
             }
            else{//paypal mailer
// if no error in insertion
if(status=="Payment Failed"){


              console.log("this is the data");
              console.log(result2);
  
              mailid =result2;
              mailid.forEach(m=>{
  //paypal mailer
   var mailOptions = {
          from: '',
          to: m.email,othermail,
          subject: 'Paypal Payment',
          text: 'Paypal payment Failed. id:'+customerid+",orderid:"+orderID+",Paymentid:"+paymentID+",Payerid:"+payerID+",status:"+status+"."
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
           
              //if successfully sendede data insertion in enquire 
              console.log("successfull payment with paypal")
          }
        });
  
              });
            }//else end

            else{
              console.log("this is the data");
              console.log(result2);
  
              mailid =result2;
              mailid.forEach(m=>{
  //paypal mailer
   var mailOptions = {
          from: '',
          to: m.email,othermail,
          subject: 'Paypal Payment',
          text: 'Paypal payment successfull. id:'+customerid+",orderid:"+orderID+",Paymentid:"+paymentID+",Payerid:"+payerID+",status:"+status+"."
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
           
              //if successfully sendede data insertion in enquire 
              console.log("successfull payment with paypal")
          }
        });
  
              });
            }
          }
         
            
          });

        console.log(req.body);
        res.json({
          message:"Post request Paypal received"
        });
      });

      ///function to send mail to the user 

      routes.post('/api/sendmail',(req,res)=>{
        var da =dateTime.create();
        var date = da.format('Y-m-d H:M:S');
        var message =req.body.message;
        var tomail = req.body.email;
        var name =req.body.name;
       var number ="not-applicable";
       var value =[
        [date,message,tomail,name,number]
      ];
     ;
      
      
      var mailOptions = {
        from: '',
        to:othermail, tomail ,
        subject: 'Enquiry On Your Website',
        text: 'Hi you have an enqiury on your wesbite.Name'+req.body.name+'/Email-'+req.body.email+'/Message-'+req.body.email
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.json({
            message:"Query Sent SuccesFully",
          })
            //if successfully sendede data insertion in enquire table
 
      console.log(tomail,name,message); 
     
      var sql = "INSERT INTO enquire (date_t,msg,email,name,number) VALUES ?";
      con.query(sql,[value], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
        }
      });

    
      
      
      });

      //subscribe mail
      routes.post('/api/subscribe',(req,res)=>{
        console.log(req.body);
 var mailid =req.body.email;
 var mailOptions = {
  from: '',
  to: "shubhamdixit863@gmail.com",
  subject: 'thanks for subscribe',
  text: 'Hi there, thanks for showing interest in Our Products ,We Will Connect With you Soon'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    res.json({
      message:"Query Sent"
    })
      //if successfully sendede data insertion in enquire table

/*
var sql = "INSERT INTO subscribe (email) VALUES ?";
con.query(sql,[email], function (err, result) {
  if (err) throw err;
  console.log("1 record inserted in subscribe");
});*/
  }
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

