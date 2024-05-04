import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Database Connected Successfully!");
  } catch (err) {
    console.error("Error While Connecting to Database:", err?.message);
    process.exit(1);
  }
};
