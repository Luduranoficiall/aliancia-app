import { PixIntegration } from "./PixIntegration";

const pix = new PixIntegration();

export function usePix() {
  const send = (to: string, value: number) => pix.sendPix(to, value);
  return { send };
}
