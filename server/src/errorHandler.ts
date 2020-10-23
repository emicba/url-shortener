import { Request, Response, NextFunction } from 'express';
import { Error } from './interfaces';

export default (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '😳' : error.stack,
  });
  next();
};
