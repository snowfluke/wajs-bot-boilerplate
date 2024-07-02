import * as fs from "node:fs";
import { Message } from "whatsapp-web.js";
import { prefix } from "../config/config.json";
import { iCommand } from "../types/types";

let directoryPath: string;

if (process.env.NODE_ENV === "dev") {
  directoryPath = "./src/commands";
} else {
  directoryPath = "./dist/commands";
}

const commandFiles = fs
  .readdirSync(directoryPath)
  .map((fileName) => fileName.split(".")[0]);

const commandMap = new Map();
for (let file of commandFiles) {
  commandMap.set(file, file);
}

const Commander = async (message: Message) => {
  try {
    if (message.type != "chat") return;
    if (!message.body.startsWith(prefix)) return;
    if (message.isStatus) return;

    const args: string[] | undefined = message.body
      .slice(prefix.length)
      .trim()
      .split(/ +/);
    const commandName: string = args.shift()?.toLowerCase() || "";

    if (!commandMap.has(commandName)) return;
    const command: iCommand = (
      await import(`../commands/${commandMap.get(commandName)}`)
    ).default;

    command.execute(message, args);
  } catch (error) {
    console.error(error);
  }
};

export { Commander, commandFiles };
