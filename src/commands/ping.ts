import { Message } from "whatsapp-web.js";
import { iCommand } from "../types/types";

module.exports = {
  name: "ping",
  syntax: "ping",
  description: "Check bot connectivity",
  async execute(m: Message, args?: string[]) {
    try {
      m.reply("Pong!");
    } catch (error) {
      console.log(error);
    }
  },
} as iCommand;
