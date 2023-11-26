import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// export const verifyToken = asyncHandler(async (req, res, next) => {
//   let token = req.header("Authorization");
//   console.log("djjh")
//   console.log(token);

//   if (!token) return res.status(403).send("Access Denied");

//   if (token.startsWith("Bearer")) {
//     token = token.slice(7, token.length).trimLeft();
//   }

//   const verified = jwt.verify(token, process.env.JWT_SECRET);
//   req.user = verified;

//   next();
// });


export const verifyToken = asyncHandler(async (req, res, next) => {
    let token = req.header("Authorization");
  
    if (!token) return res.status(403).send("Access Denied");
  
    if (token.startsWith("Bearer")) {
      token = token.slice(7, token.length).trimLeft();
    }
    console.log("hh");
  console.log(token)
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '1h' });
      req.user = verified;
      next();
    } catch (err) {
    
    if (err.name === 'TokenExpiredError') {
        console.log('Token expired:', err.message); // Log the detailed error
        return res.status(401).json({ message: 'Token has expired. Please login again.' }); // Send a custom error message
      }
      return res.status(500).json({ error: err.message });
    }
  });




export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next(); // If the user is admin, allow access
    } else {
      res.status(403).json({ message: "Unauthorized" }); // If not admin, deny access
    }
  };