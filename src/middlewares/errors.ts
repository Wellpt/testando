import { Request, Response, NextFunction } from "express";


export default function errorsMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log (err)
} 