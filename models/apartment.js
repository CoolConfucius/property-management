'use strict';

var mongoose = require('mongoose');

var Apartment; 

var apartmentSchema = new mongoose.Schema({
  totalRooms:{type:Number},
  availableRooms:{type:Number},
  rentPerRoom: {type:Number},
  imageURL:{type:String}
})

/*personSchema.pre('save', function(next) {
  this.age = moment().diff(moment(this.birthday), 'years');
  console.log(this.age);
  next();
});*/

Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
