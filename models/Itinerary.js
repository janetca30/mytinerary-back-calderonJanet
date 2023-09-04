import {Schema, model, Types} from 'mongoose';

let collection = 'Itinerary';

let schema = new Schema({
  name: {type:String, required: true},
  photo: {type:String, required: true},
  author: {type:String, required: true},
  price: {type:Number, required: true},
  duration: {type:Number, required: true},
  likes: {type:Number, default: 0},
  hashtags: {type:[String], required: true},
  comments:{type:[String], required: true},
  city:{type:Types.ObjectId, ref:'City', required: true}
},
{
  timestamps: true
});

let Itinerary = model(collection, schema);

export default Itinerary;