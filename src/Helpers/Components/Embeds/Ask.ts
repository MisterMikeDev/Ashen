import { EmbedBuilder, GuildMember } from "discord.js";
import { Emojis } from "../../../Data/Emojis";

const { Arrow } = Emojis.Util;
export const AskEmbed = (Author: GuildMember, Ask: string) => {
    const AuthorId = Author.id;
    const AuthorName = Author.nickname || Author.user.username;
    const AuthorAvatar = Author.user.displayAvatarURL();
    const TextTemplate = (txt: string) => `${Arrow} ${txt}`;

    return new EmbedBuilder()
        .setAuthor({
            name: AuthorName,
            iconURL: AuthorAvatar,
            url: `https://discord.com/users/${AuthorId}`
        })
        .addFields({
            name: "Te hace la siguiente pregunta:",
            value: TextTemplate(Ask)
        })
        .setThumbnail(AuthorAvatar)
        .setTimestamp()
        .setColor("#ba31ff");
};
