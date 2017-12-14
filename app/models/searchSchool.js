var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SearchSchema = new Schema({

  schoolmode: {
    type:String,
    lowercase:true,
    required:true
  },
  schoolname: {
    type:String,
    lowercase:true,
    required:true
  },

  schooltype: {
    type:String,
    lowercase:true,
    required:true
  },

  schoolapplication: {
    type:String,
    lowercase:true,
    required:true
  },
  schoolclasses: {
    type:String,
    lowercase:true,
    required:true
  },
  schoolcity: {
    type:String,
    lowercase:true,
    required:true
  },
  schooldescription:{
    type:String,
    lowercase:true,
    required:true
  },
  schooladdress:{
    type:String,
    lowercase:true,
    required:true
  }
});
//  schoolType: String, schoolMode: String , schoolSystem: String, schoolApplication: String
SearchSchema.pre('save', function(next) {
  console.log('data is getting saved successfully');
  next();
});


module.exports = mongoose.model('Search',SearchSchema);
