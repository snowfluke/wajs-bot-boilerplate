import { Message } from "whatsapp-web.js";
import { iCommand } from "../types/types";
import { prefix } from "../config/config.json";
import { commandFiles } from "../commander/commander";

module.exports = {
  name: "help",
  syntax: "help",
  description: "See help menu",
  async execute(m: Message, args?: string[]) {
    try {
      let helpText = `*Help menu*
Prefix: ${prefix}      

`;

      for (let file of commandFiles) {
        const command: iCommand = (await import(`./${file}`)).default;
        helpText += `\n\n*${command.description}*\n${prefix}${command.syntax}`;
      }

      m.reply(helpText);
    } catch (error) {
      console.log(error);
    }
  },
} as iCommand;
