import { Client } from "discord.js";

export function setupCommandHandlers(client: Client) {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
      await interaction.reply("Pong!");
    }
    if (interaction.commandName === "test") {
      await interaction.reply("Hello world!");
    }
  });
}
