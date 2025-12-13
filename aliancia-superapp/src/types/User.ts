export interface User {
  uid: string;
  email: string;
  displayName?: string;
  status?: "standard" | "gold" | "diamond" | "diamond-ultra";
}
