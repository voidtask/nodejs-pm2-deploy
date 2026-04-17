import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);

  const { statusCode = 500 } = err;
  const isErrorInternal = statusCode === 500;
  const message = isErrorInternal ? 'На сервере произошла ошибка' : err.message;
  res.status(statusCode).send({ message });

  next();
};

export default errorHandler;
