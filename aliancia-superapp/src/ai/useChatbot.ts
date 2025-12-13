import { useContext } from "react";
import { ChatbotContext } from "./ChatbotProvider";

export function useChatbot() {
  return useContext(ChatbotContext);
}
