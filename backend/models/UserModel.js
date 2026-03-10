//create user schema with validations
//create user model for user schema
import { Schema,model } from "mongoose";
const userSchema=new Schema({
    
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email is already existed"],
    },
    dateofBirth:{
        type:Date,
        required:[true,"dob is required"],
    },
    status:{
        type:Boolean,
        default:true,
    }
},
{
    strict:"throw",
    timestamps:true,
    versionKey:false,
}
)
export const UserModel=model("user",userSchema)