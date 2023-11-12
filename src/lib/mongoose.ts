import mongoose from "mongoose";

export const databaseConnection = async () => {
  const mongoDBURL = process.env.MONGODB_URL;

  if (!mongoDBURL) {
    throw new Error("MONGODB_URL is not defined");
  }
  try {
    await mongoose.connect(mongoDBURL, {
      dbName: "wikiDevHub",
    });

    console.log("connection success");
  } catch (error) {
    console.log(error);
  }
};
