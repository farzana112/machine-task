import mongoose from "mongoose"

const userSchema=new mongoose.Schema(
    {

    name: {
        type: String,
        required: true,
        min:2,
        max:50
      },

      userName : {
      type:String,
      required:true,
      min:2,
      max:50
      },

      email: {
        type: String,
        required: true,
        unique: true
      },

      password: {
        type: String,
        required: true
      },

     

        occupation : {
          type:String,
          required:true
        },

        location : {
          type:String,
          required:true
        },
        isAdmin : {
          type:Boolean,
          default:false
        }
      
      
}  ,
{timestamps:true}
)


const User=mongoose.model("User",userSchema)

export default User ;