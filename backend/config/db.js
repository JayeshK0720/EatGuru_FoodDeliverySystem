import mongoose from "mongoose"

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db Connected");
        
    } catch (error) {
        console.log("db Error");
        
    }
}

export default connectDb