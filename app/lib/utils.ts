import mongoose from "mongoose";

export const connectToDB = async () => {
  type connectionType = {
    isConnected: number | null;
  };
  const connection: connectionType = { isConnected: null };
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    connection.isConnected = db.connections[0].readyState;
    console.log("DB", connection.isConnected);
  } catch (error) {
    console.log("error", error);
  }
};
