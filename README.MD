# E-Loutre Bot

## Description

Pour l'instant, ce bot répond "Feur" quand quelqu'un dit "quoi".

## Configuration

### Création de l'application Discord

1. Visitez [le portail des développeurs Discord](https://discord.com/developers/applications) et créez une nouvelle application.
2. Notez l'"APPLICATION ID" et la "PUBLIC KEY" dans la section informations.
3. Dans la section bot, récupérez le "TOKEN" en cliquant sur "reset token". 

**Conservez ce token soigneusement, car il ne sera affiché qu'une seule fois pour des raisons de sécurité.**

### Génération de l'URL d'invitation du bot

Dans la section OAuth2, cochez les cases suivantes :

- **Scopes**:
  - `applications.commands`
  - `bot`
- **Bot Permissions**:
  - `Send Messages`
  - `Manage Messages`
  - `Read Message History`

(Ces permissions ne sont pas toutes utilisées pour l'instant, mais permettent de s'assurer que le bot fonctionne correctement.)

### Configuration des variables d'environnement

1. Dupliquez le fichier `.env.sample`.
2. Remplissez les différentes variables d'environnement comme ci-dessous :

```sh
APPLICATION_ID="Votre APPLICATION ID"
PUBLIC_KEY="Votre PUBLIC KEY"
DISCORD_TOKEN="Votre TOKEN"
PORT=3030 # Port personnalisé pour éviter les conflits avec le port 3000
```

j'avoue, j'utilise le port 3030 pour éviter d'avoir des probleme avec le port 3000


 
### Installer les node_modules :
  version de node : v16

```sh
npm i
```

# Démarage :

### Mode développement :
  En gros il y a le hot-reload ici.

```sh
npm run dev
```

### Mode de production : (à faire)

```sh
npm start
```
