import { EmbedBuilder, GuildMember } from "discord.js";

export const WelcomeEmbed = (member: GuildMember) => {
    const GuildName = member.guild.name;
    const GuildMemberCount = member.guild.memberCount;
    const GuildThumbnail = member.guild.iconURL();
    const MemberName = member.user.username;
    const MemberAvatar = member.user.displayAvatarURL();

    const WelcomeEmbed = new EmbedBuilder()
        .setAuthor({
            name: MemberName,
            iconURL: MemberAvatar!
        })
        .setDescription(
            `¡Hola **${MemberName}**! Bienvenido a __**${GuildName}**__, esperamos que te la pases bien en el servidor.\nContigo ahora contamos con **${GuildMemberCount}** miembros en esta linda comunidad.\n\n> _Por favor, lee las reglas del servidor para evitar problemas._`
        )
        .setImage(
            "https://cdn.discordapp.com/attachments/687160380098740351/1255005301023965214/2031220_s-orbital_discommunication-komi.gif?ex=667b8e44&is=667a3cc4&hm=57f071861c393fdd5d46ca1c36c80ee75c4c284fc9bd31003fd25694f168064b&"
        )
        .setThumbnail(GuildThumbnail)
        .setColor("#ba31ff")
        .setFooter({
            text: `¡Bienvenido ${MemberName}, divierte mucho!`,
            iconURL: MemberAvatar
        })
        .setTimestamp();

    return WelcomeEmbed;
};
