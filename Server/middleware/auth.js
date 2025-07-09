import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(403).json({ msg: "Access denied" });

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    req.admin = verified;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

export default verifyToken;
