import { Client, Interaction, VoiceChannel } from "discord.js";
import { containList, switchContainement } from "./contain";

export default (client: Client): void => {
    client.on('interactionCreate', async (interaction: Interaction) => {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'confiner') {
          /*console.log(interaction.options.get('role'));
          console.log(interaction.options.get('canal'));*/
          if(!(interaction.options.get('canal')?.channel instanceof VoiceChannel)){
           await interaction.reply({ content: 'You need to target a Voice channel', ephemeral: true});
            return;
          }
          containList.set(interaction.options.get('role')?.role?.id, interaction.options.get('canal')?.channel?.id);
          await interaction.reply({ content: 'Tout le monde chez soi !', ephemeral: true});
          return;
        }
        if (interaction.commandName === 'confinement'){
          if(interaction.options.get('etat')?.value === 'actif'){
            switchContainement(true);
            await interaction.reply({ content: 'Confinement  activé.', ephemeral: true});
            return;
          }else{
            switchContainement(false);
            await interaction.reply({ content: 'Confinement désactivé.', ephemeral: true});
            return;
          }
        }
    });
}

