import { channel } from "diagnostics_channel";
import { Client, VoiceChannel, Role } from "discord.js";
export const containList = new Map();
export let containementEnabled:Boolean = true;
export function switchContainement(state:Boolean){
    containementEnabled = state;
}

export default (client: Client): void => {
    client.on("voiceStateUpdate", async (oldState, newState) => {
        if(containementEnabled){
            console.log("containement activated");
            if(newState.member?.roles.cache.keys() != undefined){
                console.log("Roles present");
                for(let roleId of newState.member?.roles.cache.keys()){
                    console.log(`Analyzing role: ${roleId}`);
                    if(containList.get(roleId) != undefined){
                        console.log(`Triggered relocation by role: ${roleId}`);
                        await client.channels.fetch(containList.get(roleId))
                            .then((channel) => {
                                console.log(`Trying to relocate ${newState.member?.displayName} which is voice based ? ${channel?.isVoiceBased()}`)
                                if((channel instanceof VoiceChannel) && (oldState.channel != newState.channel)){
                                    newState.setChannel(channel as VoiceChannel);
                                }
                            });
                        break;
                    }
                }
            }
            /*client.channels.fetch("1138623722392137802")
            .then( (channel) => {
                if(channel instanceof VoiceChannel){
                    newState.setChannel(channel as VoiceChannel);
                }
            });*/
        }
    });
    console.log(`containment initiated`);
}