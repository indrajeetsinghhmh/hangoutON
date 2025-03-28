import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  app.set("mongo_user");
  const connectionDB = await mongoose.connect(
    "mongodb+srv://winnyx:winnyx123@apnavc.5epsj.mongodb.net/"
  );
  console.log(`MonogDB connect HOST: ${connectionDB.connection.host}`);

  server.listen(app.get("port"), () => {
    console.log("app is listening on port: 8000");
  });
};

start();
