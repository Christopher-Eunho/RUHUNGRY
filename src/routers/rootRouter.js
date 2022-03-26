import express from "express";
import {handleHome, handlePost, handleCSS} from "../controllers/rootController";

const rootRouter = express.Router();


rootRouter.get("/", handleHome);
rootRouter.post("/", handlePost);
rootRouter.get("/app.css", handleCSS);


export default rootRouter;