import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';
import cors from 'cors';
import errorHandler from './middlewares/error-handler';
import { DB_ADDRESS } from './config';
import routes from './routes';

const { PORT = 3000 } = process.env;
const app = express();

// eslint-disable-next-line no-console
mongoose.connect(DB_ADDRESS).then(() => console.log('mongo connected'));

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
} else {
  app.use(
    cors({
      origin: [
        'mikheevk.nomorepartiessite.ru',
        'api.mikheevk.nomorepartiessite.ru',
        'https://mikheevk.nomorepartiessite.ru',
        'https://api.mikheevk.nomorepartiessite.ru',
      ],
    }),
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);
app.use(errors());
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('ok'));
