import { REST, Routes, Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { commands } from "./src/commandes/index";
import { setupCommandHandlers } from "./src/commandes/commandes"; // Importez votre logique de gestion des commandes
import { setupResponsesHandlers } from "./src/responses/responses";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN!);

async function startBot() {
  // Enregistrement des commandes, etc.
  console.log("Starting bot...");
  try {
    await rest.put(Routes.applicationCommands(process.env.APPLICATION_ID!), {
      body: commands,
    });
    console.log("Commands registered.");
  } catch (error) {
    console.error(error);
  }

  client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    setupCommandHandlers(client);
    setupResponsesHandlers(client);
  });

  client.login(process.env.DISCORD_TOKEN);
}

startBot();
