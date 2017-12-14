var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AppoinmentSchema = new Schema({
  name: String, email: String , date:{ type: String }, time: String
});


AppoinmentSchema.pre('save', function(next) {
  console.log('appoinment data is getting saved successfully');
  next();
});

module.exports = mongoose.model('Appoinment',AppoinmentSchema);
