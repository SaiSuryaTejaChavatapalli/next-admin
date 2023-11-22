import mongoose from "mongoose";
type connectionType = {
  isConnected: number | null;
};
const connection: connectionType = { isConnected: null };

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    connection.isConnected = db.connections[0].readyState;
    console.log("DB", connection.isConnected);
  } catch (error) {
    console.log("error", error);
  }
};
