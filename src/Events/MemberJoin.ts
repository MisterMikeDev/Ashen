import { GuildMember, GuildTextBasedChannel } from "discord.js";
import { Event } from "../Interfaces";
import { Config } from "../Data/Config";
import { WelcomeEmbed } from "../Helpers";
const { WelcomeChannel } = Config.DiscordBot.Server;
export const event: Event = {
    name: "guildMemberAdd",
    run: async (Ashen, member: GuildMember) => {
        const Welcome = WelcomeEmbed(member);

        const channel = member.guild.channels.cache.get(
            WelcomeChannel
        ) as GuildTextBasedChannel;
        if (!channel) return;

        channel.send({
            content: `¡Bienvenido <@${member.id}>!`,
            embeds: [Welcome]
        });
    }
};
