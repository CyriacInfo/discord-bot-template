# Le E-Loutre Bot

- Description:
  Pour l'instant ce bot dit juste Feur quand quelqu'un dit "quoi".

---

# Setup

- Créer une application sur le site :
  https://discord.com/developers/applications

Récupérer dans la section information :
"APPLICATION ID" + "PUBLIC KEY"

Récupérer dans la section bot :
"TOKEN"
Il faut cliquer sur "reset token" et le conserver soigneusement
!!! ATTENTION !!! Ce token ne sera afficher qu'une seule fois pour des raisons de sécurité. Il faut le conserver sous peine de devoir le régénerer.

- Générer URL d'invitation du bot :
  Aller dans la section oauth2 puis cocher

Scopes :
applications.commands + bot

Bot Permissions :
Send Messages + Manage Messages + Read Message History

## (tout n'est pas utilise pour l'instant mais ça marche lol)

- Remplir le fichier .env
  1 - Dupliquer le fichier .env.sample
  2 - Remplir les différentes variables d'environnements

```sh
APPLICATION_ID="APPLICATION ID"
PUBLIC_KEY="PUBLIC KEY"
DISCORD_TOKEN="TOKEN"
PORT=xxxx
```

## j'avoue, j'utilise le port 3030 pour éviter d'avoir des probleme avec le port 3000

- Installer les node_modules :
  version de node : v16

```sh
npm i
```

# Démarage :

- Mode développement :
  En gros il y a le hot-reload ici.

```sh
npm run dev
```

- Mode de production : (à faire)

```sh
npm start
```
