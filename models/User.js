import { Schema, model, Types} from "mongoose";

const userSchema = new Schema({
  name: {type:String, required:true, min:4, max:20},
  lastName:{type:String, required:true, min:4, max:20},
  email:{type:String, required:true},
  imageUrl:{type:String, required:true},
  password:{type:String, required:true},
  country:{type:String, required:false},
  googleUser:{type:Boolean, default:false},
 // itinerariesLiked:[{type:mongoose.Types.ObjectId}]
},{
  timestamps: true
});

const User = model("User", userSchema);

export default User;