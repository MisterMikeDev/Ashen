import { CommandInteraction, CacheType, GuildMember } from "discord.js";
import { Emojis } from "../../Data/Emojis";
import { WelcomeEmbed } from "../../Helpers";

const { Yes } = Emojis.Util;

export const GenerateWelcomeEmbed = async (
    interaction: CommandInteraction<CacheType>
) => {
    const Member = interaction.member as GuildMember;
    const Welcome = WelcomeEmbed(Member);

    await interaction.channel!.send({
        embeds: [Welcome]
    });

    await interaction.editReply({
        content: `${Yes} **¡El embed de bienvenida ha sido enviado!**`
    });
};
