import express from "express" ;
import bodyParser from "body-parser" ;
import mongoose from "mongoose" ;
import cors from "cors" ;
import dotenv from "dotenv" ;
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import {fileURLToPath} from "url"; 
import connectDB from "./config/connection.js";
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import {register} from "./controllers/userControllers.js";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
/*      CONFIGURATIONS */

const __filename=fileURLToPath(import.meta.url) ; 

const __dirname=path.dirname(__filename) ;

dotenv.config() ; 
const port=process.env.PORT || 5000 ;
const app=express() ;

app.use(express.json()) ;

app.use(helmet()) ;
 
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"})) ;

app.use(morgan("common")) ;

app.use(bodyParser.json({limit : "30mb",extended:true})) ;

app.use(bodyParser.urlencoded({limit: "30mb",extended:true}));

app.use(cors());

app.use("/assets",express.static(path.join(__dirname,'public/assets')));

connectDB()
app.listen(port,()=>console.log(`Server started running on port ${port}`))


                   /*  ROUTES    */


 app.use("/auth",authRoutes)   
 app.use("/users",userRoutes)               
 app.post("/auth/register",register)
 app.use(notFound);
 app.use(errorHandler);


