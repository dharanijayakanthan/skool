var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var SchoolUserSchema = new Schema({
  username: {
    type:String,
    lowercase:true,
    required:true,
    unique:true
  },
  password: {
    type:String
   }
})


SchoolUserSchema.pre('save',function(next){
  next();
})


module.exports = mongoose.model('SchoolUser',SchoolUserSchema);


//module.exports = mongoose.model('User',UserSchema);
