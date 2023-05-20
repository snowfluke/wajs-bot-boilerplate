import { Message } from "whatsapp-web.js";

interface iSessionParent {
  [key: string]: {
    [key: string]: {};
  };
}

interface iCommand {
  name: string;
  syntax: string;
  description: string;
  execute: (m: Message, args?: string[]) => Promise<void>;
}

export { iSessionParent, iCommand };
