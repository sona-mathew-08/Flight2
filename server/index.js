// Backend

import express from "express"
import authRoutes from "./routes/auth.js"
import flightRoutes from "./routes/auth.js"
import userRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/flights", flightRoutes)
app.use("/api/user", userRoutes)



app.listen(8000, () => {
    console.log("Server connected at port 8000");
})