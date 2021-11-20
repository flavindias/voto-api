import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import express from 'express';
import routes from "./routes";
dotenv.config();

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(routes());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
