import { isHttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorHandler = (err, req, res, next) => {
  if (isHttpError(err)) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: err,
    });
  }

  if (err instanceof MongooseError) {
    return res.status(500).json({
      status: 500,
      message: 'MongoDB error',
      details: err.message,
      data: err,
    });
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong!',
    error: err.message,
  });
};
