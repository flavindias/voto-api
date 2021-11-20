import axios from "axios";
import dotenv from "dotenv";
import { Request, Response } from "express";
import db from "../global/database";
dotenv.config();

const { RECAPTCHA_SECRET } = process.env;

const VoteController = {
  vote: async (req: Request, res: Response) => {
    try {
      const { token, movieId } = req.body;
      const { data } = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          params: {
            secret: RECAPTCHA_SECRET,
            response: token,
          },
        }
      );
      if (data.success) {
        db.collection("votes").insertOne({
          movieId,
          createdAt: new Date(),
        });
        res.status(201).json({
          message: "Voto registrado com sucesso!",
          data,
          movieId,
        });
      }
      throw new Error("Erro ao registrar voto");
    } catch (err) {
      res.status(400).json({
        message: "Erro ao registrar voto"
      });
    }
  },
};

export default VoteController;
