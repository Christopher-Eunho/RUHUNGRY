import express from "express";
import {handleHome, handlePost} from "../controllers/rootController";

const rootRouter = express.Router();


rootRouter.get("/", handleHome);
rootRouter.post("/", handlePost);


export default rootRouter;