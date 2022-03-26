import express from "express";
import rootRouter from "./routers/rootRouter";

const PORT = 4000;

const app = express();


const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
app.use(express.urlencoded({extended : true})); // parses html form and translate into JS object
app.use("/", rootRouter);
