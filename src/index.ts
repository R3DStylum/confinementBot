import { Client, ClientOptions, VoiceState,IntentsBitField } from "discord.js";
import ready from "./listeners/ready";
import contain from "./listeners/contain";
import containRegister from "./listeners/containRegister";
import 'dotenv/config';

console.log("Bot is starting...");

const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ]
});

ready(client);
contain(client);
containRegister(client);

client.login(process.env.TOKEN);