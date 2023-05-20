import * as fs from "node:fs";
import { Message } from "whatsapp-web.js";
import { iCommand } from "../types/types";
import { prefix } from "../config/config.json";

const commandFiles = fs
  .readdirSync("src/commands")
  .filter((file) => file.endsWith(".ts"));

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
        const command: iCommand = require(`../commands/${file}`);
        helpText += `*${command.description}*\n${prefix}${command.syntax}\n\n`;
      }

      m.reply(helpText);
    } catch (error) {
      console.log(error);
    }
  },
} as iCommand;
