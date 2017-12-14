var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ApplicationSchema = new Schema({
  studentname:String,
  nationality:String,
  program:String,
  gender:String,
  language:String,
  age:String,
  fathername:String,
  fatheroccupation:String,
  fatherincome:String,
  fathermobile:String,
  mothername:String,
  motheroccupation:String,
  motherincome:String,
  mothermobile:String,
  residentialaddress:String,
  chronic:String,
  otherinformation:String
    })
ApplicationSchema.pre('save',function(next){
  console.log('application data is getting saved successfully');
  next();
});




module.exports = mongoose.model('Appplication',ApplicationSchema);
