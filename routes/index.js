var express = require('express');
var router = express.Router();
var alert = require('alert')

router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user, name: req.session.name });
  } else {
    res.redirect("/login");
    console.log("helo");
  }
});

const credential = [
  {
    email: "admin@gmail.com",
    password: "admin#123",
    name: "Athul Johney",
  }, 
  {
    email: "abc@gmail.com",
    password: "abc@123",
    name: "Athul Johney",
  },
];
var errmsg = null;

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/dashboard");
  } else {
    res.render("index", { title: "Login", err_msg: errmsg });
    errmsg = null;
  }
});

//login user
router.post("/dashboard", (req, res) => {
  console.log(req.body,'form.data');


  for (secretkey of credential) {
    if(req.body.email == secretkey.email &&req.body.password == secretkey.password)
    {
     var flag = 0;
      req.session.user = req.body.email;
      req.session.name = secretkey.name; 
     
      res.redirect("/");
   
    } else {
      flag = 1
    }
  }
if(flag ===1){
  alert('invalid username or password')
  res.redirect("/login")
}
}); 

//route for logout
router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      res.send("Error");
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;