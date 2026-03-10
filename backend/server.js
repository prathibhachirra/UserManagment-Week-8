
import exp from 'express';
import {UserApp} from './API/UserApi.js'
import { connect } from 'mongoose'
import cors from 'cors'

// import {config} from 'dotenv'
// config();

const app = exp()
const port = 2000

// middleware
app.use(exp.json())


app.use(cors({
origin:["http://localhost:5173"]
}))

// routes
// app.use("/product-api", ProductRoute)
app.use("/user-api", UserApp)

// connect to mongo db 
async function connectDB() {
    try {
        await connect("mongodb://localhost:27017/user-management")
        console.log("database is connected successfully")

        app.listen(port, () =>
            console.log("server is listening on port", port)
        )
    } catch (err) {
        console.log("Error in DB connection", err)
    }
}

connectDB()

app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});



