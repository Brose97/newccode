import { CategoryChannel, Client, GuildChannel, IntentsBitField, Message, MessageMentions, } from 'discord.js';
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

    if (message.content === `!hello`){

        message.reply(`hello! 👋🏻`);
    }

    if (message.content === `!tellme`){

        var guild=message.guild;
        var reply=guild.name;
        var reply2=guild.name;
        var reply3=guild.name;
        //var vchan=channel.CategoryChannel;
        //var tchan;
        //var cchan;
        //message.reply(guild.name);

        guild.channels.fetch().then(channels => {
            
            var text="";
            var text2="";

            channels.forEach(channel =>{

                if (channel.isVoiceBased()){
                   
                    text2=text2+"\n"+channel.name;
                   
                    // console.log(channel);
                   // reply2=" "+"__"+reply3+"__"+" "+"\n"+"**"+"Voice Channels"+"**"+" "+"\n-"+channel.name // only listing one channel ??
                }

                if (channel.isTextBased()){
                  
                    text=text+"\n"+channel.name;

                    //  console.log(channel);
                  //  reply=" "+"__"+reply3+"__"+"\n"+"**"+"Text Channels"+"**"+"\n-"+channel.name // only listing one channel ??
                }
                
            });

            //message.reply(reply3+reply+reply2);
            //message.reply(reply2);
            message.reply("__Text Based Channels__"+"\n"+text+"\n"+"__Voice Based Channels__"+"\n"+text2);
        });
    }
}
)

client.login(
    token
    );
 