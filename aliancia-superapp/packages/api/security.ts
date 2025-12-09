import jwt from "jsonwebtoken";

export function sign(payload: Record<string, unknown>) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "7d" });
}

export function verify(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET as string);
}
