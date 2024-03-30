import { REST, Routes, Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { commands } from "./src/commandes/index";
import { setupCommandHandlers } from "./src/commandes/commandes";
import { setupResponsesHandlers } from "./src/responses/responses";

// Création d'une instance Discord.
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Connexion à l'api de discord + précision de la version.
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN!);

// Fonction de démarrage du bot.
async function startBot() {
  console.log("Starting bot...");
  try {

    // Visibilité des commandes du bot lorsque l'utilisateur écrit "/" dans un chat discord.
    await rest.put(Routes.applicationCommands(process.env.APPLICATION_ID!), {
      body: commands,
    });
    console.log("Commands registered.");
  } catch (error) {
    console.error(error);
  }

  // Déclarations des fonctions que le bot executera.
  client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    setupCommandHandlers(client); // Fonction de commandes utilisant.
    setupResponsesHandlers(client); // Fonction d'écouteur des messages clients (pour dire feur).
  });

  // Authorisation du bot d'executer son code.
  client.login(process.env.DISCORD_TOKEN);
}

// Déclaration de la fonction pour qu'elle se lance.
startBot();
