import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import shopRouter from "./routes/shop.routes.js"
import itemRouter from "./routes/item.routes.js"
import multer from "multer"
import orderRouter from "./routes/order.routes.js"

import http from "http"
import { Server } from "socket.io"
import { socketHandler } from "./socket.js"

const app = express()
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"https://eatguru.onrender.com",
        credentials:true,
        methods:['POST', 'GET']
    }
})

app.set("io", io)

const port = process.env.PORT || 5000

// middlewares -> global middlewares
// hr ek route ko is middleware se jana padega
app.use(cors({
    origin:"https://eatguru.onrender.com",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/shop", shopRouter)
app.use("/api/item", itemRouter)
app.use("/api/order",orderRouter)

// Error handling middleware
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ message: 'File too large. Maximum size is 5MB.' });
        }
        return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message || 'Internal server error' });
});

socketHandler(io)


server.listen(port,()=>{
    connectDb()
    console.log(`server started at ${port}`);
    
})

