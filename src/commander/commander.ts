import * as fs from "node:fs";
import { iCommand } from "../types/types";
import { Message } from "whatsapp-web.js";
import { prefix, admin_number } from "../config/config.json";
import { session } from "../utils/global";

const commandFiles = fs
  .readdirSync("src/commands")
  .filter((file) => file.endsWith(".ts"));

const commandMap = new Map();
for (let file of commandFiles) {
  const command: iCommand = require(`../commands/${file}`);
  commandMap.set(command.name, command);
}

const Commander = async (message: Message) => {
  try {
    if (!message.body.startsWith(prefix)) return;
    if (message.isStatus) return;

    const args = message.body.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift()?.toLowerCase();

    if (!commandMap.has(commandName)) return;
    const command: iCommand = commandMap.get(commandName);

    command.execute(message, args);
  } catch (error) {
    console.error(error);
  }
};

export { Commander };
