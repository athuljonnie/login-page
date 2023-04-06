// var express = require('express');
// var router = express.Router();

// const credential = [
//     {
//       email: "admin@gmail.com",
//       password: "admin#123",
//       name: "mohammed rafhath",
//     },
//     {
//       email: "admin1@gmail.com",
//       password: "admin@123",
//       name: "Rafhathdana",
//     },
//   ];
//   var errmsg = null;
  


// /* GET home page. */
// router.get('/', function(req, res, next) {
//     if(req.session.user){
//         res.redirect("/")
//     }else{
//     res.render('dashboard', { title: 'DashBoard',err_msg: errmsg });}
// });


// // router.post('/', function(req, res, next) {
// //     res.render('dashboard', { title: 'DashBoard' });
// //   });


//   router.post("/dashboard", (req, res) => {
//     for (secretkey of credential) {
//       if (
//         req.body.email == secretkey.email &&
//         req.body.password == secretkey.password
//       ) {
//         flag = 0;
//         req.session.user = req.body.email;
//         req.session.name = secretkey.name;
//         res.redirect("/dashboard");
//         break;
//       } else {
//         flag = 1;
//       }
//     }
//     if (flag == 1) {
//       errmsg = "Invalid Username or Password";
//       res.redirect("/");
//     }
//   });
  
// module.exports = router;
