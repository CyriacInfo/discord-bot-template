import { Client } from "discord.js";
import { responses } from "./index";

export function setupResponsesHandlers(client: Client) {
  client.on("messageCreate", (message) => {
    if (message.content.toLowerCase().includes("quoi") && !message.author.bot) {
      const reponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(reponse);
    }
  });
}
