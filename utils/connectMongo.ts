import mongoose from "mongoose";


const connectMongo = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
	throw new Error("MONGO_URI environment variable is not defined");
  }
  return mongoose.connect(uri);
}

export default connectMongo;