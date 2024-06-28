import { ActionRowBuilder, ButtonBuilder, ChannelType, Message } from "discord.js";
import { Event } from "../Interfaces";
import { AskEmbed, DeleteBtn, ReplyBtn } from "../Helpers";
import { Config } from "../Data/Config";
export const event: Event = {
    name: "messageCreate",
    run: async (Ashen, msg: Message) => {
        if (msg.author.bot || msg.author.system) return;
        if (msg.channel.type === ChannelType.DM) return;
        if (msg.channel.id === Config.DiscordBot.Server.QuestionsChannel) {
            const { content } = msg;
            await msg.delete();

            const askEmbed = AskEmbed(msg.member!, content);
            const BtnReply = new ActionRowBuilder<ButtonBuilder>().addComponents(
                ReplyBtn,
                DeleteBtn
            );

            await msg.channel.send({
                embeds: [askEmbed],
                components: [BtnReply]
            });
        }
    }
};
