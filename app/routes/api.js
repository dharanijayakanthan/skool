var User = require('../models/user');
var Appoinment = require('../models/appoinment');
var Search = require('../models/searchSchool');
var Admin = require('../models/schoolUser');
var Application = require('../models/application');
var jwt = require('jsonwebtoken');
var secret = 'soniya';
module.exports = function(router) {


  router.post('/getView', function(req, res) {
    console.log(req.body.vData);
    Application.findOne({
      _id: req.body.vData
    }, function(err, users) {
      if (err) throw err;
      res.send(200, users);
    })
  })


  router.post('/getApplication', function(req, res) {
    Application.find({}, function(err, users) {
      if (err) throw err;
      res.send(200, users);
    })
  })


  //router for search api
  router.post('/addSchools', function(req, res) {
    var search = new Search();

search.schooldescription = req.body.schooldescription;
search.schooladdress = req.body.schooladdress;
search.schoolcity = req.body.schoolcity;
search.schoolclasses = req.body.schoolclasses;
    search.schoolmode = req.body.schoolmode;
    search.schoolname = req.body.schoolname;
    search.schooltype = req.body.schooltype;
    search.schoolapplication = req.body.schoolapplication;
    if (req.body.schoolapplication == null || req.body.schoolapplication == '' || req.body.schooltype == null || req.body.schooltype == '' || req.body.schoolname == null || req.body.schoolname == '' || req.body.schoolmode == null || req.body.schoolmode == '') {
      res.json({
        "success": false,
        "message": "School not created"
      });
    } else {
      search.save(function(err) {
        if (err) {
          res.json({
            "success": false,
            "message": err
          });
        } else {
          res.json({
            "success": true,
            "message": "School created and added to the search list"
          });
        }
      });
    }
  });


  router.post('/application', function(req, res) {
    var application = new Application();





    application.studentname = req.body[0].studentName;
    application.nationality = req.body[0].nationality;
    application.program = req.body[0].program;
    application.gender = req.body[0].gender;
    application.language = req.body[0].language;
    application.age = req.body[0].age;
    application.fathername = req.body[1].fatherName;
    application.fatheroccupation = req.body[1].fatherOccupation;
    application.fatherincome = req.body[1].fatherIncome;
    application.fathermobile = req.body[1].fatherMobile;
    application.mothername = req.body[1].motherName;
    application.motheroccupation = req.body[1].motherOccupation;
    application.motherincome = req.body[1].motherIncome;
    application.mothermobile = req.body[1].motherMobile;
    application.residentialaddress = req.body[2].residentialAddress;
    application.chronic = req.body[2].chronicIllness;
    application.otherinformation = req.body[2].otherInformation;
    console.log(application);
    application.save(function(err) {
      if (err) {
        console.log(err);
        res.json({
          "success": false,
          "message": "Error in saving data"
        });
      } else {
        res.json({
          "success": true,
          "message": "Data saved successfully"
        });
      }
    });

  });



  router.post('/search', function(req, res) {
    Search.find({
      schoolmode: req.body.schoolmode,
      schoolcity: req.body.schoolcity
    }).select('schoolname schooltype schoolapplication schoolmode schoolcity schoolclasses schooldescription schooladdress').exec(function(err, search) {
      if (err) consol.log(err);
      if (search) {
        schools = search;
        res.json({
          "schools": schools,
          "message": "school found for looking criteria"
        });
      } else console.log("nothing is valid");
    })
  
  })



  /*
  router.post('/search',function(req,res){

  var search = new Search();


  Search.findOne( { schoolType: 'boarding' } ).select('schoolMode').exec(function(err, search){
    if (err) consol.log(err);
  if(search){
  console.log(search)
  }
  else console.log("nothing is valid");
  })
  });

  */

  //route for appoinment backend
  router.post('/appoinment', function(req, res) {
    var appoinment = new Appoinment();
    appoinment.name = req.body.name;
    appoinment.email = req.body.email;
    appoinment.date = req.body.date;
    appoinment.time = req.body.time;
    if (req.body.time == null || req.body.time == '' || req.body.name == null || req.body.name == '' || req.body.email == null || req.body.email == '' || req.body.date == null || req.body.date == '') {

      res.json({
        "success": false,
        "message": "Dont leave any fields empty please !!.."
      });
    } else {
      appoinment.save(function(err) {
        if (err) {
          res.json({
            "success": false,
            "message": "the appoinment is taken by another person"
          });
        } else {
          res.json({
            "success": true,
            "message": "Appoinment Fixed"
          });
        }
      })
    }

  });


  router.post('/admin', function(req, res) {
    var admin = new Admin();
    admin.username = req.body.username;
    admin.password = req.body.password;
    admin.save(function(err) {
      if (err) {
        res.json({
          "success": false,
          "message": "username already exist.. try another username"
        });
      } else {
        res.json({
          "success": true,
          "message": "user created .. Redirecting to Your home page"
        });
      }
    });
  });





  router.post('/adminaccess', function(req, res) {
    Admin.findOne({
      password: req.body.password
    }).select('username password').exec(function(err, user) {
      if (err) throw err;
      if (user) {
        res.json({
          "success": true,
          "message": "admin is permitted"
        });
        }
        else{
          res.json({
            "success":false,
            "message":"admin is not permitted"
          })
        }

    })
  })











  //route for register backend
  router.post('/users', function(req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == '') {
      res.json({
        "success": false,
        "message": "Dont leave any fields empty please !!.."
      });
    } else {

      user.save(function(err) {
        if (err) {
          res.json({
            "success": false,
            "message": "username already exist.. try another username"
          });
        } else {
          res.json({
            "success": true,
            "message": "user created .. Redirecting to Your home page"
          });
        }
      });
    }
  });

  /*Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
    if (err) return handleError(err);
    console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
  })*/


  //route for login backend
  router.post('/authenticate', function(req, res) {
    User.findOne({
      username: req.body.username
    }).select('email username password').exec(function(err, user) {
      if (err) throw err;
      if (!user) {
        res.json({
          "success": false,
          "message": "Username Provided doesnot match"
        });
      } else if (user) {
        if (req.body.password) {
          var validPassword = user.comparePassword(req.body.password);
        } else {
          res.json({
            "success": false,
            "message": "Please provide your password"
          });
        }

        if (!validPassword) {
          res.json({
            "success": false,
            "message": "Wrong password for the User Name provided"
          });
        } else {
          var token = jwt.sign({
            username: user.username,
            email: user.email
          }, secret, {
            expiresIn: '24h'
          })
          res.json({
            "success": true,
            "message": "authenticated",
            'token': token
          });
        }
      }
    })
  });
  /**jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: '1h' });**/
  router.use(function(req, res, next) {
    var token = req.body.token || req.body.query || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          res.json({
            "success": false,
            "message": "not a valid token"
          });

        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.json({
        "success": false,
        "message": "no token"
      });
    }
  })

  router.post('/me', function(req, res) {
    res.send(req.decoded);
  })


  return router;
}
