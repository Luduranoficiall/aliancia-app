import React, { createContext, useContext, useState } from "react";
import { ChatbotService } from "./ChatbotService";

interface ChatbotContextProps {
  send: (msg: string) => Promise<string>;
  lastResponse: string;
}

const ChatbotContext = createContext<ChatbotContextProps | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lastResponse, setLastResponse] = useState("");
  const service = new ChatbotService();

  const send = async (msg: string) => {
    const res = await service.sendMessage(msg);
    setLastResponse(res);
    return res;
  };

  return (
    <ChatbotContext.Provider value={{ send, lastResponse }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const ctx = useContext(ChatbotContext);
  if (!ctx) throw new Error("useChatbot precisa estar dentro do ChatbotProvider");
  return ctx;
};
