import { Request, Response } from "express";
import db from "../global/database";

const MovieController = {
  getAll: async (req: Request, res: Response) => {
    console.log(req);
    const {type} = req.query;
    let where = {};
    if(type){
        where = {type: type};
    }
    const movies = await db.collection("movies").find(where).toArray();
    res.json(movies);
  },
};

export default MovieController;
