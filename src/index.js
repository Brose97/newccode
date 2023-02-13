import { Client, IntentsBitField, Message, MessageMentions } from 'discord.js';
import { token } from "./config.js";



const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`🟢 ${c.user.tag} is ready.`);
});

client.on(`messageCreate`, (message) =>{

    if (message.author.bot){
        return;
    }

    if (message.content === `hello`){
        message.reply(`hello! 👋🏻`);
    }
}
)

client.login(
    token
    );
 