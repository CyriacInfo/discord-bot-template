import { Client } from "discord.js";
import { responses } from "./index";

// Fonction de la réponse qui dit FEUR.
export function setupResponsesHandlers(client: Client) {
  // Ecoute quand un message est envoyé par quelqu'un.
  client.on("messageCreate", (message) => {
    // Si le message contient "quoi".
    if (message.content.toLowerCase().includes("quoi") && !message.author.bot) {
      // Récupère une répone aléatoire du fichier de réponses.
      const reponse = responses[Math.floor(Math.random() * responses.length)];
      // Le bot répond à la personne.
      message.reply(reponse);
    }
  });
}
