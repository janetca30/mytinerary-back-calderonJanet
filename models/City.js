import { Schema, model, Types} from "mongoose";

let collection = 'City';

let schema = new Schema({
  name: {type:String, required: true},
  photo: {type:String, required: true},
  country: {type:String, required: true},
  description: {type:String, required: true},
  itineraries: [{type:Types.ObjectId, ref:'Itinerary', required: true}]
},{
  timestamps: true
});

let City = model(collection, schema);

export default City;