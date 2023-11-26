import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import User from "../models/users.js";

dotenv.config();

/*   REGISTER USER     */

export const register = async (req, res) => {
  try {
    const {
      name,
      userName,
      email,
      password,
      
      location,
      occupation,
    } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt();

    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      userName,
      email,
      password: passwordHash,
      
      location,
      occupation,
    });
    const savedUser = await newUser.save();
    res.status(201).json({savedUser,message:"success"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/*     LOGGING IN    */

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  console.log("client working")
  const user = await User.findOne({ email: email });

  if (!user) {
    res.status(400);
    throw new Error("User doesn't exist");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET
  );
  console.log(token);
  delete user.password;
  res.status(200).json({ token, user,message:"success" });
});


/*  GET A USER */

export const getUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  console.log("userid");
  console.log(userId);
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



/*      GET ALL USERS*/ 

export const getAllUsers=async(req,res)=> {
  try{
const users=await User.find()
if(!users){
  return res.status(404).json({ message: "User not found" });

}
res.status(200).json({ users });
  }catch(error) {
    res.status(500).json({ error: error.message });
  }
}

// export const GetuserByOccupation= async(req,res) => {

//    const occupation=req.params.occupation
// try {
//    const user=await User.find({occupation:occupation})

//    if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ user });
//    }catch(error) {
//       res.status(500).json({ error: error.message });
//    }
//    }

/*    GET USER BY OCCUPATION   */ 


export const getUserByOccupation = async (req, res) => {
   const occupation = req.params.occupation;
   const page = parseInt(req.query.page) || 1;
   const limit = 5;

   try {
       const users = await User.find({ occupation: occupation })
           .sort({ name: 1 })
           .limit(limit)
           .skip((page - 1) * limit);

       if (!users || users.length === 0) {
           return res.status(404).json({ message: "Users not found" });
       }

       res.status(200).json({ users });
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};
