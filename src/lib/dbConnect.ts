import mongoose from "mongoose";

type connectionObject = {
    isConnected?:number
}

const connection:connectionObject = {}


async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database");
        return
    }

    try {
     const db =   await mongoose.connect(process.env.MONGO_URI || "",{});
     console.log(db);
     connection.isConnected = db.connections[0].readyState;

     console.log("Db connected successfully",db.connections);
        
    } catch (error) {
        console.log("Database connection failed due to",error);
        process.exit(1);        
    }
    
}

export default dbConnect;