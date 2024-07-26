import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);

if (!uri) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

export default mongoose;
