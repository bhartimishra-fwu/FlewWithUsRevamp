import { Request, Response, NextFunction } from "express";
import passport from "passport";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "An error occurred during authentication", error: err });
    }
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    APP.user = user;
    next();
  })(req, res, next);
};

export default authMiddleware;
