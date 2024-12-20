import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://hyddirct:blessme28@cluster0.blxti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

export const connectToMongo = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("places_cache");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export const disconnectFromMongo = async () => {
  await client.close();
  console.log("Disconnected from MongoDB");
};