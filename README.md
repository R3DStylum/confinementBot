# confinementBot
Un bot discord pour mettre en quarantaine les éléments indésirables

# Installation
- Prérequis : Node v18  
Une fois dans votre dossier, éditer .env avec les informations nécessaires  
Ensuite, rentrer ces commandes dans l'ordre :  
```
npm install
```
Installe toutes les dépendances du projet
```
npm run build
```
Compile les fichiers pour le bot
```
npm run register
```
Enregistre les commandes sur le serveur discord de .env avec le bot client (GUILD_ID et CLIENT_ID sont nécessaires)
```
npm run start
```
Démarre le bot

# Commandes

- /confiner
```
/confiner role canal
```
Confine les membres avec le rôle dans le canal vocal donnée.  
  
- /confinement
```
/confinement actif/inactif
```
Active ou désactive le confinement  
  
  
Amusez vous bien à ENFERMER DES GENS !
