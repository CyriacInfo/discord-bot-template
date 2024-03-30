import { Client } from "discord.js";

// Fonction qui gère les intéraction des commandes.
export function setupCommandHandlers(client: Client) {
  // Ecoutes de commandes
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    // si /ping est fait dans le chat
    if (interaction.commandName === "ping") {
      await interaction.reply("Pong!");
    }
    // si /test est fait dans le chat 
    if (interaction.commandName === "test") {
      await interaction.reply("Hello world!");
    }
  });
}
