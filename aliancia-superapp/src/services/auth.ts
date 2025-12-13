import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { User } from "../types/User";

export async function login(email: string, password: string): Promise<{ user: User }> {
  const result = await signInWithEmailAndPassword(auth, email, password);

  const user: User = {
    uid: result.user.uid,
    email: result.user.email || "",
    displayName: result.user.displayName || "",
    status: "diamond-ultra"
  };

  return { user };
}
