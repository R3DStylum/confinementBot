import {REST, Routes, ApplicationCommandOptionType, Options} from "discord.js";
import "dotenv/config";

const commands = [
    {
        name: 'hey',
        description: 'responds with hey',
    },
    {
        name: 'confiner',
        description: 'confine un role a un canal',
        options : [
            {
                name: 'role',
                description: 'le role a confiner',
                type: ApplicationCommandOptionType.Role,
                required: true,
            },
            {
                name: 'canal',
                description: 'le canal dans lequel il sera confine',
                type: ApplicationCommandOptionType.Channel,
                required: true,
            }
        ]
    },
    {
        name: 'confinement',
        description: 'activer ou desavtiver le confinement',
        options: [
            {
                name: 'etat',
                description: 'l etat du confinement',
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                    {
                        name: 'actif',
                        value: 'actif',
                    },
                    {
                        name: 'inactif',
                        value: 'inactif',
                    },
                ]
            }
        ],
    }
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN as string);

(async () =>{
    try {
        console.log(`Registering slash commands...`)

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID as string, process.env.GUILD_ID as string),
            { body: commands}
        );

        console.log(`Slash commands registered`)
    } catch (error) {
        console.log(`There was an error : ${error}`);
    }
})();