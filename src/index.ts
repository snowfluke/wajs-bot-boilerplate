import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { Commander } from "./commander/commander";

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("CLIENT IS RUNNING");
});

client.on("message", (msg) => {
  Commander(msg);
});

client.initialize();
