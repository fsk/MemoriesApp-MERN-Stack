import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch (err) {
        console.log(`Error while connect to MongoAtlas ${err}`);
        process.exit(1);
    }
}

export { connectToDb }